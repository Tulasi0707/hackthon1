import React, { useState } from "react";

const App = () => {
  const [selectedSection, setSelectedSection] = useState("Dashboard");

  const user = {
    name: "Tanujeswari",
    username: "2100030064",
    email: "2100030064@kluniversity.in",
    phone: "9492430611",
    address: "Vijayawada",
  };

  const notices = [
    "Blood Donation Day",
    "Reunions 2016 Batch",
    "Past Final Reunions",
    "Russian Language",
    "Second Semester Exam",
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 space-y-3">
        {[
          "Dashboard",
          "Student",
          "Teacher",
          "Academic",
          "Attendance",
          "Exam Schedule",
          "Marks",
          "Messages",
          "Media",
          "Online Exam",
          "Chat",
          "Books",
        ].map((item) => (
          <button
            key={item}
            onClick={() => setSelectedSection(item)}
            className={`block w-full text-left px-3 py-2 rounded ${
              selectedSection === item ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            {item}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Top Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded">
            Teachers
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Books
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Events
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded">
            Calendar
          </button>
        </div>

        {/* Profile Card */}
        <div className="bg-white p-6 rounded-2xl shadow mb-6">
          <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Address:</strong> {user.address}
          </p>
        </div>

        {/* Notices Card */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-3">Notices</h3>
          <ul className="list-disc ml-5 space-y-1">
            {notices.map((notice, index) => (
              <li key={index}>{notice}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default App;
