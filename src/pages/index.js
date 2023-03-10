import { Fragment } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Shorter from "@/components/Shorter/Shorter";
import Description from "@/components/Description";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>My Application</title>
      </Head>
      <Header />
      <Hero />
      <Shorter />
      <Description />
      <GetStarted />
      <Footer />
    </Fragment>
  );
}
