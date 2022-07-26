import {createStore, combineReducer} from 'redux';
import userReducer from './reducers/userReducer';

const reducers = combineReducer({users: userReducer});
const store = createStore(reducers);

export default store;
