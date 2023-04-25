import axios from "axios";
import { API_URL_REG_USER,TENANT_ID } from '@env';

const axiosInstanceReg = axios.create({
  baseURL: API_URL_REG_USER,
  headers: {
    "tenant_id": TENANT_ID
  }
});

axiosInstanceReg.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["charset"] = "utf-8";

// DEV Only
axios.defaults.headers.common["Cache-Control"] =
  "no-cache, no-store, must-revalidate";
axios.defaults.headers.common.Pragma = "no-cache";
axios.defaults.headers.common.Expires = 0;

export default axiosInstanceReg;
