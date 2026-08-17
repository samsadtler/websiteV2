import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/posts";

export async function getStaticProps() {
  return { props: { posts: getAllPosts() } };
}

export default function Index({ posts }) {
  return (
    <Layout>
      <div className="blog-posts">
        <Container fluid>
          <Row>
            {posts.map((post) => (
              <Col md={4} sm={12} style={{ padding: "2px" }} key={post.slug}>
                <Link href={`/${post.slug}`}>
                  <div className="blog-post-preview">
                    <img
                      src={post.imgMain}
                      alt={post.title}
                      style={{ maxWidth: "400px", width: "100%" }}
                      loading="lazy"
                    />
                    <p className="hoverPostExcerpt"> </p>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
