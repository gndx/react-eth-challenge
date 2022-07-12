import React from 'react';

export default function Header({ children, data }) {
  return (
    <div className="bg-gray-700 p-5 lg:p-10 rounded-xl border border-gray-900 shadow-xl lg:flex">
      <div className="w-56 flex-shrink-0 mx-auto">
        <div className="rounded-full border-2 border-gray-700 overflow-hidden w-48 h-48 mx-auto lg:mx-0">
          <img
            src={data?.avatar}
            alt={data?.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full mt-5 lg:mt-0">
        <h1 className="Header-title text-4xl font-bold">{data?.name}</h1>
        <h2 className="Header-job-title text-2xl font-bold mt-1">
          {data?.profession}
        </h2>
        <div className="lg:flex w-full mt-5">
          <div className="lg:w-1/2">
            <h3 className="Header-phone">{`Teléfono: ${data?.phone}`}</h3>
            <h3 className="Header-email">{`Correo: ${data?.email}`}</h3>
          </div>
          <div className="lg:w-1/2">
            <h3 className="Header-website">{`Sitio web: ${data?.website}`}</h3>
            <h3 className="Header-address">{`Dirección: ${data?.address}`}</h3>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
