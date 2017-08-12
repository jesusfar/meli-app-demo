import { combineReducers } from 'redux';

import { itemListReducer } from './../../item/ItemReducers';

const reducers = combineReducers({
  itemListReducer: itemListReducer
});

export default reducers;
