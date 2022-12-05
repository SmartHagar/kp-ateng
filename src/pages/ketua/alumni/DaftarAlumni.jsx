/** @format */

import React from "react";

const DaftarAlumni = ({ dtAlumni }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              No
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Nama
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              No. HP
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Email
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Tahun Masuk - Lulus
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Status Nikah
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Status Kerja
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Prodi
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Alamat
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {dtAlumni &&
            dtAlumni.map((row, index) => {
              const {
                nama,
                no_hp,
                email,
                thn_masuk,
                thn_lulus,
                status_nikah,
                status_kerja,
                prodi,
                alamat,
              } = row;
              return (
                <tr key={index}>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {nama}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {no_hp}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {email}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {thn_masuk} - {thn_lulus}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {status_nikah}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {status_kerja}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {prodi.nama}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {alamat}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DaftarAlumni;
