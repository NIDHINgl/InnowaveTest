import {Platform,StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    width:'100%',
  },
  addPostButton:{
    position: 'absolute',                                          
    bottom: 15,
    right:20,
    width: 60,
    height: 60,
    backgroundColor: '#F90064',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:50,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: {
    height: 1,
    width: 1
    }, 
  },
  scrollContainer:{
    paddingBottom: 68,
    backgroundColor:'#FAFAFA'
  },
  welcomeText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 22,
    display: 'flex',
    // textAlign: 'center',
    color: '#1E1F20',
  },
  loginContent: {
    fontStyle: 'normal',
    // fontWeight: '400',
    fontSize: 14,
    display: 'flex',
    color: '#5F686F',
    textAlign: 'center'
  },
  loginText:{
    textTransform: 'uppercase',
    alignSelf:'center'
   },
 
  formCard: {
    height: '100%',
    width:'90%'
  },
  cred:{
    letterSpacing: 1, 
    color: '#1E1F20',
    marginTop:'3%'
   },
   input: {
    borderColor: 'grey',
    borderRadius: 4,
    borderWidth: 2,
    // color: 'red',
    fontSize: 14,
    fontWeight: '500',
    height:40,
    marginTop:5,
    paddingLeft:10
  },
  login: {
    backgroundColor: '#FA4169',
    marginTop: '10%',
    height: 48,
    borderRadius: 40,
    justifyContent:'center'
  },
  seperator:{
    height:10
  },
})

export default styles;
