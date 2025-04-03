import FavCard from "../common/FavCard";
import Styles from "./favourite.module.css";
import config from "../../utils/config.json";
import Slider from "react-slick";
import { deviceWidth } from "../../utils/helper";

const Favourite = () => {
  const jsonData = config?.favourite;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: deviceWidth() === "Mobile" ? 1 : 3,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <div className={Styles.container}>
      <text className={Styles.header}>{jsonData?.header}</text>
      <div className={Styles.content}>
        <Slider {...settings}>
          {jsonData?.list?.map((val, index) => (
            <FavCard key={index} data={val} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Favourite;
