import Sidebar from "../_component/sidebar/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-t from-white/10 via-amber-200/5 to-fuchsia-500/5 min-h-screen">
      <div className="w-full max-w-[1200px] mx-auto px-[20px]">
        <div>
          <Sidebar />
          <hr className="mt-5" />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
