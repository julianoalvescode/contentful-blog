import { User } from "..";
import styles from "./header.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";

export function Header() {
  const { data: session } = useSession();

  return (
    <>
      <header className={styles.header}>
        <div className={styles["header__container"]}>
          <h1 className={styles["header__title"]}>Blog do Juliano</h1>
          {session ? (
            <>
              <User signOut={signOut} {...session} />
            </>
          ) : (
            <>
              <button
                className={styles["header__signIn"]}
                onClick={() => signIn("github")}
              >
                Login
              </button>
            </>
          )}
        </div>
      </header>
    </>
  );
}
