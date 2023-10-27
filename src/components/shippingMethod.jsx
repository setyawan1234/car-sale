import React from "react";

export const ShippingMethod = (props) => {
  const { src, name, delivery, id } = props;

  return (
    <div className="relative">
      <input
        className="peer hidden"
        id={id}
        type="radio"
        name="radio"
      />
      <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
      <label
        className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
        htmlFor={id}
      >
        <img className="w-20 object-contain" src={src} alt="" />
        <div className="ml-5">
          <span className="mt-2 font-semibold">{name}</span>
          <p className="text-slate-500 text-sm leading-6">Delivery: {delivery} Days</p>
        </div>
      </label>
    </div>
  );
};
