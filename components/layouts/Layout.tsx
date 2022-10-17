import Head from "next/head";
import React from "react";
import Navbar from "../ui/Navbar";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Hoal</title>
      </Head>

      <nav>
        <Navbar />
      </nav>

      <main style={{ padding: "20px 50px" }}>{children}</main>
    </>
  );
};

export default Layout;
