export const ModuleEvents = {
    GET_DEVICES: 'GET_DEVICES',
    CHANGE_PREVIEW: 'CHANGE_PREVIEW',
    ADD_DEVICE: 'ADD_DEVICE',
    REPLACE_DEVICE: 'REPLACE_DEVICE',
    DELETE_DEVICE: 'DELETE_DEVICE',


   
  };
  const Actions = {
    getDevices: devices => ({
      type: ModuleEvents.GET_DEVICES,
      devices,
    }),
    changePreview: id => ({
      type: ModuleEvents.CHANGE_PREVIEW,
      id,
    }),
    addDevices: device => ({
        type: ModuleEvents.ADD_DEVICE,
        device,
      }),
    replaceDevices: (id,device) => ({
    type: ModuleEvents.REPLACE_DEVICE,
    id,
    device
    }),
    deleteDevices: id => ({
        type: ModuleEvents.DELETE_DEVICE,
        id,
      }),
    
  };
  
  export default Actions;