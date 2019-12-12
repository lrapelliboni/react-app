const store = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_STORE_ITEMS_SUCCESS':
            return {
                ...state,
                items: action.items
            };
        default:
            return state
    }
}
export default store
