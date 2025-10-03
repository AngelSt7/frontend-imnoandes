import { useEffect, useState, useRef } from "react";
import { useLoading } from "../../contexts";

export const useLoadingControl = () => {
  const { loadingState: { loading, message } } = useLoading();
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return; 
    }

    if (loading) {
      setShouldRender(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setShouldRender(false), 300);
    }
  }, [loading]);

  return { loading, message, isVisible, shouldRender };
};
