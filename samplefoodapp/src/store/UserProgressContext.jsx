import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: '',
    showCheckout: () => { },
    hideCheckout: () => { },
    showCart: () => { },
    hideCart: () => { },
})
export function UserProgressContextProvider({ children }) {
    const [userProgress, setUserProgress] = useState('');
    function showCart() {
        setUserProgress('cart')
    }
    function showCheckout() {

        setUserProgress('checkout')
    }
    function hideCart() {
        setUserProgress('')
    }
    function hideCheckout() {
        setUserProgress('')
    }
    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }
    return <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>

}
export default UserProgressContext