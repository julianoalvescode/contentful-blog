import { UserProps } from "./types";

import styles from "./user.module.scss";

import { AiOutlineArrowRight } from "react-icons/ai";

export function User(params: UserProps) {
  if (!params.user?.image || !params.user?.name || !params.user?.email) {
    return;
  }

  return (
    <>
      <nav className={styles.user}>
        <img
          className={styles["user__avatar"]}
          src={params?.user?.image}
          alt={params?.user?.name}
        />
        <div>
          <h4>{params?.user?.name}</h4>
          <p className={styles["user__email"]}>{params?.user?.email}</p>
        </div>
        <button
          onClick={() => params?.signOut()}
          className={styles["user__signOut"]}
        >
          Sair
          <AiOutlineArrowRight size={20} />
        </button>
      </nav>
    </>
  );
}
