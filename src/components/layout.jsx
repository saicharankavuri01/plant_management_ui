import PropTypes from "prop-types";
import { Toaster } from "react-hot-toast";
import "../App.css";
import Sidebar from "./sidebar";

export const metadata = {
  title: "Flexday | Agents AI",
  description: "Flexday AI agents to streamline workflows",
};

const handleGlobalSearch = (term) => {
  console.log("Global search submitted:", term);
};

export default function RootLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 min-h-screen h-auto bg-chat-gradient transition-all duration-300 ease-in-out">

        <div className="p-6">{children}</div>

        <Toaster position="top-center" reverseOrder={false} />
      </main>
    </div>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
