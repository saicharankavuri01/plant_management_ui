import { useNavigate } from "react-router-dom";
import PlannedWorkOrders from "../components/workorder-overview/plannedWorkOrders";
import UnplannedWorkOrders from "../components/workorder-overview/unplannedWorkOrders";
import { useGetWorkOrdersQuery } from "../services/workOrderApi";

const WorkOrderOverview = () => {
  const { data = [], isLoading, error } = useGetWorkOrdersQuery();
  const navigate = useNavigate();

  const planned = data.filter((w) => w.type === "planned");
  const unplanned = data.filter((w) => w.type === "unplanned");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to fetch work orders</p>;

  const handleSelect = (workOrder) => {
    navigate(`/workorder-overview/${workOrder.work_order_id}`);
  };

  return (
    <div className="p-4 min-h-screen">
      <h1 className="text-2xl font-semibold text-[#121F3F] mb-4">
        Work Order Overview
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlannedWorkOrders data={planned} onSelect={handleSelect} />
        <UnplannedWorkOrders data={unplanned} onSelect={handleSelect} />
      </div>
    </div>
  );
};

export default WorkOrderOverview;
