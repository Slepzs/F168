import Link from "next/link";
import React, { memo } from "react";
import Layout from "~components/Organism/Layout";

const Homepage: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Homepage</h1>
      <Link href="/test">
        <span className="block mt-8 font-bold">test page</span>
      </Link>
    </Layout>
  );
};

export default memo(Homepage);
