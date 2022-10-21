import React,{useState,useEffect,useCallback} from 'react';
import { View, Text,TouchableOpacity,SafeAreaView,TextInput } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation,useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import Actions from '../store/actions'

import styles from './Styles';

export default function DeviceInput() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const dispatch = useDispatch();




  const [values,setValues] = useState<any>({
    model:'',
    os:'',
    owner:'',
    description:'',
    image:''
  });

  useEffect(()=>{
    console.log('route?.params?.devicessdevice',typeof route?.params?.index)
    if(route?.params?.device){
      setValues(route?.params?.device)
    }
  },[navigation,route])

  const submitDetails = useCallback(()=>{
    if(route?.params?.device){
      console.log('valuesvalues',values)
      dispatch(Actions.editDevices(route?.params?.index,values))
    }else{
      dispatch(Actions.addDevices(values))
    }
  },[values,route])

  return (
    <SafeAreaView>
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      extraScrollHeight={0.2}
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled">
      <View style={styles.container} >

        <View
          style={styles.formCard}>
          <Text style={styles.welcomeText}>Add Device!</Text>
       

          <View style={{marginTop:'5%'}} >
            <View >
              <Text
                style={styles.cred}
                >
                MODEL
              </Text>
            </View>
            <TextInput
              value={values?.model}
              style={styles.input}
              onChangeText={value => setValues({...values,model:value})}
            />
          </View>
          <View>
            <Text
              style={styles.cred}
             >
              OS
            </Text>
            <TextInput
              value={values?.os}
              style={styles.input}
              onChangeText={value => setValues({...values,os:value})}
            />
          </View>
          <View>
            <Text
              style={styles.cred}
             >
              CURRENT OWNER
            </Text>
            <TextInput
              value={values?.owner}
              style={styles.input}
              onChangeText={value => setValues({...values,owner:value})}
            />
          </View>
          <View>
            <Text
              style={styles.cred}
             >
              DESCRIPTION
            </Text>
            <TextInput
              value={values?.description}
              style={styles.input}
              onChangeText={value => setValues({...values,description:value})}
            />
          </View>
          <View>
            <Text
              style={styles.cred}
             >
              IMAGE URL
            </Text>
            <TextInput
              value={values?.image}
              style={styles.input}
              onChangeText={value => setValues({...values,image:value})}
            />
          </View>
          <TouchableOpacity style={styles.login} onPress={() =>{submitDetails();navigation.goBack()}}>
            <Text
              style={styles.loginText}
             >
              Submit
            </Text>
          </TouchableOpacity>
          
        </View>
      </View>
      
    </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}