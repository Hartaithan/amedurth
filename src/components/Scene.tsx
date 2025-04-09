import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import { items } from "../constants/items";
import { getPosition } from "../utils/position";
import DisplayCase from "./display-case";

const Scene: FC = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 30] }}>
      <Center>
        {items.map((item) => (
          <DisplayCase
            key={item.id}
            item={item}
            position={getPosition(item.id, items.length)}
          />
        ))}
      </Center>
      <Environment preset="sunset" background blur={1} />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
