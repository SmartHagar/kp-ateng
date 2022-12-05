/** @format */

import React, { useEffect, useState } from "react";
import useAlumniAPI from "../../../store/api/alumni";
import useAlumniLapPDF from "../../../store/laporan/pdf/alumni";
import DaftarAlumni from "../alumni/DaftarAlumni";

const Keseluruhan = () => {
  // store
  const { setCetakAlumni } = useAlumniLapPDF();
  const { setLapAlumni, dtAlumni } = useAlumniAPI();
  // state
  const [isLoading, setIsLoading] = useState(false);
  // effect
  useEffect(() => {
    setLapAlumni({});

    return () => {};
  }, []);

  // action
  const handleCetak = async () => {
    setIsLoading(true);
    await setCetakAlumni({ distrik_id: "" });
    setIsLoading(false);
  };
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl">Daftar Seluruh Alumni</h1>
        {!isLoading && (
          <button
            className="bg-merah text-white active:bg-merah font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => {
              handleCetak();
            }}
          >
            Cetak
          </button>
        )}
      </div>
      {/* table alumni */}
      <div className="mt-4">
        <DaftarAlumni dtAlumni={dtAlumni} />
      </div>
    </div>
  );
};

export default Keseluruhan;
