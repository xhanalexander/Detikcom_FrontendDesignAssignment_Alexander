import React from "react";

export default function NavLink({ content }) {
  const scrollToId = content;

  const handleClickNav = () => {
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`mx-auto flex md:flex-row flex-col gap-10 items-center text-white`}>
      <div
        onClick={handleClickNav}
        className={"text-white lg:my-0 my-2 cursor-pointer"}
      >
        {content}
      </div>
    </div>
  );
}
