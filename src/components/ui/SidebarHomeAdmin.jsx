import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarHomeAdmin = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", icon: "🏠", route: "/dashboard" },
    { name: "Kelola Pengguna", icon: "👥", route: "/kelola-pengguna" },
    { name: "Kelola Dokter", icon: "🩺", route: "/kelola-dokter" },
    { name: "Kelola Artikel", icon: "📄", route: "/kelola-artikel" },
    { name: "Kelola Video", icon: "🎥", route: "/kelola-video" },
    { name: "Kelola Pembayaran", icon: "💳", route: "/kelola-pembayaran" },
    {
      name: "Kelola Pendaftaran Dokter",
      icon: "📝",
      route: "/daftardokter-admin",
    },
  ];

  return (
    <div className="w-1/4 min-h-screen bg-gray-100 p-8">
      {/* Judul Sidebar */}
      <h1 className="text-2xl font-bold mb-10">ObesiFit</h1>
      <ul className="space-y-6">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center text-gray-700 hover:text-black cursor-pointer"
            onClick={() => navigate(item.route)}
          >
            <span className="mr-3 text-lg">{item.icon}</span>{" "}
            {/* Icon lebih besar */}
            <span className="text-lg font-semibold">{item.name}</span>{" "}
            {/* Teks lebih besar */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarHomeAdmin;
