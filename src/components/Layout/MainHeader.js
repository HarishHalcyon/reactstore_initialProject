import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import {useSelector, useDispatch} from 'react-redux'


import {useSelector,useDispatch} from 'react-redux'
const MainHeader = (props) => {
  const dispatch = useDispatch();
  
  function  toggleClick()
  {
    dispatch(actiontogglecart());
  }
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={toggleClick}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
