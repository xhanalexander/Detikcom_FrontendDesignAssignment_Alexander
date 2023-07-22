import React from "react";
import About from "../../components/About";
import Footer from "../../components/Footer";
import Investore from "../../components/Invenstore";
import LatestUpdate from "../../components/LatestUpdate";
import Mekasisme from "../../components/Mekasisme";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigation = useNavigate();
  return (
    <div >
      <Navbar />
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage:
            "url(https://iili.io/HQB5Czl.png)",
        }}
      >
        <div className="hero-content text-center text-white">
          <div>
            <h4 className="mb-5 text-2xl font-semibold">
              Detik Business Plan Competition 2023
            </h4>
            <h2 className="uppercase mb-5 text-6xl font-bold">
              empowering indonesia startup
            </h2>
            <p className="max-w-5xl mx-auto font-semibold text-xl">
              Detik memberikan ruang kepada para startup di indonesia untuk
              menunjukkan, serta mempromosikan brand mereka untuk mendapatkan
              perhatian dari venture capital atau angel investor
            </p>
            <button
              className="btn bg-[#3EB7DD] hover:bg-[#3EB7DD] border-none mt-8 text-white"
              onClick={() => navigation("/register")}
            >
              Daftarkan startup kamu
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-white h-32 flex justify-center items-center"></div>
      </div>
      <About />
      <Mekasisme />
      <Investore />
      <LatestUpdate />
      <Footer />
    </div>
  );
}
