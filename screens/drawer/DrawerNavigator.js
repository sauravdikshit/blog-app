import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import DrawerMain from './DrawerMain';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
      <GestureHandlerRootView style={{ flex:1 }} >
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>}>
      <Drawer.Screen  name="Main" component={DrawerMain} options={{headerShown:false}}/>
    </Drawer.Navigator>
    </GestureHandlerRootView>
  )
}

export default DrawerNavigator