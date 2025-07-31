import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector,useDispatch} from 'react-redux'
import {store} from '../../store/store.js'

const Cart = (props) => {

  const items =  useSelector((state)=> state.cartReducer.item);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item)=> <CartItem
          key={item.title}
           item={{ title: item.title, quantity:item.quantity, total:item.total, price:item.price }}
        />  )}
        
      </ul>
    </Card>
  );
};

export default Cart;
