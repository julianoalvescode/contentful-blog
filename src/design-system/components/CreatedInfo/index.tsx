import { formatDate, humanizeDate } from "@/presentation/helpers";
import styles from "./created-info.module.scss";

import { CreatedInfoProps } from "./types";

export function CreatedInfo({ date }: CreatedInfoProps) {
  return (
    <>
      <p className={styles["created-info__date"]}>
        {formatDate(date)} - Postado {humanizeDate(date)}
      </p>
    </>
  );
}
