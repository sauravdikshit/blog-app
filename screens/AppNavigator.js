import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useEffect } from 'react';
//Screens Import
import Intro from "./Intro";
import Login from "./register/Login";
import Signup from "./register/Signup";
import Topics from "./Topics";
import Follow from "./Follow";
// import TabNavigation from "./screens/bottomTab/TabNavigation";
import TextEditor from "./TextEditor";
import ArticleDetails from "./ArticleDetails";
import theme from '../theme'
import { Provider as PaperProvider} from "react-native-paper";
import MainScreen from "./MainScreen";
import DrawerMain from "./drawer/DrawerMain";
import FindPeople from "./FindPeople";



const Stack = createNativeStackNavigator();
export default function AppNavigator() {
 

  // useEffect(() => {
  //   const initialColorScheme = Appearance.getColorScheme();
  //   console.log('Initial color scheme:', initialColorScheme);
  // }, []);
 
  return (

      <GestureHandlerRootView style={{ flex:1 }}>
     
      <PaperProvider theme={theme} >
       <NavigationContainer>
  
         <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="Intro" component={Intro} />
           <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="Signup" component={Signup} />
           <Stack.Screen name="Topics" component={Topics} />
           <Stack.Screen name="Follow" component={Follow} />
           <Stack.Screen name="MainScreen" component={MainScreen} />
       
         
           <Stack.Screen name="TextEditor" component={TextEditor} />
           <Stack.Screen name="ArticleDetails" component={ArticleDetails} />
           <Stack.Screen name="FindPeople" component={FindPeople}/> 
        
        
 
         </Stack.Navigator>
 
     
       </NavigationContainer>
       </PaperProvider>
      
     </GestureHandlerRootView>

     
  )
}