import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = (props) => {
  const { children, className } = props;

  return (
    <div
      className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full`, className)}
    >
      {children}
    </div>
  );
};

export default Box;
