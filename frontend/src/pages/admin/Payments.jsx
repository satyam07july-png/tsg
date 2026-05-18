import { saveAs } from "file-saver";
import jsPDF from "jspdf";

import autoTable from "jspdf-autotable";

import {
  FaMoneyBillWave,
  FaUsers,
  FaCheckCircle,
  FaClock,
  FaChartLine,
  FaArrowUp,
  FaArrowDown,
  FaCreditCard,
  FaUniversity,
  FaWallet,
  FaBolt,
  FaDownload,
} from "react-icons/fa";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";

function Payments() {

    const downloadReport = () => {

  const doc = new jsPDF();

  // TITLE
  doc.setFontSize(22);

  doc.text(

    "DIZITAL ADDA LMS - Payment Report",

    14,

    20

  );

  // SUBTITLE
  doc.setFontSize(12);

  doc.text(

    "Enterprise Payment Analytics Report",

    14,

    30

  );

  // TABLE
  autoTable(doc, {

    startY: 40,

    head: [[

      "Student",

      "Course",

      "Amount",

      "Status",

      "Date",

    ]],

    body: [

      [

        "Aman Sharma",

        "Full Stack Development",

        "₹12,999",

        "Success",

        "13 May 2026",

      ],

      [

        "Priya Verma",

        "Data Science & AI",

        "₹18,999",

        "Success",

        "13 May 2026",

      ],

      [

        "Rohit Kumar",

        "UI/UX Design",

        "₹8,999",

        "Pending",

        "12 May 2026",

      ],

    ],

  });

  // SAVE PDF
  doc.save("payment-report.pdf");

};

    const exportCSV = () => {

  const transactions = [

    {
      student: "Aman Sharma",
      course: "Full Stack Development",
      amount: "12999",
      status: "Success",
      date: "13 May 2026",
    },

    {
      student: "Priya Verma",
      course: "Data Science & AI",
      amount: "18999",
      status: "Success",
      date: "13 May 2026",
    },

    {
      student: "Rohit Kumar",
      course: "UI/UX Design",
      amount: "8999",
      status: "Pending",
      date: "12 May 2026",
    },

  ];

  const csvRows = [];

  const headers = [

    "Student",

    "Course",

    "Amount",

    "Status",

    "Date",

  ];

  csvRows.push(headers.join(","));

  for (const row of transactions) {

    const values = [

      row.student,

      row.course,

      row.amount,

      row.status,

      row.date,

    ];

    csvRows.push(values.join(","));

  }

  const csvData = new Blob(

    [csvRows.join("\n")],

    {
      type: "text/csv;charset=utf-8;",
    }

  );

  saveAs(csvData, "payment-report.csv");

};

  const revenueData = [

    { month: "Jan", revenue: 40000 },

    { month: "Feb", revenue: 65000 },

    { month: "Mar", revenue: 90000 },

    { month: "Apr", revenue: 120000 },

    { month: "May", revenue: 180000 },

    { month: "Jun", revenue: 240000 },

  ];

  const paymentMethods = [

    { name: "UPI", value: 58 },

    { name: "Cards", value: 28 },

    { name: "Net Banking", value: 14 },

  ];

  const COLORS = [

    "#06b6d4",

    "#8b5cf6",

    "#10b981",

  ];

  const weeklyRevenue = [

    { day: "Mon", amount: 12000 },

    { day: "Tue", amount: 18000 },

    { day: "Wed", amount: 14000 },

    { day: "Thu", amount: 24000 },

    { day: "Fri", amount: 32000 },

    { day: "Sat", amount: 42000 },

    { day: "Sun", amount: 28000 },

  ];

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white p-10 relative overflow-hidden">

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* HEADER */}
      <div className="relative z-10 flex justify-between items-center">

        <div>

          <h1 className="text-7xl font-black">

            Revenue & Payments 💳

          </h1>

          <p className="text-slate-400 text-xl mt-5 leading-9 max-w-4xl">

            Track LMS revenue growth, payment analytics,
            student purchases, transaction success rates,
            financial performance and real-time income insights.

          </p>

        </div>

        <div className="flex gap-5">

          <button
           onClick={exportCSV}
           className="bg-white/10 border border-white/10 px-6 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-white/20 transition"
        >

          <FaDownload />

          Export CSV

        </button>

          <button
          onClick={downloadReport}
          className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-2xl font-bold shadow-2xl"
        >

  Download Report

</button>

        </div>

      </div>

      {/* KPI SECTION */}
      <div className="grid grid-cols-4 gap-8 mt-14 relative z-10">

        {/* TOTAL REVENUE */}
        <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[35px] p-8 shadow-2xl">

          <div className="flex justify-between items-center">

            <FaMoneyBillWave className="text-5xl text-emerald-400" />

            <span className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">

              <FaArrowUp />

              +38%

            </span>

          </div>

          <h2 className="text-slate-400 text-lg mt-6">

            Total Revenue

          </h2>

          <h1 className="text-5xl font-black mt-4">

            ₹24.8L

          </h1>

          <p className="text-slate-400 mt-5 leading-7">

            Overall LMS income generated from
            all paid course enrollments.

          </p>

        </div>

        {/* TOTAL STUDENTS */}
        <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[35px] p-8 shadow-2xl">

          <div className="flex justify-between items-center">

            <FaUsers className="text-5xl text-cyan-400" />

            <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">

              <FaArrowUp />

              +22%

            </span>

          </div>

          <h2 className="text-slate-400 text-lg mt-6">

            Paid Students

          </h2>

          <h1 className="text-5xl font-black mt-4">

            12,480

          </h1>

          <p className="text-slate-400 mt-5 leading-7">

            Students successfully enrolled
            through paid courses.

          </p>

        </div>

        {/* SUCCESS RATE */}
        <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[35px] p-8 shadow-2xl">

          <div className="flex justify-between items-center">

            <FaCheckCircle className="text-5xl text-purple-400" />

            <span className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">

              <FaArrowUp />

              98%

            </span>

          </div>

          <h2 className="text-slate-400 text-lg mt-6">

            Payment Success

          </h2>

          <h1 className="text-5xl font-black mt-4">

            98.2%

          </h1>

          <p className="text-slate-400 mt-5 leading-7">

            Overall transaction success rate
            across all payment methods.

          </p>

        </div>

        {/* FAILED */}
        <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-400/20 backdrop-blur-2xl rounded-[35px] p-8 shadow-2xl">

          <div className="flex justify-between items-center">

            <FaClock className="text-5xl text-red-400" />

            <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">

              <FaArrowDown />

              -4%

            </span>

          </div>

          <h2 className="text-slate-300 text-lg mt-6">

            Failed Payments

          </h2>

          <h1 className="text-5xl font-black mt-4">

            18

          </h1>

          <p className="text-slate-300 mt-5 leading-7">

            Failed or incomplete payment
            attempts requiring attention.

          </p>

        </div>

      </div>

      {/* ANALYTICS */}
      <div className="grid grid-cols-3 gap-10 mt-14">

        {/* REVENUE GROWTH */}
        <div className="col-span-2 bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 shadow-2xl">

          <div className="flex justify-between items-center">

            <div>

              <h1 className="text-4xl font-black">

                Revenue Growth 📈

              </h1>

              <p className="text-slate-400 mt-3">

                Monthly financial performance overview.

              </p>

            </div>

            <FaChartLine className="text-5xl text-cyan-400" />

          </div>

          <div className="mt-10">

            <ResponsiveContainer width="100%" height={400}>

              <AreaChart data={revenueData}>

                <defs>

                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">

                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>

                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>

                  </linearGradient>

                </defs>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#06b6d4"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* PAYMENT METHODS */}
        <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 shadow-2xl">

          <div className="flex justify-between items-center">

            <div>

              <h1 className="text-4xl font-black">

                Payment Methods

              </h1>

              <p className="text-slate-400 mt-3">

                Preferred student payment modes.

              </p>

            </div>

            <FaWallet className="text-5xl text-purple-400" />

          </div>

          <div className="mt-10">

            <ResponsiveContainer width="100%" height={350}>

              <PieChart>

                <Pie
                  data={paymentMethods}
                  innerRadius={70}
                  outerRadius={120}
                  dataKey="value"
                  paddingAngle={5}
                >

                  {paymentMethods.map((entry, index) => (

                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index]}
                    />

                  ))}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

      {/* LOWER SECTION */}
      <div className="grid grid-cols-2 gap-10 mt-14">

        {/* WEEKLY ANALYTICS */}
        <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 shadow-2xl">

          <div className="flex justify-between items-center">

            <div>

              <h1 className="text-4xl font-black">

                Weekly Earnings ⚡

              </h1>

              <p className="text-slate-400 mt-3">

                Daily payment collection overview.

              </p>

            </div>

            <FaUniversity className="text-5xl text-cyan-400" />

          </div>

          <div className="mt-10">

            <ResponsiveContainer width="100%" height={350}>

              <BarChart data={weeklyRevenue}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="day" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="amount"
                  fill="#06b6d4"
                  radius={[10,10,0,0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* LIVE FEED */}
        <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 shadow-2xl">

          <div className="flex justify-between items-center">

            <div>

              <h1 className="text-4xl font-black">

                Live Transactions 🔥

              </h1>

              <p className="text-slate-400 mt-3">

                Real-time course purchases and enrollments.

              </p>

            </div>

            <FaBolt className="text-5xl text-yellow-400" />

          </div>

          <div className="space-y-6 mt-10">

            {[1,2,3,4,5].map((item) => (

              <div
                key={item}
                className="bg-black/20 border border-white/10 rounded-3xl p-5 flex justify-between items-center"
              >

                <div>

                  <h2 className="text-2xl font-bold">

                    Aman Sharma

                  </h2>

                  <p className="text-slate-400 mt-2">

                    Purchased Full Stack Development

                  </p>

                </div>

                <div className="text-right">

                  <p className="text-emerald-400 text-2xl font-black">

                    ₹12,999

                  </p>

                  <p className="text-slate-400 mt-2">

                    2 mins ago

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

}

export default Payments;