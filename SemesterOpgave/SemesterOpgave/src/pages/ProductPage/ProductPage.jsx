import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`Error fetching product: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} has been added to your cart!`);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  // Format dimensions object into a readable string
  const formattedDimensions = product.dimensions
    ? `${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth} cm`
    : "N/A";

  return (
    <div className={styles.productPage}>
      <div className={styles.productDetails}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.thumbnail}
        />
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.brand}>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p className={styles.price}>
            <strong>Price:</strong> ${product.price}
          </p>
          <p className={styles.rating}>
            <strong>Rating:</strong> {product.rating}
          </p>
          <p className={styles.weight}>
            <strong>Weight:</strong> {product.weight} kg
          </p>
          <p className={styles.dimensions}>
            <strong>Dimensions:</strong> {formattedDimensions}
          </p>
          <button
            className={styles.addToCartButton}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
