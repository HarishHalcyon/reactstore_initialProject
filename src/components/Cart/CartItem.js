import classes from './CartItem.module.css';
import {useDispatch} from 'react-redux'

import {actionIncreaseCartby1,actionDecreaseCartby1} from '../../reducers/cartReducer'

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
const dispatch = useDispatch();

function IncreaseOne()
{
  dispatch(actionIncreaseCartby1({quantity,price}));
}

function DecreaseOne()
{
  dispatch(actionDecreaseCartby1({quantity,price}));
}
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={DecreaseOne}>-</button>
          <button onClick={IncreaseOne}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
