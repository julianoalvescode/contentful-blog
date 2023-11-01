import styles from "./avatar-info.module.scss";

export function AvatarInfo() {
  return (
    <>
      <section className={styles["avatar-info"]}>
        <div>
          <img
            className={styles["avatar-info__avatar"]}
            src="https://avatars.githubusercontent.com/u/43914533?v=4"
          />
        </div>
        <div className={styles["avatar-info__container"]}>
          <h4>Juliano Alves</h4>
          <p className={styles["avatar-info__position"]}>Front-end Developer</p>
        </div>
      </section>
    </>
  );
}
