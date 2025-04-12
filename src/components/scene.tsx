import { CameraControls, Center, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import { mouseButtons, touches } from "../constants/camera-actions";
import { items } from "../constants/items";
import { useCamera } from "../providers/camera";
import { getPosition } from "../utils/position";
import DisplayCase from "./display-case";
import Ground from "./ground";

const Scene: FC = () => {
  const { setCameraRef } = useCamera();
  return (
    <Canvas shadows camera={{ position: [0, 0, 30] }}>
      <Center top>
        {items.map((item, index) => (
          <DisplayCase
            key={item.id}
            index={index}
            position={getPosition(index, items.length)}
          />
        ))}
      </Center>
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
