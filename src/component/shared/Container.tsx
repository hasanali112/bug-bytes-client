const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-[20px]">{children}</div>
  );
};

export default Container;
