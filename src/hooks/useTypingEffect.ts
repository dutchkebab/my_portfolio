import { useState, useEffect } from 'react';

export const useTypingEffect = (
  texts: string[],
  typingSpeed: number = 100,
  deletingSpeed: number = 50,
  pauseDuration: number = 2000
) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting && displayText === currentText) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setDisplayText((prev) =>
          isDeleting
            ? currentText.substring(0, prev.length - 1)
            : currentText.substring(0, prev.length + 1)
        );
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, textIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
};
