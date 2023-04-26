import { View, Text,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function FindPeopleCard({ item,onFollowStatusChange,onFollowStatusChangeUnsub }) {

  const [isFollowing, setIsFollowing] = useState(item.isfollowing);
  console.log('====================================');
  console.log("follow Status",isFollowing);
  console.log('====================================');
 const handleFollowToggle = () => {
  setIsFollowing(!isFollowing);

  if (!isFollowing) {
    // user is being followed
    onFollowStatusChange(item._id, true);
  } else {
    // user is being unfollowed
    onFollowStatusChangeUnsub(item._id, false);
  }

 
   //  // call the callback function with user id and new follow status
 };


      



      const selectedTopicsString = item.selected_topics.slice(0, 2).join(" , ");

      const truncatedSelectedTopics = selectedTopicsString.length > 20
        ? selectedTopicsString.substring(0, 30) + "..."
        : selectedTopicsString;


        console.log("truncatedSelectedTopics",truncatedSelectedTopics)

  return (
    <View className=" flex-row border-b-[0.5px] border-b-[#c0bfbf] p-[10px] m-1 items-center justify-between">
      <View className="flex-row items-center space-x-2">
      <Image
          className="rounded-full w-[80px] h-[80px] "
          source={{
              uri: item.profileimage
            }}
        />
      <View className="flex-col ">
      <Text className="text-[15px] text-[#000000] top-1"
            style={{ fontFamily: "Poppins_500Medium" }}>{item.name}</Text>
      <Text className="text-[12px] text-[#444444] bottom-0"
            style={{ fontFamily: "Poppins_300Light" }}>{item.username}</Text>      
     <View className="flex-row items-center w-44 h-8 space-x-1 bottom-1">
     <Text className="text-[12px] text-[#5C5C5C] "
            style={{ fontFamily: "Poppins_500Medium" }}>Topics:</Text>
      <Text className="text-[12px] text-[#D54D1E] items-center"
            style={{ fontFamily: "Poppins_500Medium" }}>{truncatedSelectedTopics}</Text>


     </View>
        
      </View>
      

    


      </View>


        <View className="ml-4 bottom-2">
      <View className={`bg-${isFollowing ? '[#00cc00]' : '[#5c5c5caa]'} w-[80px] h-[28px] rounded-full`}>
        <TouchableOpacity
          className="items-center justify-center p-1"
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
    </View>
    </View>
  )
}