import { useCallback } from "react";
import { useState } from "react";

export function useArray(initialArray) {
  const [array, setArray] = useState(initialArray);

  const push = useCallback((value) => {
    setArray((currentArray) => [...currentArray, value]);
  }, []);

  const replace = useCallback((index, newValue) => {
    setArray((currentArray) => {
      return [
        currentArray.slice(0, index),
        newValue,
        ...currentArray.slice(index + 1),
      ];
    });
  }, []);

  const filter = useCallback((callback) => {
    setArray((currentArray) => {
      return currentArray.filter(callback);
    });
  }, []);

  const remove = useCallback((index) => {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index),
        ...currentArray.slice(index + 1),
      ];
    });
  }, []);

  const clear = useCallback(() => setArray([]), []);

  const reset = useCallback(() => setArray(initialArray), [initialArray]);

  return { array, set: setArray, push, replace, filter, remove, clear, reset };
}
