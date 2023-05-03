import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL,TENANT_ID } from '@env';

const axiosInstanceClap = axios.create({
  baseURL: API_URL,
  headers: {
    "tenant_id": TENANT_ID
  }
});


const getAuthToken = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        return token;
      } catch (error) {
        console.error(error);
      }
    };
    axiosInstanceClap.interceptors.request.use(
      async (config) => {
        const token = await getAuthToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
axiosInstanceClap.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["charset"] = "utf-8";

// DEV Only
axios.defaults.headers.common["Cache-Control"] =
  "no-cache, no-store, must-revalidate";
axios.defaults.headers.common.Pragma = "no-cache";
axios.defaults.headers.common.Expires = 0;

export default axiosInstanceClap;
