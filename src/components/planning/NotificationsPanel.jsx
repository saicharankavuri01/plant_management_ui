import { PlusIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const NotificationsPanel = ({ onAdd }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([
    { title: "Conveyor belt failure", line: "CA-CA1 (Line 1)" },
  ]);

  useEffect(() => {
    const handleSubmit = (e) => {
      if (e.detail.formType === "Notification") {
        setData((prev) => [...prev, e.detail.formData]);
      }
    };
    window.addEventListener("form-submitted", handleSubmit);
    return () => window.removeEventListener("form-submitted", handleSubmit);
  }, []);

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl border p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <button onClick={onAdd} className="p-1 rounded-full hover:bg-gray-200">
          <PlusIcon className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      <input
        type="text"
        placeholder="Search notifications..."
        className="w-full border p-2 rounded-md mb-3 text-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="bg-red-50 border-l-4 border-red-400 p-3 rounded-lg text-sm"
          >
            <p className="font-semibold text-gray-800">{item.title}</p>
            <p className="text-xs text-gray-500">{item.line}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPanel;
