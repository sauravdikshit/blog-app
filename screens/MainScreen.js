import { View, Text } from 'react-native'
import React from 'react'
import DrawerNavigator from './drawer/DrawerNavigator'

export default function MainScreen() {
  return (
      <View style={{flex:1}}>
      <DrawerNavigator/>
     </View>
  )
}