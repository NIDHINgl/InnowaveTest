import React from 'react';
import styles from './Styles';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../assets/back.svg';

const TitleHeader = ({title = ''}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.titleContainer}>
      <TouchableOpacity style={styles.backButtonHead} activeOpacity={0.9}  onPress={() => navigation.goBack()}>
        <BackIcon />
      </TouchableOpacity>
      <Text
        style={styles.title}>
        {title}
      </Text>
      <View />
    </View>
  );
};

export default TitleHeader;
