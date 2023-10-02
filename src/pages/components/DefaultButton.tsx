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
      onClick={onClick}
      className={`${className} ${
        !label && iconSrc ? "h-10 w-10" : "px-4 py-[11px]"
      } rounded-lg`}
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
