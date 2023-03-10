import { Fragment } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Shorter from "@/components/Shorter/Shorter";
import Description from "@/components/Description";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Shorter />
      <Description />
      <GetStarted />
      <Footer />
    </Fragment>
  );
}
