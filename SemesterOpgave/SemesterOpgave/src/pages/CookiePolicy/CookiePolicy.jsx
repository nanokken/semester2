import styles from "./CookiePolicy.module.css";
export default function CookiePolicy() {
  return (
    <div className={styles.cookiePolicy}>
      <h1>Cookie Policy</h1>
      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit our
        site. They help improve your experience and ensure the site functions
        properly.
      </p>
      <h2>How do we use cookies?</h2>
      <p>We use cookies for the following purposes:</p>
      <ul>
        <li>To remember your preferences and settings</li>
        <li>To analyze user behavior and site traffic</li>
        <li>To display relevant products and offers using data from our API</li>
        <li>To improve performance and personalize your experience</li>
      </ul>
      <h2>Third-party cookies</h2>
      <p>
        We also use cookies from trusted partners like Google Analytics for
        statistical analysis.
      </p>
      <h2>How can you manage cookies?</h2>
      <p>
        You can change or delete your cookies anytime through your browser
        settings. Please note that disabling cookies may affect the site's
        functionality.
      </p>
    </div>
  );
}
