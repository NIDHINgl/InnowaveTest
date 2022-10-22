import { View, Text,Platform } from 'react-native'
import React from 'react'
import { Switch } from 'react-native-switch';
import {useDispatch, useSelector} from 'react-redux';
import Actions from '../store/actions'

export default function CustomSwitch() {
  const dispatch = useDispatch();
  const mode = useSelector((state:any) => state.darkMode);

  return (
    <View style={{flexDirection:'row',marginRight:'10%'}}>
        <Text style={{color:mode?'white':'black',marginTop:Platform.OS == 'ios'?'3%':'0.5%',marginRight:'3%',fontWeight:'500'}}>{mode?'Disable':'Enable'} Dark Mode</Text>
      <Switch
          value={mode}
          onValueChange={(val) => dispatch(Actions.changeTheme(val))}
          disabled={false}
          activeText={'On'}
          inActiveText={'Off'}
          circleSize={20}
          barHeight={25}
          circleBorderWidth={3}
          backgroundActive={'green'}
          backgroundInactive={'gray'}
          circleActiveColor={'#30a566'}
          circleInActiveColor={'#000000'}
          changeValueImmediately={true}
          innerCircleStyle={{ alignItems: "center", justifyContent: "center" }}
          outerCircleStyle={{}}
          renderActiveText={false}
          renderInActiveText={false}
          switchLeftPx={2}
          switchRightPx={2}
          switchWidthMultiplier={2}
          switchBorderRadius={30}
        />
    </View>
  )
}