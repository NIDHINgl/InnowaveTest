import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react';
import DealsItem from '../components/DeviceCard';
import styles from './Styles';
import {useNavigation} from '@react-navigation/native';

export default function Dashboard() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      
      <DealsItem />
      <TouchableOpacity
        onPress={() => navigation.navigate('DeviceInput')}
        style={styles.addPostButton}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  )
}