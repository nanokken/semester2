import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import styles from "./Navigation.module.css";
import Logo from "../../assets/Logo.svg";
import { FaShoppingCart } from "react-icons/fa";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => setMenuOpen(false);
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div
        className={styles.logo}
        onClick={() => {
          setMenuOpen(false);
          navigate("/");
        }}
        role="button"
        tabIndex={0}
        aria-label="Go to home"
      >
        <img src={Logo} alt="Logo" className={styles.logoImg} />
        G-Corpo
      </div>

      <nav className={styles.desktopNav}>
        <NavLink to="/products" className={styles.link}>
          Products
        </NavLink>
        <NavLink to="/support" className={styles.link}>
          Support
        </NavLink>
      </nav>

      {!menuOpen && (
        <div className={styles.cartIcon} onClick={() => navigate("/cart")}>
          <FaShoppingCart size={24} className={styles.cartThing} />
        </div>
      )}

      <div className={styles.burgerIcon} onClick={() => setMenuOpen(true)}>
        <RxHamburgerMenu size={28} />
      </div>

      <div className={`${styles.overlay} ${menuOpen ? styles.show : ""}`}>
        <div className={styles.closeIcon} onClick={() => setMenuOpen(false)}>
          <IoClose size={28} />
        </div>
        <nav className={styles.mobileNav}>
          <NavLink
            to="/products"
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            Products
          </NavLink>
          <NavLink
            to="/support"
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            Support
          </NavLink>
          <NavLink
            to="/cart"
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            <FaShoppingCart size={24} className={styles.cartThing} /> Cart
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
