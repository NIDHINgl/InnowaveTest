import React, {useState, useEffect} from 'react';
import {Image, View, Platform,Text} from 'react-native';
import styles from './Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';

const DealsItem = ({item,index}) => {
  
  const navigation = useNavigation();
  const [didSwipe, setSwiped] = React.useState();

  

  return (
    <SwipeRow
      stopLeftSwipe={1}
      leftOpenValue={0}
      rightOpenValue={-92}
      style={styles.container}
      onRowPress={()=>navigation.navigate('Details')}
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
          }}>
          <Image style={{width:30,height:30}} source={require('../assets/edit.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSwiped(false);
          }}>
          <Image style={{width:30,height:30}} source={require('../assets/delete.png')} />
        </TouchableOpacity>
      </View>
    <View>
     
      <View style={styles.dealsItem}>
        <View style={styles.imageWrapper}>
        
          <Image style={styles.image} source={{uri: 'https://i.gadgets360cdn.com/products/large/moto-g52-db-709x800-1649827920.jpg'}} />
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
