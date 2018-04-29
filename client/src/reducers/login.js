const initState = {
  user: {
    email: '',
    password: ''
  },
  isLogging: false,
  success: false,
  err: ''
};

const login = (state = initState, action) => {
  switch(action.type) {
    case 'CHANGE_LOGIN_EMAIL':
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email
        }
      };
    case 'CHANGE_LOGIN_PASSWORD':
      return {
        ...state,
        user: {
          ...state.user,
          password: action.password
        }
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isLogging: true
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLogging: false,
        success: true,
        err: ''
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isLogging: false,
        success: false,
        err: action.err
      };
    default:
      return state;
  }
};

export default login;