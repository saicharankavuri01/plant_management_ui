import React, { useState } from "react";

const workOrders = [
  {
    id: "WO-12349",
    equipmentId: "EQ-2054",
    funcLocId: "FAC-125",
    priority: "High",
    description: "Fire extinguisher check",
    status: "Released",
    materials: "Available",
    labor: "Plumber - Susan",
    cost: "$1,925",
    time: "2h",
  },
  {
    id: "WO-12348",
    equipmentId: "EQ-2053",
    funcLocId: "PLB-05",
    priority: "Medium",
    description: "Faulty circuit breaker",
    status: "Planned",
    materials: "Available",
    labor: "Engineer - Daniel",
    cost: "$1,550",
    time: "3h",
  },
  {
    id: "WO-12347",
    equipmentId: "EQ-2052",
    funcLocId: "ELC-09",
    priority: "Medium",
    description: "Industrial printer",
    status: "Planned",
    materials: "Partial",
    labor: "Mechanic - Lisa",
    cost: "$2,110",
    time: "5h",
  },
  {
    id: "WO-12346",
    equipmentId: "EQ-2051",
    funcLocId: "MCH-22",
    priority: "High",
    description: "AC compressor failure",
    status: "Released",
    materials: "Partial",
    labor: "Welder - Tom",
    cost: "$1,180",
    time: "4h",
  },
  {
    id: "WO-12345",
    equipmentId: "EQ-2049",
    funcLocId: "MCH-27",
    priority: "Medium",
    description: "Camera installation",
    status: "Planned",
    materials: "Not Available",
    labor: "Fabricator - Steve",
    cost: "$915",
    time: "2.5h",
  },
  {
    id: "WO-12344",
    equipmentId: "EQ-2048",
    funcLocId: "FAC-125",
    priority: "High",
    description: "Monthly generator test",
    status: "In Progress",
    materials: "Available",
    labor: "Technician - Brian",
    cost: "$1,465",
    time: "3.5h",
  },
];

const getPriorityClass = (priority) => {
  switch (priority) {
    case "High":
      return "bg-red-50 text-red-600";
    case "Medium":
      return "bg-yellow-50 text-yellow-700";
    default:
      return "";
  }
};

const getStatusClass = (status) => {
  switch (status) {
    case "Released":
      return "bg-green-100 text-green-700";
    case "Planned":
      return "bg-yellow-100 text-yellow-800";
    case "In Progress":
      return "bg-orange-100 text-orange-700";
    default:
      return "";
  }
};

// Custom tooltip component
const CustomTooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && content && (
        <div className="absolute z-50 top-full left-0 mt-1 w-48 p-2 text-sm text-white bg-gray-800 rounded shadow-lg">
          {content}
        </div>
      )}
    </div>
  );
};

const WorkOrderList = () => {
  return (
    <div className="bg-white border border-[#D9E1EC] rounded-[14px] p-6 w-full">
      <p className="text-[#1D2939] font-semibold text-lg mb-4">
        Work Orders
      </p>
      <table className="w-full text-sm text-left text-gray-900 table-fixed">
        <thead className="text-xs text-gray-500 uppercase bg-gray-50">
          <tr>
            <th className="px-4 py-3 w-[10%]">Work Order ID</th>
            <th className="px-4 py-3 w-[10%]">Equipment ID</th>
            <th className="px-4 py-3 w-[10%]">Priority</th>
            <th className="px-4 py-3 w-[12%]">Description</th>
            <th className="px-4 py-3 w-[8%]">Status</th>
            <th className="px-4 py-3 w-[10%]">Materials</th>
            <th className="px-4 py-3 w-[10%]">Labor</th>
            <th className="px-4 py-3 w-[5%]">Est. Cost</th>
            <th className="px-4 py-3 w-[5%]">Est. Time</th>
          </tr>
        </thead>
        <tbody>
          {workOrders.map((wo, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3">{wo.id}</td>
              <td className="px-4 py-3">{wo.equipmentId}</td>
              <td className="px-4 py-3">
                <span
                  className={`text-xs font-medium px-2 py-1 rounded ${getPriorityClass(
                    wo.priority
                  )}`}
                >
                  {wo.priority}
                </span>
              </td>
              <td className="px-4 py-3">
                <CustomTooltip content={wo.description}>
                  <div className="truncate w-max max-w-[160px] hover">
                    {wo.description && wo.description.length > 10
                      ? `${wo.description.slice(0, 10)}...`
                      : wo.description || ''}
                  </div>
                </CustomTooltip>
              </td>
              <td className="px-4 py-3">
                <span
                  className={`text-xs font-medium px-2 py-1 rounded ${getStatusClass(
                    wo.status
                  )}`}
                >
                  {wo.status}
                </span>
              </td>
              <td className="px-4 py-3">{wo.materials}</td>
              <td className="px-4 py-3">{wo.labor}</td>
              <td className="px-4 py-3">{wo.cost}</td>
              <td className="px-4 py-3">{wo.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkOrderList;