/** @format */

import React, { useEffect, useState } from "react";
import SelectDistrik from "../../../components/select/SelectDistrik";
import SelectKab from "../../../components/select/SelectKab";
import SelectProv from "../../../components/select/SelectProv";
import useAlumniAPI from "../../../store/api/alumni";
import useAlumniLapPDF from "../../../store/laporan/pdf/alumni";
import DaftarAlumni from "../alumni/DaftarAlumni";

const PerDistrik = () => {
  // store
  const { setCetakAlumni } = useAlumniLapPDF();
  const { setLapAlumni, dtAlumni } = useAlumniAPI();
  // state
  const [pilihProvinsi, setPilihProvinsi] = useState("");
  const [pilihKabupaten, setPilihKabupaten] = useState("");
  const [pilihDistrik, setPilihDistrik] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // effect
  useEffect(() => {
    setLapAlumni({ distrik_id: pilihDistrik.value });
    return () => {};
  }, [pilihDistrik]);

  const handleCetak = async () => {
    setIsLoading(true);
    await setCetakAlumni({
      distrik_id: pilihDistrik.value,
      nm_distrik: pilihDistrik.label,
    });
    setIsLoading(false);
  };
  return (
    <div>
      <div className="flex items-end justify-items-stretch">
        <div className="grid grid-cols-12 gap-5 w-4/5">
          {/* Provinsi */}
          <div className="col-span-12 md:col-span-4 pt-0 flex flex-col gap-2">
            <label htmlFor="provinsi_id">Provinsi</label>
            <SelectProv
              setPilihProvinsi={setPilihProvinsi}
              pilihProvinsi={pilihProvinsi}
            />
          </div>
          {/* Kabupaten */}
          <div className="col-span-12 md:col-span-4 pt-0 flex flex-col gap-2">
            <label htmlFor="kabupaten_id">Kabupaten</label>
            <SelectKab
              provinsi_id={pilihProvinsi}
              setPilihKabupaten={setPilihKabupaten}
              pilihKabupaten={pilihKabupaten}
            />
          </div>
          {/* Distrik */}
          <div className="col-span-12 md:col-span-4 pt-0 flex flex-col gap-2">
            <label htmlFor="distrik_id">Distrik</label>
            <SelectDistrik
              kabupaten_id={pilihKabupaten}
              setPilihDistrik={setPilihDistrik}
              pilihDistrik={pilihDistrik}
            />
          </div>
        </div>
        <div className="w-1/5 flex justify-end">
          {isLoading
            ? "Loading"
            : pilihDistrik.value && (
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
      </div>
      {/* table alumni */}
      <div className="mt-4">
        {pilihDistrik.value && <DaftarAlumni dtAlumni={dtAlumni} />}
      </div>
    </div>
  );
};

export default PerDistrik;
