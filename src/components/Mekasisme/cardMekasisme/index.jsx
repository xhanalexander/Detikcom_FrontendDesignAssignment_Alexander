import React from "react";

export default function CardMekasisme({ date, icon, title, content }) {
  return (
    <div className="bg-white max-w-2xl rounded-lg card-mechanism mb-5 scroll-mt-28">
      <div className="flex flex-col md:flex-row gap-5 px-5 py-5">
        <img src={icon} alt="" className="w-16 h-16 mx-auto" />
        <div>
          <div className="flex flex-col md:flex-row text-center justify-between">
            <h4 className="text-[#3EB7DD] font-bold">{title}</h4>
            <p className="text-[#3EB7DD]">{date}</p>
          </div>
          <ol className="list-decimal pl-4 pt-2 pb-4">
            {content.map((item, i) => (
              <li key={i} className="text-sm text-black">
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
