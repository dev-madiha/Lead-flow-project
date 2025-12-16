"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDashboard } from "react-icons/md";

import {
  FiUpload,
  FiFilter,
  FiList,
  FiBarChart2,
  FiUsers,
  FiUser,
  FiVolume2,
  FiPackage,
} from "react-icons/fi";

import Image from "next/image";
import { useState } from "react";
export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const linkClass = (path: string) =>
    `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
      isActive(path)
        ? "bg-[#aa75ec] text-white cursor-default"
        : "text-[#383838] hover:bg-purple-100 cursor-pointer"
    }`;

  return (
    <>
      <aside className=" fixed left-0 top-0 w-64 h-screen bg-gradient-to-b text-white flex flex-col">
        <div className="h-18  bg-[#5c10b6]  flex items-center justify-center border-b border-purple-700 px-4 flex-shrink-0">
          <Image
            src="/Images/lead-flow.png"
            alt="LeadFlow Logo"
            width={160}
            height={40}
            className="object-contain w-full"
            priority
          />
        </div>

        <nav className="flex-1 p-4 space-y-2 bg-[#f7f0ff] overflow-y-auto">
          {isActive("/dashboard") ? (
            <div className={linkClass("/dashboard")}>
              <MdDashboard className="text-xl" />
              <span className="font-medium">Dashboard</span>
            </div>
          ) : (
            <Link href="/dashboard" className={linkClass("/dashboard")}>
              <MdDashboard className="text-xl" />
              <span className="font-medium">Dashboard</span>
            </Link>
          )}

          <Link
            href="/pages/upload-dispo"
            className={linkClass("/pages/upload-dispo")}
          >
            <FiUpload className="text-xl" />
            <span className="font-medium">Upload Dispo Leads</span>
          </Link>

          <Link
            href="/pages/dispo-leads"
            className={linkClass("/pages/dispo-leads")}
          >
            <FiFilter className="text-xl" />
            <span className="font-medium"></span>
            <span className="font-medium">Dispo Leads</span>
          </Link>

          <Link href="/pages/car-incident" className=""></Link>
          <Link
            href="/pages/all-leads"
            className={linkClass("/pages/all-leads")}
          >
            <FiList className="text-xl" />
            <span className="font-medium">All Leads</span>
          </Link>

          <Link href="/pages/affiliators" className={linkClass("/affiliators")}>
            <FiUsers className="text-xl" />
            <span className="font-medium">Affiliators</span>
          </Link>

        </nav>
      </aside>
    </>
  );
}
