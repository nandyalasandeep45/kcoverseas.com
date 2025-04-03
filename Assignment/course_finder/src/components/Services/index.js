import Styles from "./services.module.css";
import config from "../../utils/config.json";
import testLogo from "../../assests/test.svg";
import courseLogo from "../../assests/course.svg";
import assistanceLogo from "../../assests/assistance.svg";
import scholarshipLogo from "../../assests/scholarships.svg";
import ExploreCard from "../common/ExploreCard";
import favLogo from "../../assests/fav.svg";
import ambitionLogo from "../../assests/ambition.svg";
import { deviceWidth } from "../../utils/helper";

const mappingLogo = {
  TestLogo: testLogo,
  CourseLogo: courseLogo,
  AssistanceLogo: assistanceLogo,
  ScholarShipLogo: scholarshipLogo
};

const Services = () => {
  const jsonData = config?.services;
  return (
    <div className={Styles.container}>
      <div className={Styles.topContainer}>
        <text className={Styles.header}>{jsonData?.title}</text>
        <div className={Styles.textCardContainer}>
          {jsonData?.provide?.map((val, index) => (
            <div key={index} className={Styles.textCard}>
              <img src={mappingLogo?.[val?.svg]} alt={val?.alt} />
              <text className={Styles.cardText}>{val?.label}</text>
            </div>
          ))}
        </div>
        <div className={Styles.buttonContainer}>
          <ExploreCard title="Explore Now" />
        </div>
      </div>
      <div className={Styles.explainContent}>
        {deviceWidth() !== "Mobile" && (
          <img src={ambitionLogo} alt="ambition" width={490} height={440} />
        )}
        <div className={Styles.explainContainer}>
          {deviceWidth() === "Mobile" && (
            <img src={ambitionLogo} alt="ambition" />
          )}
          <text className={Styles.explainTitle}>
            {jsonData?.details?.title}
          </text>
          <text className={Styles.explainDesc}>{jsonData?.details?.desc}</text>
          <div>
            {jsonData?.details?.list?.map((val, index) => (
              <div className={Styles.explainDetails}>
                <img src={favLogo} alt={val?.alt} />
                <text className={Styles.explainDetailsText}>{val?.title}</text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
