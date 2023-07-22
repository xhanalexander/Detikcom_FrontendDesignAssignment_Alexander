import { Footer } from "flowbite-react";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <Footer container className="bg-[#007CBD] rounded-none mt-16">
      <div className="w-full footer-section">
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <div className="pb-5 text-white">
              <Link to="/">
                <h5 className="text-sm h-4">detikfinance</h5>
                <h4 className="uppercase text-xl font-bold">business plan</h4>
                <p className="uppercase text-[9px] tracking-[0.5em]">
                  competition 2023
                </p>
              </Link>
            </div>
            <p className="text-white text-sm">
              Detikfinance memberikan ruang kepada para startup di Indonesia
              untuk menunjukkan, seta mempromosikan brand mereka untuk
              mendapatkan perhatian dari venture capital atau angel investore
            </p>
          </div>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={FiTwitter} className="text-white" />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="text-white"
            />
            <RiFacebookCircleLine className="text-white h-[25px] w-[24px]" />
          </div>
        </div>
        <Footer.Divider 
          className=" border-white text-white bg-white"
        />
        <Footer.Copyright
          by="Detikcom All rights reserved"
          year={2023}
          className="text-gray-300 text-[10px] sm:text-start"
        />
      </div>
    </Footer>
  );
}
