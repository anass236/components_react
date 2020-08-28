import axios from "axios";

const API_URL = "http://localhost:5000/";
const user = JSON.parse(localStorage.getItem("user"));
const instance = axios.create({
  baseURL: API_URL,
});
const getEmployees = () => {
  return instance.get("employees");
};

const getCategories = () => {
  return instance.get("categories");
};
const getUserByUsername = () => {
  return instance.get(`users/${user.username}`);
};
const getEmployeesByID = (user_id) => {
  return instance.get(`employees/user/${user_id}`);
};

const getStocksByMonthAndYear = (month, year, page, limit) => {
  return instance.get(
    `stocks?month=${month}&year=${year}&page=${page}&limit=${limit}`
  );
};

export default {
  getEmployees,
  getCategories,
  getUserByUsername,
  getEmployeesByID,
  getStocksByMonthAndYear,
};
