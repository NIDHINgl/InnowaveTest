import { View, Text,TouchableOpacity,FlatList } from 'react-native'
import React from 'react';
import DealsItem from '../components/DeviceCard';
import styles from './Styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

export default function Dashboard() {
  const navigation = useNavigation<any>();
  const devices = useSelector((state:any) => state.devices);
console.log('devicesdevices',devices)

  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <FlatList
          data={devices}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <DealsItem item={item} index={index} />
          )}
          ItemSeparatorComponent={()=><View style={styles.seperator} />}
          // ListEmptyComponent={() =>}
        />
      
      <TouchableOpacity
        onPress={() => navigation.navigate('DeviceInput')}
        style={styles.addPostButton}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  )
}