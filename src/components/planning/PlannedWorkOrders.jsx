import { PlusIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const PlannedWorkOrders = ({ onAdd, externalData = [] }) => {
  const [search, setSearch] = useState("");
  const [localData, setLocalData] = useState([]);

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
    <div className="bg-white rounded-xl border p-4 flex-1">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Planned Work Orders</h2>
        <button onClick={onAdd} className="p-1 rounded-full hover:bg-gray-200">
          <PlusIcon className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      <input
        type="text"
        placeholder="Search planned work..."
        className="w-full border p-2 rounded-md mb-3 text-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-y-auto max-h-[250px] pr-1 space-y-3">
        {filtered.map((item, idx) => (
          <div key={idx} className="border-b pb-2">
            <p className="font-medium">{item.description}</p>
            <p className="text-xs text-gray-500">{item.equipment_id}</p>
            <p className="text-xs text-gray-500">
              Cost: ${item.estimated_cost} | Time: {item.estimated_time_hours}h
            </p>
            <p className="text-xs text-gray-500 capitalize">Status: {item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlannedWorkOrders;
