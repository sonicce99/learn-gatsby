import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

interface Props {
  data: AllFile;
}

interface AllFile {
  allFile: Nodes;
}

interface Nodes {
  nodes: Node[];
}

interface Node {
  name: string;
}

const BlogPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;
