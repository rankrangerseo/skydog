import axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const BASE_CALL = {
  post: async (url: any, payload: any) =>
    await axios.post(baseUrl + url, payload),
  put: async (url: any, payload: any) =>
    await axios.put(baseUrl + url + `/${payload.id}`, payload),
  get: async (url: any, params: any) => {
    return await axios.get(baseUrl + url, {
      params,
    });
  },
  delete: async (url: any) => await axios.delete(baseUrl + url),
  
};
