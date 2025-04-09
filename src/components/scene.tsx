import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import { items } from "../constants/items";
import { getPosition } from "../utils/position";
import DisplayCase from "./display-case";
import Ground from "./ground";

const Scene: FC = () => {
  return (
    <Canvas shadows camera={{ position: [30, 30, 30] }}>
      <Center top>
        {items.map((item) => (
          <DisplayCase
            key={item.id}
            item={item}
            position={getPosition(item.id, items.length)}
          />
        ))}
      </Center>
      <Ground />
      <Environment preset="sunset" background blur={1} />
      <OrbitControls makeDefault />
    </Canvas>
  );
};

export default Scene;
