const initState = {
  message: {},
  isUploading: false,
  err: ''
};

const requestDemo = (state = initState, action) => {
  switch(action.type) {
    case 'UPLOAD_DEMO_REQUEST':
      return {
        ...state,
        message: action.message,
        isUploading: true
      };
    case 'UPLOAD_DEMO_SUCCESS':
      return {
        ...state,
        isUploading: false,
        err: ''
      };
    case 'UPLOAD_DEMO_FAILURE':
      return {
        ...state,
        isUploading: false,
        err: action.err
      };
    default:
      return state;
  }
};

export default requestDemo;