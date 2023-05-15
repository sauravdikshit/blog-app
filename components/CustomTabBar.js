import React, { useState,useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Text ,ScrollView, } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const CustomTabBar = ({ tabsData, activeTab, onTabPress}) => {
 



  return (
//     <View className="w-full flex-row items-center justify-between bg-[#eee] h-12 mt-4" >
//     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//       {tabs.map((tab, index) => (
//         <TouchableOpacity
//         className=" items-center justify-center"
//           key={index}
//           onPress={() => handleTabPress(index)}
//           style={[
//             styles.tab,
//             index === activeTab && styles.activeTab,
//           ]}
//         >
//           <Text className="" style={styles.tabText}>{tab.name}</Text>
//         </TouchableOpacity>
//       ))}
//       <View
//         style={[
//           styles.slider,
//           {
//             transform: [{ translateX: sliderPosition * 100 }],
//             width: `${100 / tabs.length}%`,
//           },
//         ]}
//       />
//       </ScrollView>
//     </View>

<View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: 40, backgroundColor: '#eee',marginTop:20,}}>
<ScrollView horizontal showsHorizontalScrollIndicator={false}>

{tabsData.map(tab => (
  <TouchableOpacity className=""  key={tab.id} onPress={() => onTabPress(tab.id)} style={{ flex: 1, alignItems: 'center', padding: 10 }}>
  <View className="flex-row items-center space-x-2">
  <MaterialCommunityIcons   name={tab.icon} size={22} color={tab.color} />
    <Text className="text-[16px]" style={{color: activeTab === tab.id ? 'black' : 'gray'}}>{tab.topic}</Text>

  </View>
  <View   style={{ border: activeTab === tab.id ? '2' : '0'}}></View>
  
  </TouchableOpacity>
))}

</ScrollView>

</View>




  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    borderRadius: 0,
    height: 45,
 
    paddingHorizontal: 5,
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

 
    paddingHorizontal: 20,
  },
  activeTab: {
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  tabText: {
    fontSize: 16,
//     fontWeight: 'bold',
  },
  slider: {
    height: '100%',
  
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderRadius: 8,
  },
});



export default CustomTabBar;
