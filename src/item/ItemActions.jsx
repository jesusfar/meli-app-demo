export const SEARCH_ITEMS_REQUESTED = 'SEARCH_ITEMS_REQUESTED';
export const FETCH_ITEMS          = 'FETCH_ITEMS';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILS    = 'FETCH_ITEMS_FAILS';
export const FETCH_ITEM           = 'FETCH_ITEM';
export const FETCH_ITEM_SUCCESS  = 'FETCH_ITEM_SUCCESS';
export const FETCH_ITEM_FAILS     = 'FETCH_ITEM_FAILS';


export function searchItemsRequested(query) {
  return {
    type: SEARCH_ITEMS_REQUESTED,
    payload: {
      query: query
    }
  }
}

export function fetchItems() {
  return {
    type: FETCH_ITEMS,
    payload: {
      text: 'Fetch items.'
    }
  }
}

export function fetchItemsSuccess(data) {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: {
      items: data.items,
      categories: data.categories
    }
  }
}

export function fetchItemsFails(error) {
  return {
    type: FETCH_ITEMS_FAILS,
    payload: {
      error: error,
      items: []
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
