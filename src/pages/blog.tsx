import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

interface Props {
  data: AllMdx;
}

interface AllMdx {
  allMdx: Nodes;
}

interface Nodes {
  nodes: Node[];
}

interface Node {
  excerpt: string;
  frontmatter: Frontmatter;
  id: string;
}

interface Frontmatter {
  date: string;
  slug: string;
  title: string;
}

const BlogPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          slug
          title
        }
        id
        excerpt
      }
    }
  }
`;
