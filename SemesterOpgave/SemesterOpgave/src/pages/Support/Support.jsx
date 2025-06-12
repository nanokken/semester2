import Forms from "../../components/Forms/Forms";
import styles from "./Support.module.css";
import Accordion from "../../components/Accordion/Accordion";

const Support = () => {
  return (
    <div className={styles.support}>
      <h1>Contact Us</h1>
      <div className={styles.content}>
        <div className={styles.contactForm}>
          <Forms />
        </div>
        <div className={styles.faq}>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Support;
