import React from 'react';

export default function Interest({ data }) {
  return (
    <div className="bg-gray-700 p-5 lg:p-10 rounded-xl border border-gray-900 shadow-xl mt-5 w-full">
      <h1 className="Interest-title text-xl font-bold">Intereses</h1>

      {data?.interest.length ? (
        data?.interest?.map((value) => (
          <p className="Interest-item mt-3" key={value}>
            {value}
          </p>
        ))
      ) : (
        <div className="">
          <div className="Interest-item bg-gray-600 animate-pulse h-10 w-full rounded-lg mt-3" />
          <div className="Interest-item bg-gray-600 animate-pulse h-10 w-full rounded-lg mt-3" />
          <div className="Interest-item bg-gray-600 animate-pulse h-10 w-full rounded-lg mt-3" />
        </div>
      )}
    </div>
  );
}
