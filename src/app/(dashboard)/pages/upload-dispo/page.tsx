

import React from "react";
import { FiUpload, FiFile, FiCheck, FiX, FiAlertCircle } from "react-icons/fi";

const page = () => {
  return (
    <div className="min-h-screen  p-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <h1 className="text-[16px] font-bold text-gray-900">
              Upload Dispo Leads
            </h1>
          </div>

          <p className="text-gray-600 max-w-3xl">
            Upload your file containing lead data for DMASA filtering.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="">
            <div className="border border-[#e5e5e5] rounded-2xl  p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Upload Details
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Select Client <span className="text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <select className="w-full px-4 py-3 bg-gray-50 border border-[#656565] rounded-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition">
                        <option value="">Choose a client</option>
                        <option value="client1">ABC Corporation</option>
                        <option value="client2">XYZ Enterprises</option>
                        <option value="client3">Global Solutions Inc</option>
                        <option value="client4">Tech Innovations LLC</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2 ">
                    <label className="block text-sm font-medium text-gray-700">
                      Campaign Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 bg-gray-50 border border-[#656565] rounded-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition">
                        <option value="">Select campaign</option>
                        <option value="email">Email Campaign</option>
                        <option value="social">Social Media</option>
                        <option value="ppc">PPC Leads</option>
                        <option value="organic">Organic Traffic</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Priority Level
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 bg-gray-50 border border-[#656565] rounded-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition">
                        <option value="normal">Normal</option>
                        <option value="high">High Priority</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Upload Files <span className="text-red-500">*</span>
                  </label>
                  <div className="border-3 border-dashed border-gray-300 rounded-2xl p-8 text-center  transition-colors cursor-pointer bg-gray-50">
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <div className="p-4 bg-purple-100 rounded-full">
                        <FiUpload className="text-3xl text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Drag & drop your files here or click to browse files
                        </p>
                      </div>
                      <button
                        type="button"
                        className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                      >
                        Browse Files
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
