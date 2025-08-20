import Sidebar from "../_component/sidebar/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-br from-teal-500/10 via-cyan-400/5 to-orange-500/10 min-h-screen">
      <div className="w-full max-w-[1200px] mx-auto px-[20px]">
        <div>
          <Sidebar />
          <hr className="mt-5 border-gradient-to-r from-teal-300/30 to-orange-300/30" />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
