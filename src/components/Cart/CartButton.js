import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { actiontogglecart } from "../../reducers/shoppingReducer";

const CartButton = (props) => {
  // const dispatch = useDispatch();

  // function toggleClick() {
  //   dispatch(actiontogglecart());
  // }
  return (
    <button className={classes.button} {...props}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
