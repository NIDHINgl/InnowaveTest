import { View, Text } from 'react-native'
import React from 'react'

export default function EmptyCard() {
  return (
    <View style={{flex:1,marginTop:'50%'}}>
        <Text style={{color:'blue'}}>No devices added yet!</Text>
    </View>
  )
}