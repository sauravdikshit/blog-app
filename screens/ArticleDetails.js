import { View, Text,Image,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Appbar } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from "@react-navigation/native";
import * as followStatus from "../api/blogApi";
import * as followStatusUnsub from "../api/blogApi";
import * as getArticleById from '../api/blogApi'



export default function ArticleDetails({ route }) {
  const { item } = route.params;
  console.log(item,"ITEM____________");
     
      const [isFollowing, setIsFollowing] = useState(item.isfollowing);
      const [articleData,setArticleData] = useState([])
      // console.log('====================================');
      console.log("follow Status",isFollowing);
      // console.log('====================================');
      const navigation = useNavigation();
      useEffect(() => {
        getArticle();
      }, []);
      
      const getArticle = async () => {
        try {
          const response = await getArticleById.getArticle({
            articleId:item._id
          });
          console.log("========================Article Data=====================================");
    
          console.log(response.data);
          console.log("=============================================================");
          setArticleData(response.data);
        } catch (error) {
          if (error.response.status === 404) {
            alert(error.response.status.message);
          } else {
            console.log(error);
          }
        }
      };
      console.log("========================Article Data use stat=====================================");
    
      console.log(articleData);
      console.log("=============================================================");
      
  const handleFollowStatusChange = async (userId, isFollowing) => {
    // make API call to update the follow status

    try {
      const response = await followStatus.followStatus({
        userId: userId,
        isfollowing: isFollowing,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnFollowStatusChange = async (userId, isFollowing) => {
    // make API call to update the follow status

    try {
      const response = await followStatusUnsub.unFollowStatus({
        userId: userId,
        isfollowing: isFollowing,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };


      const handleFollowToggle = () => {
        setIsFollowing(!isFollowing);
      
        if (!isFollowing) {
          // user is being followed
          handleFollowStatusChange(articleData.user_id, true);
        } else {
          // user is being unfollowed
          handleUnFollowStatusChange(articleData.user_id, false);
        }
      
       
         //  // call the callback function with user id and new follow status
       };

   
  return (
      <SafeAreaView className=" h-full w-full bg-[#F5F5F5]">
      <Appbar className="bg-[#F5F5F5]">
      <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />

      </Appbar>
      <ScrollView className="">
            <View>
            <Image
          className=" w-full h-[184px]"
          source={{
              uri: articleData.article_image,
            }}
        />

                
            </View>

            <View className="flex-col mt-2 space-y-1 px-4">
        <Text className="text-[29px]" style={{ fontFamily: "Poppins_700Bold" }}>
          {articleData.article_title}
        </Text>
        <Text
          className="text-[17px] text-[#5e5d5d]"
          style={{ fontFamily: "Poppins_500Medium" }}
        >
          {articleData.article_sub}
        </Text>
      </View>
     <View className="w-full h-14 ">
      <View className=" flex-row items-center  space-x-4 self-center  top-4 ">
        <Image
          className="rounded-full w-14 h-14 right-4"
          source={{
              uri: articleData.user_image,
            }}
        />


        <View className="flex-col right-5 ">
          <Text
            className="text-[18px] text-[#000000]"
            style={{ fontFamily: "Poppins_500Medium" }}
          >
            {articleData.user_name}
          </Text>
          <Text
            className="text-[10px] text-[#5e5d5d]"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
           {articleData.createdAt}
          </Text>
      
        </View>
      
        <View className="left-4" >
        {articleData.currentuser === true ? ( <></>  
   ):(       <View className="w-[80px] h-[28px] top-1 justify-center">
      <View className={`bg-${isFollowing ? '[#2ed708]' : '[#000000]'}   rounded-full`}>
        <TouchableOpacity
          className="items-center justify-center p-1 "
          onPress={handleFollowToggle}
        >
          <Text
            className="text-[#FFFFFF] text-[12px]"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>)}
     
        </View>
       
        </View>
        </View>
      

       

       
   
      <View className="px-4 mt-12">
            <Text className="text-[17px] text-[#010101]"
          style={{ fontFamily: "Poppins_500Medium" }}>{articleData.article_desc}</Text>
        </View>
      
      </ScrollView>


      </SafeAreaView>
   
  )
}