import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DiscountCode from "../../components/DiscountCode/DiscountCode";
import styles from "./Cart.module.css";

const shippingFee = 50;

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(null);

  // Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Remove item from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total price for all products
  const productsTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Calculate total with discount
  const calculateTotal = () => {
    let total = productsTotal + (cart.length > 0 ? shippingFee : 0);

    if (discount) {
      if (discount.type === "percent") {
        total -= (productsTotal * discount.value) / 100;
      } else if (discount.type === "fixed") {
        total -= discount.value;
      } else if (discount.type === "freeShipping") {
        total -= shippingFee;
      }
    }

    return total > 0 ? total : 0;
  };

  const onSubmit = (data) => {
    alert(`Tak for din ordre, ${data.name}! Total: ${calculateTotal()} kr.`);
    // Optionally clear cart here:
    // setCart([]);
    // localStorage.removeItem("cart");
  };

  return (
    <div className={styles.container || "cart"}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <br />
                <strong>{item.title}</strong> <br />
                Price: ${item.price} <br />
                Quantity: {item.quantity} <br />
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <label>Navn</label>
            <input {...register("name", { required: true })} />
            {errors.name && <p className={styles.error}>Navn er påkrævet</p>}

            <label>Email</label>
            <input {...register("email", { required: true })} />
            {errors.email && <p className={styles.error}>Email er påkrævet</p>}

            <label>Adresse</label>
            <input {...register("address", { required: true })} />
            {errors.address && (
              <p className={styles.error}>Adresse er påkrævet</p>
            )}

            <p>Produkter i alt: {productsTotal} kr</p>
            <p>
              Fragt:{" "}
              {discount?.type === "freeShipping" ? "0 kr" : `${shippingFee} kr`}
            </p>

            <DiscountCode onApply={setDiscount} />

            <h3>Total: {calculateTotal()} kr</h3>

            <button type="submit" className={styles.button}>
              Bekræft ordre
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Cart;
