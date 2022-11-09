import axios from "../config";

export async function getData(url, params) {
  return await axios.get(`${url}`, {
    params,
  });
}
