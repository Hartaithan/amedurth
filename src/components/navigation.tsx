import { FC } from "react";
import { useCamera } from "../providers/camera";
import { cn } from "../utils/styles";

const styles = {
  button: "fixed bg-black/75 text-white p-2 rounded-full size-12",
};

const Navigation: FC = () => {
  const { index, move, reset } = useCamera();
  if (index === null) return null;
  return (
    <>
      <button
        className={cn(styles.button, "top-4 right-4")}
        onClick={() => reset()}>
        Back
      </button>
      <button
        className={cn(styles.button, "bottom-4 left-4")}
        onClick={() => move("prev")}>
        Prev
      </button>
      <button
        className={cn(styles.button, "right-4 bottom-4")}
        onClick={() => move("next")}>
        Next
      </button>
    </>
  );
};

export default Navigation;
