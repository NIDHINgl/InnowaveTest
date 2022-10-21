import React, {useState, useEffect} from 'react';
import {Image, View, Platform,Text} from 'react-native';
import styles from './Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation,useRoute} from '@react-navigation/native';
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';
import Actions from '../store/actions'
import {useDispatch,useSelector} from 'react-redux';

const DealsItem = ({item,index}) => {
  
  const navigation = useNavigation();
  const route = useRoute();

  const [didSwipe, setSwiped] = React.useState();
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
        <TouchableOpacity
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
          <Image style={{width:30,height:30}} source={require('../assets/edit.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSwiped(false);
            dispatch(Actions.deleteDevices(index))
          }}>
          <Image style={{width:30,height:30}} source={require('../assets/delete.png')} />
        </TouchableOpacity>
      </View>
    <View>
     
      <View style={styles.dealsItem}>
        <View style={styles.imageWrapper}>
        
          <Image style={styles.image} source={{uri: item?.image}} />
        </View>
        <View style={styles.rowStretched}>
          <View style={{flexDirection:'row'}}>
            <Text numberOfLines={1} style={styles.discount}>
            Model :{' '}
            </Text><Text numberOfLines={1} style={styles.discount}>
            {item?.model}
            </Text>
          </View>

          <View style={{flexDirection:'row'}}>
          <Text numberOfLines={1} style={styles.discount}>
           Os :{' '}
          </Text><Text numberOfLines={1} style={styles.discount}>
           {item?.os}
          </Text>
          </View>

          <View style={{flexDirection:'row'}}>
          <Text numberOfLines={1} style={styles.discount}>
           Owner :{' '}
          </Text><Text numberOfLines={1} style={styles.discount}>
           {item?.owner}
          </Text>
          </View>

          <View style={{flexDirection:'row'}}>
          <Text numberOfLines={1} style={styles.discount}>
           Details :{' '}
          </Text><Text numberOfLines={1} style={styles.discount}>
           {item?.description}
          </Text>
          </View>
          
        </View>
      
      </View>
    </View>
    </SwipeRow>
  );
};

export default DealsItem;
