
"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

export default function AffiliatePage() {
  const [open, setOpen] = useState(false);

  return (
    
    <div className="p-6 max-w-5xl mx-auto mt-20">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Affiliate</h1>
          <p className="text-gray-500">
            Select an affiliate to view their clients and campaigns.
          </p>
        </div>

        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search an Affiliate"
            className="pl-10 pr-4 py-2 rounded-lg bg-gray-100 outline-none"
          />
        </div>
      </div>

      <div className="border rounded-lg p-4 w-[420px]">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-purple-600"></span>
              <span className="font-medium">Name</span>
              <span className="ml-10">Ashil</span>
            </div>
          
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-purple-600"></span>
              <span className="font-medium">Email</span>
              <span className="ml-8">Ashil@gmail.com</span>
            </div>
          </div>
          {open ? <ChevronUp /> : <ChevronDown />}
        </div>

        {open && (
          <div className="mt-6">
            <h2 className="font-semibold mb-2">Clients</h2>
            <div className="border rounded-md p-3 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-purple-600"></span>
                <span>King Price</span>
              </div>
              <ChevronDown />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
