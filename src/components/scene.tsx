import { CameraControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import { mouseButtons, touches } from "../constants/camera-actions";
import { useCamera } from "../providers/camera";
import DisplayCases from "./display-case";
import Ground from "./ground";

const Scene: FC = () => {
  const { setCameraRef } = useCamera();
  return (
    <Canvas shadows camera={{ position: [0, 0, 30] }}>
      <DisplayCases />
      <Ground />
      <Environment preset="sunset" background blur={1} />
      <CameraControls
        ref={setCameraRef}
        makeDefault
        minDistance={0}
        mouseButtons={mouseButtons}
        touches={touches}
      />
    </Canvas>
  );
};

export default Scene;
