import React from 'react';

export default function Skills({ data }) {
  return (
    <div className="bg-gray-700 p-5 lg:p-10 rounded-xl border border-gray-900 shadow-xl mt-5 w-full">
      <h1 className="Skills-title text-xl font-bold">Habilidades</h1>

      {data?.skills.length ? (
        data?.skills?.map((value) => (
          <div className="Skills-item mt-3" key={value.name}>
            {`${value.name} - ${value.percentage}`}
          </div>
        ))
      ) : (
        <div className="">
          <div className="Skills-item bg-gray-600 animate-pulse h-10 w-full rounded-lg mt-3" />
          <div className="Skills-item bg-gray-600 animate-pulse h-10 w-full rounded-lg mt-3" />
          <div className="Skills-item bg-gray-600 animate-pulse h-10 w-full rounded-lg mt-3" />
        </div>
      )}
    </div>
  );
}
