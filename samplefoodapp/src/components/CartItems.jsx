import { currencyFormatter } from "../utils/formatter";

export default function CartItems({ name, quantity, price, onDecrease, onIncrease }) {
    return <li className="cart-item">
        <p>{name}-{quantity} x {currencyFormatter.format(price)}</p>
        <p className="cart-item-actions">
            <button onClick={onDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncrease}>+</button>
        </p>
    </li>
}