import { FC } from "react";
import { items } from "../constants/items";
import { sizes } from "../constants/sizes";
import { Item as IItem } from "../models/item";
import { useCamera } from "../providers/camera";
import Card from "./card";

const Item: FC = () => {
  return (
    <mesh position={[0, 12, 0]} castShadow>
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
  index: number;
  position: [number, number, number];
}

const DisplayCase: FC<DisplayCaseProps> = (props) => {
  const { index, position } = props;
  const item = items[index];
  const { moveTo, setMeshRef } = useCamera();
  return (
    <mesh
      ref={(ref) => setMeshRef(ref, item.id)}
      position={position}
      onClick={() => moveTo(item.id)}>
      <Item />
      <Display item={item} />
    </mesh>
  );
};

export default DisplayCase;
