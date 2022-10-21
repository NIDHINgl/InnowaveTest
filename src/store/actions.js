export const ModuleEvents = {
    GET_DEVICES: 'GET_DEVICES',
    CHANGE_PREVIEW: 'CHANGE_PREVIEW',
    ADD_DEVICE: 'ADD_DEVICE',
    EDIT_DEVICE: 'EDIT_DEVICE',
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
    editDevices: (id,device) => ({
    type: ModuleEvents.EDIT_DEVICE,
    id,
    device
    }),
    deleteDevices: id => ({
        type: ModuleEvents.DELETE_DEVICE,
        id,
      }),
    
  };
  
  export default Actions;