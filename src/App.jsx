import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../src/components/layout";
import Dashboard from "./pages/Dashboard";
import InventoryOverview from "./pages/InventoryOverview";
import KnowledgeBase from "./pages/KnowledgeBase";
import Planning from "./pages/Planning";
import WorkOrderDetailPage from "./pages/WorkOrderDetailPage";
import WorkOrderOverview from "./pages/WorkOrderOverview";

const RootWithSidebar = () => (
  <Layout>
    <Outlet />
  </Layout>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootWithSidebar />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "/planning", element: <Planning /> },
      { path: "/knowledge-base", element: <KnowledgeBase />},
      { path: "/workorder-overview", element: <WorkOrderOverview />},
      { path:"/workorder-overview/:id", element:<WorkOrderDetailPage />},
      { path:"/inventory-overview", element:<InventoryOverview/>},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
