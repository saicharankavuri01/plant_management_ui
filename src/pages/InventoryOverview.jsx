import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

const materialData = [
  { name: "Pressure Valve", part: "PV-2048-B", required: 5, available: 5, status: "Available" },
  { name: "Boiler Gasket", part: "BG-3042-A", required: 2, available: 0, status: "Backordered", expected: "28 Apr 2023" },
  { name: "Insulation Foam", part: "TV-2048-B", required: 1, available: 1, status: "Available" },
  { name: "Pipe Coupling", part: "PC-5521-D", required: 3, available: 3, status: "Available" },
];

const toolData = [
  { tool: "CNC Router", status: "Available" },
  { tool: "Power Drill", status: "In Use" },
  { tool: "3D Printer", status: "Available" },
  { tool: "Angle Grinder", status: "Available" },
];

const InventoryOverview = () => {
  return (
    <div className="p-6 min-h-screen bg-[#F7F8FA]">
      <h1 className="text-2xl font-semibold text-[#121F3F] mb-6">Inventory Overview</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Material Availability */}
        <div className="bg-white rounded-lg border shadow-sm p-4 w-full">
          <h2 className="text-base font-semibold text-gray-700 mb-4">Material Availability</h2>
          <table className="w-full text-sm border-collapse">
            <thead className="text-left text-gray-500 bg-gray-50 border-b">
              <tr>
                <th className="p-2">Material</th>
                <th className="p-2">Part No.</th>
                <th className="p-2">Required</th>
                <th className="p-2">Available</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {materialData.map((item, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.part}</td>
                  <td className="p-2">{item.required}</td>
                  <td className="p-2">{item.available}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        item.status === "Available"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Warning */}
          {materialData.some((m) => m.status === "Backordered") && (
            <div className="bg-yellow-100 text-yellow-800 text-sm mt-4 p-3 rounded flex items-start gap-2">
              <ExclamationTriangleIcon className="h-5 w-5 mt-0.5" />
              <span>
                Boiler Gasket (<strong>BG-3042-A</strong>) is backordered. Expected delivery:{" "}
                <strong>
                  {
                    materialData.find((item) => item.part === "BG-3042-A").expected
                  }
                </strong>
              </span>
            </div>
          )}
        </div>

        {/* Tools List */}
        <div className="bg-white rounded-lg border shadow-sm p-4 w-full">
          <h2 className="text-base font-semibold text-gray-700 mb-4">Tools List</h2>
          <table className="w-full text-sm border-collapse">
            <thead className="text-left text-gray-500 bg-gray-50 border-b">
              <tr>
                <th className="p-2">Tools</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {toolData.map((tool, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2">{tool.tool}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        tool.status === "Available"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {tool.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryOverview;
