import ButtonProps from "../models/ButtonProps";

const Button = ({ btnBgColor = "#4A96FF", onClick, children }: ButtonProps) => {
  return (
    <button
      className={`w-[100%] rounded-[8px] h-[43px] bg-[#4A96FF] text-[16px] mt-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
