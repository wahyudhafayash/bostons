import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white py-10 mt-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Grid Kiri */}
        <div className="flex flex-col items-center md:items-start">
          {/* <img src="/logo.png" alt="Logo" className="w-20" /> */}
          <h1>Logo</h1>
          <p className="text-md mt-4">
            Saya sangat senang hati menerima project untuk membantu
            mengembangkan usaha Anda. Silahkan hubungi saya!
          </p>
        </div>

        {/* Grid Tengah */}
        <div className="text-start">
          <h2 className="text-lg font-semibold">Menu Penting</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Grid Kanan */}
        <div className="text-start">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p className="mt-2">Phone: +123 456 7890</p>
          <h2 className="text-lg font-semibold mt-6">Social Media</h2>
          <p className="mt-2">
            Instagram:{" "}
            <a href="#" className="hover:text-gray-400">
              @yourcompany
            </a>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-32 mx-32">
        <h1 className="cursor-default">&copy; 2025 Company Name</h1>
        <div className="flex gap-4">
          <h1 className="hover:text-[#E55615] cursor-pointer">
            Terms and Conditions
          </h1>
          <p className="cursor-default">|</p>
          <h1 className="hover:text-[#E55615] cursor-pointer">
            Privacy Policy
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
