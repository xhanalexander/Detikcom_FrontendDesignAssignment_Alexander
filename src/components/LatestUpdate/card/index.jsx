import React from "react";
import { Card } from "flowbite-react";

export default function CardLatest({ img, title, date }) {
  return (
    <Card className="border-0 shadow-none card group/item bg-transparent">
      <div className="overflow-hidden rounded-lg">
        <img
          src={img}
          alt=""
          className="h-[180px] object-cover w-full transition-transform duration-300 transform-gpu hover:scale-110 group-hover/item:rounded-lg"
        />
      </div>
      <h5 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2 capitalize group-hover/item:text-[#007CBD]">
        {title}
      </h5>
      <p className="font-normal text-gray-400 text-sm">{date}</p>
    </Card>
  );
}
