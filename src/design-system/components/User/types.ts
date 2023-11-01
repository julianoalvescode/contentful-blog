import { Session } from "next-auth";

export type UserProps = Session & {
  signOut: () => void;
};
