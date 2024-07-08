import { useContext } from "react"
import Modal from "../UI/Modal"
import CartContext from "../store/cartContext"
import { currencyFormatter } from "../utils/formatter";
import Input from "../UI/Input";
import Button from "../UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";
const requestConfig = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
}
export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const { data, error, isLoading: isSending, sendRequest, clearData } = useHttp("http://localhost:4000/orders", requestConfig)
    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);


    function handleClose() {
        userProgressCtx.hideCheckout()
    }
    function handleFinish() {
        userProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
    }

    function handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries())
        sendRequest(JSON.stringify({
            order: {
                items: cartCtx.items,
                customer: customerData
            }
        }))

    }
    let actions = (<>
        <Button textOnly type="button" onClick={handleClose}>Close</Button>
        <Button>Submit Order</Button>
    </>)

    if (isSending) {
        actions = <span>Sending Order Data...</span>
    }

    if (data && !error) {
        return <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
            <h2>Success!</h2>
            <p>Your order was submitted successfully</p>
            <p>We will get back to you with more details via email within</p>
            <p className="modal-actions">
                <button onClick={handleFinish}>Okay</button>
            </p>
        </Modal>
    }
    return <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount:{currencyFormatter.format(cartTotal)}</p>
            <Input label="Full Name" id="name" type="text" />
            <Input label="E-mail Address" id="email" type="email" />
            <Input label="Street" id="street" type="text" />
            <div className="control-row">
                <Input label="Postal Code" id="postal-code" type="text" />
                <Input label="City" id="city" type="text" />

            </div>
            {error && <Error title="Failed to submit order" message={error} />}
            <p className="modal-actions">
                {actions}
            </p>
        </form>
    </Modal>
}