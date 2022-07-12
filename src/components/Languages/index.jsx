import React from 'react';

export default function Languages({ data }) {
  return (
    <div className="bg-gray-700 p-5 lg:p-10 rounded-xl border border-gray-900 shadow-xl w-full mt-5">
      <h1 className="Languages-title text-xl font-bold">Idiomas</h1>

      {data?.languages.length ? (
        data?.languages?.map((value) => (
          <div className="Languages-item mt-3" key={value.name}>
            {`${value.name} - ${value.percentage}`}
          </div>
        ))
      ) : (
        <div className="">
          <div className="Languages-item bg-gray-600 animate-pulse h-10 w-full rounded-lg mt-3" />
          <div className="Languages-item bg-gray-600 animate-pulse h-10 w-full rounded-lg mt-3" />
          <div className="Languages-item bg-gray-600 animate-pulse h-10 w-full rounded-lg mt-3" />
        </div>
      )}
    </div>
  );
}
