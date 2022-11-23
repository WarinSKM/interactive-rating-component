import { FC, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-primary rounded-full w-full text-white tracking-widest py-3 text-sm md:text-base hover:bg-white hover:text-primary disabled:hover:bg-primary disabled:hover:text-white disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};
export { Button };
