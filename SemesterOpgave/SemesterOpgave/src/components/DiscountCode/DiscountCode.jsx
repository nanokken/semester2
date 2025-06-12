// components/DiscountCode.jsx
import { useState } from "react";
import styles from "./DiscountCode.module.css";

// Gyldige rabatkoder og deres effekter
const validCodes = {
  COMBO10: { type: "percent", value: 10 },
  SOLID5: { type: "fixed", value: 5 },
  FREESHIP: { type: "freeShipping", value: 0 },
};

export default function DiscountCode({ onApply }) {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  // Funktion der tjekker og anvender rabatkoden
  const handleApply = () => {
    const trimmed = code.trim().toUpperCase();
    if (validCodes.hasOwnProperty(trimmed)) {
      const data = validCodes[trimmed];
      setMessage(`✅ Koden "${trimmed}" er gyldig.`);
      onApply({ ...data, code: trimmed }); // Sender type og value op til parent
    } else {
      setMessage("❌ Ugyldig rabatkode.");
      onApply(null); // Fjerner rabat
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3>Rabatkode</h3>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Indtast rabatkode"
          className={styles.input}
        />
        <button onClick={handleApply} className={styles.button}>
          Anvend
        </button>
      </div>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}
