import Link from "next/link";
import React from "react";

export default function SecondaryButton({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <button className="text-center w-[200px] bg-none border max-md:w-full max-md:px-2 border-white text-white text-xl h-10 rounded-lg  hover:text-black  transition-all">
      {" "}
      <Link href={link}>{title}</Link>
    </button>
  );
}
