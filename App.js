import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
//Screens Import
import Intro from "./screens/Intro";
import Login from "./screens/register/Login";
import Signup from "./screens/register/Signup";
import Topics from "./screens/Topics";
import Follow from "./screens/Follow";
import TabNavigation from "./screens/bottomTab/TabNavigation";
import TextEditor from "./screens/TextEditor";

import theme from "./theme";
import { Provider as PaperProvider} from "react-native-paper";


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
     <PaperProvider theme={theme} >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Topics" component={Topics} />
          <Stack.Screen name="Follow" component={Follow} />
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          <Stack.Screen name="TextEditor" component={TextEditor} />
       

        </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
