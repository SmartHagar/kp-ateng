/** @format */

import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import Limited from "../../../components/limited/Limited";
import Paginate from "../../../components/paginate/Paginate";
import Search from "../../../components/search/Search";
import Table from "../../../components/table/Table";
import toastError from "../../../services/toast-error";
import toastSuccess from "../../../services/toast-success";
import useAlumni from "../../../store/crud/alumni";
import Details from "./Details";
import Form from "./Form";

const Alumni = () => {
  // store
  const { setAlumni, dtAlumni, responses, removeData } = useAlumni();
  // state
  const [showModal, setShowModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [dataEdit, setDataEdit] = useState({});
  const [cekEdit, setCekEdit] = useState(true);
  // useEffect
  useEffect(() => {
    setAlumni(search, page, limit);
  }, [setAlumni, search, page, limit]);
  // table
  const headers = [
    "No",
    "Nama",
    "Jenkel",
    "Thn. Masuk",
    "Thn. Lulus",
    "Prodi",
    "Status Kerja",
    "Aksi",
  ];
  const tableBodies = [
    `nama`,
    "jenkel",
    "thn_masuk",
    "thn_lulus",
    "prodi.nama",
    "status_kerja",
  ];

  const handleEdit = (item) => {
    setCekEdit(true);
    setDataEdit(item);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Yakin menghapus data ini?",
      text: "Data yang dihapus tidak dapat dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF2C14",
      cancelButtonColor: "#A214FF",
      confirmButtonText: "Yakin",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { status } = await removeData(id);
        if (status !== "error") {
          Swal.fire("Deleted!", "Data berhasil dihapus.", "success");
        }
      }
    });
  };

  // lihat detail
  const setLihat = (row) => {
    console.log("lihat", row);
  };

  // show toast
  const showToast = (e) => {
    if (e.type === "error") {
      console.log("lihat", e);
      toastError(e.pesan);
    } else {
      toastSuccess(e);
    }
  };

  return (
    <>
      {/* detail */}
      {/* <Details /> */}
      {/* toaster */}
      <Toaster />
      {/* form */}
      <Form
        showModal={showModal}
        setShowModal={setShowModal}
        judul="Alumni"
        dataEdit={dataEdit}
        cekEdit={cekEdit}
        setPesan={showToast}
      />
      {/* header */}
      <div className="flex justify-between mb-2">
        <p>Silahkan menambah, merubah dan menghapus data Alumni</p>
        <button
          className="bg-merah text-white active:bg-merah font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => {
            setShowModal(true);
            setCekEdit(false);
          }}
        >
          Tambah Data
        </button>
      </div>
      {/* set tampilan */}
      <div className="mb-3 flex flex-wrap items-start gap-3 justify-between">
        {/* search */}
        <div className="shrink w-4/5">
          <Search setSearch={setSearch} />
        </div>
        {/* limit */}
        <div className="shrink w-1/6">
          <Limited setLimit={setLimit} />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-wrap justify-between gap-5">
        {/* table */}
        <div className="w-full">
          <Table
            headers={headers}
            dataTable={dtAlumni}
            tableBodies={tableBodies}
            setEdit={handleEdit}
            setDelete={handleDelete}
            page={page}
            limit={limit}
            setLihat={setLihat}
          />
        </div>
        {/* paginate */}
        <div className="mb-10 flex justify-center w-full">
          <Paginate pageData={responses} setPage={setPage} />
        </div>
      </div>
    </>
  );
};

export default Alumni;
