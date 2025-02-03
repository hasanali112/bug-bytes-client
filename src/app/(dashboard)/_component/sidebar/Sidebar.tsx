import Image from "next/image";
import SidebarOption from "./SidebarOption";
import { userSideBar } from "./Constant";

const Sidebar = () => {
  return (
    <div className="flex gap-28 pt-10">
      <div className="flex gap-2 items-center">
        <Image
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="logo"
          width={100}
          height={100}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h1 className="text-xl font-semibold">Taposi</h1>
          <p className="text-gray-400">Writer</p>
        </div>
      </div>
      <div>
        <SidebarOption links={userSideBar} />
      </div>
    </div>
  );
};

export default Sidebar;
