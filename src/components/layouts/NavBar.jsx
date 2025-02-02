import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.div
      className="bg-[#f7f7f8] shadow-lg z-50 md:sticky md:top-0" // Menambahkan sticky di tampilan mobile (md: sticky akan dihilangkan di desktop)
      initial={{ opacity: 0, y: -50 }} // Mulai dengan opacity 0 dan posisi di atas
      animate={{ opacity: 1, y: 0 }} // Animasi ke opacity 1 dan posisi normal
      transition={{ duration: 0.6 }} // Durasi animasi 0.6 detik
    >
      <div className="flex items-center justify-between px-6 py-3 rounded-lg">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="#home">
            <div className="font-bold text-2xl md:text-4xl text-black">ObesiFit</div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-md text-black hover:text-green-500">
            Home
          </a>
          <a href="#tentang-kami" className="text-md text-black hover:text-green-500">
            Tentang Kami
          </a>
          <a href="#fitur" className="text-md text-black hover:text-green-500">
            Fitur
          </a>
          <a href="#testimoni" className="text-md text-black hover:text-green-500">
            Testimoni
          </a>
        </div>

        {/* Buttons Section */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="flex items-center justify-center w-[150px] h-[50px] bg-white rounded-full border-2 border-[#90f987] text-sm text-black hover:bg-[#90f987] hover:text-white transition-colors duration-200">
            Masuk
          </Link>
          <Link to="/register" className="flex items-center justify-center w-[150px] h-[50px] bg-green-500 rounded-full text-sm text-white hover:bg-green-600 transition-colors duration-200">
            Daftar
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black text-2xl focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="absolute top-16 left-0 w-full bg-white shadow-lg z-10 flex flex-col items-center space-y-4 py-4"
          initial={{ opacity: 0, y: -20 }} // Animasi muncul dari atas
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <a href="#home" className="text-md text-black hover:text-green-500" onClick={toggleMenu}>
            Home
          </a>
          <a href="#tentang-kami" className="text-md text-black hover:text-green-500" onClick={toggleMenu}>
            Tentang Kami
          </a>
          <a href="#fitur" className="text-md text-black hover:text-green-500" onClick={toggleMenu}>
            Fitur
          </a>
          <a href="#testimoni" className="text-md text-black hover:text-green-500" onClick={toggleMenu}>
            Testimoni
          </a>
          <Link
            to="/login"
            className="flex items-center justify-center w-[150px] h-[50px] bg-white rounded-full border-2 border-[#90f987] text-sm text-black hover:bg-[#90f987] hover:text-white transition-colors duration-200"
            onClick={toggleMenu}
          >
            Masuk
          </Link>
          <Link to="/register" className="flex items-center justify-center w-[150px] h-[50px] bg-green-500 rounded-full text-sm text-white hover:bg-green-600 transition-colors duration-200" onClick={toggleMenu}>
            Daftar
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
