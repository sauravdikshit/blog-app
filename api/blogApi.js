import axiosInstanceReg from "./userReg";
import axiosInstanceLogin from "./userLogin";
import axiosInstanceGetTopics from "./getTopics";
import axiosInstanceSelectedTopics from "./selectedTopics";
import axiosInstanceGetFollowers from "./getFollowers";
import axiosInstanceGetProfile from "./getProfile";
import axiosInstanceSearchPeople from "./searchPeople";

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
  axiosInstanceGetFollowers.post("/api/users/follow", data);

  export const unFollowStatus = (data) =>
  axiosInstanceGetFollowers.post("/api/users/unfollow", data);

  export const getProfile = (data) =>
  axiosInstanceGetProfile.get("/api/profile", data);

  export const getSearchPeople = (data) =>
  axiosInstanceSearchPeople.post("/api/users/search", data);

  
