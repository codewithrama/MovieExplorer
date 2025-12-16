import { useEffect } from "react";
export function useKey(key, actionFn) {
  useEffect(
    function () {
      function KeyListner(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          actionFn();
        }
      }
      document.addEventListener("keydown", KeyListner);

      return function () {
        document.removeEventListener("keydown", KeyListner);
      };
    },
    [actionFn, key]
  );
}
