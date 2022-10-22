import React, {useState, useEffect} from 'react';
import {Image, View, Platform,Text, Animated} from 'react-native';
import styles from './Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation,useRoute} from '@react-navigation/native';
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';
import Actions from '../store/actions'
import {useDispatch,useSelector} from 'react-redux';
import DeleteIcon from '../assets/delete.svg';
import { callApi } from '../utils/helper';
import RenderHtml from 'react-native-render-html';

const DealsItem = ({item,index,changeVisibility}) => {
  
  const navigation = useNavigation();

  const [didSwipe, setSwiped] = useState(false);
  const dispatch = useDispatch();

  return (
    <SwipeRow
      stopLeftSwipe={1}
      leftOpenValue={0}
      rightOpenValue={-92}
      style={styles.container}
      onRowPress={()=>navigation.navigate('Details',{index:index})}
      onSwipeValueChange={(...params) => {
        if (params[0].value < -0.4) {
          setSwiped(true);
        } else {
          setSwiped(false);
        }
      }}>
        <View style={didSwipe ? styles.rowBack : {}}>
        <View style={styles.activityBox}>
        <TouchableOpacity
          style={styles.activity}
          onPress={() => {
            setSwiped(false);
            navigation.navigate('DeviceInput',{
              device:{
                model:item?.model,
                os:item?.os,
                owner:item?.owner,
                description:item?.description,
                image:item?.image
              },
              index:index
            })
          }}>
          <Image style={{width:20,height:20}} resizeMethod='resize' source={require('../assets/edit.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.activity}
          onPress={() => {
            setSwiped(false);
            changeVisibility(true)
            dispatch(Actions.deleteDevices(index))
          }}>
            <DeleteIcon />
        </TouchableOpacity>
        </View>
       
      </View>
    <Animated.View>
     
      <Animated.View style={styles.deviceItem}>
        <View style={styles.imageWrapper}>
        
          <Image style={styles.image} source={{uri: item?.image}} />
        </View>
        <View style={styles.rowStretched}>
          <View style={{flexDirection:'row'}}>
            <Text numberOfLines={1} style={styles.description}>
            Model :{' '}
            </Text><Text numberOfLines={1} style={styles.description}>
            {item?.model}
            </Text>
          </View>

          <View style={{flexDirection:'row'}}>
          <Text numberOfLines={1} style={styles.description}>
           Os :{' '}
          </Text><Text numberOfLines={1} style={styles.description}>
           {item?.os}
          </Text>
          </View>

          <View style={{flexDirection:'row'}}>
          <Text numberOfLines={1} style={styles.description}>
           Owner :{' '}
          </Text><Text numberOfLines={1} style={styles.description}>
           {item?.owner}
          </Text>
          </View>

          <View style={{flexDirection:'row'}}>
          <Text numberOfLines={1} style={styles.description}>
           Details :{' '}
          </Text>
          <Text numberOfLines={3} style={styles.description}>
           {item?.description}
          </Text>
          </View>
          
        </View>
      
      </Animated.View>
    </Animated.View>
    </SwipeRow>
  );
};

export default DealsItem;
