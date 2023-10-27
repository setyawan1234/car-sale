import React from "react";
import { Number } from "./number";

export const ListHistory = (props) => {
  const { datas = [] } = props;
  return (
    <div className="my-20 container mx-auto font-poppins">
      <div className="w-full overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b">
                <th className="px-2 py-3">Email</th>
                <th className="px-2 py-3">Full Name</th>
                <th className="px-2 py-3">Name Car</th>
                <th className="px-2 py-3">Price</th>
                <th className="px-2 py-3">Payment Method</th>
                <th className="px-2 py-3">Image</th>
                <th className="px-2 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {datas.map((data, index) => (
                <tr key={index} className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://fdlc.org/wp-content/uploads/2021/01/157-1578186_user-profile-default-image-png-clipart.png.jpeg"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p className="font-semibold text-black">
                          {data.email}
                        </p>
                        <p className="text-xs text-gray-600">Buyyer</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-ms border">{data.fullName}</td>
                  <td className="px-4 py-3 text-ms border">{data.nameCar}</td>
                  <td className="px-4 py-3 text-sm border">Rp <Number number={data.price}/></td>
                  <td className="px-4 py-3 text-sm border">{data.selectPayment}</td>
                  <td><img src={data.image} alt="" className="h-28 w-28" /></td>
                  <td className="px-4 py-3 text-xs border">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      Success
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListHistory;
