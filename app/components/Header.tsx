import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md text-black">
      <div className="flex items-center space-x-2">
        <Image
          src="https://links.papareact.com/4t3"
          width={30}
          height={30}
          alt="image logo"
        />
        <div>
          <h1 className="font-bold">
            Sams <span className="text-violet-500">AI</span> Image Generator
          </h1>
          <h2 className="text-xs">
            Powered by DALL-E 2, ChatGPT & Microsoft Azure
          </h2>
        </div>
      </div>

      <div className="flex text-xs md:text-base divide-x items-center text-gray-500">
        <Link
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D"
          className="px-2 font-light text-right"
        >
          Donate here
        </Link>
        <Link
          href="https://github.com/SamGuzel/samll-e-2"
          className="px-2 font-light text-right"
        >
          Github link
        </Link>
      </div>
    </header>
  );
}

export default Header;
