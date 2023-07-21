import Link from "next/link";
import React, { memo } from "react";

const Testpage: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Testpage</h1>
      <p>My Test page </p>
      <Link href="/">xxx</Link>
    </>
  );
};

export default memo(Testpage);
