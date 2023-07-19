import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Testpage from "~views/testpage/testpage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fasting Fast</title>
      </Head>
      <Testpage />
    </>
  );
};

export default Home;
