
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';
let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.CartIsVisible)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.ui.notification)
  useEffect(() => {

    const sendCartData = async () => {
      console.log("reload")
      dispatch(uiActions.showNotification({
        status: "pending",
        title: "Sending..",
        message: "Sending Data to Cart"
      }))
      const response = await fetch("https://northern-hope-348817-default-rtdb.firebaseio.com//cart.json", {
        method: "PUT",
        body: JSON.stringify(cart)
      })
      if (!response.ok) {
        throw new Error("Sending Cart data failed")

      }
      dispatch(uiActions.showNotification({
        status: "success",
        title: "Success..",
        message: "Send Cart data Successfully"
      }))

    }
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (Object.keys(cart.items).length > 0) {
      sendCartData().catch((error) => {
        dispatch(uiActions.showNotification({
          status: "error",
          title: "Error..",
          message: "Sending Cart data failed"
        }))
      })
    }

  }, [cart, dispatch])
  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>

  );
}

export default App;
