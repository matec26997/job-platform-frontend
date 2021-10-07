import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 1100,
  headers: { Accept: "application/json" },
  withCredentials: true,
});
//get XSRF-TOKEN
axiosInstance
  .get("/sanctum/csrf-cookie")
  .then((response) =>
    response.status === 204
      ? console.log("XSRF-TOKEN added successfully")
      : console.log("Error adding XSRF-TOKEN")
  )
  .catch((error) => console.log(error));

export default axiosInstance;
