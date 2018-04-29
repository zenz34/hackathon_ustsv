import axios from 'axios';

const getServersRequest = () => {
  return {
    type: 'GET_SERVERS_REQUEST'
  };
};

const getServersSuccess = servers => {
  return {
    type: 'GET_SERVERS_SUCCESS',
    servers
  };
};

const getServersFailure = err => {
  return {
    type: 'GET_SERVERS_FAILURE',
    err
  };
};

const API_URL = '/api/';

export const getServers = () => {
  return dispatch => {
    dispatch(getServersRequest());
    axios.get(API_URL)
      .then(response => {
        dispatch(getServersSuccess(response.data));
      })
      .catch(err => {
        dispatch(getServersFailure(err));
      });
  };
};

const getCustomerVersionsRequest = () => {
  return {
    type: 'GET_CUSTOMER_VERSIONS_REQUEST'
  };
};

const getCustomerVersionsSuccess = customerVersions => {
  return {
    type: 'GET_CUSTOMER_VERSIONS_SUCCESS',
    customerVersions
  };
};

const getCustomerVersionsFailure = err => {
  return {
    type: 'GET_CUSTOMER_VERSIONS_FAILURE',
    err
  };
};

export const getCustomerVersions = () => {
  return dispatch => {
    dispatch(getCustomerVersionsRequest());
    axios.get(API_URL)
      .then(response => {
        dispatch(getCustomerVersionsSuccess(response.data));
      })
      .catch(err => {
        dispatch(getCustomerVersionsFailure(err));
      });
  };
};

export const changeValue = value => {
  return {
    type: 'CHANGE_VALUE',
    value
  };
};

export const changeCurVersion = curVersion => {
  return {
    type: 'CHANGE_CUR_VERSION',
    curVersion
  };
};

const uploadDemoRequest = message => {
  return {
    type: 'UPLOAD_DEMO_REQUEST',
    message
  };
};

const uploadDemoSuccess = () => {
  return {
    type: 'UPLOAD_DEMO_SUCCESS'
  };
};

const uploadDemoFailure = err => {
  return {
    type: 'UPLOAD_DEMO_FAILURE',
    err
  };
};

export const uploadDemo = message => {
  return dispatch => {
    dispatch(uploadDemoRequest(message));
    axios({
      url: API_URL,
      method: 'post',
      data: message
    })
      .then(response => {
        dispatch(uploadDemoSuccess());
      })
      .catch(err => {
        dispatch(uploadDemoFailure(err));
      });
  };
};

export const changeLoginEmail = email => {
  return {
    type: 'CHANGE_LOGIN_EMAIL',
    email
  };
};

export const changeLoginPassword = password => {
  return {
    type: 'CHANGE_LOGIN_PASSWORD',
    password
  };
};

const loginRequest = () => {
  return {
    type: 'LOGIN_REQUEST'
  }
}

const loginSuccess = info => {
  return {
    type: 'LOGIN_SUCCESS',
    info
  };
};

const loginFailure = err => {
  return {
    type: 'LOGIN_FAILURE',
    err
  };
};

export const login = () => {
  return (dispatch, getState) => {
    dispatch(loginRequest());
    axios({
      url: API_URL + 'authentication',
      method: 'post',
      data: getState().user
    })
      .then(response => {
        if (response.status === 200) {
          dispatch(loginSuccess(response.data));
        } else {
          dispatch(loginFailure(response.data));
        }
      })
      .catch(err => {
        dispatch(loginFailure(err));
      });
  };
};

const signUpRequest = user => {
  return {
    type: 'SIGN_UP_REQUEST',
    user
  };
};

const signUpSuccess = () => {
  return {
    type: 'SIGN_UP_SUCCESS'
  };
};

const signUpFailure = err => {
  return {
    type: 'SIGN_UP_FAILURE',
    err
  };
};

export const signUp = user => {
  return dispatch => {
    dispatch(signUpRequest(user));
    axios({
      url: API_URL + 'user',
      method: 'post',
      data: user
    })
      .then(response => {
        dispatch(signUpSuccess());
      })
      .catch(err => {
        dispatch(signUpFailure(err));
      });
  };
};