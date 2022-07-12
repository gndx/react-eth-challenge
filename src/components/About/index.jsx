import React from 'react';

export default function About({ data }) {
  return (
    <div className="About mt-5">
      <h2 className="About-title text-lg font-bold">Redes Sociales</h2>
      <div className=" space-x-4 mt-2">
        {data?.social.length ? (
          data?.social?.map((value) => (
            <a
              href={value.url}
              target="_blank"
              rel="noopener noreferrer"
              className="About-item transition-all duration-300 hover:underline capitalize"
              key={value.name}
            >
              {value.name}
            </a>
          ))
        ) : (
          <div className="flex space-x-5">
            <div className="About-item bg-gray-400 animate-pulse h-5 w-20 rounded-lg" />
            <div className="About-item bg-gray-400 animate-pulse h-5 w-20 rounded-lg" />
            <div className="About-item bg-gray-400 animate-pulse h-5 w-20 rounded-lg" />
          </div>
        )}
      </div>
    </div>
  );
}
