import { useState, useEffect, useCallback } from "react";

function useImageLoader(src) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [url, setURL] = useState(null);

  const callImage = useCallback(() => {
    setLoading(true);
    setError(null);
    setURL(null);

    const img = new Image();
    img.src = src;

    img.onload = () => {
      setLoading(false);
      setURL(src);
    };

    img.onerror = () => {
      setLoading(false);
      setError("Failed");
    };
  }, [src]);

  useEffect(() => {
    if (src) {
      callImage();
    }
  }, [src, callImage]);

  return { loading, error, url, trigger: callImage };
}

export default useImageLoader;
