import React from "react";
import { FiTwitter } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { RiFacebookCircleLine } from "react-icons/ri";

export default function About() {
  return (
    <div className="container mx-auto md:w-2/3 px-5 md:px-0 scroll-mt-32" id="About">
      <div className="flex justify-between flex-wrap lg:flex-nowrap my-20">
        <div className="flex justify-between gap-10 flex-wrap lg:flex-nowrap">
          <img
            src="https://iili.io/HQBRpxp.png"
            alt=""
            className="w-full h-52 object-contain"
          />
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#007CBD]">
                About Detikfinance Business Plan Competition 2023
              </h3>
              <p className="mt-5 text-sm whitespace-normal text-justify text-black font-semibold">
                Detikfinance kali ini akan memberikan ruang bagi startup untuk
                networking dan memamerkan produk inovasinya dihadapan venture
                capital dan angel investor. Acara ini juga akan menghadirkan
                para pengembang teknologi dan pelaku bisnis untuk memberikan
                edukasi dan inspirasi bagi masyarakat Indonesia dan teknofilia
                mengenai perkembangan teknologi di Indonesia
              </p>
              <div className="flex gap-3 mt-5">
                <p className="text-[#007CBD]">Share</p>
                <FiTwitter className="text-[#007CBD] w-5 h-5 mt-1" />
                <BsWhatsapp className="text-[#007CBD] w-5 h-5 mt-1" />
                <RiFacebookCircleLine className="text-[#007CBD] w-6 h-6 mt-[3px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
