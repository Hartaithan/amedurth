import { useEffect, useState } from "react";
import { useThrottledCallbackWithClearTimeout } from "./use-throttled-callback";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useThrottledState<T = any>(defaultValue: T, wait: number) {
  const [value, setValue] = useState(defaultValue);

  const [setThrottledValue, clearTimeout] =
    useThrottledCallbackWithClearTimeout(setValue, wait);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => clearTimeout, []);

  return [value, setThrottledValue] as const;
}
