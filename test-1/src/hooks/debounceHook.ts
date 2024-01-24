import { useRef, useEffect, useMemo } from "react";

const debounce = (func: any, delay: number) => {
  let timeoutId: any;
  return (args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(args);
    }, delay);
  };
};

const useDebounce = (callback: any, delay = 1000) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      return (ref.current as any)?.();
    };

    return debounce(func, delay);
  }, [delay]);

  return debouncedCallback;
};

export default useDebounce;
