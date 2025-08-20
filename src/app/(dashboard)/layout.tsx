import Navbar from "../(withCommonLayout)/_component/Navbar/Navbar";

const dashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default dashBoardLayout;
