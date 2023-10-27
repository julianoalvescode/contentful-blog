import Head from "next/head";
import contentfulService from "@/presentation/services/contentful-pages";
import { AboutMe } from "@/design-system/components";
import styles from "./me.module.scss";
import { PageHome } from "@/domain/models";

export default async function Me() {
  const { title, sections }: PageHome = await contentfulService.getHomePage();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.main}>
        <AboutMe {...sections[0]} />
      </main>
    </>
  );
}
