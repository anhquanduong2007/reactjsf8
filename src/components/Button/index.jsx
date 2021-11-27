import clsx from "clsx";

import styles from "./Button.module.scss";
const Button = ({ primary }) => {
  const classes = clsx(styles.btn, {
    [styles.primary]: primary,
    // có primary thì sẽ có class primary
    "d-flex": true,
  });
  return (
    <>
      <button className={classes}>Click me!</button>
      <button className={`${styles.btn} ${styles.active}`}>Click me!</button>
      {/* có thể viết như này */}
      <button className={[styles.btn, styles.active].join(" ")}>
        Click me!
      </button>

      {/* dùng thư viện */}
      <button
        className={clsx(styles.btn, {
          [styles.active]: true,
        })}
      >
        Click me!
      </button>
      {/* Với clsx nó cũng có thể giúp chúng ta xử lý được class động */}
    </>
  );
};
export default Button;
/**
 * * Do cách trình bày như kia rất là xấu lên chúng ta sẽ dùng 1 trong 2 thư viện này
 * ? classnames
 * ? clsx
 *
 */
