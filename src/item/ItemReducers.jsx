import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILS,
  FETCH_ITEM,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILS
} from './ItemActions';

const initialState = {
  items: []
}

export function itemListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return state;
    case FETCH_ITEMS_SUCCESS:
      return state;
    case FETCH_ITEMS_FAILS:
      return state;
    case FETCH_ITEM:
      return Object.assign({}, state, {
        items: [
          {
            id: 'MLA234'
          },
          {
            id: 'MLAS2323'
          }
        ]
      });
    case FETCH_ITEM_SUCCESS:
      return state;
    case FETCH_ITEM_FAILS:
      return state;
    default:
      return state;
  }
}


