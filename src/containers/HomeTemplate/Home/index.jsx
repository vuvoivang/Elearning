import React from "react";
import Category from "../../../components/Category";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Infor from "../../../components/Infor";
import Intro from "../../../components/Intro";
import Seeding from "../../../components/Seeding";
import StepRegister from "../../../components/StepRegister";
import TopCourse from "../../../components/TopCourse";
export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Category />
      <TopCourse />
      <Infor />
      <StepRegister />
      <Seeding />
      <Footer />
    </div>
  );
}
