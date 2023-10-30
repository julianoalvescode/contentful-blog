import styles from "./footer.module.scss";

import { FooterProps } from "./types";

export function Footer({ description }: FooterProps) {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles["footer__text"]}>{description}</p>
      </footer>
    </>
  );
}
