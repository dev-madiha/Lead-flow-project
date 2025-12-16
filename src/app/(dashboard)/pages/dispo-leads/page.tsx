
import React from "react";
import { FaEye } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6 mt-20">
        <div>
          <h1 className="text-[16px] font-bold">Dispo Lead</h1>
          <p>Leads processed through DMASA filtering system.</p>
        </div>
        <div className="">
          <input
            className="w-[420px] bg-[#e7e7e7] p-3 pl-10 rounded-md placeholder:text-black focus:outline-none"
            placeholder="Search a lead"
          />
        </div>
      </div>

      <div className="border border-[#e5e5e5] rounded-md">
        <table className="w-full mt-6 bg-white rounded-lg overflow-hidden">
          <thead className="bg-[#d9d9d9]">
            <tr>
              <th className="text-left p-4">Lead ID</th>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Date Uploaded</th>
              <th className="text-left p-4">Phone</th>
              <th className="text-left p-4">Affiliate</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4, 5, 6].map((_, idx) => (
              <tr key={idx} className="hover:bg-[#fafafa] ">
                <td className="p-4">001</td>
                <td className="p-4">John Doe</td>
                <td className="p-4">2024-01-05</td>
                <td className="p-4">(123) 456-7890</td>
                <td className="p-4">Ashil</td>
                <td className="p-4">Filtered</td>
                <td className="p-4 flex justify-center items-center text-[#5a3ffe] cursor-pointer">
                  <FaEye />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
