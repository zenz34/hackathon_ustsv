const initState = {
  value: '',
  curVersion: '',
};

const cloudManagement = (state = initState, action) => {
  switch(action.type) {
    case 'CHANGE_VALUE':
      return {
        ...state,
        value: action.value
      };
    case 'CHANGE_CUR_VERSION':
      return {
        ...state,
        curVersion: action.curVersion
      };
    default:
      return state;
  };
};

export default cloudManagement;