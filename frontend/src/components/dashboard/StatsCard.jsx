import { useNavigate } from "react-router-dom";

function StatsCard({ title, value, route }) {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition cursor-pointer"
    >

      <h2 className="text-gray-500 text-lg">
        {title}
      </h2>

      <h1 className="text-4xl font-bold text-slate-800 mt-4">
        {value}
      </h1>

    </div>
  );
}

export default StatsCard;