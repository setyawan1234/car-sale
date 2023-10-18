import clsx from "clsx";

function InputElement(props) {
  const { label, placeholder, type, id, register, name, error, width, autoComplete } = props;
  const inputClasses = clsx(
    "border-2 rounded-md border-red-500 focus:outline-none focus:ring focus:border-sky-800 h-9 mb-5 p-2", !error && "border-slate-300"
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
          <span className="text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

export { InputElement };
