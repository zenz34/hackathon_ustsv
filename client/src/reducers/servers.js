const initState = {
  servers: [],
  isFetching: false,
  err: ''
};

const servers = (state = initState, action) => {
  switch(action.type) {
    case 'GET_SERVERS_REQUEST':
      return {
        ...state,
        isFetching: true
      };
    case 'GET_SERVERS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        servers: action.servers,
        err: ''
      };
    case 'GET_SERVERS_FAILURE':
      return {
        ...state,
        isFetching: false,
        err: action.err
      };
    default:
      return state;
  }
};

export default servers;