import axios from "axios";
import sampleData from "./payload.json";

const api = axios.create({
  baseURL: "/api",
});

// 模拟 GET 请求
export const getOrder = async (id) => {
  //return api.get(`/sales-order/${id}`);
  return Promise.resolve({ data: sampleData });
};

// 模拟 POST 请求
export const updateOrder = async (id, data) => {
  console.log(`POST /api/sales-order/${id}`, data);
  return Promise.resolve({ success: true });
};

export const cancelOrder = async (id) => {
  console.log(`POST /api/sales-order/${id}/cancel`);
  return Promise.resolve({ success: true });
};

export const createReturn = async (id) => {
  console.log(`POST /api/sales-order/${id}/create-return`);
  return Promise.resolve({ success: true });
};

export default api;
