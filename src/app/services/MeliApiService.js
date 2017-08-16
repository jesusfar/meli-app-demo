import {
  SEARCH_ITEMS_REQUESTED,
  FETCH_ITEM,
  fetchItemsFails,
  fetchItemsSuccess,
  fetchItemSuccess,
  fetchItemFails
} from './../../item/ItemActions';

import axios from 'axios';
import { config } from './../config/Config';

const baseUrl = config.services.meliApi.baseUrl;

const meliApiService = store => next => action => {
  next(action);
  switch (action.type) {
    case SEARCH_ITEMS_REQUESTED:
      axios.get(baseUrl + '/items?q=' + action.payload.query)
        .then((response) => {
          next(fetchItemsSuccess(response.data));
        })
        .catch(function (error) {
          return next(fetchItemsFails(error));
        });
        break;
    case FETCH_ITEM:
      axios.get(baseUrl + '/items/' + action.payload.itemId)
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
