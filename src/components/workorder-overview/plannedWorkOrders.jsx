import { useState } from "react";

const ITEMS_PER_PAGE = 5;

const PlannedWorkOrders = ({ data, onSelect }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = data.filter((item) =>
    item.description.toLowerCase().includes(search.toLowerCase())
  );
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="bg-white rounded-xl border p-4 flex-1">
      <h2 className="text-lg font-semibold mb-2">Planned Work Orders</h2>
      <input
        type="text"
        placeholder="Search..."
        className="w-full border p-2 rounded-md text-sm mb-3"
        value={search}
        onChange={(e) => {
          setPage(1);
          setSearch(e.target.value);
        }}
      />
      <div className="overflow-y-auto max-h-[400px] pr-1 space-y-3">
        {paginated.map((item, idx) => (
          <div
            key={idx}
            className="border p-3 rounded-md hover:bg-gray-50 cursor-pointer"
            onClick={() => onSelect(item)}
          >
            <p className="font-medium">{item.description}</p>
            <p className="text-xs text-gray-500">{item.equipment_id}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <span>
          Showing {(page - 1) * ITEMS_PER_PAGE + 1} to {Math.min(page * ITEMS_PER_PAGE, filtered.length)} of {filtered.length}
        </span>
        <div className="flex gap-2">
          {Array.from({ length: Math.ceil(filtered.length / ITEMS_PER_PAGE) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded-md border ${page === i + 1 ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlannedWorkOrders;
