/** @format */

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Toaster } from "react-hot-toast";
import Table from "../../../components/table/Table";
import useProvinsi from "../../../store/crud/provinsi";
import Form from "./Form";
import Paginate from "../../../components/paginate/Paginate";
import setPesan from "../../../services/toast-success";
import Search from "../../../components/search/Search";
import Limited from "../../../components/limited/Limited";

const Provinsi = () => {
  // store
  const { setProvinsi, dtProvinsi, responses, removeData } = useProvinsi();
  // state
  const [showModal, setShowModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [dataEdit, setDataEdit] = useState({});
  const [cekEdit, setCekEdit] = useState(true);
  // useEffect
  useEffect(() => {
    setProvinsi(search, page, limit);
  }, [setProvinsi, search, page, limit]);
  // table
  const headers = ["No", "Nama", "Aksi"];
  const tableBodies = [`nama`];

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

  return (
    <div>
      {/* toaster */}
      <Toaster />
      {/* form */}
      <Form
        showModal={showModal}
        setShowModal={setShowModal}
        judul="Provinsi"
        dataEdit={dataEdit}
        cekEdit={cekEdit}
        setPesan={setPesan}
      />
      {/* header */}
      <div className="flex justify-between mb-2">
        <p>Silahkan menambah, merubah dan menghapus data provinsi</p>
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
        <Search setSearch={setSearch} />
        {/* limit */}
        <Limited setLimit={setLimit} />
      </div>
      {/* content */}
      <div className="flex flex-wrap justify-between gap-5">
        {/* table */}
        <div className="w-full">
          <Table
            headers={headers}
            dataTable={dtProvinsi}
            tableBodies={tableBodies}
            setEdit={handleEdit}
            setDelete={handleDelete}
            page={page}
            limit={limit}
          />
        </div>
        {/* paginate */}
        <div className="mb-10 flex justify-center w-full">
          <Paginate pageData={responses} setPage={setPage} />
        </div>
      </div>
    </div>
  );
};

export default Provinsi;
