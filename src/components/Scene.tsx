import { Canvas } from "@react-three/fiber";
import { FC } from "react";

const Scene: FC = () => {
  return (
    <Canvas id="scene">
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial wireframe />
      </mesh>
      <ambientLight intensity={0.1} />
    </Canvas>
  );
};

export default Scene;
