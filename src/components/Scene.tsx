import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";

const Scene: FC = () => {
  return (
    <Canvas shadows>
      <mesh castShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />
      </mesh>
      <Environment preset="sunset" background blur={1} />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
