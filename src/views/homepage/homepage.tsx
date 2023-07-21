import Link from "next/link";
import React, { memo } from "react";
import Layout from "~components/Organism/Layout";
import useStore from "../../utils/store";

const Homepage: React.FC = () => {
  const bears = useStore((state) => state);

  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Homepage</h1>
      <button
        className="my-4 px-5 border border-white"
        onClick={() => {
          bears.increasePopulation();
        }}
      >
        Knap
      </button>

      <Link href="/test">
        <span className="block mt-8 font-bold">test page {bears.bears}</span>
      </Link>
    </Layout>
  );
};

export default memo(Homepage);
