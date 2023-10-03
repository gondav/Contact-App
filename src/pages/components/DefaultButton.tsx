import { FormEvent } from "react";

interface DefaultButtonProps {
  iconSrc?: string;
  label?: string;
  className?: string;
  onClick?: () => void;
}

const DefaultButton = ({
  iconSrc = "",
  label = "",
  className = "btn-primary",
  onClick,
}: DefaultButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} ${
        !label && iconSrc ? "w-10" : "px-4 "
      } h-10 rounded-lg `}
    >
      <div className=" flex items-center justify-center">
        {iconSrc && (
          <img src={iconSrc} alt={label} className={` ${label && "mr-3"}`} />
        )}
        {label && <span className="text-sm text-white">{label}</span>}
      </div>
    </button>
  );
};

export default DefaultButton;
