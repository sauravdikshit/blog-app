import axiosInstanceReg from "./userReg";
import axiosInstanceLogin from "./userLogin";
import axiosInstanceGetTopics from "./getTopics";
import axiosInstanceSelectedTopics from "./selectedTopics";
import axiosInstanceGetFollowers from "./getFollowers";
import axiosInstanceGetProfile from "./getProfile";
import axiosInstanceSearchPeople from "./searchPeople";
import axiosInstanceArticlePublish from "./articlePublish";
import axiosInstanceUserTopics from "./userTopics";
import axiosInstanceLatestArticle from "./getLatestArticle";
import axiosInstanceProfileView from "./profileView";
import axiosInstanceSearchArticle from "./articleSearch";
import axiosInstanceBookmark from '../api/bookmark' ;
import axiosInstanceUnBookmark from '../api/unBookmark' ;
import axiosInstanceGetBookmark from "./getBookmark";
import axiosInstanceUpdateProfile from "./updateProfile";
import axiosInstanceRecentActivity from "./recentActivity";
import axiosInstanceGetArticle from "./getArticle";
import axiosInstanceGetTabTopics from "./getTabTopics";

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
  axiosInstanceGetProfile.post("/api/profile", data);

export const getSearchPeople = (data) =>
  axiosInstanceSearchPeople.post("/api/users/search", data);

export const articlePublish = (data) =>
  axiosInstanceArticlePublish.post("/api/article/create", data);

export const userTopics = (data) =>
  axiosInstanceUserTopics.get("/api/selected/getusertopics", data);

///api/selected/gettabtopics


export const getTabTopics = (data) =>
  axiosInstanceGetTabTopics.get("/api/selected/gettabtopics", data);


  export const latestArticle = (data) =>
  axiosInstanceLatestArticle.post("/api/article/getlatest", data);

  export const clap = (data) =>
  axiosInstanceLatestArticle.post("/api/article/clap", data); 

  export const unClap = (data) =>
  axiosInstanceLatestArticle.post("/api/article/unclap", data);  

  export const profileView = (data) =>
  axiosInstanceProfileView.get("/api/profile/user", data);  

  export const searchArticle = (data) =>
  axiosInstanceSearchArticle.post("/api/article/search", data);  

  export const bookmarkArticle = (data) =>
  axiosInstanceBookmark.post("/api/article/bookmark", data);  

  export const unBookmarkArticle = (data) =>
  axiosInstanceUnBookmark.post("/api/article/unbookmark", data);  

 export const getBookmark = ()=>
 axiosInstanceGetBookmark.post("/api/article/getbook") 

 export const updateProfile = (data)=>
 axiosInstanceUpdateProfile.put("/api/profile/update",data) 

 export const recentActivity = (data)=>
 axiosInstanceRecentActivity.post("/api/profile/recent",data) 

 export const getArticle = (data)=>
 axiosInstanceGetArticle.post("/api/article",data) 