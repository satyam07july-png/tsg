import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AnalyticsChart() {

  const data = [
    {
      month: "Jan",
      students: 400,
      revenue: 2400,
    },

    {
      month: "Feb",
      students: 600,
      revenue: 3500,
    },

    {
      month: "Mar",
      students: 800,
      revenue: 5000,
    },

    {
      month: "Apr",
      students: 1200,
      revenue: 7000,
    },

    {
      month: "May",
      students: 1500,
      revenue: 9200,
    },

    {
      month: "Jun",
      students: 1800,
      revenue: 12000,
    },
  ];

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm mt-12">

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Analytics Overview
          </h1>

          <p className="text-gray-500 mt-2">
            Student growth & revenue analytics
          </p>

        </div>

      </div>

      <div className="h-[400px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="students"
              stroke="#1e3a8a"
              strokeWidth={4}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#06b6d4"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default AnalyticsChart;