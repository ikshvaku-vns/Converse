import axios from "axios";

const api = axios.create({
  baseURL: "https://api.floorselector.convrse.ai/api/inventories/sec_66",
});

//get method

export const getPost = () => {
  return api.get("https://api.floorselector.convrse.ai/api/inventories/sec_66");
};
