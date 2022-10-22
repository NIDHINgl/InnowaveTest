import RNFS from 'react-native-fs';
import React from "react";
import { Alert } from "react-native";
import DocumentPicker from 'react-native-document-picker'
import { store } from '../store';
import Actions from '../store/actions';

const path = RNFS.DocumentDirectoryPath + '/device.json';

const handleAlert = (title:string,content:string) => {
  Alert.alert(
    title,
    content,
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      { text: "OK"}
    ]
  );
}
  
export const handleExport = async (data:any) => {
    try {
        await RNFS.writeFile(path, JSON.stringify(data), 'utf8');
        handleAlert("Success","File export Success.");
        // console.log('RNFS.DocumentDirectoryPath',RNFS.DocumentDirectoryPath)
        
    
    } catch (error) {
        handleAlert("Failed","Unable to export file.");
      
    }
};

export const handleImport = (uri:string) => {
    RNFS.readFile(uri, 'utf8')
      .then((res) => {
        const devices = JSON.parse(res);
        store.dispatch(Actions.importDevices(devices))
      })
      .catch((err) => {
        handleAlert("Failed","Unable to impoet file, Please try later");
      });
  };

export const callApi = async () => {
    return fetch('https://zenquotes.io/api/today')
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
       
      });
  };

  export const handleUpload = async () => {
    const pickerResult = await DocumentPicker.pickSingle({
      presentationStyle: 'fullScreen',
      copyTo: 'cachesDirectory',
    })
    if(pickerResult?.type != "application/json"){
      handleAlert("Failed","Please Upload json file.");
      
    }else{
      handleImport(pickerResult?.uri)
    }
  };

export const keyExtractor = (item:any, index:number) => index.toString();
 