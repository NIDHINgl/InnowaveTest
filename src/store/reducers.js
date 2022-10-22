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
    case ModuleEvents.ADD_DEVICE:
        return {...state,devices:[...state.devices,action.device]};
    case ModuleEvents.IMPORT_DEVICES:
        return {...state,devices:[...state.devices,...action.devices]};

    case ModuleEvents.EDIT_DEVICE:
        
          state.devices[action?.id] = action?.device;
        return {...state,devices:[...state.devices]};
    
    case ModuleEvents.DELETE_DEVICE:
        const newList = state?.devices?.filter(
            (item,index) => index != action.id,
          );

        return {...state,devices:newList};
  
      default:
        return state;
    }
  }