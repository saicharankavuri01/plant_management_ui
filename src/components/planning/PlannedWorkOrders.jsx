import {
    Cog6ToothIcon,
    MapPinIcon,
    PlusIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
  
  const PlannedWorkOrders = ({ onAdd, externalData = [], onSelect }) => {
    const [search, setSearch] = useState("");
    const [localData, setLocalData] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      setLocalData(externalData);
    }, [externalData]);
  
    useEffect(() => {
      const handleSubmit = (e) => {
        if (e.detail.formType === "Planned Work Order") {
          setLocalData((prev) => [...prev, e.detail.formData]);
        }
      };
      window.addEventListener("form-submitted", handleSubmit);
      return () => window.removeEventListener("form-submitted", handleSubmit);
    }, []);
  
    const filtered = localData.filter((item) =>
      item.description?.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div className="bg-white rounded-xl border p-4 flex-1 max-h-[400px] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Planned Work Orders</h2>
          <button onClick={onAdd} className="p-1 rounded-full hover:bg-gray-200">
            <PlusIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>
  
        {/* Search */}
        <input
          type="text"
          placeholder="Search for planned workorders..."
          className="w-full border p-2 rounded-md mb-4 text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
  
        {/* Table Headers */}
        <div className="grid grid-cols-4 text-sm text-gray-600 font-medium mb-2 px-2">
          <div className="col-span-2">Work order details</div>
          <div>Priority</div>
          <div>Status</div>
        </div>
  
        {/* Scrollable List */}
        <div className="overflow-y-auto pr-1 space-y-4 flex-1">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 shadow-sm bg-white"
            >
              <div className="grid grid-cols-4 items-center text-sm">
                {/* Details */}
                <div className="col-span-2 space-y-1">
                  <p className="font-semibold text-gray-800">{item.description}</p>
                  <p className="text-xs text-gray-500">{item.work_order_id}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{item.funcLocId || "CA-CA1 (Line 1)"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Cog6ToothIcon className="h-4 w-4" />
                    <span>{item.equipment || "AFC-4097 (Z1 Area feed 1)"}</span>
                  </div>
                </div>
  
                {/* Priority */}
                <div>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-yellow-100 text-yellow-700">
                    {item.priority?.toUpperCase() || "MEDIUM"}
                  </span>
                </div>
  
                {/* Status */}
                <div>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-blue-100 text-blue-700">
                    {item.status || "Planned"}
                  </span>
                </div>
              </div>
  
              {/* Action Buttons */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() =>navigate(`/workorder-overview/${item.work_order_id}`)}
                  className="px-4 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded"
                >
                  View
                </button>
                <button className="px-4 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                  Assign
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PlannedWorkOrders;
  