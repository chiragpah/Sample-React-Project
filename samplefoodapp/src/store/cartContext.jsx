import { createContext, useReducer } from "react";
const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { },
    clear: () => { }
});
function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const backupItems = [...state.items];
        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
            backupItems[existingCartItemIndex] = updatedItem
        }
        else {
            backupItems.push({ ...action.item, quantity: 1 });

        }
        return { ...state, items: backupItems }
    }
    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const backupItems = [...state.items];
        if (existingCartItem.quantity === 1) {
            backupItems.splice(existingCartItemIndex, 1);
        }
        else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1
            }
            backupItems[existingCartItemIndex] = updatedItem;
        }
        return { ...state, items: backupItems }
    }
    if (action.type == "CLEAR") {
        return { ...state, items: [] }
    }
    return state;
}
export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] })

    function addItem(item) {
        dispatchCartAction({ type: "ADD_ITEM", item })
    }
    function removeItem(id) {
        dispatchCartAction({ type: "REMOVE_ITEM", id })
    }
    function clearCart() {
        dispatchCartAction({ type: "CLEAR" })
    }
    const cartContext = {
        items: cart.items,
        addItem,
        removeItem,
        clearCart
    }
    console.log(cartContext)
    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}
export default CartContext