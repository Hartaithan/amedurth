import { Center, createInstances } from "@react-three/drei";
import { FC, useCallback } from "react";
import { items } from "../constants/items";
import { sizes } from "../constants/sizes";
import { DisplayCaseMesh } from "../models/mesh";
import { useCamera } from "../providers/camera";
import { getPosition } from "../utils/position";
import Card from "./card";

const [ItemInstances, Item] = createInstances();
const [DisplayInstances, Display] = createInstances();

interface DisplayCaseProps {
  index: number;
  position: [number, number, number];
}

const DisplayCase: FC<DisplayCaseProps> = (props) => {
  const { index, position } = props;
  const item = items[index];
  const { moveTo, setMeshRef } = useCamera();

  const setRef = useCallback(
    (ref: DisplayCaseMesh | null) => setMeshRef(ref, item.id),
    [item.id, setMeshRef],
  );

  return (
    <group ref={setRef}>
      <Display position={position} onClick={() => moveTo(index)}>
        <Item position={[0, 12, 0]} />
        <Card index={index} />
      </Display>
    </group>
  );
};

const DisplayCases: FC = () => (
  <Center top>
    <DisplayInstances limit={items.length} frustumCulled>
      <boxGeometry args={sizes.display} />
      <meshStandardMaterial />
      <ItemInstances frustumCulled>
        <torusKnotGeometry args={[2.5, 0.8, 128, 8]} />
        <meshStandardMaterial metalness={0.1} roughness={0.2} />
        {items.map((item, index) => (
          <DisplayCase
            key={item.id}
            index={index}
            position={getPosition(index, items.length)}
          />
        ))}
      </ItemInstances>
    </DisplayInstances>
  </Center>
);

export default DisplayCases;
