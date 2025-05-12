import { useState } from "react";

const equipmentDataMap = {
  "CNC-220": {
    name: "CNC-220",
    lastMaintenance: "12 Mar 2025",
    nextDue: "25 May 2025",
    location: "CA-CA1 (Line 1)",
    status: "online",
    alarms: [
      {
        type: "High Pressure Fault",
        severity: "high",
        message: "Triggered 2 hours ago | Needs immediate attention"
      },
      {
        type: "Filter Replacement Due",
        severity: "medium",
        message: "12 days overdue | Reduced efficiency"
      },
      {
        type: "Annual Inspection Due",
        severity: "low",
        message: "Scheduled for June 15, 2023"
      }
    ],
    billOfMaterials: [
      { part: "TRX-COMP-17", desc: "Compressor Unit", qty: 2, status: "In Stock" },
      { part: "TRX-COMP-18", desc: "Evaporator Coil", qty: 4, status: "Low Stock" },
      { part: "TRX-COMP-17", desc: "Air Filter", qty: 2, status: "Backordered" }
    ]
  },
  "CNC-221": {
    name: "CNC-221",
    lastMaintenance: "05 Feb 2025",
    nextDue: "20 May 2025",
    location: "TX-TX1 (Line 3)",
    status: "offline",
    alarms: [
      {
        type: "Coolant Leak",
        severity: "high",
        message: "Leak detected yesterday | Immediate fix required"
      }
    ],
    billOfMaterials: [
      { part: "CMP-3345", desc: "Coolant Pump", qty: 1, status: "In Stock" }
    ]
  },
  "TRX-110": {
    name: "TRX-110",
    lastMaintenance: "01 Jan 2025",
    nextDue: "01 Jul 2025",
    location: "NY-WST-7",
    status: "online",
    alarms: [],
    billOfMaterials: []
  },
  "MXR-900": {
    name: "MXR-900",
    lastMaintenance: "10 Mar 2025",
    nextDue: "10 Jun 2025",
    location: "FL-PLT-2",
    status: "maintenance",
    alarms: [
      {
        type: "Bearing Wear",
        severity: "medium",
        message: "Observed during last inspection"
      }
    ],
    billOfMaterials: [
      { part: "MX-BRG-12", desc: "Main Bearing", qty: 2, status: "In Stock" }
    ]
  }
};

const popularEquipments = Object.keys(equipmentDataMap);

const EquipmentDetailsCard = ({ data }) => (
  <div className="bg-white rounded-xl border p-4 space-y-4 h-full overflow-auto">
    <div className="flex justify-between items-center">
      <h2 className="font-semibold text-sm text-gray-800">Equipment Details</h2>
      <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-600">{data.status}</span>
    </div>
    <hr className="border-t border-gray-200" />
    <div className="text-sm">
      <p><strong>Name:</strong> {data.name}</p>
      <p>Last Maintenance: {data.lastMaintenance}</p>
      <p>Next Due: {data.nextDue}</p>
      <p>{data.location}</p>
    </div>
    <div>
      <h3 className="font-medium text-sm mb-1">Active Alarms</h3>
      {data.alarms.length === 0 && <p className="text-xs text-gray-500">No active alarms.</p>}
      {data.alarms.map((alarm, i) => (
        <div
          key={i}
          className={`text-xs p-2 rounded mb-1 ${
            alarm.severity === 'high' ? 'bg-red-100 text-red-700' :
            alarm.severity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
            'bg-blue-100 text-blue-700'
          }`}
        >
          <strong>{alarm.type}</strong><br />
          <span>{alarm.message}</span>
        </div>
      ))}
    </div>
    <div>
      <h3 className="font-medium text-sm mb-2">Bill of Materials</h3>
      {data.billOfMaterials.length === 0 ? (
        <p className="text-xs text-gray-500">No materials listed.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-left border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 border-b">Parts</th>
                <th className="px-3 py-2 border-b">Description</th>
                <th className="px-3 py-2 border-b">Qty</th>
                <th className="px-3 py-2 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.billOfMaterials.map((bom, i) => (
                <tr key={i} className="border-t">
                  <td className="px-3 py-2">{bom.part}</td>
                  <td className="px-3 py-2">{bom.desc}</td>
                  <td className="px-3 py-2">{bom.qty.toString().padStart(2, '0')}</td>
                  <td className={`px-3 py-2 font-medium ${
                    bom.status === 'In Stock' ? 'text-green-600' :
                    bom.status === 'Low Stock' ? 'text-red-500' :
                    'text-orange-500'
                  }`}>
                    {bom.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  </div>
);

const EquipmentOverviewCard = () => (
  <div className="bg-white rounded-xl border p-4 h-full">
    <p className="text-gray-500 text-sm">Overview component placeholder.</p>
  </div>
);

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi there! How can I make your work easier today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulated bot reply
    const botReply = { from: "bot", text: "Thanks! I'm looking that up..." };
    setTimeout(() => {
      setMessages((prev) => [...prev, botReply]);
    }, 800);
  };

  return (
    <div className="bg-white rounded-xl border p-4 h-full flex flex-col justify-between">
      <div className="space-y-2 overflow-y-auto h-[450px]">
        {messages.map((msg, i) => (
          <div key={i} className={`text-sm p-2 rounded-lg max-w-[75%] ${msg.from === "user" ? "bg-blue-100 self-end text-right" : "bg-gray-100 text-left"}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center border-t pt-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Here"
          className="flex-1 text-sm px-4 py-2 border rounded-l-md"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

const KnowledgeBase = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const handleSelect = (equipment) => {
    setSelected(equipment);
    setSearch(equipment);
  };

  const handleBack = () => {
    setSelected(null);
    setSearch("");
  };

  return (
    <div className="p-4 min-h-screen">
      <h1 className="text-2xl font-semibold text-[#121F3F] mb-4">Knowledge Base</h1>

      {!selected && (
        <>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search equipment..."
            className="w-full max-w-md border p-2 rounded-md text-sm mb-4"
          />

          <div className="mb-6">
            <h2 className="text-sm font-medium text-gray-600 mb-2">Popular Searches</h2>
            <div className="flex flex-wrap gap-2">
              {popularEquipments.map((equip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(equip)}
                  className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md"
                >
                  {equip}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {selected && (
        <>
          <div className="mb-4">
            <button
              onClick={handleBack}
              className="text-sm text-blue-600 hover:underline flex items-center gap-1"
            >
              ← Back to search
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[600px]">
            <EquipmentDetailsCard data={equipmentDataMap[selected]} />
            <ChatBot />
            <EquipmentOverviewCard />
          </div>
        </>
      )}
    </div>
  );
};

export default KnowledgeBase;
