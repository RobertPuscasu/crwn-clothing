import * as React from 'react';
import { Link } from 'react-router-dom';
import * as _ from 'lodash';
import './style.scss';
import { ReactComponent as Logo } from '../../../assets/crown.svg';
import { auth } from '../../../firebase/firebase';
import { useSelector } from 'react-redux';
import CartDropdown from 'src/components/Carts/CartDropdown/CartDropdown';
import CartIcon from 'src/components/Carts/CartIcon/CartIcon';
import { selectCurrentUser } from 'src/store/user/user.selectors';
import { selectCardHidden } from 'src/store/cart/cart.selectors';

const TopBar: React.FC = React.memo(() => {
  const user = useSelector(selectCurrentUser)
  const toggleCart = useSelector(selectCardHidden)

  return (
    <div className="topbar">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {_.isEmpty(user) ? (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        ) : (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        )}
        <CartIcon />
      </div>
      {
        toggleCart ? null:  <CartDropdown />
      }
    </div>
  );
});

export default TopBar;
