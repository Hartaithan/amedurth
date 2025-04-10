// TODO: find better way to remove this warning
/* eslint-disable react-refresh/only-export-components */
import { CameraControls } from "@react-three/drei";
import type { FC, PropsWithChildren, RefObject } from "react";
import { createContext, useCallback, useContext, useMemo, useRef } from "react";
import { Object3D, Object3DEventMap } from "three";

interface Context {
  cameraRef: RefObject<CameraControls | null>;
  setCameraRef: (ref: CameraControls) => void;
  setMeshRef: (ref: Object3D<Object3DEventMap> | null, id: number) => void;
  moveTo: (id: number) => void;
}

const initialValue: Context = {
  cameraRef: { current: null },
  setCameraRef: () => null,
  setMeshRef: () => null,
  moveTo: () => null,
};

const Context = createContext<Context>(initialValue);

const CameraProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const meshRefs = useRef<Record<number, Object3D<Object3DEventMap>>>({});
  const cameraRef = useRef<CameraControls | null>(null);

  const moveTo: Context["moveTo"] = useCallback((id) => {
    if (!cameraRef.current) return;
    const mesh = meshRefs.current[id];
    cameraRef.current?.fitToBox(mesh, true, { paddingBottom: 2 });
  }, []);

  const setCameraRef: Context["setCameraRef"] = useCallback((ref) => {
    cameraRef.current = ref;
    cameraRef.current?.setLookAt(0, 10, 50, 0, 10, 0, true);
  }, []);

  const setMeshRef: Context["setMeshRef"] = useCallback((ref, id) => {
    if (!ref) return null;
    meshRefs.current[id] = ref;
  }, []);

  const exposed = useMemo(
    () => ({ cameraRef, setCameraRef, setMeshRef, moveTo }) satisfies Context,
    [setCameraRef, setMeshRef, moveTo],
  );

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useCamera = (): Context => useContext(Context);

export default CameraProvider;
