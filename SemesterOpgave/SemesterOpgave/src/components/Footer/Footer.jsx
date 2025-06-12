import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <ul className={styles.footerSupport}>
          <li>
            <Link to="/support">Support</Link>
          </li>
        </ul>
        <p>&copy; 2025 Asger Nanok</p>
        <ul className={styles.footerLinks}>
          <li>
            <Link to="/StorePolicy">Store Policy</Link>
          </li>
          <li>
            <Link to="/PrivacyPolicy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/CookiePolicy">Cookie Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
