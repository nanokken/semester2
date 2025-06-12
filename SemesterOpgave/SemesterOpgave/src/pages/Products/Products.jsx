import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error(`Error fetching products: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products); // Initialize filtered products
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  const handleFilter = (type) => {
    let sortedProducts = [...products];
    switch (type) {
      case "A-Z":
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "PriceLowHigh":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "PriceHighLow":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "Rating":
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    setFilteredProducts(sortedProducts);
  };

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} added to cart!`);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.products}>
      <h1>Products</h1>
      <div className={styles.filter}>
        <button onClick={() => handleFilter("A-Z")}>A–Z</button>
        <button onClick={() => handleFilter("Z-A")}>Z–A</button>
        <button onClick={() => handleFilter("PriceLowHigh")}>
          Price Low to High
        </button>
        <button onClick={() => handleFilter("PriceHighLow")}>
          Price High to Low
        </button>
        <button onClick={() => handleFilter("Rating")}>Rating</button>
      </div>
      <div className={styles.productGrid}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.productBox}>
            <h2>{product.title}</h2>
            <img
              src={product.thumbnail}
              alt={product.title}
              className={styles.productImage}
            />
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to={`/productpage/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
