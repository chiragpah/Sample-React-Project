import { useContext } from "react"
import logo from "../assets/logo.jpg"
import Button from "../UI/Button"
import CartContext from "../store/cartContext"
import UserProgressContext from "../store/UserProgressContext";
export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext)
    const totalCartItems = cartCtx.items.reduce((totalNoOfItem, item) => {
        return totalNoOfItem + item.quantity
    }, 0)
    function handleShowCart() {
        userProgressCtx.showCart();
    }
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="Food Icon" />
                <h1>SWIGGY</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}