import contentfulService from "@/presentation/services/contentful-pages";
import { Post } from "@/domain/models";

import styles from "./blog.module.scss";
import Head from "next/head";
import { PostBlog } from "@/design-system/components";
import { GetStaticProps, GetStaticPropsContext } from "next";

export default function SlugPost({ post }: { post: Post }) {
  return (
    <>
      <Head>
        <title>{post?.fields?.title}</title>
      </Head>
      <main className={styles.main}>
        <PostBlog {...post} />
      </main>
    </>
  );
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const posts = await contentfulService.getPosts();

  const post = posts?.fields?.posts?.find(
    (post: Post) => post.fields?.internalName === params?.slug
  );

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const posts = await contentfulService.getPosts();

  return {
    paths: posts?.fields?.posts?.map((post: Post) => ({
      params: {
        slug: post.fields?.internalName,
      },
    })),
    fallback: false,
  };
}
