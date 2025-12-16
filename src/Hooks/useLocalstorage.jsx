import { useState, useEffect } from "react";
export function useLocalStorage(initValue, key) {
  const [val, setVal] = useState(function () {
    const storedMovie = localStorage.getItem(key);
    return storedMovie ? JSON.parse(storedMovie) : initValue;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(val));
    },
    [key, val]
  );

  return [val, setVal];
}
