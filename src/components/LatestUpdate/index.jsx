import React from "react";
import Card from "./card";
import { dataNewsLatest as data } from "../../dummy/newslatest";

export default function LatestUpdate() {
  return (
    <div className="container mx-auto px-6 md:w-3/4 scroll-mt-28" id="Latest Update">
      <h2 className="text-2xl text-[#007CBD] font-bold uppercase mb-3 text-center md:text-left">
        Latest Update
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 cursor-pointer">
        {data?.map((item) => (
          <Card
            key={item?.id}
            img={item?.image}
            title={item?.title}
            date={item?.date}
          />
        ))}
      </div>
    </div>
  );
}
