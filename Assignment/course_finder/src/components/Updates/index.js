import config from "../../utils/config.json";
import Styles from "./updates.module.css";
import ACouncilLogo from "../../assests/acouncil.svg";
import BCouncilLogo from "../../assests/bcouncil.svg";
import StartsLogo from "../../assests/starts.svg";
import chevronLogo from "../../assests/chevronRight.svg";
import { deviceWidth } from "../../utils/helper";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const logoPath = {
  ACouncil: ACouncilLogo,
  BCouncil: BCouncilLogo
};

const Updates = () => {
  const jsonData = config?.updates;

  const settings = {
    centerMode: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const renderComp = (data, index) => {
    if (index === 0) {
      return (
        <div className={Styles.largeContainer} key={index}>
          <div className={Styles.textContent}>
            <text className={Styles.largeHeader}>{data?.header}</text>
            <text className={Styles.largeDesc}>{data?.desc}</text>
          </div>
          <button className={Styles.button}>
            <text className={Styles.buttonText}>{data?.button}</text>
          </button>
        </div>
      );
    } else {
      return (
        <div className={Styles.smallContainer} key={index}>
          <img
            src={logoPath?.[data?.img]}
            width={120}
            height={120}
            alt="council"
          />
          <text className={Styles.header}>{data?.header}</text>
          <img src={StartsLogo} alt="ratings" />
          <text className={Styles.desc}>{data?.desc}</text>
          <text className={Styles.date}>{data?.date}</text>
        </div>
      );
    }
  };

  const cardList = () => {
    return jsonData?.list?.map((val, index) => (
      <div className={Styles.card} key={index}>
        {renderComp(val, index)}
      </div>
    ));
  };

  return (
    <div className={Styles.container}>
      <text className={Styles.mainHeader}>{jsonData?.header}</text>
      <div className={Styles.cardContent}>
        {deviceWidth() === "Mobile" ? (
          <Slider {...settings}>{cardList()}</Slider>
        ) : (
          cardList()
        )}
      </div>
      <div className={Styles.footerComponent}>
        <text className={Styles.footerButton}>{jsonData?.footer}</text>
        <img src={chevronLogo} alt="chevron" />
      </div>
    </div>
  );
};

export default Updates;
