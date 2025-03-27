import React from "react";

const ClientSection = () => {
  return (
    <div className="flex h-[500px] items-center justify-between mt-20 my-6 md:mx-20">
      {/* Header Section */}
      <div className="flex flex-col w-[400px] items-center md:items-start md:mb-20">
        <h1 className="font-extrabold text-md  my-6 md:mt-12 text-[#E55615]">
          03.
        </h1>

        <h1 className="font-extrabold text-4xl md:text-6xl text-center md:text-left">
          Client Kami
        </h1>
        <p className="mt-6">
          Lebih dari 20+ klien telah mempercayakan kami untuk membawa bisnis
          mereka ke level berikutnya. Sekarang giliran Anda! Biarkan kami
          membantu Anda mencapai hasil terbaik dengan layanan yang profesional
          dan terbukti efektif.”
        </p>
      </div>

      <div className="grid grid-cols-4 gap-8">
        <div className="flex items-center justify-center w-40 h-40 rounded-xl bg-green-200">
          <div className="w-24 h-24 rounded-full bg-red-600"></div>
        </div>
        <div className="flex items-center justify-center w-40 h-40 rounded-xl bg-green-200">
          <div className="w-24 h-24 rounded-full bg-red-600"></div>
        </div>
        <div className="flex items-center justify-center w-40 h-40 rounded-xl bg-green-200">
          <div className="w-24 h-24 rounded-full bg-red-600"></div>
        </div>
        <div className="flex items-center justify-center w-40 h-40 rounded-xl bg-green-200">
          <div className="w-24 h-24 rounded-full bg-red-600"></div>
        </div>
        <div className="flex items-center justify-center w-40 h-40 rounded-xl bg-green-200">
          <div className="w-24 h-24 rounded-full bg-red-600"></div>
        </div>
        <div className="flex items-center justify-center w-40 h-40 rounded-xl bg-green-200">
          <div className="w-24 h-24 rounded-full bg-red-600"></div>
        </div>
        <div className="flex items-center justify-center w-40 h-40 rounded-xl bg-green-200">
          <div className="w-24 h-24 rounded-full bg-red-600"></div>
        </div>
        <div className="flex items-center justify-center w-40 h-40 rounded-xl bg-green-200">
          <div className="w-24 h-24 rounded-full bg-red-600"></div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
