const initState = {
  user: {},
  isSigning: false,
  success: false,
  err: ''
};

const signUp = (state = initState, action) => {
  switch(action.type) {
    case 'SIGN_UP_REQUEST':
      return {
        ...state,
        user: action.user,
        isSigning: true
      };
    case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        isSigning: false,
        success: true,
        err: ''
      };
    case 'SIGN_UP_FAILURE':
      return {
        ...state,
        isSigning: false,
        success: false,
        err: action.err
      };
    default:
      return state;
  }
};

export default signUp;