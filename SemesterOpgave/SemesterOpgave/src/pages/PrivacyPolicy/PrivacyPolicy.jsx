import styles from "./PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
  const today = new Date().toLocaleDateString("en-GB");
  return (
    <div className={styles.privacyPolicy}>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> {today}
      </p>
      <h2>1. Introduction</h2>
      <p>
        At [Your Company Name], we respect your privacy and are committed to
        protecting your personal information. This privacy policy outlines how
        we collect, use, and protect your data when you visit our website and
        purchase our products.
      </p>
      <h2>2. Data Collection</h2>
      <p>We may collect the following types of personal data:</p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Shipping and billing address</li>
        <li>Phone number</li>
        <li>
          Payment details (processed securely through a third-party provider)
        </li>
        <li>IP address and browsing behavior</li>
      </ul>
      <p>
        Product data (such as images, descriptions, and pricing) displayed on
        our site is retrieved from a third-party product API to enhance your
        shopping experience.
      </p>
      <h2>3. Purpose of Data Use</h2>
      <p>Your data is used to:</p>
      <ul>
        <li>Process and fulfill your orders</li>
        <li>Communicate order updates and support</li>
        <li>Improve your shopping experience</li>
        <li>Comply with legal obligations</li>
      </ul>
      <p>We never sell your personal data to third parties.</p>
      <h2>4. Cookies</h2>
      <p>
        Our website uses cookies to track site usage and improve user
        experience. You can disable cookies in your browser settings.
      </p>
      <h2>5. Data Protection</h2>
      <p>
        We use appropriate technical and organizational measures to protect your
        personal data from unauthorized access, misuse, or disclosure.
      </p>
      <h2>6. Third-Party Services</h2>
      <p>
        Some of our services (e.g. payment processing, product information) may
        involve trusted third-party providers. These partners only receive the
        data necessary to deliver their services and are bound by strict
        confidentiality agreements.
      </p>
      <h2>7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal data</li>
        <li>Correct or delete your data</li>
        <li>Withdraw consent</li>
        <li>File a complaint with a data protection authority</li>
      </ul>
      <p>
        To exercise your rights, contact us at{" "}
        <a href="mailto:kirsebovs@hotmail.dk">kirsebovs@hotmail.dk</a>.
      </p>
    </div>
  );
}
