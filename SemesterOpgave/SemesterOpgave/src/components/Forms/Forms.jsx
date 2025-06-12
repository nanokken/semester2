import { useForm } from "react-hook-form";
import styles from "./Forms.module.css";

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message sent!");
  };

  return (
    <div className={styles.contact}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.label}>
          Name:
          <input
            {...register("name", { required: true })}
            className={styles.input}
          />
          {errors.name && (
            <span className={styles.error}>This field is required</span>
          )}
        </label>
        <label className={styles.label}>
          Email:
          <input
            {...register("email", { required: true })}
            className={styles.input}
          />
          {errors.email && (
            <span className={styles.error}>This field is required</span>
          )}
        </label>
        <label className={styles.label}>
          Message:
          <textarea
            {...register("message", { required: true })}
            className={styles.textarea}
          ></textarea>
          {errors.message && (
            <span className={styles.error}>This field is required</span>
          )}
        </label>
        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
}
