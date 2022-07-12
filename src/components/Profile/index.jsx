import React from 'react';

export default function Profile({ data }) {
  return (
    <div className="bg-gray-700 p-5 lg:p-10 rounded-xl border border-gray-900 shadow-xl mt-5">
      <h1 className="Profile-title text-xl font-bold">Perfil</h1>
      <p className="Profile-desc mt-3">{data?.Profile}</p>
    </div>
  );
}
