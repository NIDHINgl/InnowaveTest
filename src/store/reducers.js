import {ModuleEvents} from "./actions";
  
  const initialState = {
        preview: null,
        devices: [{
                model:'Galaxy S10',
                os:'Android',
                owner:'Nidhin',
                description:'Intelligent Performance recognizes patterns in your mobile behavior and optimizes usage based on them',
                image:'https://ovantica.com/pub/media/catalog/product/cache/359e51c8e354c4e2b5af98e814f93978/s/a/sam_s10_b.png'
              }],
        darkMode:false
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
    case ModuleEvents.CHANGE_THEME:
      return {...state,darkMode:action.status};
  
      default:
        return state;
    }
  }
