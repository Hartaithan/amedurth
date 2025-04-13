import { Center, Instance, Instances } from "@react-three/drei";
import { FC, useCallback, useRef } from "react";
import { items } from "../constants/items";
import { sizes } from "../constants/sizes";
import { DisplayCaseMesh } from "../models/mesh";
import { useCamera } from "../providers/camera";
import { getPosition } from "../utils/position";
import Card from "./card";

const Item: FC = () => {
  return (
    <mesh position={[0, 12, 0]} castShadow>
      <torusKnotGeometry args={[2.5, 0.8, 128, 8]} />
      <meshStandardMaterial metalness={0.1} roughness={0.2} />
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
  const instanceRef = useRef<DisplayCaseMesh | null>(null);

  const setRef = useCallback(
    (ref: DisplayCaseMesh) => {
      instanceRef.current = ref;
      setMeshRef(ref, item.id);
    },
    [item.id, setMeshRef],
  );

  return (
    <Instance ref={setRef} position={position} onClick={() => moveTo(index)}>
      <Item />
      <Card item={item} />
    </Instance>
  );
};

const DisplayCases: FC = () => (
  <Center top>
    <Instances limit={items.length}>
      <boxGeometry args={sizes.display} />
      <meshStandardMaterial />
      {items.map((item, index) => (
        <DisplayCase
          key={item.id}
          index={index}
          position={getPosition(index, items.length)}
        />
      ))}
    </Instances>
  </Center>
);

export default DisplayCases;
