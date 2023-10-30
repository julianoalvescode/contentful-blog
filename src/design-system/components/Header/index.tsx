import styles from "./header.module.scss";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles["header__container"]}>
          <h1 className={styles["header__title"]}>Blog do Juliano</h1>
        </div>
      </header>
    </>
  );
}
