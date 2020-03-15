import * as React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'
import {ReactComponent as Logo} from '../../../assets/crown.svg'
import { auth } from '../../../firebase/firebase'

interface ITopBarProps {
	currentUser: firebase.User | null;
}

const TopBar: React.FC<ITopBarProps> = ({ currentUser }) => (
	<div className='topbar'>
		<Link className='logo-container' to='/' >
			<Logo className='logo' />
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'>
				SHOP
			</Link>
			<Link className='option' to='/shop'>
				CONTACT
			</Link>
			{
				currentUser ? 
				<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
				:
				<Link className='option' to='/signin'>SIGN IN</Link>
			}
		</div>
	</div>
)

export default TopBar;