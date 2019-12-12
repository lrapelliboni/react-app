import axios from 'axios';

// store
export function fetchStoreItems() {
  return dispatch => {
    axios.get('https://api.myjson.com/bins/ofz78')
      .then(res => {
        let items = res.data;
        dispatch(fetchStoreItemsSuccess(items));
      });
  }
}

export const fetchStoreItemsSuccess = items => ({
  type: 'FETCH_STORE_ITEMS_SUCCESS',
  items
});

// cart
export const addItem = item => ({
  type: 'ADD_ITEM',
  item
})

export const removeItem = item => ({
  type: 'REMOVE_ITEM',
  item
})

export const addQuantity = item => ({
  type: 'ADD_QUANTITY',
  item
})

export const removeQuantity = item => ({
  type: 'REMOVE_QUANTITY',
  item
})
