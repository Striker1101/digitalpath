import React from "react";
import Welcome from "./Welcome";
import SecondWelcome from "./SecondWelcome";
import Services from "./Services";
import SecondServices from "./SecondServices";
import Process from "./Process";
import Testimony from "./Testimony";
import ContactUs from "./ContactUs";

export default function WebDevelopment() {
  return (
    <div>
      <Welcome />
      <SecondWelcome />
      <Services />
      <SecondServices />
      <Process />
      <Testimony />
      <ContactUs />
    </div>
  );
}
