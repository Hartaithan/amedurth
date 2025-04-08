import { Center } from "@react-three/drei";
import { FC } from "react";
import { items } from "../constants/items";
import { sizes } from "../constants/sizes";
import Card from "./card";

const Item: FC = () => {
  return (
    <mesh position={[0, 12, 0]}>
      <torusKnotGeometry args={[2.5, 0.8, 128, 8]} />
      <meshStandardMaterial metalness={0.1} roughness={0.2} />
    </mesh>
  );
};

const Display: FC = () => {
  return (
    <mesh castShadow>
      <boxGeometry args={sizes.display} />
      <meshStandardMaterial />
      <Card item={items[0]} />
    </mesh>
  );
};

const DisplayCase: FC = () => {
  return (
    <Center>
      <group>
        <Item />
        <Display />
      </group>
    </Center>
  );
};

export default DisplayCase;
