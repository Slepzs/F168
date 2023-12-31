import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Homepage from "../views/homepage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>F168</title>
      </Head>
      <Homepage />
    </>
  );
};

export default Home;
