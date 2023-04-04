import { View, Text, SafeAreaView,FlatList } from 'react-native'
import React from 'react'
import ArticleCard from '../../../components/ArticleCard'

const Data=[
  {
    id:1,
    profileimage:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/woman.png?alt=media&token=63e6ebae-0859-4be9-9b28-fd13a0da28cc",
    username:"Saurav Dikshit",
    posttime:"Mar 11 , 2023",
    title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    coverimage:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/react-native-1536x864.png?alt=media&token=498eb887-ef21-4e96-8730-0616249d12fe",
    views:"124"


},
{
  id:2,
  profileimage:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/Avatar2.png?alt=media&token=0de8f265-809b-4593-a491-651902e7df05",
  username:"Saurav Dikshit",
  posttime:"Mar 11 , 2023",
  title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  coverimage:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/react-native-1536x864.png?alt=media&token=498eb887-ef21-4e96-8730-0616249d12fe",
  views:"124"


},
{
  id:3,
  profileimage:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/hacker.png?alt=media&token=952dfc1b-9dc0-4cda-8911-4c33566cc81a",
  username:"Saurav Dikshit",
  posttime:"Mar 11 , 2023",
  title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  coverimage:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/react-native-1536x864.png?alt=media&token=498eb887-ef21-4e96-8730-0616249d12fe",
  views:"124"


},
{
  id:4,
  profileimage:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/men.png?alt=media&token=4954b249-d2f0-40f2-85cc-8f6d97655d75",
  username:"Saurav Dikshit",
  posttime:"Mar 11 , 2023",
  title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  coverimage:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/react-native-1536x864.png?alt=media&token=498eb887-ef21-4e96-8730-0616249d12fe",
  views:"124"


},
{
  id:5,
  profileimage:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/profile.png?alt=media&token=c9c141e8-a5ef-40aa-a765-c8aeecaa0027",
  username:"Saurav Dikshit",
  posttime:"Mar 11 , 2023",
  title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  coverimage:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/react-native-1536x864.png?alt=media&token=498eb887-ef21-4e96-8730-0616249d12fe",
  views:"124"


},
{
  id:6,
  profileimage:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/profile.png?alt=media&token=c9c141e8-a5ef-40aa-a765-c8aeecaa0027",
  username:"Saurav Dikshit",
  posttime:"Mar 11 , 2023",
  title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  coverimage:"https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/React-Native-Featured-Image.png?alt=media&token=5cda91d4-20a8-454d-b5a1-a0b94add9480",
  views:"124"


},
]
export default function Java() {
  return (
    <SafeAreaView className="w-full h-full bg-[#EBEBEB]">
    <View className=" flex-1 mt-10 bottom-12">
      <FlatList
      showsVerticalScrollIndicator={false}
      
        data={Data}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item }) => {
          return (
            <ArticleCard
              item={item}
             
            />
          );
        }}
      />
    </View>
 </SafeAreaView>
  )
}