import styles from "./StorePolicy.module.css";
export default function StorePolicy() {
  return (
    <div className={styles.storePolicy}>
      <h1>Store Policy</h1>
      <h2>1. Product Information</h2>
      <p>
        We strive to ensure that all product information, including
        descriptions, prices, images, and specifications, is accurate and
        up-to-date. Products are listed with their brand, category, and key
        features to help you make informed decisions. Please note that colors
        and packaging may vary slightly from what is shown online.
      </p>
      <h2>2. Pricing and Availability</h2>
      <p>
        All prices are listed in USD and include applicable taxes unless stated
        otherwise. We reserve the right to change prices or availability at any
        time without prior notice. Products displayed on our website are subject
        to availability and may be discontinued without notice.
      </p>
      <h2>3. Shipping & Delivery</h2>
      <p>
        Orders are processed within 1–3 business days. Estimated delivery times
        vary based on location and shipping method selected at checkout. You
        will receive a tracking number once your order has been shipped. Please
        ensure that your shipping address is correct to avoid delays.
      </p>
      <h2>4. Returns & Refunds</h2>
      <p>
        If you are not satisfied with your purchase, you may return unused and
        unopened products within 14 days of delivery. To initiate a return,
        please contact our customer service team with your order number and
        reason for return. Refunds will be processed back to your original
        payment method within 5–7 business days upon receipt of the returned
        item.
      </p>
      <p>
        <strong>Note:</strong> Digital goods, perishable items, and personalized
        products are non-refundable.
      </p>
      <h2>5. Damaged or Incorrect Items</h2>
      <p>
        If you receive a damaged or incorrect item, please notify us within 48
        hours of delivery. Include photos of the item and packaging for faster
        resolution. We will replace the item or issue a refund where applicable.
      </p>
      <h2>6. Payment Security</h2>
      <p>
        We use secure payment gateways and encryption protocols to ensure your
        personal and payment information is protected. We do not store your
        credit card information on our servers.
      </p>
      <h2>7. Contact Us</h2>
      <p>
        For any questions or concerns regarding your order, feel free to reach
        out via our <a href="/Support">Contact Page</a> or email
        support@example.com. Our team is available Monday to Friday, 9 AM – 5 PM
        (GMT).
      </p>
    </div>
  );
}
