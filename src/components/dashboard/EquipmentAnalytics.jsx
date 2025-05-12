// File: src/components/analytics/EquipmentAnalytics.jsx

import { Cell, Pie, PieChart } from "recharts";

const dummyData = [
  {
    title: "Equipment Health Score",
    value: 87,
    subtitle: "Last 30 days",
    color: "#4F8BFF"
  },
  {
    title: "Critical Alerts",
    value: 3,
    subtitle: "Requiring immediate attention",
    color: "#F56565",
    icon: "⚠️"
  },
  {
    title: "Planned vs. Emergency",
    value: 78,
    secondaryValue: 22,
    subtitle: "Planned work increasing",
    color: "#F6AD55",
    secondaryColor: "#E53E3E"
  },
  {
    title: "Parts Inventory",
    value: 92,
    subtitle: "Critical parts availability",
    color: "#4F8BFF"
  }
];

const EquipmentAnalytics = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {dummyData.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-[#D9E1EC] rounded-[14px] p-6 w-full h-[120px] flex justify-between items-center"
        >
          <div>
            <p className={`text-sm font-medium ${index === 1 ? "text-red-600" : index === 2 ? "text-orange-500" : "text-blue-600"}`}>
              {item.title}
            </p>
            <p className="text-2xl font-semibold text-[#1A1A1A] mt-1">
              {index === 2 ? `${item.value}:${item.secondaryValue}` :
               index === 1 ? item.value : `${item.value}%`}
            </p>
            <p className="text-xs text-[#525A66] mt-1">{item.subtitle}</p>
          </div>

          {/* Chart/Icon */}
          <div className="flex-shrink-0">
            {index === 1 ? (
              <div className="w-10 h-10 bg-red-100 text-red-600 flex items-center justify-center rounded-lg text-lg">
                {item.icon}
              </div>
            ) : (
              <PieChart width={80} height={80}>
                <Pie
                  data={[{ value: index === 2 ? item.value : item.value }, { value: index === 2 ? item.secondaryValue : 100 - item.value }]}
                  innerRadius={18}
                  outerRadius={35}
                  paddingAngle={0}
                  dataKey="value"
                >
                  <Cell fill={item.color} />
                  <Cell fill={index === 2 ? item.secondaryColor : "#EDF2F7"} />
                </Pie>
              </PieChart>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EquipmentAnalytics;
