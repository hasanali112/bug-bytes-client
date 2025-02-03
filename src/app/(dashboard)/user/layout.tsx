import Sidebar from "../_component/sidebar/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-[20px]">
      <div className="flex gap-4">
        <Sidebar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
