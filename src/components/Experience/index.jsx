import React from 'react';

export default function Experience({ data }) {
  return (
    <div className="bg-gray-700 p-5 lg:p-10 rounded-xl border border-gray-900 shadow-xl mt-5 w-full">
      <h2 className="Experience-title text-xl font-bold">Experiencia</h2>
      {data?.experience.length ? (
        data?.experience?.map((value) => (
          <div
            className="Experience-item mt-3 bg-gray-600 p-5 rounded-lg"
            key={value.jobTitle}
          >
            <p className="text-xl">{value.jobTitle}</p>
            <p className="mt-1">{value.jobDescription}</p>
            <p className="mt-1">{value.company}</p>
            <p className="mt-1">{`${value.startDate} - ${value.endDate}`}</p>
          </div>
        ))
      ) : (
        <div className="">
          <div className="Experience-item bg-gray-600 animate-pulse h-40 w-full rounded-lg mt-3" />
          <div className="Experience-item bg-gray-600 animate-pulse h-40 w-full rounded-lg mt-3" />
        </div>
      )}
    </div>
  );
}
