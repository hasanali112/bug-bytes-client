import Image from "next/image";
import SidebarOption from "./SidebarOption";
import { userSideBar } from "./Constant";

const Sidebar = () => {
  return (
    <div>
      <div className="">
        <div className="relative w-[280px] h-[380px] overflow-hidden rounded-lg bg-blue-950">
          {/* Main image container */}
          <div className="relative h-full w-full">
            {/* Profile image */}
            <Image
              src="https://heroui.com/images/hero-card.jpeg"
              alt="Profile"
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 h-16 flex"></div>

            {/* Details button */}
            <div className="absolute bottom-0  bg-white/10 w-full h-[60px] backdrop-blur-md flex justify-center items-center">
              <h1 className="text-2xl font-semibold text-center">User Name</h1>
            </div>
          </div>
        </div>
      </div>
      {/* sidebarOption */}
      <div>
        <SidebarOption links={userSideBar} />
      </div>
    </div>
  );
};

export default Sidebar;
