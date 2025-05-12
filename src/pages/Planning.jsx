import { Dialog } from "@headlessui/react";
import { useState } from "react";
import NotificationsPanel from "../components/planning/NotificationsPanel";
import PlannedWorkOrders from "../components/planning/PlannedWorkOrders";
import UnplannedWorkOrders from "../components/planning/UnplannedWorkOrders";
import { useGetWorkOrdersQuery } from "../services/workOrderApi";

const Planning = () => {
  const { data = [], isLoading, error } = useGetWorkOrdersQuery();
  const [formType, setFormType] = useState(null);
  const [formData, setFormData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const planned = data.filter((w) => w.type === "planned");
  const unplanned = data.filter((w) => w.type === "unplanned");

  console.log(planned)

  const handleSubmit = () => {
    window.dispatchEvent(new CustomEvent("form-submitted", { detail: { formType, formData } }));
    setShowModal(false);
    setFormData({});
    setFormType(null);
  };

  return (
    <div className="p-4 min-h-screen flex gap-4 relative">
      {/* Modal Form */}
      <Dialog open={showModal} onClose={() => setShowModal(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
        <Dialog.Panel className="bg-white p-6 rounded-lg w-full max-w-md">
          <Dialog.Title className="text-lg font-semibold mb-4">Add {formType}</Dialog.Title>
          {formType === "Notification" && (
            <>
              <input type="text" placeholder="Title" className="w-full border p-2 rounded-md mb-2 text-sm" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
              <input type="text" placeholder="Line" className="w-full border p-2 rounded-md mb-4 text-sm" onChange={(e) => setFormData({ ...formData, line: e.target.value })} />
            </>
          )}
          {formType?.includes("Work Order") && (
            <>
              <input type="text" placeholder="Title" className="w-full border p-2 rounded-md mb-2 text-sm" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
              <input type="text" placeholder="Equipment" className="w-full border p-2 rounded-md mb-2 text-sm" onChange={(e) => setFormData({ ...formData, equipment: e.target.value })} />
              <input type="text" placeholder="Start Date" className="w-full border p-2 rounded-md mb-2 text-sm" onChange={(e) => setFormData({ ...formData, start_date: e.target.value })} />
              <input type="text" placeholder="End Date" className="w-full border p-2 rounded-md mb-4 text-sm" onChange={(e) => setFormData({ ...formData, end_date: e.target.value })} />
            </>
          )}
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm" onClick={handleSubmit}>Submit</button>
          </div>
        </Dialog.Panel>
      </Dialog>

      <div className="w-[26rem] flex-shrink-0">
        <NotificationsPanel onAdd={() => { setFormType("Notification"); setShowModal(true); }} />
      </div>

      <div className="flex flex-col flex-1 gap-4">
        <UnplannedWorkOrders onAdd={() => { setFormType("Unplanned Work Order"); setShowModal(true); }} externalData={unplanned} />
        <PlannedWorkOrders onAdd={() => { setFormType("Planned Work Order"); setShowModal(true); }} externalData={planned} />
      </div>
    </div>
  );
};

export default Planning;
