import axiosInstanceReg from "./userReg";
import axiosInstanceLogin from "./userLogin";
import axiosInstanceGetTopics from "./getTopics";
import axiosInstanceSelectedTopics from "./selectedTopics";
import axiosInstanceGetFollowers from "./getFollowers";
import axiosInstanceGetProfile from "./getProfile";

export const userRegistration = (data) =>
  axiosInstanceReg.post("/api/users/register", data);
  export const userLogin = (data) =>
  axiosInstanceLogin.post("/api/users/login", data);  

  export const getTopics = (data) =>
  axiosInstanceGetTopics.get("/api/topic/get", data); 

  export const selectedTopics = (data) =>
  axiosInstanceSelectedTopics.post("/api/selected", data); 

  export const getFollowers = (data) =>
  axiosInstanceGetFollowers.get("/api/selected/getuser", data);

  export const followStatus = (data) =>
  axiosInstanceGetFollowers.post("/api/users/sub", data);

  export const followStatusUnsub = (data) =>
  axiosInstanceGetFollowers.post("/api/users/unsub", data);

  export const getProfile = (data) =>
  axiosInstanceGetProfile.get("/api/users/profile", data);

  
