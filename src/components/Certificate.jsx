import React from "react";

const Certificate = ({ item, local, colorBackground }) => {
  return (
    <>
    <div
            style={{
            background: `${local === "dark" ? "transparent" : colorBackground}`,
            }}
            className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
        >
            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
            {item?.date}
            </span>
            <h3 className="text-xl dark:text-white">{item?.name}</h3>
            <p className="dark:text-[#b7b7b7]">{item?.description}</p>
            <h3 className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
            {item?.institution}
            </h3>
        </div>
    </>
  );
};

export default Certificate;
