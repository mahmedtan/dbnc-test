import clsx from "clsx";

interface IInputProps {
  placeholder: string;
  label: string;
  id: string;
  type?: "text" | "textarea" | "date";
}

const Input = ({ placeholder, type = "text", label, id }: IInputProps) => {
  if (type === "textarea")
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={id}>{label}</label>
        <textarea
          id={id}
          rows={5}
          className="w-full placeholder:text-white/50"
          placeholder={placeholder}
        />
      </div>
    );
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={clsx("w-full placeholder:text-white/50 relative", {
          "pl-10 py-[7.5px]": type === "date",
        })}
      />
    </div>
  );
};

export default Input;
