import { ComponentPropsWithoutRef, FC, useCallback, useState } from "react";
import { items } from "../constants/items";
import { useClickOutside } from "../hooks/use-click-outside";
import { useCamera } from "../providers/camera";
import { cn } from "../utils/styles";

type Props = ComponentPropsWithoutRef<"button">;

const ItemsDropdown: FC<Props> = (props) => {
  const { className, ...rest } = props;
  const { moveTo } = useCamera();
  const [isVisible, setVisible] = useState(false);
  const ref = useClickOutside(() => setVisible(false));

  const toggle = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  const handleItemClick = useCallback(
    (index: number) => {
      moveTo(index);
      setVisible(false);
    },
    [moveTo],
  );

  return (
    <>
      <button
        className={cn(className, "top-4 left-4")}
        {...rest}
        onClick={toggle}>
        <p className="-translate-y-0.5">☰</p>
      </button>
      {isVisible && (
        <div
          ref={ref}
          className="fixed top-16 left-3 z-[99999999] mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg">
          <ul className="max-h-96 overflow-auto py-1">
            {items.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => handleItemClick(index)}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ItemsDropdown;
