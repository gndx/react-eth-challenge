import React from "react";

const refreshPage = () => {
  console.log('refes')
  window.location.reload(false);
}

const ErrorData = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center  bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed">
        <h1 className="text-7xl leading-none text-white font-extrabold md:text-8xl">
          oops!
        </h1>
        <p className=" text-medium text-white text-sm capitalize mb-7 mt-6 px-4 text-center">
          there is something wrong, refresh the page.
        </p>

        <button
          onClick={refreshPage}
          className="flex items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[5px]"
        >
          Refresh
        </button>
      </div>
    </>
  );
};

export default ErrorData;
