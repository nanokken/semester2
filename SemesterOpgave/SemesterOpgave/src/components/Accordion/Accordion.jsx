import { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "You can return unused and unopened products within 14 days of delivery.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes 3–5 business days, depending on your location.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship internationally. Additional fees may apply.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You will receive a tracking number via email once your order is shipped.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards, PayPal, and other secure payment methods.",
    },
  ];

  return (
    <div className={styles.accordion}>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.item}>
          <button
            className={styles.question}
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
          </button>
          {activeIndex === index && (
            <p className={styles.answer}>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
