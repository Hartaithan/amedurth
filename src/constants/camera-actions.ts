import { CameraControlsProps } from "@react-three/drei";

const ACTION = {
  NONE: 0,
  ROTATE: 1,
  TRUCK: 2,
  OFFSET: 4,
  DOLLY: 8,
  ZOOM: 16,
  TOUCH_ROTATE: 32,
  TOUCH_TRUCK: 64,
  TOUCH_OFFSET: 128,
  TOUCH_DOLLY: 256,
  TOUCH_ZOOM: 512,
  TOUCH_DOLLY_TRUCK: 1024,
  TOUCH_DOLLY_OFFSET: 2048,
  TOUCH_DOLLY_ROTATE: 4096,
  TOUCH_ZOOM_TRUCK: 8192,
  TOUCH_ZOOM_OFFSET: 16384,
  TOUCH_ZOOM_ROTATE: 32768,
} as const;

export const mouseButtons: CameraControlsProps["mouseButtons"] = {
  left: ACTION.NONE,
  middle: ACTION.NONE,
  right: ACTION.NONE,
  wheel: ACTION.NONE,
};

export const touches: CameraControlsProps["touches"] = {
  one: ACTION.NONE,
  two: ACTION.NONE,
  three: ACTION.NONE,
};
