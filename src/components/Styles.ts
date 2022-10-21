import {Platform,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{width:'96%',height: 156,},
  dealsContainer: {
    // justifyContent: 'center',
    backgroundColor:'#FAFAFA'

  },
  dealsItem: {
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
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    width:'67%',
  },
  badgeStatus: {
    position: 'absolute',
    right: -22,
    top: -6,
  },
  dealsSubHeader: {
    fontSize: 16,
    fontWeight: '700',
    color: '#120D26',
    lineHeight: 34,
    opacity: 0.84,
    paddingHorizontal: 16,
    marginTop: '6%',
  },
  dealsSection: {
    // paddingHorizontal: 16,
  },
  dealsColumn: {
    flex: 1,
    justifyContent: 'space-around',
    paddingVertical: 8,
    paddingHorizontal: 16,
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
  discount: {
    // marginTop: 16,
    lineHeight: 24,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2135B4',
    maxWidth: 80,
    height: 24,
  },
  date: {
    marginTop: 16,
    fontSize: 10,
    color: '#1E1F20',
    opacity: 0.6,
  },
  details: {
    marginTop: 8,
    
    fontSize: 12,
    minHeight: 28,
    color: '#2135B4',
    fontWeight:'300',
    lineHeight:16
  },
  inviteContainer: {
    alignItems: 'center',
    marginTop: 8,
    marginRight: -24,
    marginBottom: 3,
  },
  inviteImage: {
    width: '90%',
    height:98
  },
  categories: {
    paddingHorizontal: 16,
    marginTop:'4%'
  },
  categoryList: {
    flexDirection: 'row',
    backgroundColor:'#FAFAFA',
    marginTop: '4%',
    marginBottom: '2%',
    paddingTop: '4%',
    paddingBottom:Platform.OS == 'android' ?2:0
  },
  selectedCategory: {
    borderWidth: 1,
    borderRadius: 26,
    width: 'auto',
    height: 30,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#EFEFEF',
    borderColor: '#D4D4D6',
    marginRight: 8,
  },
  category: {
    // backgroundColor: '#EFEFEF',
    paddingHorizontal: 24,
    paddingVertical: 6,
    borderRadius: 38,
    marginRight: 8,
  },
  categoryTextSelected: {
    color: '#2135B4',
    
  },
  categoryText: {
    color: '#ffffff',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 21,
    
  },

  // Deal Details
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
  dealItemRow: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shareItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 50,
  },
  seeMore: {
    fontSize: 14,
    
    borderWidth: 2,
    borderColor: '#8F92A1',
    borderRadius: 4,
    width: 97,
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    marginTop: 24,
    flexDirection: 'row',
    marginBottom: 40,
  },
  dealContent: {
    overflow: 'hidden',
    margin: 16,
    height: 150,
    // backgroundColor: '#408AE6',
    borderRadius: 8,
    padding: 8,
    justifyContent: 'flex-end',
  },
  detailDiscount: {
    fontSize: 35,
    lineHeight: 52.5,
    color: '#ffffff',
    fontWeight: '600',
    
    marginTop: 36,
  },
  detailDate: {
    color: '#ffffff',
    opacity: 0.8,
    
    fontSize: 12,
  },
  shareButtons: {
    flexDirection: 'row',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  shareButton: {
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7;',
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
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
  dealGreenTick: {
    position: 'absolute',
    top: 2,
    right: -3.5,
    zIndex: -1,
  },
  dealItemTag: {
    position: 'absolute',
    backgroundColor: '#53D769',
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    height: 20,
    justifyContent: 'center',
    paddingLeft: 12,
    paddingRight: 8,
    top: -2,
    right: -4.2,
    marginRight: -8,
    zIndex:1
  },
  dealItemTagText: {
    fontSize: 10,
    
    color: '#ffffff',
  },

  // ticket
  
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
    fontWeight:'300'
  },
  link: {
    fontSize: 13,
    color: '#2C59FC',
    
    // lineHeight: fonts.md,
    top: Platform.OS == 'android' ? 8 : 1,
    fontWeight:'300',
    lineHeight:Platform.OS == 'android' ? 20 : 14,
  },
  dashes: {
    width: 2,
    height: 2,
    marginRight: 2,
    marginBottom: 0,
    backgroundColor: '#ED3269',
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

  // filter
  filterContainer: {
    margin: 24,
  },
  filterSection: {
    marginTop: 48,
  },
  filterTitle: {
    fontSize: 14,
    
    fontWeight: '600',
    color: '#120D26',
    lineHeight: 21,
  },
  buttonWrapper: {
    paddingTop: 12,
    marginBottom: 30,
    flexDirection: 'row',
  },
  filterIconButton: {
    width: 58,
    alignItems: 'center',
    // marginRight: 8,
  },
  iconButtonText: {
    fontSize: 12,
    
    fontWeight: '400',
    opacity: 0.8,
    color: '#120D26',
    textAlign: 'center',
  },
  selectedIconText: {
    color: '#ffffff',
  },
  iconButton: {
    backgroundColor: '#E6EEF6',
    height: 41,
    width: 47,
    justifyContent: 'center',
    marginBottom: 8,
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#505588',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,

    elevation: 5,
  },
  selectedFilterButton: {
    backgroundColor: '#2135B4',
  },
  textButtonWrapper: {
    paddingTop: 12,
    marginBottom: 30,
    flexDirection: 'row',
    maxWidth: 400,
    flexWrap: 'wrap',
    paddingHorizontal: '1%',
  },
  filterTextButton: {
    borderWidth: 1,
    borderRadius: 26,
    width: 'auto',
    height: 30,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    marginRight: 8,
  },
  filterButton: {
    backgroundColor: '#FA4169',
    borderRadius: 40,
    height: 40,
    marginTop: 60,
  },
  filterButtonText: {
    
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 13,
    textAlign: 'center',
  },

  // counter
  counter: {
    backgroundColor: '#FF9E9EB2',
    height: 22,
    width: 22,
    position: 'absolute',
    top: -10,
    right: -1,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  counterText: {
    
    color: '#FF4E4E',
    fontSize: 10,
    fontWeight: '600',
  },
  badge: {
    borderWidth: 1,
    borderRadius: 26,
    width: 'auto',
    height: 30,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#EFEFEF',
    borderColor: '#D4D4D6',
    marginRight: 8,
  },
  badgeSelected: {
    backgroundColor: '#9AAEFF99',
    borderColor: '#113BEB',
  },
  badgeText: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    textTransform: 'capitalize',
    color: '#414757',
    marginLeft: 5,
  },
  badgeTextSelected: {
    color: '#113BEB',
  },
  recentContainer: {
    paddingRight: '9%',
    width: 'auto',
    marginBottom: '6%',
    marginTop: '5%',
    marginLeft: '5%',
    paddingVertical: '1%',
    paddingLeft: '0.5%',
  },
  suggestedContent: {
    // marginBottom: '0.5%',
    width: '91%',
    // marginTop: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  categoriesContent: {
    // marginBottom: '0.5%',
    width: '90%',
    // marginTop: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:'0.5%'
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#FF6E6E',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // marginTop: 10,
    paddingRight: 24,
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
})

export default styles;
