/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../../../services/base_url";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { exports } = useUrl();

// const getToken = JSON.parse(localStorage.getItem("token"));

const useAlumniLapPDF = create(
  devtools((set, get) => ({
    setCetakAlumni: async ({ distrik_id, nm_distrik }) => {
      //
      try {
        const res = await exports({
          method: "get",
          url: `/lap-alumni-pdf`,
          params: {
            distrik_id,
          },
          responseType: "blob",
        });
        console.log(distrik_id);
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        // nama file
        const lapDistrik = `Laporan Alumni Distrik ${nm_distrik}.pdf`;
        const lapAll = "Laporan ALumni.pdf";
        link.setAttribute("download", distrik_id ? lapDistrik : lapAll);
        document.body.appendChild(link);
        link.click();
      } catch (error) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
  }))
);

export default useAlumniLapPDF;
