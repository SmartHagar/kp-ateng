/** @format */

import create from "zustand";
import { devtools } from "zustand/middleware";
import useUrl from "../../services/base_url";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { crud } = useUrl();

// const getToken = JSON.parse(localStorage.getItem("token"));

const useKabupaten = create(
  devtools((set, get) => ({
    dtKabupaten: [],
    responses: [],
    setKabupaten: async (
      cari = { search: "", provinsi_id: "" },
      page = "",
      limit = ""
    ) => {
      try {
        const response = await crud({
          method: "get",
          url: `/kabupaten`,
          // headers: { Authorization: `Bearer ${getToken}` },
          params: {
            limit,
            search: cari.search,
            provinsi_id: cari.provinsi_id,
            page,
          },
        });
        set((state) => ({ ...state, responses: response.data }));
        set((state) => ({ ...state, dtKabupaten: response.data.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    addData: async (items) => {
      try {
        const res = await crud({
          method: "post",
          url: `/kabupaten`,
          // headers: { Authorization: `Bearer ${getToken}` },
          data: items,
        });
        set((state) => ({
          dtKabupaten: [res.data.data, ...state.dtKabupaten],
        }));
        return {
          status: "berhasil",
          data: res.data,
        };
      } catch (error) {
        return {
          status: `Error ${error}`,
        };
      }
    },
    removeData: async (id) => {
      try {
        const res = await crud({
          method: "delete",
          url: `/kabupaten/${id}`,
          // headers: { Authorization: `Bearer ${getToken}` },
        });
        set((state) => ({
          dtKabupaten: state.dtKabupaten.filter((item) => item.id !== id),
        }));
        return {
          status: "berhasil",
          data: res.data,
        };
      } catch (error) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    updateData: async (id, row) => {
      try {
        const response = await crud({
          method: "put",
          url: `/kabupaten/${id}`,
          // headers: { Authorization: `Bearer ${getToken}` },
          data: row,
        });
        set((state) => ({
          dtKabupaten: state.dtKabupaten.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                ...response.data.data,
              };
            } else {
              return item;
            }
          }),
        }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
  }))
);

export default useKabupaten;
