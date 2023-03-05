import { Fragment } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Shorter from "@/components/Shorter/Shorter";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Shorter />
    </Fragment>
  );
}
