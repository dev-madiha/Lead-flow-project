

import { FaBell } from "react-icons/fa";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="fixed top-0 left-64 w-[calc(100%-16rem)] z-50 flex justify-end items-center px-6 py-5 bg-[#f7f0ff] shadow">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="pr-4">
          <FaBell className="w-10 h-8" />
        </div>
        <div className="w-8 h-8 ">
          <Image src="/Images/nav-img.jpg"
          alt="nav-img"
           width={150}
          height={40}
          className="rounded-full" />
        </div>
        <span className="font-medium text-black">Admin</span>
      </div>
    </div>
  );
}
