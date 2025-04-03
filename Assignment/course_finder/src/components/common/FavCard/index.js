import Styles from "./favCard.module.css";
import QuoteLogo from "../../../assests/quotes.svg";

const FavCard = ({ data }) => {
  return (
    <div className={Styles.carousel}>
      <div className={Styles.container}>
        <img src={QuoteLogo} alt="logo" width={33} height={22} />
        <text className={Styles.desc}>{data?.desc}</text>
        <div className={Styles.textContent}>
          <text className={Styles.author}>{data?.author}</text>
          <text className={Styles.location}>{data?.location}</text>
        </div>
      </div>
    </div>
  );
};

export default FavCard;
