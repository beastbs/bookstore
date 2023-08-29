import axios from "axios";
import configFile from "../config/api_endpoint.json";

const http = axios.create({
  baseURL: configFile.apiEndpoint,
});

http.interceptors.request.use(
  async function(config){
    if(configFile.isFireBase){
      const containSlash = /\/$/gi.test(config.url);
      config.url = (containSlash ? config.url.slice(0, -1) : config.url) + ".json"
    }

    return config;
  }, 
  function(error){
    Promise.rejected(error)
  }
)

const httpService = {
  get: http.get,
  put: http.put
};

export default httpService;
