import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILS,
  FETCH_ITEM,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILS,
  SEARCH_ITEMS_REQUESTED
} from './ItemActions';

export const initialState = {
  items: [],
  categories: []
}

export function itemListReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ITEMS_REQUESTED:
      return {
        ...state,
        fetchInProcess: true
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
        categories: action.payload.categories
      }
    case FETCH_ITEMS_FAILS:
      return {
        ...state,
        items: [],
        categories: [],
        error: 'Failed in fetch items'
      };
    default:
      return state;
  }
}


