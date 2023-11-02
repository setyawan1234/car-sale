import clsx from "clsx";
import "../styles/input.module.css";

function InputElement(props) {
  const {
    label,
    placeholder,
    type,
    id,
    register,
    name,
    error,
    width,
    autoComplete,
  } = props;
  const inputClasses = clsx(
    "border-2 rounded-md border-red-500 focus:outline-none focus:ring focus:border-sky-800 h-9 mb-5 p-2",
    !error && "border-slate-300"
  );
  const inputStyle = {
    width: width,
  };
  return (
    <div className="flex flex-col font-poppins">
      <label className="mb-2 text-black" htmlFor={id}>
        {label}
      </label>
      <input
        className={inputClasses}
        style={inputStyle}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        id={id}
        {...(register
          ? register(name, {
              valueAsNumber: type === "number" ? true : false,
            })
          : {})}
      />
      {error && (
        <label className="mt-[-20px] mb-5">
          <span className="text-sm font-light text-red-500">{error}</span>
        </label>
      )}
    </div>
  );
}

function InputPayment(props) {
  const { label, placeholder, type, id, register, name, error, value,disabled } = props;
  const inputClasses = clsx(
    "w-full rounded-md border border-gray-200 py-3 px-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500",
    !error && "border-slate-300"
  );
  return (
    <div className="flex flex-col font-poppins mt-5 mb-5">
      <label className="block text-sm font-medium" htmlFor={id}>
        {label}
      </label>
        <input
          className={inputClasses}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          id={id}
          value={value}
          {...(register
            ? register(name, {
                valueAsNumber: type === "number" ? true : false,
              })
            : {})}
        />
      {error && (
        <label>
          <span className="text-sm ml-1 font-light text-red-500">{error}</span>
        </label>
      )}
    </div>
  );
}

function SelectOption(props) {
  const {
    label,
    placeholder,
    onChange,
    value,
    options = [],
    register,
    name,
    error,
  } = props;

  const inputClasses = clsx(
    "w-full rounded-md border border-gray-200 px-4 py-3 px-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500",
    !error && "border-slate-300"
  );

  return (
    <div className="flex flex-col font-poppins mb-5">
      <label className="block text-sm font-medium">{label}</label>
        <select
          onChange={onChange}
          value={value}
          {...(register ? register(name) : {})}
          className={inputClasses}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      {error && (
        <label>
          <span className="text-sm font-light text-red-500">{error}</span>
        </label>
      )}
    </div>
  );
}

function InputTextAI(props) {
  const { placeholder, value, onChange, type } = props;
  return (
    <div className="flex flex-col">
      <input
        className="rounded-lg px-4 py-2 w-[80vw] text-black"
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export { InputElement, InputTextAI, InputPayment, SelectOption };
