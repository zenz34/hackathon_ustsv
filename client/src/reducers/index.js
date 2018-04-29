import { combineReducers } from 'redux';
import servers from './servers';
import customerVersions from './customerVersions';
import cloudManagement from './cloudManagement';
import requestDemo from './requestDemo';
import login from './login';
import signUp from './signUp';

const reducers = combineReducers({
  servers,
  customerVersions,
  cloudManagement,
  requestDemo,
  login,
  signUp
});

export default reducers;