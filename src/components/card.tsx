import { Html } from "@react-three/drei";
import { FC, memo } from "react";
import { sizes } from "../constants/sizes";
import { Item } from "../models/item";

interface Props {
  item: Item;
}

const Card: FC<Props> = (props) => {
  const { item } = props;
  return (
    <Html
      className="pointer-events-none flex justify-between gap-5 rounded bg-white/75 px-3 py-2 select-none"
      transform
      position={[0, sizes.display[1] / 2 - 2, sizes.display[2] / 2 + 0.01]}
      style={{ width: sizes.display[0] * 35 }}
      occlude>
      <div className="flex flex-col justify-center">
        <p>{item.title}</p>
        <p>{item.description}</p>
        <p>{new Date(item.earned_at).toLocaleDateString()}</p>
      </div>
      <img className="size-20 min-w-20" src={item.image_url} />
    </Html>
  );
};

export default memo(Card);
