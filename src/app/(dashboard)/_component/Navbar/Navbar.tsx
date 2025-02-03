"use client";

import Container from "@/component/shared/Container";
import Link from "next/link";

const navItem = [
  { link: "/", label: "Home" },
  { link: "/", label: "All Post" },
];

const NavbarForDashboard = () => {
  return (
    <header className="bg-white shadow-md h-[70px]">
      <Container>
        <nav className="flex justify-between items-center pt-5 h-full">
          <div>
            <h1>BugBytes</h1>
          </div>
          <ul className="flex gap-5">
            {navItem.map((item) => (
              <li key={item.link}>
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default NavbarForDashboard;
