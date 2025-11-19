import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Astronaut3D from './Astronaut3D';

const AstronautScene = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#10b981" />
        <pointLight position={[0, 0, 5]} intensity={0.5} color="#14b8a6" />
        
        {/* Astronaut */}
        <Astronaut3D />
        
        {/* Optional: Allow user to rotate */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default AstronautScene;
