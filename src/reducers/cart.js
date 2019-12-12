const cart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            if (action.item.quantity == 0) action.item.quantity = 1;
            let found = state.items.findIndex(el => el.id == action.item.id);
            if (found == -1) {
                return {
                    ...state,
                    items: [...state.items, action.item]
                }
            } else {
                return {
                    ...state,
                    items: state.items.map(
                        (item, i) => i === found ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                }
            }
        }
        case 'REMOVE_ITEM': {
            return {
                ...state,
                items: state.items.filter(item => action.item !== item),
            }
        }
        case 'ADD_QUANTITY': {
            let found = state.items.findIndex(el => el.id == action.item.id);
            return {
                ...state,
                items: state.items.map(
                    (item, i) => i === found ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
        }
        case 'REMOVE_QUANTITY': {
            let found = state.items.findIndex(el => el.id == action.item.id);
            return {
                ...state,
                items: state.items.map(
                    (item, i) => i === found && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            }
        }
        default:
            return state;
    }
}

export default cart;
