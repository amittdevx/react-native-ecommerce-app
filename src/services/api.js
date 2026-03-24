import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export const fetchProducts = async (limit, skip) => {
  const response = await axios.get(
    `${BASE_URL}/products?limit=${limit}&skip=${skip}`
  );
  return response.data;
};