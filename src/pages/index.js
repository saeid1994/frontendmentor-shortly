import { Fragment } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Shorter from "@/components/Shorter/Shorter";
import Descriptions from "@/components/Descriptions";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Shorter />
      <Descriptions />
    </Fragment>
  );
}
