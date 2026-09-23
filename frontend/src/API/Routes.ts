import { BASE_CALL } from "./baseCall";

export const API_CALL = {
  COLLECTION: {
    get: async (payload: any) => await BASE_CALL.get("/collection/get", payload),
    filter: async (payload: any) => {
      return await BASE_CALL.get("/collection/get-filter", payload);
    },
    galleryImage:async (payload: any) => await BASE_CALL.get("/collection/nfts", payload),
  },
  ECOSYSTEM: {
    get: async (payload: any) => await BASE_CALL.get("/ecosystem/get", payload),
  },
  SLIDER: {
    get: async (payload: any) => await BASE_CALL.get("/slider/get", payload),
  },
  ARTIST: {
    get: async (payload: any) => await BASE_CALL.get("/artist/get", payload),
  },
  COMMUNITY: {
    get: async (payload: any) => await BASE_CALL.get("/community/get", payload),
  },
  SUB_CATEGORY: {
    get: async (payload: any) =>
      await BASE_CALL.get("/sub-category/group-by-category", payload),
  },
  ROADMAP: {
    get: async (payload: any) => await BASE_CALL.get("/roadmap/get", payload),
  },
  GRILL: {
    get: async (payload: any) => await BASE_CALL.get("/grill/get", payload),
  },
  STATIC_PAGES: {
    get: async (payload: any) => await BASE_CALL.get("/static-page/get", payload),
  },
};
