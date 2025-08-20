"use client";

import React, { useState } from "react";
import { Menu, X, Search, Zap, Globe, Cpu, Rocket } from "lucide-react";
import logo from "@/assets/techghor.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "../Shared/Container";

const routes = [
  { name: "Home", path: "/" },
  { name: "Web Dev", path: "/" },
  { name: "AI/ML", path: "/" },
  { name: "DevsOps", path: "/" },
  { name: "Tech News", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <Container>
        <div className="relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo with glow effect */}
            <div className="flex items-center group gap-10 cursor-pointer">
              <div>
                <div>
                  {/* Animated logo */}
                  <Link href="/">
                    <div className="-ml-3">
                      <Image
                        src={logo}
                        alt="TechGhor Logo"
                        width={150}
                        height={110}
                        className="w-[180px]"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="flex items-center gap-10">
                  {routes.map((route) => (
                    <Link
                      key={route.name}
                      href={route.path}
                      className="text-gray-900 hover:text-[#008388]  font-[500]  tracking-wider  text-[18px]  transition-colors duration-300"
                    >
                      {route.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-gray-200 rounded  h-[35px] px-4 focus:outline-none focus:ring-1 focus:ring-[#008388] transition duration-200"
                />
                <Search className="absolute right-3 top-2 size-5 text-gray-400" />
              </div>
              <Button className="bg-gradient-to-r from-teal-500 to-teal-700 text-md rounded h-[35px] w-[90px]">
                Login
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 relative z-10" />
                ) : (
                  <Menu className="h-6 w-6 relative z-10" />
                )}
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"
        }`}
      >
        <div className="bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 mx-4 mt-2 rounded-2xl">
          <div className="px-6 pt-6 pb-8 space-y-4">
            <a
              href="#"
              className="group block p-4 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 transition-all duration-300"
            >
              <div className="text-white font-medium flex items-center space-x-3">
                <span>Home</span>
              </div>
            </a>

            <div className="space-y-3">
              <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider px-4">
                Services
              </div>
              <div className="space-y-2 pl-4">
                <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 transition-all duration-300">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">Web Development</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">AI Solutions</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300">
                  <Rocket className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300">Cloud Services</span>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="group block p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300"
            >
              <div className="text-white font-medium">Portfolio</div>
            </a>

            <a
              href="#"
              className="group block p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300"
            >
              <div className="text-white font-medium">About</div>
            </a>

            <a
              href="#"
              className="group block p-4 rounded-xl hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-red-500/10 transition-all duration-300"
            >
              <div className="text-white font-medium">Contact</div>
            </a>

            <div className="pt-4 border-t border-gray-700/50">
              <button className="w-full relative group px-6 py-4 rounded-xl overflow-hidden font-semibold text-white">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600"></div>
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Let&apos;s Build Together</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
