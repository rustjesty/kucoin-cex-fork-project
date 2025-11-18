import { useEffect, RefObject, useCallback } from "react";

const useOutsideAlerter = <T extends HTMLElement>(ref: RefObject<T>, onClose: any) => {
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      onClose();
    }
  }, [onClose, ref]);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
};

export default useOutsideAlerter;