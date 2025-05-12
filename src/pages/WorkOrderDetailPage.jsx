// src/pages/WorkOrderDetailPage.jsx
import { useParams } from "react-router-dom";
import { useGetWorkOrdersQuery } from "../services/workOrderApi";

const WorkOrderDetailPage = () => {
  const { id } = useParams();
  const { data = [] } = useGetWorkOrdersQuery();
  const workOrder = data.find((w) => w.work_order_id === id);

  if (!workOrder) return <p>Work order not found.</p>;

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-xl font-semibold mb-4">
        Work Order #{workOrder.work_order_id}
      </h1>

      <div className="bg-white rounded-lg border p-4 space-y-3">
        <p><strong>Description:</strong> {workOrder.description}</p>
        <p><strong>Equipment:</strong> {workOrder.equipment}</p>
        <p><strong>Priority:</strong> {workOrder.priority}</p>
        <p><strong>Status:</strong> {workOrder.status}</p>
        <p><strong>Assigned To:</strong> {workOrder.assigned_to}</p>
        <p><strong>Estimated Cost:</strong> ${workOrder.estimated_cost}</p>
        <p><strong>Estimated Time:</strong> {workOrder.estimated_time_hours}h</p>
        {workOrder.steps_to_complete && (
          <p><strong>Steps:</strong> {workOrder.steps_to_complete}</p>
        )}
      </div>
    </div>
  );
};

export default WorkOrderDetailPage;
