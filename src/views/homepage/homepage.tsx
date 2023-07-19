import Link from "next/link";
import React, { memo } from "react";

const Homepage: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Homepage</h1>
      <Link href="/test">
        <span className="block mt-8 font-bold">test page</span>
      </Link>
    </>
  );
};

export default memo(Homepage);
