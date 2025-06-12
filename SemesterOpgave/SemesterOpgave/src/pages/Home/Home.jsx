import { Link } from "react-router-dom";
import { FaTruck, FaShippingFast, FaUndo } from "react-icons/fa";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error(`Error fetching products: ${response.status}`);
        }
        const data = await response.json();
        const topRated = data.products
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 10);
        setFeaturedProducts(topRated);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 < featuredProducts.length ? prevIndex + 4 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 4 >= 0 ? prevIndex - 4 : prevIndex
    );
  };

  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.containerHero}>
          <h1 className={styles.title}>G-corpo online store</h1>
          <p className={styles.description}>
            Explore trending picks, exclusive offers and everyday must haves
            <br />- all in one place
          </p>
          <Link to="/products" className={styles.button}>
            Shop Now
          </Link>
        </div>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoItem}>
          <FaTruck size={24} className={styles.icon} />
          <span>Free Shipping</span>
        </div>
        <div className={styles.infoItem}>
          <FaShippingFast size={24} className={styles.icon} />
          <span>Next Day Shipping</span>
        </div>
        <div className={styles.infoItem}>
          <FaUndo size={24} className={styles.icon} />
          <span>14 Day Return Policy</span>
        </div>
      </div>

      <div className={styles.featuredContainer}>
        <h2 className={styles.featuredTitle}>Featured Products</h2>
        <div className={styles.featuredProducts}>
          {featuredProducts
            .slice(currentIndex, currentIndex + 4)
            .map((product) => (
              <div key={product.id} className={styles.featuredItem}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className={styles.featuredImage}
                />
                <p className={styles.featuredName}>{product.title}</p>
                <p className={styles.featuredRating}>
                  Rating: {product.rating}
                </p>
              </div>
            ))}
        </div>
        <button className={styles.arrowLeft} onClick={handlePrev}>
          &lt;
        </button>
        <button className={styles.arrowRight} onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Home;
