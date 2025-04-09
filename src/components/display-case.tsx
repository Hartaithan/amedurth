import { FC } from "react";
import { sizes } from "../constants/sizes";
import { Item as IItem } from "../models/item";
import Card from "./card";

const Item: FC = () => {
  return (
    <mesh position={[0, 12, 0]}>
      <torusKnotGeometry args={[2.5, 0.8, 128, 8]} />
      <meshStandardMaterial metalness={0.1} roughness={0.2} />
    </mesh>
  );
};

interface DisplayProps {
  item: IItem;
}

const Display: FC<DisplayProps> = (props) => {
  const { item } = props;
  return (
    <mesh castShadow>
      <boxGeometry args={sizes.display} />
      <meshStandardMaterial />
      <Card item={item} />
    </mesh>
  );
};

interface DisplayCaseProps {
  item: IItem;
  position: [number, number, number];
}

const DisplayCase: FC<DisplayCaseProps> = (props) => {
  const { item, position } = props;
  return (
    <group position={position}>
      <Item />
      <Display item={item} />
    </group>
  );
};

export default DisplayCase;
