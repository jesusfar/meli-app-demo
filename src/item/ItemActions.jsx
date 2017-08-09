export const FETCH_ITEMS          = 'FETCH_ITEMS';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILS    = 'FETCH_ITEMS_FAILS';
export const FETCH_ITEM           = 'FETCH_ITEM';
export const FETCH_ITEM_SUCCESS  = 'FETCH_ITEM_SUCCESS';
export const FETCH_ITEM_FAILS     = 'FETCH_ITEM_FAILS';

export function fetchItems() {
  return {
    type: FETCH_ITEMS,
    payload: {
      text: 'Fetch items.'
    }
  }
}

export function fetchItemsSuccess() {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: {
      text: 'Fetch items success.'
    }
  }
}

export function fetchItemsFails() {
  return {
    type: FETCH_ITEMS_FAILS,
    payload: {
      text: 'Fetch items fails.'
    }
  }
}


export function fetchItem() {
  return {
    type: FETCH_ITEMS,
    payload: {
      text: 'Fetch item by id.'
    }
  }
}

export function fetchItemSuccess() {
  return {
    type: FETCH_ITEM_SUCCESS,
    payload: {
      text: 'Fetch item by id success.'
    }
  }
}

export function fetchItemFails() {
  return {
    type: FETCH_ITEM_FAILS,
    payload: {
      text: 'Fetch item failed.'
    }
  }
}
