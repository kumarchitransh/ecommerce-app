import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/ecommerce-app-219d5/us-central1/api",
});

export default instance;
