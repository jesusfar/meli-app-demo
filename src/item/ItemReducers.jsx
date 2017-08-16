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
  categories: [],
  item: null,
  error: null
}

export function itemListReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ITEMS_REQUESTED:
      return {
        ...state
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
        categories: action.payload.categories,
        error: null
      }
    case FETCH_ITEMS_FAILS:
      return {
        ...state,
        items: [],
        categories: [],
        error: {
          code: getErrorCodeFrom(action.payload)
        }
      };
    case FETCH_ITEM:
      return {
        ...state
      };
    case FETCH_ITEM_SUCCESS:
      return {
        ...state,
        item: action.payload.item,
        error: null
      };
    case FETCH_ITEM_FAILS:
      return {
        ...state,
        item: null,
        error: {
          code: getErrorCodeFrom(action.payload)
        }
      };
    default:
      return state;
  }
}

function getErrorCodeFrom(payload) {
  let errorCode = (typeof payload.error.response == 'undefined') ? -1 : payload.error.response.status;
  return errorCode;
}


