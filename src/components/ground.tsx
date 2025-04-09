import { FC } from "react";

const Ground: FC = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[2000, 2000, 100, 100]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Ground;
