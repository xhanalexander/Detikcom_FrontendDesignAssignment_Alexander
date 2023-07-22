import React from "react";
import CarouselIvestore from "./carouselInves";
import { useNavigate } from "react-router-dom";

export default function Investore() {
  const navigation = useNavigate();
  return (
    <div className="my-20">
      <div className="text-center mb-10">
        <h3 className="font-bold text-[#007CBD] px-5 md:px-0 text-xl">
          Dapatkan Kesempatan Dilirik oleh Venture Capital / Angel Investor{" "}
          <br />
          Serta Menjadi Narasumber di Detikfinance
        </h3>
      </div>
      <CarouselIvestore />
      <div className="flex justify-center mt-14">
        <button
          className="btn bg-[#3EB7DD] hover:bg-[#3EB7DD] border-none text-white"
          onClick={() => navigation("/register")}
        >
          Daftarkan startup kamu
        </button>
      </div>
    </div>
  );
}
