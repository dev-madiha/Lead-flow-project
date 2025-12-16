
import React from "react";
const page = () => {
  return (

    <div className="mt-20 ">
      <div className="flex justify-between items-center mb-6 mt-20">
        <div>
          <h1 className="text-[16px] font-bold">Dispo Lead</h1>
          <p>Leads processed through DMASA filtering system.</p>
        </div>
        <div className="">
          <input
            className="w-[420px] bg-[#e7e7e7] p-3 pl-10 rounded-md placeholder:text-black focus:outline-none"
            placeholder="Enter Contact Number"
          />
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 bg-white p-4 pb-10">
        <input type="date" className="border text-[10px] p-2 rounded" />
        <select className="border p-2 rounded text-[10px]">
          <option className="text-[10px]">Select Client</option>
        </select>

        <select className="border p-2 rounded text-[10px]">
          <option className="text-[10px]">Select Range</option>
        </select>

        <select className="border p-2 rounded text-[10px]">
          <option className="text-[10px]">Select Status</option>
        </select>

        <button className=" cursor-pointer text-black border border-purple-300 rounded px-4 py-2">
          Filter
        </button>
      </div>

      <div>
        <div className="border px-4 border-[#e5e5e5]  rounded-md">
          <table className="w-full  mt-6 bg-white overflow-hidden">
            <thead className="bg-[#ece9e9]">
              <tr>
                <th className="text-left p-2">Contact Number</th>
                <th className="text-left p-2">Client</th>
                <th className="text-left p-2">Supplier</th>
                <th className="text-left p-2">Dispo Status</th>
                <th className="text-left p-2">Affiliate</th>
                <th className="text-left p-2">Status</th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5, 6].map((_, idx) => (
                <tr key={idx} className="hover:bg-[#fafafa] ">
                  <td className="p-4">+271-35784983</td>
                  <td className="p-4">John Doe</td>
                  <td className="p-4">Iconaf</td>
                  <td className="p-4">Follow Up later</td>
                  <td className="p-4">Ashil</td>
                  <td className="p-4">Active</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
