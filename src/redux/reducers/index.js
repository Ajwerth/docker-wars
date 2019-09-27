import { combineReducers } from 'redux';
import planetListReducer from './planetListReducer';


const appReducer = combineReducers({
  planetListReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;