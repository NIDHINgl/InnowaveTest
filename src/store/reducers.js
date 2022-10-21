import {ModuleEvents} from "./actions";
  
  const initialState = {
    preview: null,
    devices: []
        };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case ModuleEvents.GET_DEVICES:
  
        return {
          ...state,
          devices:action.devices
        };
    case ModuleEvents.CHANGE_PREVIEW:

        return {
            ...state,
            preview:state.devices?.[action.id]
        };
    case ModuleEvents.ADD_DEVICE:
       console.log('action.device',action.device)
        return {...state,devices:[...state.devices,action.device]};
    case ModuleEvents.REPLACE_DEVICE:
        let re_prev = state.preview
        if(state.devices?.length == 1){
            prev = action.device
        }
        let id = state.devices.findIndex(
            (item,index) => index === action.id,
          );
          state.devices[id] = action?.device;
        return {
            ...state,devices:[...state.devices],preview:prev};
    
    case ModuleEvents.DELETE_DEVICE:
       let newPrev = null;
        const newList = state?.devices?.filter(
            (item,index) => index != action.id,
          );
          if(state.devices?.[action.id+1]){
            newPrev = state.devices?.[action.id+1]
          }else if(state.devices?.[action.id-1]){
            newPrev = state.devices?.[action.id-1]
          }

        return {
            ...state,devices:newList,preview:newPrev
        };
  
      default:
        return state;
    }
  }