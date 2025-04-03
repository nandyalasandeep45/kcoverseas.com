import Styles from "./footer.module.css";
import config from "../../utils/config.json";
import ExploreCard from "../common/ExploreCard";
import FooterLogo from "../../assests/footerIcon.svg";

const Footer = () => {
  const jsonData = config?.footer;
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <text className={Styles.header}>{jsonData?.header}</text>
        <div className={Styles.dataContent}>
          <input
            className={Styles.email}
            placeholder={jsonData?.emailPlaceHolder}
          />
          <select className={Styles.inputField}>
            {jsonData?.interest?.list?.map((val, ind) => (
              <option key={ind} value={val?.label}>
                {val?.label}
              </option>
            ))}
          </select>
          <div className={Styles.exploreCard}>
            <ExploreCard title="Subscribe Now" />
          </div>
        </div>
        <hr className={Styles.divider} />
      </div>
      <img src={FooterLogo} alt="logo" className={Styles.footerIcon} />
    </div>
  );
};

export default Footer;
