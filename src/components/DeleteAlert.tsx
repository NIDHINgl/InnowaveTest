import React, { useEffect,useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import styles from './Styles';
import { callApi } from '../utils/helper';
import RenderHtml from 'react-native-render-html';

interface ContainerProps {
    visible: boolean;
    changeVisibility:any
}

const DeleteAlert: React.FC<ContainerProps> = ({visible,changeVisibility}) => {
    const [content,setContent] = useState<any>('')
    useEffect(() => {
        deleteContent()
    }, []);

    const deleteContent = async () => {
        const res = await callApi()
        setContent({
            html: `
          ${res?.[0]?.h}`
          })
       
      }
 
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          changeVisibility(!visible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <RenderHtml
                    contentWidth={200}
                    source={content}
                />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => changeVisibility(!visible)}
            >
             <Text style={styles.textStyle}>Okay</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
    </View>
  );
};


export default DeleteAlert;