import { FC } from "react";
import { sizes } from "../constants/sizes";
import PlatinumCard from "./platinum-card";

const Display: FC = () => {
  return (
    <mesh castShadow>
      <boxGeometry args={sizes.display} />
      <meshStandardMaterial />
      <PlatinumCard />
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
