/** @format */

import React from "react";
import useUrl from "../../../services/base_url";
import { BiX } from "react-icons/bi";

const Details = ({ openDet, setOpenDet, row }) => {
  // base url
  const { BASE_URL } = useUrl();
  return (
    <>
      {openDet && (
        <div className="flex justify-center items-center fixed z-50 inset-0">
          <div className="w-full max-w-lg overflow-auto bg-white rounded-lg shadow-lg absolute z-50">
            <div
              className="absolute right-1 cursor-pointer"
              onClick={() => setOpenDet(false)}
            >
              <BiX size={25} />
            </div>
            <img
              className="object-contain object-center w-full h-64"
              src={`${BASE_URL}/${row.foto}`}
              alt="avatar"
            />

            <div className="flex items-center px-6 py-3 bg-biru">
              <h1 className="text-lg font-semibold text-black">{row.nama}</h1>
            </div>

            <div className="px-6 py-4">
              <h1 className="text-xl font-semibold text-gray-800">
                {row.prodi.nama} / {row.thn_masuk} - {row.thn_lulus}
              </h1>

              {/* Tabel */}
              <div className="overflow-x-auto mt-3 h-[30vh]">
                <table className="divide-y divide-gray-200 text-sm m-auto">
                  <tbody className="divide-y divide-gray-200 text-md">
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                        Jenis Kelamin
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        :
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {row.jenkel}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                        Tempat, Tgl. Lahir
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        :
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {row.tempat}, {row.tgl_lahir}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                        No. Hp
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        :
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {row.no_hp}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                        Email
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        :
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {row.email}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                        Provinsi
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        :
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {row.distrik.kabupaten.provinsi.nama}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                        Kabupaten/Kota
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        :
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {row.distrik.kabupaten.nama}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                        Distrik
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        :
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {row.distrik.nama}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                        Alamat
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        :
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {row.alamat}
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                        Status Nikah
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        :
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {row.status_nikah}
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                        Status Kerja
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        :
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {row.status_kerja}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                        Nama Instansi
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        :
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {row.nm_instansi}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-900">
                        Jabatan
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        :
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {row.jabatan}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 backdrop-blur-sm bg-black/20"
            onClick={() => setOpenDet(false)}
          ></div>
        </div>
      )}
    </>
  );
};

export default Details;
