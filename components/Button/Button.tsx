import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Button({ children, className, onClick }: ButtonProps) {
  return (
    <React.Fragment>
      <button
        className={`p-2 rounded-sm hover:ring-1 hover:ring-gray-300 ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </React.Fragment>
  );
}
