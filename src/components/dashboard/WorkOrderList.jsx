import React, { useState } from "react";
import { useGetWorkOrdersQuery } from "../../services/workOrderApi";

const getPriorityClass = (priority) => {
  switch (priority) {
    case "High":
      return "bg-red-50 text-red-600";
    case "Medium":
      return "bg-yellow-50 text-yellow-700";
    case "Low":
      return "bg-blue-50 text-blue-600";
    default:
      return "";
  }
};

const getStatusClass = (status) => {
  switch (status) {
    case "released":
      return "bg-green-100 text-green-700";
    case "planned":
      return "bg-yellow-100 text-yellow-800";
    case "inprogress":
      return "bg-orange-100 text-orange-700";
    default:
      return "";
  }
};

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
  const { data = [], isLoading, error } = useGetWorkOrdersQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentOrders = data.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to fetch work orders</p>;

  return (
    <div className="bg-white border border-[#D9E1EC] rounded-[14px] p-4 w-full flex flex-col min-h-[400px]">
  <p className="text-[#1D2939] font-semibold text-lg mb-4">Work Orders</p>

  <div className="flex-grow">
    <table className="w-full text-sm text-left text-gray-900 table-fixed">
      <thead className="text-xs text-gray-500 uppercase bg-gray-50">
        <tr>
          <th className="px-4 py-3 w-[10%]">Work Order ID</th>
          <th className="px-4 py-3 w-[10%]">Equipment Name</th>
          <th className="px-4 py-3 w-[10%]">Priority</th>
          <th className="px-4 py-3 w-[12%]">Description</th>
          <th className="px-4 py-3 w-[8%]">Status</th>
          <th className="px-4 py-3 w-[10%]">Materials</th>
          <th className="px-4 py-3 w-[10%]">Assigned To</th>
          <th className="px-4 py-3 w-[5%]">Est. Cost</th>
          <th className="px-4 py-3 w-[5%]">Est. Time</th>
        </tr>
      </thead>
      <tbody>
        {currentOrders.map((wo, idx) => (
          <tr key={idx} className="border-b hover:bg-gray-50">
            <td className="px-4 py-3">{wo.work_order_id}</td>
            <td className="px-4 py-3">
              <CustomTooltip content={wo.equipment}>
                <div className="truncate w-max max-w-[160px]">
                  {wo.equipment && wo.equipment.length > 10
                    ? `${wo.equipment.slice(0, 10)}...`
                    : wo.equipment || ""}
                </div>
              </CustomTooltip>
            </td>
            <td className="px-4 py-3">
              <span className={`text-xs font-medium px-2 py-1 rounded ${getPriorityClass(wo.priority)}`}>
                {wo.priority}
              </span>
            </td>
            <td className="px-4 py-3">
              <CustomTooltip content={wo.description}>
                <div className="truncate w-max max-w-[160px]">
                  {wo.description && wo.description.length > 10
                    ? `${wo.description.slice(0, 10)}...`
                    : wo.description || ""}
                </div>
              </CustomTooltip>
            </td>
            <td className="px-4 py-3">
              <span className={`text-xs font-medium px-2 py-1 rounded ${getStatusClass(wo.status)}`}>
                {wo.status}
              </span>
            </td>
            <td className="px-4 py-3">{wo.material_availability}</td>
            <td className="px-4 py-3">{wo.assigned_to}</td>
            <td className="px-4 py-3">${wo.estimated_cost}</td>
            <td className="px-4 py-3">{wo.estimated_time_hours}h</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Pagination controls pinned to bottom */}
  <div className="flex justify-end mt-2 gap-2">
    <button
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className="px-3 py-1 text-sm border rounded disabled:opacity-50"
    >
      Previous
    </button>
    <button
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="px-3 py-1 text-sm border rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
</div>

  );
};

export default WorkOrderList;
