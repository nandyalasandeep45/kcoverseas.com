import Styles from "./info.module.css";
import config from "../../utils/config.json";
import infoLogo from "../../assests/info.svg";
import dotLogo from "../../assests/dot.svg";
import expandLogo from "../../assests/expand.svg";
import ExploreCard from "../common/ExploreCard";
import MenuLogo from "../../assests/menu.svg";
import { useState } from "react";

const Info = () => {
  const jsonData = config?.info;
  const [activeTab, setActiveTab] = useState(jsonData?.header?.length - 1);

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <img src={infoLogo} alt="Logo" className={Styles.imageHeight} />
        <div className={Styles.views}>
          {jsonData?.header?.map((val, index) => (
            <div
              className={
                activeTab === index
                  ? Styles.buttonBorder
                  : Styles.buttonContainer
              }
            >
              <button
                key={index}
                className={Styles.button}
                onClick={() => setActiveTab(index)}
              >
                {val?.label}
              </button>
            </div>
          ))}
        </div>
        <img src={MenuLogo} alt="menu" className={Styles.menu} />
      </div>
      <div className={Styles.contentContainer}>
        <div className={Styles.content}>
          <text className={Styles.home}>Home</text>
          <img className={Styles.dot} src={dotLogo} alt="dot" />
          <text className={Styles.topBranch}>{jsonData?.branch}</text>
        </div>
        <text className={Styles.name}>{jsonData?.title}</text>
        <text className={Styles.desc}>{jsonData?.desc}</text>
        <div className={Styles.bottomContainer}>
          <div className={Styles.buttonSection}>
            <ExploreCard title="Explore" />
          </div>
          <div className={Styles.expandContent}>
            <img src={expandLogo} alt="expand" className={Styles.expand} />
            <text className={Styles.branch}>Branch Address</text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
