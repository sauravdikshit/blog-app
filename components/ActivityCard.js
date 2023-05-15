import { View, Text } from "react-native";

import {  Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function ActivityCard({ item }) {
  return (
    <View className="flex">
      {/* <View className='flex-col'> */}
      <View className=" flex-row">
        <View className="flex-row w-8/12 space-x-10">
          <Text
            className="text-[15px]"
            style={{ fontFamily: "Poppins_300Light" }}
          >
            {item.createdMonthYear}
          </Text>
          <View className="flex-row space-x-2">
            <Icon name="mode-edit" size={19} color={"grey"} />
            <Text
              className="text-[14px]"
              style={{ fontFamily: "Poppins_300Light" }}
            >
              Wrote an article
            </Text>
          </View>
          
        </View>
      </View>
      <View className="w-11/12 border-l-2 border-dotted   border-[#7b7b7bb2] ml-7 my-1">
      {item.data.map((val, id) => {
            console.log('====================================');
            console.log(val,"dersjf=====",id);
            console.log('====================================');
           
          return (
            
            <View className="pl-16 " key={id}>
           
              <Text
                className="text-[16px]"
                style={{ fontFamily: "Poppins_700Bold", lineHeight: 25 }}
              >
                {val.article_title}
              </Text>
             <Divider className="" style={{backgroundColor:"#7b7b7bb2"}}/>
            </View>
          );
        })}
        
      </View>
    </View>
  );
}
