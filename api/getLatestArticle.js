import axios from "axios";
import { API_URL} from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstanceLatestArticle= axios.create({
      baseURL:API_URL,
      // headers: {
      //   "TENANT-ID": TENANT_ID
      // }
    });

    const getAuthToken = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        return token;
      } catch (error) {
        console.error(error);
      }
    };
    axiosInstanceLatestArticle.interceptors.request.use(
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


    axiosInstanceLatestArticle.defaults.timeout = 10000;
    axios.defaults.headers.post["Content-Type"] = "application/json";
    // axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
    axios.defaults.headers.get["Content-Type"] ="application/json";
    
    
    // DEV Only
    axios.defaults.headers.common["Cache-Control"] =
      "no-cache, no-store, must-revalidate";
    axios.defaults.headers.common.Pragma = "no-cache";
    axios.defaults.headers.common.Expires = 0;
    
    export default axiosInstanceLatestArticle;
    