// TODO: find better way to remove this warning
/* eslint-disable react-refresh/only-export-components */
import { CameraControls } from "@react-three/drei";
import type { FC, PropsWithChildren, RefObject } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { items } from "../constants/items";
import { DisplayCaseMesh } from "../models/mesh";

interface Context {
  index: number | null;
  cameraRef: RefObject<CameraControls | null>;
  setCameraRef: (ref: CameraControls) => void;
  setMeshRef: (ref: DisplayCaseMesh | null, id: number) => void;
  getMesh: (index: number) => DisplayCaseMesh;
  move: (dir: "prev" | "next") => void;
  moveTo: (index: number) => void;
  reset: () => void;
}

const initialValue: Context = {
  index: null,
  cameraRef: { current: null },
  setCameraRef: () => null,
  setMeshRef: () => null,
  getMesh: () => null as unknown as DisplayCaseMesh,
  move: () => null,
  moveTo: () => null,
  reset: () => null,
};

const Context = createContext<Context>(initialValue);

const CameraProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [index, setIndex] = useState<Context["index"]>(null);
  const meshRefs = useRef<Record<number, DisplayCaseMesh>>({});
  const cameraRef = useRef<CameraControls | null>(null);

  const moveTo: Context["moveTo"] = useCallback((index) => {
    if (!cameraRef.current) return;
    setIndex(index);
    const item = items[index];
    const mesh = meshRefs.current[item.id];
    cameraRef.current?.fitToBox(mesh, true, { paddingBottom: 2 });
  }, []);

  const move: Context["move"] = useCallback(
    (dir) => {
      if (index === null) return;
      let nextIndex = index;
      if (dir === "prev") {
        nextIndex = index - 1;
      } else {
        nextIndex = index + 1;
      }
      if (nextIndex < 0) return;
      if (nextIndex >= items.length) return;
      setIndex(nextIndex);
      moveTo(nextIndex);
    },
    [index, moveTo],
  );

  const reset: Context["reset"] = useCallback(() => {
    cameraRef.current?.setLookAt(0, 10, 50, 0, 10, 0, true);
    setIndex(null);
  }, []);

  const setCameraRef: Context["setCameraRef"] = useCallback(
    (ref) => {
      cameraRef.current = ref;
      reset();
    },
    [reset],
  );

  const setMeshRef: Context["setMeshRef"] = useCallback((ref, id) => {
    if (!ref) return null;
    meshRefs.current[id] = ref;
  }, []);

  const getMesh: Context["getMesh"] = useCallback((index) => {
    return meshRefs.current[index];
  }, []);

  const exposed = useMemo(() => {
    return {
      index,
      cameraRef,
      setCameraRef,
      setMeshRef,
      getMesh,
      move,
      moveTo,
      reset,
    } satisfies Context;
  }, [index, move, moveTo, reset, setCameraRef, setMeshRef, getMesh]);

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useCamera = (): Context => useContext(Context);

export default CameraProvider;
