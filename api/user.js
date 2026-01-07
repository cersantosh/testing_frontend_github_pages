import axios from "axios";

export const createUser = async (data) => {
  const res = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/api/users`, data);
  return res.data;
};

export const getUsers = async () => {
  const res = await axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/users`);
  return res.data;
};
