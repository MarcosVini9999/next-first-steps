import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}

export function Button({ children, className, onClick, disabled }: ButtonProps) {
  return (
    <React.Fragment>
      <button
        className={`p-2 rounded-sm hover:ring-1 hover:ring-gray-300 ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </React.Fragment>
  );
}
