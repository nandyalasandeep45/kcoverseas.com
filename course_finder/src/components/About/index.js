import Styles from "./about.module.css";
import config from "../../utils/config.json";
import CircleLogo from "../../assests/circle.svg";
import PenLogo from "../../assests/pen.svg";
import ChevronLeftLogo from "../../assests/chevronLeft.svg";
import ChevronRightLogo from "../../assests/chevronRight.svg";
import aboutDesktopLogo from "../../assests/aboutDesktop.svg";
import { deviceWidth } from "../../utils/helper";
import { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageLogo = {
  circleLogo: CircleLogo,
  penLogo: PenLogo
};

const About = () => {
  const jsonData = config?.about;
  const [currentStep, setCurrentStep] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    centerMode: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // Function to move to the previous slide
  const handlePrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const renderComp = () => {
    return jsonData?.list?.map((val, index) => {
      return (
        <div className={Styles.step} key={index}>
          <span
            className={`${Styles.stepNumber} ${
              currentStep !== index ? Styles.activeCard : ""
            }`}
          >
            {index + 1}
          </span>
          <img
            src={aboutDesktopLogo}
            alt="about"
            style={{
              objectFit: "cover",
              borderRadius: "8px",
              height: "260px",
              width: "100%"
            }}
          />
          <div className={Styles.stepBox}>
            <img
              src={imageLogo?.[val?.img]}
              alt={val?.img}
              width={105}
              height={60}
              className={Styles.stepIcon}
            />
            <div className={Styles.textCard}>
              <text className={Styles.textHeader}>{val?.header}</text>
              <text className={Styles.textDesc}>{val?.desc}</text>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className={Styles.container}>
      <text className={Styles.header}>{jsonData?.header}</text>
      {deviceWidth() === "Mobile" ? (
        <div className={Styles.slideContainer}>
          <Slider {...settings} ref={sliderRef}>
            {renderComp()}
          </Slider>
        </div>
      ) : (
        <div className={Styles.stepsWrapper}>{renderComp()}</div>
      )}
      <div className={Styles.navigation}>
        <div
          className={Styles.directionPath}
          onClick={() => {
            setCurrentStep((prev) => prev - 1);
            handlePrevSlide();
          }}
        >
          <img src={ChevronLeftLogo} alt="chevronLeft" />
          <text className={Styles.directionText}>{jsonData?.backward}</text>
        </div>
        <div
          className={Styles.directionPath}
          onClick={() => {
            setCurrentStep((prev) => prev - 1);
            handleNextSlide();
          }}
        >
          <text className={Styles.directionText}>{jsonData?.forward}</text>
          <img src={ChevronRightLogo} alt="chevronRight" />
        </div>
      </div>
    </div>
  );
};

export default About;
