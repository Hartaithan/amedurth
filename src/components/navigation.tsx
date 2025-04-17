import { FC } from "react";
import { useCamera } from "../providers/camera";
import { cn } from "../utils/styles";
import ItemsDropdown from "./items-dropdown";

const styles = {
  button: "fixed bg-black/75 text-white p-2 rounded-full size-12 text-2xl",
};

const Navigation: FC = () => {
  const { index, move, reset } = useCamera();
  return (
    <>
      <ItemsDropdown className={styles.button} />
      {index && (
        <>
          <button
            className={cn(styles.button, "top-4 right-4")}
            onClick={() => reset()}>
            ✕
          </button>
          <button
            className={cn(styles.button, "bottom-4 left-4")}
            onClick={() => move("prev")}>
            ←
          </button>
          <button
            className={cn(styles.button, "right-4 bottom-4")}
            onClick={() => move("next")}>
            →
          </button>
        </>
      )}
    </>
  );
};

export default Navigation;
