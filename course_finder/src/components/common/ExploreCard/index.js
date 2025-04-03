import Styles from "./exploreCard.module.css";
import exploreLogo from "../../../assests/explore.svg";

const ExploreCard = ({ title }) => {
  return (
    <div className={Styles.imageContainer}>
      <img
        src={exploreLogo}
        alt="explore"
        style={{
          objectFit: "cover",
          borderRadius: "8px",
          height: "48px",
          width: "100%"
        }}
      />
      <div className={Styles.overlayText}>{title}</div>
    </div>
  );
};

export default ExploreCard;
