import React from "react";

const Button = (props) => {
  const { text, size, variant } = props;

  const sizeBtn = () => {
    if (size === "lg") {
      return "text-xl px-6 py-3";
    } else {
      return "text-base px-4 py-2 ";
    }
  };

  const variantBtn = () => {
    if (variant === "primary") {
      return "bg-primary text-tertiary hover:bg-transparent hover:text-primary border-primary";
    } else if (variant === "primary-outline") {
      return "bg-tertiary text-primary hover:bg-primary hover:text-tertiary border-primary";
    } else if (variant === "secondary") {
      return "bg-transparent text-tertiary hover:bg-tertiary hover:text-primary border-tertiary";
    } else {
      return "bg-primary text-tertiary hover:bg-tertiary hover:text-tertiary border-primary";
    }
  };
  return (
    <a
      href="/"
      className={`${sizeBtn()} ${variantBtn()} tracking-wider font-bold 
      border-2 rounded-full transition-all`}
    >
      {text}
    </a>
  );
};

export default Button;
