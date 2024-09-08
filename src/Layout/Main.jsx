import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Parallax background */}
      <div
        className="relative flex-grow bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://i.ibb.co/d2zHbxS/fog-4436636-1280.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Navbar - Always visible */}
        <div className="relative z-20 text-white bg-transparent">
          <Navbar setSearchQuery={setSearchQuery} />
        </div>

        {/* Content area */}
        <div className="relative z-20 flex-grow">
          <Outlet context={{ searchQuery }} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
