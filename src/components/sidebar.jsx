import {
  BookOpenIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  HomeIcon
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
// import { useAuth } from "react-oidc-context";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

const endpoints = [
  { title: "Home", icon: HomeIcon, endpoint: "/" },
  { title: "Knowledge Base", icon: BookOpenIcon, endpoint: "/knowledge-base" },
  { title: "Planning", icon: ClipboardDocumentListIcon, endpoint: "/planning" },
  { title: "Work Order Overview", icon: DocumentTextIcon, endpoint: "/workorder-overview" },
  { title: "Inventory Overview", icon: ClipboardDocumentCheckIcon, endpoint: "inventory-overview" },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  // const auth = useAuth();

  const footerOptions = [
    { title: "Settings", icon: Cog6ToothIcon, endpoint: "" },
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsMedium(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    // if (location.pathname === "/" && !(isMobile || isMedium)) {
    //   setIsCollapsed(false);
    // } else {
    //   setIsCollapsed(true);
    // }
    setIsCollapsed(true);
  }, [location.pathname, isMobile, isMedium]);
  

  const handleNavigation = async (endpoint) => {
    navigate(endpoint);
    if (isMobile || isMedium) {
      setIsCollapsed(true);
    }
  };

  return (
    <>
      {(isMobile || isMedium) && !isCollapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      <div
        className={`fixed h-full bg-[#121F3F] text-white transition-all duration-300 ease-in-out z-30 flex flex-col
        ${
          isMobile || isMedium
            ? isCollapsed
              ? "w-16"
              : "w-64"
            : isCollapsed
              ? "w-16"
              : "w-64"
        }`}
      >

        {/* Header */}
        <div className="flex items-center justify-between border-b py-4 mx-4 border-slate-100">
          {isCollapsed ? (
            <img
              src="flexday-logo.svg"
              alt="Collapsed Logo"
              className="h-8 w-8 object-contain"
            />
          ) : (
            <img
              src="/logo.svg"
              alt="Full Logo"
              width={115}
              height={28}
              className="object-contain"
            />
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="cursor-pointer p-1 rounded-full"
          >
            {isCollapsed ? (
              <ChevronRightIcon className="h-4 w-4" />
            ) : (
              <ChevronLeftIcon className="h-4 w-4" />
            )}
          </button>
        </div>


        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto">
        <ul className="m-4 flex flex-col gap-1 pb-4">
            {endpoints.map((ed, i) => (
              <li
                key={i}
                className={`flex items-center gap-2 text-sm ${
                  location.pathname === ed.endpoint
                    ? "bg-[#1e2f56] text-white"
                    : "text-white"
                } font-medium p-2 rounded-md cursor-pointer hover:bg-[#1A2A4A]`}                
              >
                <div
                  onClick={() => handleNavigation(ed.endpoint)}
                  className="flex items-center gap-2 w-full text-left cursor-pointer"
                >
                  <ed.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <span
                      className={`transition-opacity duration-300 ${
                        isCollapsed
                          ? "opacity-0 invisible"
                          : "opacity-100 visible"
                      }`}
                    >
                      {ed.title}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer section - fixed at bottom */}
        <div className="mt-auto">
          <ul className="p-4">
            {footerOptions.map((ed, i) => (
              <li
                key={i}
                className={`flex items-center text-sm gap-2 text-white font-medium p-2 rounded-md cursor-pointer hover:bg-[#1A2A4A]`}
              >
                <div
                  onClick={() => handleNavigation(ed.endpoint)}
                  className="flex items-center gap-2 w-full text-left cursor-pointer"
                >
                  <ed.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <span
                      className={`transition-opacity duration-300 ${
                        isCollapsed
                          ? "opacity-0 invisible"
                          : "opacity-100 visible"
                      }`}
                    >
                      {ed.title}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          {(
            <div className="flex items-center space-x-3 bg-[#0C2C7B] text-white p-4 cursor-pointer">
              <img
                src="/profile.png"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              {!isCollapsed && (
                <div>
                  <p className="text-sm font-medium truncate max-w-[150px] overflow-hidden text-ellipsis">
                    Hima Chebrolu
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div
        className={`${isMobile || isMedium ? "ml-16" : isCollapsed ? "ml-16" : "ml-64"} transition-all duration-300`}
      >
      </div>
    </>
  );
};

export default Sidebar;
