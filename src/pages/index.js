import { Fragment } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Shorter from "@/components/Shorter/Shorter";
import Description from "@/components/Description";
import GetStarted from "@/components/GetStarted";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Shorter />
      <Description />
      <GetStarted />
    </Fragment>
  );
}
