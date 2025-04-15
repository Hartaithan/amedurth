import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { FC, memo, useRef } from "react";
import { Frustum, Matrix4, Vector3 } from "three";
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
  const matrix = useRef(new Matrix4()).current;
  const frustum = useRef(new Frustum()).current;
  const offset = useRef(new Vector3(-15, 0, 0)).current;
  const vector = useRef(new Vector3()).current;
  const [isVisible, setVisible] = useThrottledState(false, 1000);

  useFrame(({ camera }) => {
    const mesh = getMesh(index);
    const item = mesh?.children?.length > 0 ? mesh.children[0] : null;
    if (!camera?.position || !item?.position) return;
    matrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(matrix);
    vector.copy(item.position).sub(offset);
    setVisible(frustum.containsPoint(vector));
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
