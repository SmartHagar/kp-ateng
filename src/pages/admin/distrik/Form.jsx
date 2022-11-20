/** @format */

import React, { useEffect, useState } from "react";
import SelectSearch from "../../../components/select/SelectSearch";
import useDistrik from "../../../store/crud/distrik";
import useKabupaten from "../../../store/crud/kabupaten";

const Form = ({
  showModal,
  setShowModal,
  judul,
  dataEdit,
  cekEdit,
  setPesan,
}) => {
  // state
  const [nama, setNama] = useState("");
  const [pilihKab, setPilihKab] = useState("");
  // store
  const { updateData, addData } = useDistrik();
  const { setKabupaten, dtKabupaten } = useKabupaten();
  // effect
  useEffect(() => {
    // call data kabupaten
    setKabupaten();
    if (cekEdit) {
      return (
        dataEdit.kabupaten &&
          setPilihKab({
            value: dataEdit.kabupaten.id,
            label: dataEdit.kabupaten.nama,
          }),
        dataEdit.nama && setNama(dataEdit.nama)
      );
    }
    setNama("");
    setPilihKab("");
  }, [cekEdit, dataEdit]);

  const onSearchSelect = (value) => {
    setKabupaten(value);
  };

  // pilihan kabupaten
  const options = dtKabupaten.map(function (kabupaten) {
    return {
      value: kabupaten.id,
      label: `${kabupaten.nama}`,
    };
  });
  // ketika tombol simpan ditekan
  const handleSimpan = async (e) => {
    const items = {
      kabupaten_id: pilihKab.value,
      nama,
    };
    e.preventDefault();
    let cek;
    if (cekEdit) {
      cek = await updateData(dataEdit.id, items);
      setShowModal(false);
      console.log(cek);
      setPesan(cek.data);
    } else {
      cek = await addData(items);
      console.log(cek);
      setPesan(cek.data);
    }
    if (cek.status === "berhasil") {
      setNama("");
    }
  };
  return (
    <div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto md:w-2/4 ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t shadow-md">
                  <h3 className="text-xl font-semibold text-center w-full">
                    Form {judul}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-6 py-3 flex-auto max-h-96">
                  <form onSubmit={handleSimpan}>
                    <div className="mb-3 pt-0 flex flex-col gap-2">
                      <label htmlFor="kabupaten_id">Kabupaten / Kota</label>
                      <SelectSearch
                        value={pilihKab}
                        onChange={setPilihKab}
                        options={options}
                        id="kabupaten_id"
                        onInputChange={onSearchSelect}
                        required
                      />
                    </div>
                    <div className="mb-3 pt-0 flex flex-col gap-2">
                      <label htmlFor="nama">Nama Distrik</label>
                      <input
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        id="nama"
                        type="text"
                        className="px-3 py-2 text-slate-600 relative bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full"
                        required
                      />
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-ungu background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Tutup
                  </button>
                  <button
                    className="bg-merah text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSimpan}
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/20"></div>
        </>
      ) : null}
    </div>
  );
};

export default Form;
