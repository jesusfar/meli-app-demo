import {
  SEARCH_ITEMS_REQUESTED,
  FETCH_ITEM,
  fetchItemsFails,
  fetchItemsSuccess,
  fetchItemSuccess,
  fetchItemFails
} from './../../item/ItemActions';

import axios from 'axios';

const meliApiService = store => next => action => {
  next(action);
  switch (action.type) {
    case SEARCH_ITEMS_REQUESTED:
      axios.get('http://127.0.0.1:3000/api/items?q=' + action.payload.query)
        .then(function (response) {
          next(fetchItemsSuccess(response.data));
        })
        .catch(function (error) {
          return next(fetchItemsFails(error));
        });
        break;
    case FETCH_ITEM:
      axios.get('http://127.0.0.1:3000/api/items/' + action.payload.itemId)
        .then((response) => {
          next(fetchItemSuccess(response.data));
        })
        .catch((error) => {
          return next(fetchItemFails(error));
        });
        break;
    default:
      break;
  }

};

export default meliApiService;
