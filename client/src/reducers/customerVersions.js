const initState = {
  customerVersions: [],
  isFetching: false,
  err: ''
};

const customerVersions = (state = initState, action) => {
  switch(action.type) {
    case 'GET_CUSTOMER_VERSIONS_REQUEST':
      return {
        ...state,
        isFetching: true
      };
    case 'GET_CUSTOMER_VERSIONS_SUCCESS':
      return {
        ...state,
        customerVersions: action.customerVersions,
        isFetching: false,
        err: ''
      };
    case 'GET_CUSTOMER_VERSIONS_FAILURE':
      return {
        ...state,
        isFetching: false,
        err: action.err
      };
    default:
      return state;
  }
};

export default customerVersions;