import { FC } from "react";
import { items } from "../constants/items";
import { sizes } from "../constants/sizes";
import Card from "./card";

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
    <group>
      <Display />
    </group>
  );
};

export default DisplayCase;
