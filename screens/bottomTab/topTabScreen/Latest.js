import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import ArticleCard from "../../../components/ArticleCard";
import { LinearGradient } from "expo-linear-gradient";

const Data = [
  {
    id: 1,
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/woman.png?alt=media&token=63e6ebae-0859-4be9-9b28-fd13a0da28cc",
    username: "Saurav Dikshit",
    posttime: "Mar 11 , 2023",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    content:
      "There are many variations of passages of Lorem Ipsum available,\nbut the majority have suffered alteration in some form, \nby injected humour, or randomised words which don't look even slightly believable. \nIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in \nthe middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, \nmaking this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. \nThe generated Lorem Ipsum is therefore always free from repetition,\n injected humour, or non-characteristic words etc ",
    coverimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/react-native-1536x864.png?alt=media&token=498eb887-ef21-4e96-8730-0616249d12fe",
    views: "2",
  },
  {
    id: 2,
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/Avatar2.png?alt=media&token=0de8f265-809b-4593-a491-651902e7df05",
    username: "Saurav Dikshit",
    posttime: "Mar 11 , 2023",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
    coverimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/react-native-1536x864.png?alt=media&token=498eb887-ef21-4e96-8730-0616249d12fe",
    views: "124",
  },
  {
    id: 3,
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/hacker.png?alt=media&token=952dfc1b-9dc0-4cda-8911-4c33566cc81a",
    username: "Saurav Dikshit",
    posttime: "Mar 11 , 2023",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
    coverimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/react-native-1536x864.png?alt=media&token=498eb887-ef21-4e96-8730-0616249d12fe",
    views: "124",
  },
  {
    id: 4,
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/men.png?alt=media&token=4954b249-d2f0-40f2-85cc-8f6d97655d75",
    username: "Saurav Dikshit",
    posttime: "Mar 11 , 2023",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc",
    coverimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/React-Native-Featured-Image.png?alt=media&token=5cda91d4-20a8-454d-b5a1-a0b94add9480",
    views: "124",
  },
  {
    id: 5,
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/profile.png?alt=media&token=c9c141e8-a5ef-40aa-a765-c8aeecaa0027",
    username: "Saurav Dikshit",
    posttime: "Mar 11 , 2023",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    coverimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/react-native-1536x864.png?alt=media&token=498eb887-ef21-4e96-8730-0616249d12fe",
    views: "124",
  },
  {
    id: 6,
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/profile.png?alt=media&token=c9c141e8-a5ef-40aa-a765-c8aeecaa0027",
    username: "Saurav Dikshit",
    posttime: "Mar 11 , 2023",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    coverimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/React-Native-Featured-Image.png?alt=media&token=5cda91d4-20a8-454d-b5a1-a0b94add9480",
    views: "124",
  },

  {
    id: 7,
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/profile.png?alt=media&token=c9c141e8-a5ef-40aa-a765-c8aeecaa0027",
    username: "Saurav Dikshit",
    posttime: "Mar 11 , 2023",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    coverimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/React-Native-Featured-Image.png?alt=media&token=5cda91d4-20a8-454d-b5a1-a0b94add9480",
    views: "114",
  },

  {
    id: 8,
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/men.png?alt=media&token=4954b249-d2f0-40f2-85cc-8f6d97655d75",
    username: "Saurav Dikshit",
    posttime: "Mar 11 , 2023",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    coverimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/React-Native-Featured-Image.png?alt=media&token=5cda91d4-20a8-454d-b5a1-a0b94add9480",
    views: "134",
  },
  {
    id: 9,
    profileimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/woman.png?alt=media&token=63e6ebae-0859-4be9-9b28-fd13a0da28cc",
    username: "Saurav Dikshit",
    posttime: "Mar 11 , 2023",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    coverimage:
      "https://firebasestorage.googleapis.com/v0/b/myapp-cbe31.appspot.com/o/react-native-1536x864.png?alt=media&token=498eb887-ef21-4e96-8730-0616249d12fe",
    views: "154",
  },
];

export default function Latest() {
  return (
    <SafeAreaView className="  w-full h-full bg-[#F5F5F5]">
      {/* <LinearGradient 
           className=" absolute w-full h-full left-0 right-0 bottom-0 top-0 "
            colors={['#000',"#FFFa", '#000']}
            start={{ x: 2, y: 1 }}
            end={{ y: 1, x: 1 }}/> */}
      <View className=" flex-1 top-2 mb-16">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          keyExtractor={(item, index) => "key" + index}
          renderItem={({ item }) => {
            return <ArticleCard item={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
}
