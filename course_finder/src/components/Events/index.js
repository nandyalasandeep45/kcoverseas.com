import Styles from "./events.module.css";
import config from "../../utils/config.json";
import largeLogo from "../../assests/large.svg";
import smallLogo from "../../assests/small.svg";
import chevronLogo from "../../assests/chevronRight.svg";
import { deviceWidth } from "../../utils/helper";
import Slider from "react-slick";

const Events = () => {
  const jsonData = config?.events;

  const updatedList = () => {
    if (deviceWidth() === "Mobile") {
      return jsonData?.list;
    } else {
      return jsonData?.list?.filter((value, ind) => ind !== 0);
    }
  };

  const settings = {
    centerMode: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  const cardList = () => {
    return updatedList()?.map((val, index) => {
      return (
        <div key={index} className={Styles.smallCardContent}>
          <img src={smallLogo} alt={val?.alt} className={Styles.smallImg} />
          <div className={Styles.smallDesc}>
            <text className={Styles.time}>{val?.time}</text>
            <text className={Styles.header}>{val?.header}</text>
            <text className={Styles.desc}>{val?.desc}</text>
            <div className={Styles.smallFootercontent}>
              <text className={Styles.button}>{val?.button}</text>
              <img src={chevronLogo} alt="chevron" />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={Styles.container}>
      <text className={Styles.mainheader}>{jsonData?.header}</text>
      <div className={Styles.infoContainer}>
        {deviceWidth() !== "Mobile" ? (
          <>
            <div className={Styles.largeCardContent}>
              <img
                src={largeLogo}
                alt={jsonData?.list?.[0]?.alt}
                className={Styles.largeImg}
              />
              <div className={Styles.largeDesc}>
                <text className={Styles.time}>{jsonData?.list?.[0]?.time}</text>
                <text className={Styles.header}>
                  {jsonData?.list?.[0]?.header}
                </text>
                <text className={Styles.desc}>{jsonData?.list?.[0]?.desc}</text>
                <div className={Styles.footerContent}>
                  <text className={Styles.button}>
                    {jsonData?.list?.[0]?.button}
                  </text>
                  <img src={chevronLogo} alt="chevron" />
                </div>
              </div>
            </div>
            <div className={Styles.smallCardContainer}>{cardList()}</div>
          </>
        ) : (
          <Slider {...settings}>{cardList()}</Slider>
        )}
      </div>
      <div className={Styles.footerComponent}>
        <text className={Styles.button}>{jsonData?.footer}</text>
        <img src={chevronLogo} alt="chevron" />
      </div>
    </div>
  );
};

export default Events;
