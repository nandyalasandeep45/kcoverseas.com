import About from "../About";
import Events from "../Events";
import Favourite from "../Favourite";
import Footer from "../Footer";
import Info from "../Info";
import Services from "../Services";
import ImageGrid from "../task";
import Updates from "../Updates";
import Styles from "./dashboard.module.css";
const Dashboard = () => {
  return (
    <div className={Styles.container}>
      <Info />
      <Services />
      <About />
      <Events />
      <Favourite />
      <Updates />
      <Footer />
    </div>
  );
};

export default Dashboard;
