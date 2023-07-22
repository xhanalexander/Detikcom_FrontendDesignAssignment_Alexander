import React from "react";
import Navigation from "../../components/Navbar";
import RegisComponent from "../../components/register";
import Footer from "../../components/Footer";

export default function RegisterPage() {
  return (
    <div>
      <Navigation />
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <RegisComponent />
        </div>
      </div>
      <section className="md:mt-[400px] mt-52">
        <Footer />
      </section>
    </div>
  );
}
