import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import DisplayCase from "./display-case";

const Scene: FC = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 30] }}>
      <DisplayCase />
      <Environment preset="sunset" background blur={1} />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
