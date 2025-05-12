import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import PlannedWorkOrders from "../components/workorder-overview/plannedWorkOrders";
import UnplannedWorkOrders from "../components/workorder-overview/unplannedWorkOrders";
import { useGetWorkOrdersQuery } from "../services/workOrderApi";

const WorkOrderOverview = () => {
  const { data = [], isLoading, error } = useGetWorkOrdersQuery();
  const [selected, setSelected] = useState(null);

  const planned = data.filter((w) => w.type === "planned");
  const unplanned = data.filter((w) => w.type === "unplanned");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to fetch work orders</p>;

  const handleDelete = () => {
    alert(`Deleted ${selected.work_order_id}`);
    setSelected(null);
  };

  return (
    <div className="p-4 min-h-screen">
      <h1 className="text-2xl font-semibold text-[#121F3F] mb-4">Work Order Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlannedWorkOrders data={planned} onSelect={setSelected} />
        <UnplannedWorkOrders data={unplanned} onSelect={setSelected} />
      </div>

      <Dialog
        open={!!selected}
        onClose={() => setSelected(null)}
        className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center"
      >
        <Dialog.Panel className="bg-white p-6 rounded-lg w-full max-w-xl relative">
          <button
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
          <h2 className="text-lg font-semibold mb-4">Work Order Details</h2>
          {selected && (
            <div className="space-y-2 text-sm">
              <p><strong>ID:</strong> {selected.work_order_id}</p>
              <p><strong>Description:</strong> {selected.description}</p>
              <p><strong>Equipment ID:</strong> {selected.equipment_id}</p>
              <p><strong>Priority:</strong> {selected.priority}</p>
              <p><strong>Status:</strong> {selected.status}</p>
              <p><strong>Materials:</strong> {selected.material_availability}</p>
              <p><strong>Assigned To:</strong> {selected.assigned_to}</p>
              <p><strong>Estimated Cost:</strong> ${selected.estimated_cost}</p>
              <p><strong>Estimated Time:</strong> {selected.estimated_time_hours}h</p>
              {selected.steps_to_complete && (
                <p><strong>Steps:</strong> {selected.steps_to_complete}</p>
              )}
              <button
                onClick={handleDelete}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          )}
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default WorkOrderOverview;
