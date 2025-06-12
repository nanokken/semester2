import { useState, useEffect } from "react";
import styles from "./CTA.module.css";

const CTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissedAt = localStorage.getItem("ctaDismissedAt");
    if (dismissedAt) {
      const oneDayInMs = 24 * 60 * 60 * 1000;
      const timeElapsed = Date.now() - new Date(dismissedAt).getTime();
      if (timeElapsed < oneDayInMs) {
        setIsVisible(false);
      }
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("ctaDismissedAt", new Date().toISOString());
  };

  if (!isVisible) return null;

  return (
    <div className={styles.cta}>
      <p>
        <strong>LIMITED TIME SALE:</strong> Use code{" "}
        <span className={styles.code}>COMBO10</span> for 10% off!
      </p>
      <button className={styles.closeButton} onClick={handleClose}>
        ✕
      </button>
    </div>
  );
};

export default CTA;
