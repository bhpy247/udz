"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import EnquiryModal from "./EnquiryModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Stays", href: "/stays" },
  { name: "Hotels", href: "/hotels" },
  { name: "Explore", href: "/places-to-visit" },
  { name: "Itineraries", href: "/itineraries" },
  { name: "Experiences", href: "/experiences" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F4ED]/95 backdrop-blur-md shadow-sm border-b border-[#E9DFCF] py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#252820] uppercase group-hover:text-[#B56B4B] transition-colors">
                Udaipur Unfolded
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#777C61] uppercase font-sans -mt-1 hidden sm:block">
                Stay closer. Explore deeper.
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors tracking-wide relative py-1 ${
                      isActive
                        ? "text-[#B56B4B] font-semibold"
                        : "text-[#252820] hover:text-[#B56B4B]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B56B4B] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Enquire Now Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={() => setIsEnquiryModalOpen(true)}
                className="inline-flex items-center space-x-2 bg-[#B56B4B] hover:bg-[#9E593A] text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-none shadow-sm transition-all duration-200 tracking-wider uppercase active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire Now</span>
              </button>
            </div>

            {/* Mobile Hamburger Trigger */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={() => setIsEnquiryModalOpen(true)}
                className="bg-[#B56B4B] text-white p-2 rounded-none sm:hidden"
                title="Enquire Now"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-[#252820] hover:text-[#B56B4B] transition-colors"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-[#F7F4ED] shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#E9DFCF]">
              <div>
                <span className="font-serif text-lg font-bold text-[#252820] uppercase tracking-wider">
                  Udaipur Unfolded
                </span>
                <p className="text-[11px] text-[#777C61] tracking-widest uppercase">
                  Stay closer. Explore deeper.
                </p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#252820] hover:text-[#B56B4B]"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-lg font-serif tracking-wide py-2 border-b border-[#E9DFCF]/50 flex items-center justify-between ${
                      isActive ? "text-[#B56B4B] font-semibold" : "text-[#252820]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#777C61] font-sans">→</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#E9DFCF] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsEnquiryModalOpen(true);
              }}
              className="w-full inline-flex items-center justify-center space-x-2 bg-[#B56B4B] hover:bg-[#9E593A] text-white py-3 font-medium uppercase text-xs tracking-widest"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </button>
            <p className="text-[11px] text-center text-[#777C61]">
              Homestay near Ambamata Temple, Udaipur
            </p>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </>
  );
}
