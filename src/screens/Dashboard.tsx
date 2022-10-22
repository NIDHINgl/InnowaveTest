import { View, Text,TouchableOpacity,FlatList } from 'react-native'
import React,{useState} from 'react';
import DealsItem from '../components/DeviceCard';
import styles from './Styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import PlusIcon from '../assets/plus.svg';
import DeleteAlert from '../components/DeleteAlert';
import { handleImport,handleExport,handleUpload } from '../utils/helper';
export default function Dashboard() {
  const navigation = useNavigation<any>();
  const devices = useSelector((state:any) => state.devices);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleUpload} style={styles.button}>
          <Text style={styles.buttonText}>Import</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>handleExport(devices)} style={styles.button}>
          <Text style={styles.buttonText}>Export</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
          data={devices}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({item, index}) => (
            <DealsItem item={item} index={index} changeVisibility={(state:boolean)=>setModalVisible(state)} />
          )}
          ItemSeparatorComponent={()=><View style={styles.seperator} />}
          // ListEmptyComponent={() =>}
        />
      
      <TouchableOpacity
        onPress={() => navigation.navigate('DeviceInput')}
        style={styles.addPostButton}>
        <PlusIcon />
      </TouchableOpacity>
      <DeleteAlert visible={modalVisible} changeVisibility={(state:boolean)=>setModalVisible(state)} />
    </View>
  )
}