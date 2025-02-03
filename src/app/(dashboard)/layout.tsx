import NavbarForDashboard from "./_component/Navbar/Navbar";

const dashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavbarForDashboard />
      {children}
    </div>
  );
};

export default dashBoardLayout;
