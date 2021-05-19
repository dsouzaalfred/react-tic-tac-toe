import styles from "./cell.module.css";

export const Cell = ({ id }) => {
  return <div id={id} className={styles.cell}></div>;
};
