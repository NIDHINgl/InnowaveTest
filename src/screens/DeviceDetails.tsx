import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Text,
  Dimensions
} from 'react-native';
import styles from '../components/Styles';
import TitleHeader from '../components/TitleHeader';
import QRCode from 'react-native-qrcode-svg';
import {useSelector} from 'react-redux';
import {useNavigation,useRoute} from '@react-navigation/native';


const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const DealDetails = () => {
  const route = useRoute<any>();

  const device = useSelector((state:any) => state.devices)[route?.params?.index]||[];


  const dashCount = Math.ceil(
    (SCREEN_WIDTH - 96 / 12),
  );

  return (
    <View style={styles.detailContainer}>
      <TitleHeader title="Device Details" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.tearContainer}>
          <ImageBackground
            style={styles.dealContent}
            source={{uri: device?.image}}>
            {/* <View style={styles.rowStretched}>
              
              <View
                style={styles.tag}>
                <Text style={styles.tagText}>
                  android
                </Text>
              </View>
            </View> */}
            <View style={styles.detailsRow}>
              
              <View style={styles.shareButtons}>
                <TouchableOpacity
                  onPress={() =>
                    console.log('ddd')
                  }
                  style={styles.shareButton}>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => console.log('d')}
                  style={styles.shareButton}>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.ticketContainer}>
          <View style={styles.edgeRemoveTopLeft} />
          <View style={styles.edgeRemoveTopRight} />
          <Text numberOfLines={2} style={styles.ticketTitle}>
          {device?.model}
          </Text>

          <View style={styles.textWrap}>
            <Text numberOfLines={6} style={styles.descriptionTitle}>
              Description:{' '}
              <Text style={styles.ticketDesc}>
              {device?.description}
              </Text>

            </Text>
            <TouchableOpacity >
            <Text numberOfLines={2} style={styles.descriptionTitle}>
              Owner:{' '}
              
                <Text  numberOfLines={2} style={styles.ticketDesc}>
                {device?.owner}

                </Text>
              
            </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.seperator}>
            <View style={styles.rowStretched}>
              <View style={styles.edgeRemoveLeft} />
              {/* {[...Array(16)].map((_, i) => {
                return <View key={i} style={styles.dashes} />;
              })} */}
            </View>
            <View style={styles.edgeRemoveRight} />
          </View>

          <View style={{width:'100%',alignItems:'center'}}>
          <QRCode
        value={device?.model}
        color={'black'}
        backgroundColor={'white'}
        size={100}
        logo={{uri:'https://i.gadgets360cdn.com/products/large/moto-g52-db-709x800-1649827920.jpg'}}
        logoMargin={2}
        logoSize={20}
        logoBorderRadius={10}
        logoBackgroundColor={'transparent'}
        />
          </View>

          <Text numberOfLines={1} style={styles.descriptionTitle}>
            OS:{' '}
            <Text numberOfLines={2} style={styles.ticketDesc}>
            {device?.os}
            </Text>
          </Text>

          <View style={styles.edgeRemoveBottomLeft} />
          <View style={styles.edgeRemoveBottomRight} />
        </View>
      </ScrollView>
    </View>
  );
};

export default DealDetails;
