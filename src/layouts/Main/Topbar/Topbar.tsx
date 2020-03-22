import * as React from 'react';
import { Link } from 'react-router-dom';
import * as _ from 'lodash';
import './style.scss';
import { ReactComponent as Logo } from '../../../assets/crown.svg';
import { auth } from '../../../firebase/firebase';
import { useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';

const TopBar: React.FC = React.memo(() => {
  const user = useSelector((state: RootState) => state.user.currentUser);

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
      </div>
    </div>
  );
});

export default TopBar;
