import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { FC, memo } from "react";
import { items } from "../constants/items";
import { sizes } from "../constants/sizes";
import { useThrottledState } from "../hooks/use-throttled-state";
import { useCamera } from "../providers/camera";

interface Props {
  index: number;
}

const Card: FC<Props> = (props) => {
  const { index } = props;
  const item = items[index];
  const { getMesh } = useCamera();
  const [isVisible, setVisible] = useThrottledState(false, 1000);

  useFrame(({ camera }) => {
    const mesh = getMesh(index);
    const item = mesh?.children?.length > 0 ? mesh.children[0] : null;
    if (!camera?.position || !item?.position) return;
    const distance = camera.position.distanceTo(item.position);
    setVisible(distance < 50);
  });

  if (!isVisible) return null;

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
