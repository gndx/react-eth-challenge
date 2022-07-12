import React from 'react';

export default function Academic({ data }) {
  return (
    <div className="bg-gray-700 p-5 lg:p-10 rounded-xl border border-gray-900 shadow-xl mt-5 w-full">
      <h1 className="Academic-title text-xl font-bold">Estudios</h1>
      {data?.Academic.length ? (
        data?.Academic?.map((value) => (
          <div
            className="Academic-item mt-3 bg-gray-600 p-5 rounded-lg"
            key={value.degree}
          >
            <p className=" text-xl">{value.degree}</p>
            <p className=" mt-1">{value.description}</p>
            <p className=" mt-1">{value.institution}</p>
            <p>{`${value.startDate} - ${value.endDate}`}</p>
          </div>
        ))
      ) : (
        <div className="">
          <div className="Academic-item bg-gray-600 animate-pulse h-40 w-full rounded-lg mt-3" />
          <div className="Academic-item bg-gray-600 animate-pulse h-40 w-full rounded-lg mt-3" />
        </div>
      )}
    </div>
  );
}
