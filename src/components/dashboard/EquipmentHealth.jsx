const alerts = [
  {
    title: "Conveyor belt motor failure",
    impact: "Halts entire packaging process",
    priority: "High",
    raisedBy: "John Smith",
    color: "red",
    icon: "❗",
  },
  {
    title: "Main drive motor overheating",
    impact: "Product blending stopped",
    priority: "High",
    raisedBy: "Ayesha Khan",
    color: "red",
    icon: "❗",
  },
  {
    title: "Inconsistent quality control readings",
    impact: "Inconsistent quality control readings",
    priority: "Medium",
    raisedBy: "Priya Desai",
    color: "yellow",
    icon: "⏱️",
  },
];

const EquipmentHealth = () => {
  return (
    <div className="bg-white border border-[#D9E1EC] rounded-[14px] p-4 w-[17rem] max-w-full min-h-[300px]">
      <p className="text-[#1D2939] font-semibold text-base mb-4">Notifications</p>

      <div className="flex flex-col gap-3 overflow-y-auto max-h-[450px] pr-1">
        {alerts.map((alert, idx) => (
          <div
            key={idx}
            className={`rounded-lg p-3 text-sm ${
              alert.color === "red"
                ? "bg-red-50 border-l-4 border-red-400"
                : "bg-yellow-50 border-l-4 border-yellow-400"
            }`}
          >
            <div className="flex items-start gap-2">
              <div className="text-xl">{alert.icon}</div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800 leading-tight">
                  {alert.title}
                </p>
                <p className="text-xs text-gray-600 mb-2">
                  Impact: {alert.impact}
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span
                    className={`px-2 py-1 rounded-full font-medium ${
                      alert.priority === "High"
                        ? "bg-red-200 text-red-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    Priority: {alert.priority}
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                    Raised By: {alert.raisedBy}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentHealth;
