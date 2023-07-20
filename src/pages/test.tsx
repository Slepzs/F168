import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Testpage from "~views/testpage/testpage";
import Layout from "~components/Organism/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fasting Fast</title>
      </Head>
      <Layout>
        <Testpage />
      </Layout>
    </>
  );
};

export default Home;
