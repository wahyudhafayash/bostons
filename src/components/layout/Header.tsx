"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleServicesDropdown = () => setIsServicesOpen((prev) => !prev);
  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-transparent backdrop-blur-[5px]" : "bg-transparent"
      } py-6 px-16`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-3xl md:text-4xl">
          <Link href="/">Logo</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white font-bold text-md items-center gap-8">
          <Link
            href="/"
            className={
              isActive("/") ? "text-[#E55615]" : "hover:text-[#E55615]"
            }
          >
            Beranda
          </Link>

          {/* Dropdown Services */}
          <div className="relative">
            <button className="peer group flex items-center gap-1 text-white hover:text-[#E55615]">
              Layanan
              <IoIosArrowDown
                size={18}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible transition-all duration-300">
              <div className="w-64 bg-white rounded-lg shadow-xl border border-gray-100">
                {[
                  { title: "Portfolio Website", slug: "portfolio-website" },
                  { title: "Digital Marketing", slug: "digital-marketing" },
                ].map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block px-4 py-2 text-gray-700 hover:text-[#E55615]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/berita"
            className={
              isActive("/berita") ? "text-[#E55615]" : "hover:text-[#E55615]"
            }
          >
            Berita
          </Link>

          <Link href="/kontak" className="hover:text-[#E55615]">
            Kontak
          </Link>
          <Link
            href="/hubungi-kami"
            className="bg-[#E55615] px-6 py-2 rounded-md hover:text-[#E55615] hover:bg-white"
          >
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 w-full bg-white p-4 space-y-4 text-black">
          <Link
            href="/"
            className={
              isActive("/") ? "text-[#E55615]" : "hover:text-[#E55615]"
            }
          >
            Beranda
          </Link>
          <button
            onClick={toggleServicesDropdown}
            className="w-full flex justify-between items-center hover:text-[#E55615]"
          >
            Layanan{" "}
            <IoIosArrowDown
              size={18}
              className={isServicesOpen ? "rotate-180" : ""}
            />
          </button>
          {isServicesOpen && (
            <div className="flex flex-col space-y-2 pt-2">
              {[
                { title: "Portfolio Website", slug: "portfolio-website" },
                { title: "Digital Marketing", slug: "digital-marketing" },
              ].map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block px-4 py-1 text-gray-700 hover:text-[#E55615]"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          )}
          <Link
            href="/berita"
            className={
              isActive("/berita") ? "text-[#E55615]" : "hover:text-[#E55615]"
            }
          >
            Berita
          </Link>

          <Link href="/kontak" className="hover:text-[#E55615]">
            Kontak
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
