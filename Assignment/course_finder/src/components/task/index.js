import React from "react";
import useImageLoader from "./use-image-loader";
import Styles from "./task.module.css";

const IMAGE_URLS = [
  "https://picsum.photos/",
  "https://picsum.photos/200/300?random=2",
  "https://picsum.photos/200/300?random=3",
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?random=2",
  "https://picsum.photos/200/300?random=3",
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?random=2"
];

const ImageCard = ({ src }) => {
  const { loading, error, url, trigger } = useImageLoader(src);

  const ErrorCard = () => {
    return (
      <div className={Styles.errorContainer}>
        <p>{error}</p>
        <button onClick={trigger} className={Styles.buttonBlock}>
          Retry
        </button>
      </div>
    );
  };

  return (
    <div className={Styles.content}>
      {loading && <div className={Styles.loaderContent}>Loading...</div>}
      {error && <ErrorCard />}
      {url && <img src={url} alt="img" className={Styles.imageBlock} />}
    </div>
  );
};

const ImageGrid = () => {
  return (
    <div className={Styles.container}>
      {IMAGE_URLS.map((url, index) => (
        <ImageCard key={index} src={url} />
      ))}
    </div>
  );
};

export default ImageGrid;
