import {Platform,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      width:'96%',
      height: 156,
      marginLeft:'2%'
    },
  deviceItem: {
    height: 156,
    width: '96%',
    shadowColor: '#505588',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 10,

    elevation: 5,
    padding: 8,
    flexDirection:'row'
    
  },
  rowStretched: {
    justifyContent: 'space-between',
    width:'67%',
  },
  list: {
    marginTop: 8,
  },
  imageWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width:'30%',
    height:'80%',
    alignSelf:'center'
  },
  image: {
    borderRadius: 16,
    marginTop: 8,
    height: '100%',
    width: 70,
  },
  description: {
    lineHeight: 24,
    fontSize: 16,
    fontWeight: '400',
    maxWidth: 90,
    height: 24,
  },
  detailContainer: {
    backgroundColor: '#2135B4',
    padding: 24,
    flex: 1,
  },
  tearContainer: {
    marginTop: 24,
    backgroundColor: '#ffffff',
    height: 180,
    borderRadius: 8,
  },
  deviceContent: {
    overflow: 'hidden',
    margin: 16,
    height: 150,
    // backgroundColor: '#408AE6',
    borderRadius: 8,
    padding: 8,
    justifyContent: 'flex-end',
  },
  tag: {
    backgroundColor: '#53D769',
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    height: 25,
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 8,
    marginRight: -8,
    width:80,
    position:'absolute',
    top:20,
    right:0
  },
  tagText: {
    fontSize: 11,
    
    color: '#ffffff',
  },
  ticketTitle: {
    fontSize: 18,
    fontWeight: '400',
    textTransform: 'capitalize',
    
    lineHeight:20
  },
  textWrap: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  descriptionTitle: {
    fontSize: 15,
    flexWrap: 'wrap',
    
    lineHeight: 21,
    marginTop: 16,
    fontWeight:'400',
  },
  ticketDesc: {
    fontSize: 14,
    color: '#120D26',
    
    lineHeight: 18,
    opacity: 0.6,
    fontWeight:'500'
  },
  edgeRemoveLeft: {
    position: 'absolute',
    backgroundColor: '#2135B4',
    height: 16,
    width: 16,
    borderRadius: 16,
    top: -7,
    left: -32,
  },
  edgeRemoveRight: {
    position: 'absolute',
    backgroundColor: '#2135B4',
    height: 16,
    width: 16,
    top: -7,
    borderRadius: 16,
    right: -32,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#FF6E6E',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // marginTop: 10,
    // paddingRight: 24,
    paddingLeft: 15,
    // marginBottom: 4,
    height: 156,
  },
  ticketContainer: {
    // width: relativeWidth(335),
    marginTop: 16,
    backgroundColor:'#ffffff',
    padding: 24,
    marginBottom: 32,
  },
  edgeRemoveTopLeft: {
    position: 'absolute',
    backgroundColor: '#2135B4',
    height: 32,
    width: 32,
    borderRadius: 32,
    top: -16,
    left: -16,
  },
  edgeRemoveTopRight: {
    position: 'absolute',
    backgroundColor: '#2135B4',
    height: 32,
    width: 32,
    borderRadius: 32,
    top: -16,
    right: -16,
  },
  edgeRemoveBottomRight: {
    position: 'absolute',
    backgroundColor: '#2135B4',
    height: 32,
    width: 32,
    borderRadius: 32,
    bottom: -16,
    right: -16,
  },
  edgeRemoveBottomLeft: {
    position: 'absolute',
    backgroundColor: '#2135B4',
    height: 32,
    width: 32,
    borderRadius: 32,
    bottom: -16,
    left: -16,
  },
  seperator: {
    marginTop: 32,
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  backIcon: {
    alignSelf: 'flex-start',
    
  },
  backButtonHead: {paddingLeft:10,marginLeft:-12},
  title: {
    fontSize: 20,
    color: '#ffffff',
    // fontFamily: fonts.primary,
    fontWeight: '600',
    marginTop:'2%',
    bottom:Platform.OS == "android"?'3%':'1%',
    
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  activityBox:{height:'100%',width:102,flexDirection:'row'},
  activity:{width:50,height:'100%',justifyContent:'center',alignItems:'center'}
})

export default styles;
