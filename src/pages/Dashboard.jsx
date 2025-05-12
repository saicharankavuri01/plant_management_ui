import EquipmentAnalytics from "../components/dashboard/EquipmentAnalytics";
import EquipmentHealth from "../components/dashboard/EquipmentHealth";
import WorkOrderList from "../components/dashboard/WorkOrderList";
import PageContainer from "../components/pageContainer";

const Dashboard = () => {
  return (
    <PageContainer>
      <div className="w-full mx-auto px-2">
        <div className="pt-2 space-y-8">
          <h1 className="text-2xl font-semibold text-[#121F3F]">
            Enterprise Asset Management Home
          </h1>

          <EquipmentAnalytics />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-6">
            <EquipmentHealth />
            <WorkOrderList />
          </div>
        </div>
      </div>
    </PageContainer>

  );
};

export default Dashboard;
