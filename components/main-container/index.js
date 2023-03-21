import Navbar from "../navbar";
import Footer from "../footer"; 
import styles from "../../styles/MainContainer.module.css"
const MainContainer = ({ children }) => {
  return (
    <>
      <Navbar />
      
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};

export default MainContainer;
