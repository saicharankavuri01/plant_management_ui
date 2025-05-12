import {
    Cog6ToothIcon,
    MapPinIcon
} from "@heroicons/react/24/outline";
import { useState } from "react";
  
  const ITEMS_PER_PAGE = 5;
  
  const UnplannedWorkOrders = ({ data, onSelect }) => {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
  
    const filtered = data.filter((item) =>
      item.description.toLowerCase().includes(search.toLowerCase())
    );
    const paginated = filtered.slice(
      (page - 1) * ITEMS_PER_PAGE,
      page * ITEMS_PER_PAGE
    );
  
    return (
      <div className="bg-white rounded-xl border p-4 flex-1">
        <h2 className="text-lg font-semibold mb-2">Unplanned Work Orders</h2>
        <div className="grid grid-cols-4 text-sm text-gray-600 font-medium mb-2 px-2">
          <div className="col-span-2">Work order details</div>
          <div>Priority</div>
          <div>Status</div>
        </div>
  
        <div className="space-y-4">
          {paginated.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelect(item)}
              className="border rounded-lg p-3 bg-white shadow-sm hover:bg-gray-50 cursor-pointer"
            >
              <div className="grid grid-cols-4 items-center text-sm">
                <div className="col-span-2 space-y-1">
                  <p className="font-semibold text-gray-800">
                    {item.description}
                  </p>
                  <p className="text-xs text-gray-500">{item.work_order_id}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{item.funcLocId || "CA-CA1 (Line 1)"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Cog6ToothIcon className="h-4 w-4" />
                    <span>{item.equipment}</span>
                  </div>
                </div>
  
                <div>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded bg-opacity-30 ${
                      item.priority === "High"
                        ? "bg-red-100 text-red-600"
                        : item.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-yellow-50 text-yellow-800"
                    }`}
                  >
                    {item.priority.toUpperCase()}
                  </span>
                </div>
                <div>
                  <span className="text-xs font-medium px-2 py-1 bg-orange-100 text-orange-700 rounded">
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <span>
            Showing {(page - 1) * ITEMS_PER_PAGE + 1} to{" "}
            {Math.min(page * ITEMS_PER_PAGE, filtered.length)} of{" "}
            {filtered.length}
          </span>
          <div className="flex gap-2">
            {Array.from({
              length: Math.ceil(filtered.length / ITEMS_PER_PAGE),
            }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1 rounded-md border ${
                  page === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default UnplannedWorkOrders;
  