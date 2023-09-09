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
  getBestHorrors: async () => {
    const { data } = await httpService.get("best-horrors/");
    return data;
  }
};

export default bookService;
