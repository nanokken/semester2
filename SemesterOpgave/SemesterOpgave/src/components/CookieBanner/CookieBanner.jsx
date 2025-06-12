import { useState, useEffect } from "react";
import styles from "./CookieBanner.module.css";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Tjek om brugeren allerede har accepteret cookies
  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieConsent");
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  // Når brugeren accepterer cookies
  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  // Hvis brugeren allerede har accepteret, vis ikke banneret
  if (!isVisible) return null;

  return (
    <div className={styles.banner}>
      <p>
        Vi bruger cookies for at forbedre din oplevelse. Ved at fortsætte
        acceptere du vores brug af cookie.
      </p>
      <button onClick={handleAccept}>Accepter</button>
    </div>
  );
};

export default CookieBanner;
