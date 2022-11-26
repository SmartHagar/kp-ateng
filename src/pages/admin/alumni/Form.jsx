/** @format */

import React, { useEffect, useState } from "react";
import SelectDistrik from "../../../components/select/SelectDistrik";
import SelectKab from "../../../components/select/SelectKab";
import SelectProdi from "../../../components/select/SelectProdi";
import SelectProv from "../../../components/select/SelectProv";
import useAlumni from "../../../store/crud/alumni";
import useUrl from "../../../services/base_url";

const Form = ({
  showModal,
  setShowModal,
  judul,
  dataEdit,
  cekEdit,
  setPesan,
}) => {
  // base url
  const { BASE_URL } = useUrl();
  // state
  const [nama, setNama] = useState("");
  const [tahunMasuk, setTahunMasuk] = useState(2018);
  const [tahunLulus, setTahunLulus] = useState(2022);
  const [pilihProvinsi, setPilihProvinsi] = useState("");
  const [pilihKabupaten, setPilihKabupaten] = useState("");
  const [pilihDistrik, setPilihDistrik] = useState("");
  const [pilihProdi, setPilihProdi] = useState("");
  const [jenkel, setJenkel] = useState("Laki-laki");
  const [tempat, setTempat] = useState("");
  const [tglLahir, setTglLahir] = useState("");
  const [noHp, setNoHp] = useState("");
  const [email, setEmail] = useState("");
  const [statusNikah, setStatusNikah] = useState("");
  const [statusKerja, setStatusKerja] = useState("");
  const [nmInstansi, setNmInstansi] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [alamat, setAlamat] = useState("");
  const [previewImage, setPreviewImage] = useState(
    `${BASE_URL}/storage/default.png`
  );
  const [foto, setFoto] = useState(null);
  // store
  const { updateData, addData } = useAlumni();
  // reset
  const reset = () => {
    setNama("");
    setTahunMasuk(2018);
    setTahunLulus(2022);
    setPilihProvinsi("");
    setPilihKabupaten("");
    setPilihDistrik("");
    setPilihProdi("");
    setJenkel("Laki-laki");
    setTempat("");
    setTglLahir("");
    setNoHp("");
    setEmail("");
    setStatusNikah("Sudah Menikah");
    setStatusKerja("Sudah Bekerja");
    setNmInstansi("");
    setJabatan("");
    setAlamat("");
    setFoto("");
    setPreviewImage(`${BASE_URL}/storage/default.png`);
  };
  // effect
  useEffect(() => {
    // call data distrik
    if (cekEdit) {
      return (
        dataEdit.distrik &&
          setPilihDistrik({
            value: dataEdit.distrik.id,
            label: dataEdit.distrik.nama,
          }),
        dataEdit.distrik &&
          setPilihProdi({
            value: dataEdit.prodi.id,
            label: dataEdit.prodi.nama,
          }),
        dataEdit.nama && setNama(dataEdit.nama),
        dataEdit.jenkel && setJenkel(dataEdit.jenkel),
        dataEdit.thn_masuk && setTahunMasuk(dataEdit.thn_masuk),
        dataEdit.thn_lulus && setTahunLulus(dataEdit.thn_lulus),
        dataEdit.tempat && setTempat(dataEdit.tempat),
        dataEdit.tgl_lahir && setTglLahir(dataEdit.tgl_lahir),
        dataEdit.no_hp && setNoHp(dataEdit.no_hp),
        dataEdit.email && setEmail(dataEdit.email),
        dataEdit.status_nikah && setStatusNikah(dataEdit.status_nikah),
        dataEdit.status_kerja && setStatusKerja(dataEdit.status_kerja),
        dataEdit.nm_instansi && setNmInstansi(dataEdit.nm_instansi),
        dataEdit.jabatan && setJabatan(dataEdit.jabatan),
        dataEdit.alamat && setAlamat(dataEdit.alamat),
        dataEdit.foto && setPreviewImage(`${BASE_URL}/${dataEdit.foto}`)
      );
    }
    reset();
  }, [cekEdit, dataEdit]);

  // tahun
  const thnMasuk = (awal) => {
    const list = [];
    for (let i = awal; i > 1990; i--) {
      list.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return <>{list}</>;
  };
  // foto
  const handleFoto = (event) => {
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (e) => {
      setPreviewImage(reader.result);
    };
    setFoto(file);
  };
  // ketika tombol simpan ditekan
  const handleSimpan = async (e) => {
    const items = {
      distrik_id: pilihDistrik.value,
      prodi_id: pilihProdi.value,
      nama,
      tempat,
      tgl_lahir: tglLahir,
      no_hp: noHp,
      email,
      jenkel,
      alamat,
      thn_masuk: tahunMasuk,
      thn_lulus: tahunLulus,
      status_nikah: statusNikah,
      status_kerja: statusKerja,
      nm_instansi: nmInstansi,
      jabatan,
      foto,
    };
    e.preventDefault();
    // return;
    let cek;
    if (cekEdit) {
      cek = await updateData(dataEdit.id, items);
      setShowModal(false);
      setPesan(cek.data);
    } else {
      cek = await addData(items);
      setPesan(cek.data);
    }
    if (cek.status === "berhasil") {
      reset();
    }
  };
  return showModal ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none">
        <div className="w-auto my-6 mx-auto md:w-3/4 ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
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
            <div className="px-6 py-3 flex-auto max-h-96 overflow-auto">
              <form onSubmit={handleSimpan}>
                <div className="grid grid-cols-12 gap-2">
                  {/* prodi */}
                  <div className="col-span-12 md:col-span-6 mb-3 pt-0 flex flex-col gap-2">
                    <label htmlFor="prodi_id">Prodi</label>
                    <SelectProdi
                      setPilihProdi={setPilihProdi}
                      pilihProdi={pilihProdi}
                    />
                  </div>
                  {/* thn masuk */}
                  <div className="mb-3 col-span-6 md:col-span-3 pt-0 flex flex-col gap-2">
                    <label htmlFor="prodi_id">Tahun Masuk</label>
                    <select
                      value={tahunMasuk}
                      onChange={(e) => setTahunMasuk(e.target.value)}
                      className="w-full px-2 py-2 bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring"
                    >
                      {thnMasuk(2018)}
                    </select>
                  </div>
                  {/* thn lulus */}
                  <div className="mb-3 col-span-6 md:col-span-3 pt-0 flex flex-col gap-2">
                    <label htmlFor="prodi_id">Tahun Lulus</label>
                    <select
                      onChange={(e) => setTahunLulus(e.target.value)}
                      value={tahunLulus}
                      className="w-full px-2 py-2 bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring"
                    >
                      {thnMasuk(2022)}
                    </select>
                  </div>
                  {/* nama */}
                  <div className="col-span-12 md:col-span-7 mb-3 pt-0 flex flex-col gap-2">
                    <label htmlFor="nama">Nama</label>
                    <input
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      id="nama"
                      type="text"
                      className="px-3 py-2 text-slate-600 relative bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full"
                      required
                    />
                  </div>
                  {/* jenkel */}
                  <div className="col-span-5 mb-3 pt-0 flex flex-col gap-2">
                    <label htmlFor="nama">Jenkel</label>
                    <div className="max-w-sm text-center flex flex-wrap">
                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="radio1"
                          type="radio"
                          name="radio"
                          value="Laki-laki"
                          className="hidden"
                          checked={jenkel === "Laki-laki"}
                          onChange={(e) => setJenkel(e.target.value)}
                        />
                        <label
                          htmlFor="radio1"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                          Laki-laki
                        </label>
                      </div>

                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="radio2"
                          type="radio"
                          name="radio"
                          value="Perempuan"
                          className="hidden"
                          checked={jenkel === "Perempuan"}
                          onChange={(e) => setJenkel(e.target.value)}
                        />
                        <label
                          htmlFor="radio2"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                          Perempuan
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* tempat */}
                  <div className="col-span-12 md:col-span-5 mb-3 pt-0 flex flex-col gap-2">
                    <label htmlFor="tempat">Tempat</label>
                    <input
                      value={tempat}
                      onChange={(e) => setTempat(e.target.value)}
                      id="tempat"
                      type="text"
                      className="px-3 py-2 text-slate-600 relative bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full"
                      required
                    />
                  </div>
                  {/* tgl lahir */}
                  <div className="col-span-12 md:col-span-3 mb-3 pt-0 flex flex-col gap-2">
                    <label htmlFor="TglLahir">Tgl. Lahir</label>
                    <input
                      value={tglLahir ? tglLahir : "2000-01-01"}
                      onChange={(e) => setTglLahir(e.target.value)}
                      id="TglLahir"
                      type="date"
                      className="px-3 py-2 text-slate-600 relative bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full"
                      required
                    />
                  </div>
                  {/* No. Hp */}
                  <div className="col-span-12 md:col-span-4 mb-3 pt-0 flex flex-col gap-2">
                    <label htmlFor="NoHp">No. Hp</label>
                    <input
                      value={noHp}
                      onChange={(e) => setNoHp(e.target.value)}
                      id="NoHp"
                      type="text"
                      className="px-3 py-2 text-slate-600 relative bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full"
                      required
                    />
                  </div>
                  {/* Email */}
                  <div className="col-span-12 md:col-span-6 mb-3 pt-0 flex flex-col gap-2">
                    <label htmlFor="Email">Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="Email"
                      type="email"
                      className="px-3 py-2 text-slate-600 relative bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full"
                      required
                    />
                  </div>
                  {/* Status Nikah */}
                  <div className="col-span-12 md:col-span-3 mb-3 pt-0 flex flex-col gap-2">
                    <label htmlFor="StatusNikah">Status Nikah</label>
                    <select
                      id="StatusNikah"
                      onChange={(e) => setStatusNikah(e.target.value)}
                      defaultValue="Sudah Menikah"
                      className="w-full px-2 py-2 bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring"
                    >
                      <option value="Belum Menikah">Belum Menikah</option>
                      <option value="Sudah Menikah">Sudah Menikah</option>
                    </select>
                  </div>
                  {/* Status Kerja */}
                  <div className="col-span-12 md:col-span-3 mb-3 pt-0 flex flex-col gap-2">
                    <label htmlFor="statusKerja">Status Kerja</label>
                    <select
                      id="statusKerja"
                      onChange={(e) => setStatusKerja(e.target.value)}
                      defaultValue="Sudah Bekerja"
                      className="w-full px-2 py-2 bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring"
                    >
                      <option value="Belum Bekerja">Belum Bekerja</option>
                      <option value="Sudah Bekerja">Sudah Bekerja</option>
                    </select>
                  </div>
                  {/* Instansi */}
                  <div className="col-span-12 md:col-span-6 mb-3 pt-0 flex flex-col gap-2">
                    <label htmlFor="NmInstansi">Instansi</label>
                    <input
                      value={nmInstansi}
                      onChange={(e) => setNmInstansi(e.target.value)}
                      id="NmInstansi"
                      type="text"
                      className="px-3 py-2 text-slate-600 relative bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full"
                    />
                  </div>
                  {/* Jabatan */}
                  <div className="col-span-12 md:col-span-6 mb-3 pt-0 flex flex-col gap-2">
                    <label htmlFor="Jabatan">Jabatan</label>
                    <input
                      value={jabatan}
                      onChange={(e) => setJabatan(e.target.value)}
                      id="Jabatan"
                      type="text"
                      className="px-3 py-2 text-slate-600 relative bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full"
                    />
                  </div>
                  {/* Provinsi */}
                  <div className="col-span-12 md:col-span-4 mb-3 pt-0 flex flex-col gap-2">
                    <label htmlFor="provinsi_id">Provinsi</label>
                    <SelectProv
                      setPilihProvinsi={setPilihProvinsi}
                      pilihProvinsi={pilihProvinsi}
                    />
                  </div>
                  {/* Kabupaten */}
                  <div className="col-span-12 md:col-span-4 mb-3 pt-0 flex flex-col gap-2">
                    <label htmlFor="kabupaten_id">Kabupaten</label>
                    <SelectKab
                      provinsi_id={pilihProvinsi}
                      setPilihKabupaten={setPilihKabupaten}
                      pilihKabupaten={pilihKabupaten}
                    />
                  </div>
                  {/* Distrik */}
                  <div className="col-span-12 md:col-span-4 mb-3 pt-0 flex flex-col gap-2">
                    <label htmlFor="distrik_id">Distrik</label>
                    <SelectDistrik
                      kabupaten_id={pilihKabupaten}
                      setPilihDistrik={setPilihDistrik}
                      pilihDistrik={pilihDistrik}
                    />
                  </div>
                  {/* Alamat */}
                  <div className="col-span-12 mb-3 pt-0 flex flex-col gap-2">
                    <label htmlFor="Alamat">Alamat</label>
                    <input
                      value={alamat}
                      onChange={(e) => setAlamat(e.target.value)}
                      id="Alamat"
                      type="text"
                      className="px-3 py-2 text-slate-600 relative bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full"
                      required
                    />
                  </div>
                  {/* Foto */}
                  <div className="col-span-12 md:col-span-6 mb-3 pt-0 flex flex-col gap-2">
                    <label htmlFor="Foto">Foto</label>
                    <input
                      onChange={(e) => handleFoto(e)}
                      id="Foto"
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      className="px-3 py-2 text-slate-600 relative bg-white rounded text-sm border shadow outline-none focus:outline-none focus:ring w-full"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6 mb-3 pt-0 flex flex-col gap-2">
                    {/* tampil foto */}
                    <div>
                      <img
                        src={previewImage}
                        alt="selected"
                        className="h-44 mt-2 rounded-md"
                      />
                    </div>
                  </div>
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
      <div className="fixed inset-0 z-20 backdrop-blur-sm bg-black/20"></div>
    </>
  ) : null;
};

export default Form;
