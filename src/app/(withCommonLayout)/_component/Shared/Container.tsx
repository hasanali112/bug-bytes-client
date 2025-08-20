import { cn } from "@/lib/utils";

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: IContainerProps) => {
  return (
    <div className={cn("max-w-[1440px] px-[20px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
