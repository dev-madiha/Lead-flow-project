"use client";

import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function SuppliersOverviewChart({ data }: { data: any[] }) {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Suppliers Overview</h2>

      <div className="w-full h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 20, bottom: 10, left: 0 }}
          >
            {/* LIGHT GREY GRID */}
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />

            {/* X LABELS */}
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />

            {/* Y NUMBERS */}
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />

            <Tooltip />
            <Legend
              verticalAlign="top"
              align="center"
              wrapperStyle={{ paddingBottom: 20 }}
            />

            {/* PURPLE BAR */}
            <Bar
              dataKey="leads"
              barSize={26}
              fill="#9D7BFF"
              radius={[4, 4, 0, 0]}
              name="Total Leads"
            />

            {/* RED LINE */}
            <Line
              type="monotone"
              dataKey="effectiveness"
              stroke="#FF6A6A"
              strokeWidth={3}
              dot={{ r: 4, fill: "#FF6A6A" }}
              name="Supplier Effectiveness"
            />

            {/* ORANGE LINE */}
            <Line
              type="monotone"
              dataKey="quotes"
              stroke="#FFA928"
              strokeWidth={3}
              dot={{ r: 4, fill: "#FFA928" }}
              name="Supplier Quotes"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
