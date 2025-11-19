import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const Astronaut3D = () => {
  const groupRef = useRef<any>();
  const helmetRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Slow rotation
      groupRef.current.rotation.y += 0.01;
      // Gentle floating motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
    if (helmetRef.current) {
      // Slight helmet tilt
      helmetRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Body */}
      <mesh position={[0, -0.5, 0]}>
        <capsuleGeometry args={[0.4, 0.8, 32, 32]} />
        <meshStandardMaterial color="#e0e0e0" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Helmet/Head */}
      <mesh ref={helmetRef} position={[0, 0.6, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.8} 
          roughness={0.2} 
          transparent 
          opacity={0.9}
        />
      </mesh>

      {/* Visor */}
      <mesh position={[0, 0.6, 0.3]} rotation={[0, 0, 0]}>
        <sphereGeometry args={[0.35, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial 
          color="#10b981" 
          metalness={0.9} 
          roughness={0.1} 
          emissive="#10b981"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.6, -0.3, 0]} rotation={[0, 0, -0.3]}>
        <capsuleGeometry args={[0.15, 0.6, 16, 16]} />
        <meshStandardMaterial color="#e0e0e0" metalness={0.3} roughness={0.7} />
      </mesh>
      <mesh position={[0.6, -0.3, 0]} rotation={[0, 0, 0.3]}>
        <capsuleGeometry args={[0.15, 0.6, 16, 16]} />
        <meshStandardMaterial color="#e0e0e0" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.2, -1.2, 0]}>
        <capsuleGeometry args={[0.15, 0.5, 16, 16]} />
        <meshStandardMaterial color="#e0e0e0" metalness={0.3} roughness={0.7} />
      </mesh>
      <mesh position={[0.2, -1.2, 0]}>
        <capsuleGeometry args={[0.15, 0.5, 16, 16]} />
        <meshStandardMaterial color="#e0e0e0" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Backpack */}
      <mesh position={[0, -0.3, -0.5]}>
        <boxGeometry args={[0.6, 0.8, 0.3]} />
        <meshStandardMaterial color="#d0d0d0" metalness={0.4} roughness={0.6} />
      </mesh>

      {/* Chest details */}
      <mesh position={[0, -0.2, 0.45]}>
        <boxGeometry args={[0.3, 0.2, 0.05]} />
        <meshStandardMaterial 
          color="#10b981" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#10b981"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
};

export default Astronaut3D;
