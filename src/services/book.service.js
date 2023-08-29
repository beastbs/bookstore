import httpService from "./http.service";

const bookService = {
  getBookByPath: async (path) => {
    const { data } = await httpService.get(path);
    return data;
  },
  getBooksByCategory: async (category) => {
    const { data } = await httpService.get(category);
    return data;
  },
  getBestsellers: async () => {
    const { data } = await httpService.get("bestsellers/");
    return data;
  },
  getTodaysDeals: async () => {
    const { data } = await httpService.get("todaydeals/");
    return data;
  },
  getBookByQuery: async () => {},
};

export default bookService;