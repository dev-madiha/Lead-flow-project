
import Card from "../../components/Card";
import SuppliersLeadsGraph from "../../components/SuppliersLeadsGraph";
import SupplierEffectivenessGraph from "../../components/SupplierEffectivenessGraph";

export default function DashboardPage() {
  const stats = [
    { title: "Total Leads", value: "1,245" },
    { title: "Total Affiliates", value: "22" },
    { title: "Active Campaigns", value: "7" },
    { title: "Total Suppliers", value: "7" },
    { title: "Total Effectiveness", value: "68% Overall" },
  ];

  const suppliersLeads = [
    { name: "Supplier A", leads: 350 },
    { name: "Supplier B", leads: 300 },
    { name: "Supplier C", leads: 250 },
    { name: "Supplier D", leads: 200 },
    { name: "Supplier E", leads: 150 },
  ];

  const supplierEffectiveness = [
    { name: "Campaign A", leads: 350 },
    { name: "Campaign B", leads: 300 },
    { name: "Campaign C", leads: 250 },
    { name: "Campaign D", leads: 200 },
    { name: "Campaign E", leads: 150 },
  ];

  return (
    <div className="space-y-8 mt-20">
      <div>
        <h1 className="text-2xl ">Dashboard Overview</h1>
        <p className="text-gray-500 text-sm">Your system activity overview.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 bg-white p-4 border border-gray-200">
        <input type="date" className="border text-[10px] p-2 rounded" />
        <select className="border p-2 rounded text-[10px]">
          <option className="text-[10px]">Select Affiliate</option>
        </select>
        
        <select className="border p-2 rounded text-[10px]">
          <option className="text-[10px]">Select Client</option>
        </select>

        <select className="border p-2 rounded text-[10px]">
          <option className="text-[10px]">Select Campaign</option>
        </select>

        <select className="border p-2 rounded text-[10px]">
          <option className="text-[10px]">Select Supplier</option>
        </select>

        <button className="text-black border border-purple-300 rounded px-4 py-2">
          Filter
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {stats.map((item, index) => (
          <Card key={index}>
            <p className="text-black text-sm">{item.title}</p>
            <p className="text-2xl mt-2 text-[#5c10b6]">{item.value}</p>
          </Card>
        ))}
      </div>

      <div className="w-full flex flex-col gap-12">
        <SuppliersLeadsGraph data={suppliersLeads} />
        <SupplierEffectivenessGraph data={supplierEffectiveness} />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl  p-4 border border-gray-200">
          <div className="mb-6 flex gap-4 items-center">
            <h1 className="text-xl font-semibold text-gray-800">
              Leads Details
            </h1>
            <p className="text-sm text-gray-500">Supplier A</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className=" p-4 rounded-lg border border-gray-200">
              <h3 className="text-sm font-medium text-gray-700">Total Leads</h3>
              <p className="text-2xl  text-purple-600 mt-1">68%</p>
            </div>

            <div className=" p-4 rounded-lg border border-gray-200">
              <h3 className="text-sm font-medium text-gray-700">
                Leads-Qoutes
              </h3>
              <p className="text-2xl  text-purple-600 mt-1">73%</p>
            </div>

            <div className=" p-4 rounded-lg border border-gray-200">
              <h3 className="text-sm font-medium text-gray-700">
                Qoutes-Score
              </h3>
              <p className="text-2xl  text-purple-600 mt-1">82%</p>
            </div>
          </div>

          <div className="mt-6  rounded-lg overflow-hidden">
            <table className="w-full bg-white">
              <thead className="bg-gray-100 ">
                <tr>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Last Outcome
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Count
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                    Supplier
                  </th>
                </tr>
              </thead>

              <tbody>
                {[1, 2, 3, 4, 5].map((_, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors ">
                    <td className="py-3 px-4 text-gray-700">
                      Customer Not Interested
                    </td>
                    <td className="py-3 px-4 text-gray-700">14</td>
                    <td className="py-3 px-4 text-gray-700">100%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className=" ">
          <div className="bg-white rounded-xl  p-4 border border-gray-200">
            <div className="mb-6 flex gap-4 items-center">
              <h1 className="text-xl font-semibold text-gray-800">
                Leads Details
              </h1>
              <p className="text-sm text-gray-500">Supplier B</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className=" p-4 rounded-lg border border-gray-200">
                <h3 className="text-sm font-medium text-gray-700">
                  Total Leads
                </h3>
                <p className="text-2xl  text-purple-600 mt-1">68%</p>
              </div>

              <div className=" p-4 rounded-lg border border-gray-200">
                <h3 className="text-sm font-medium text-gray-700">
                  leads-qoutes
                </h3>
                <p className="text-2xl  text-purple-600 mt-1">73%</p>
              </div>

              <div className=" p-4 rounded-lg border border-gray-200">
                <h3 className="text-sm font-medium text-gray-700">
                  Qoutes- Score
                </h3>
                <p className="text-2xl  text-purple-600 mt-1">82%</p>
              </div>
            </div>

            <div className="mt-6  rounded-lg overflow-hidden">
              <table className="w-full bg-white">
                <thead className="bg-gray-100 ">
                  <tr>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Last Outcome
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Count
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                      Supplier
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[1, 2, 3, 4, 5].map((_, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-gray-50 transition-colors "
                    >
                      <td className="py-3 px-4 text-gray-700">
                        Customer Not Interested
                      </td>
                      <td className="py-3 px-4 text-gray-700">14</td>
                      <td className="py-3 px-4 text-gray-700">100%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
