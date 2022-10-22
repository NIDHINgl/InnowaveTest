import RNFS from 'react-native-fs';
import React from "react";
import { Alert } from "react-native";
import DocumentPicker from 'react-native-document-picker'
import { store } from '../store';
import Actions from '../store/actions';

const path = RNFS.DocumentDirectoryPath + '/device.json';
  
export const handleExport = async (data:any) => {
    try {
        await RNFS.writeFile(path, JSON.stringify(data), 'utf8');
        Alert.alert(
          "Success",
          "File export Success.",
          [
            {
              text: "Cancel",
              style: "cancel"
            },
            { text: "OK"}
          ]
        );
    
        console.log('Success!',RNFS.DocumentDirectoryPath);
    } catch (error) {
      Alert.alert(
        "Failed",
        "Unable to export file.",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "OK"}
        ]
      );
        console.log(error);
    }
};

export const handleImport = (uri:string) => {
    RNFS.readFile(uri, 'utf8')
      .then((res) => {
        console.log(res);
        const devices = JSON.parse(res);
        store.dispatch(Actions.importDevices(devices))
      })
      .catch((err) => {
        console.log(err.message, err.code);
      });
  };

export const callApi = async () => {
    return fetch('https://zenquotes.io/api/today')
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  export const handleUpload = async () => {
    const pickerResult = await DocumentPicker.pickSingle({
      presentationStyle: 'fullScreen',
      copyTo: 'cachesDirectory',
    })
    if(pickerResult?.type != "application/json"){
      Alert.alert(
        "Failed",
        "Please Upload json file.",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "OK"}
        ]
      );
    }else{
      handleImport(pickerResult?.uri)
    }
    console.log('pickerResult',pickerResult)
  };