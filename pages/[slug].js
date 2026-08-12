import Layout from "../components/layout";
import SEO from "../components/seo";
import { getAllPosts, getPostBySlug } from "../lib/posts";

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { post: await getPostBySlug(params.slug) } };
}

export default function Post({ post }) {
  return (
    <Layout>
      <SEO title={post.title} />
      <div key={post.title} className="blog-post-container">
        <div className="blog-post">
          <h1>{post.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </div>
    </Layout>
  );
}
