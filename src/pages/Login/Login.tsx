import * as React from 'react'

import './style.scss'
import { IUserModel } from '../../interfaces/models/user.model';
import LoginForm from '../../forms/LoginForm/LoginForm';
import Button from '../../forms/Button/Button';
import { signInWithGoogle } from '../../firebase/firebase';

const Login: React.FC = () => {

	const [credentials, setCredentials] = React.useState<IUserModel>({
		email: '',
		password: ''
	});

	const handleSubmit = (event: { preventDefault: () => void; }) => {
		event.preventDefault();

		setCredentials({email: '', password: ''});
	}

	const handleEmailChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
		const {value, name} = event.target;

		setCredentials({'email': value, 'password': credentials.password})
	}

	const handlePasswordChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
		const {value, name} = event.target;

		setCredentials({'email': value, 'password': value})
	}
	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
		
			<form onSubmit={handleSubmit}>
				<LoginForm 
				name='email' 
				type='email' 
				value={credentials.email} 
				onChange={handleEmailChange}
				label='email'
				required />
				<LoginForm 
				name='password' 
				type='password' 
				value={credentials.password} 
				onChange={handlePasswordChange}
				label='password'
				required />

				<div className='buttons'>
					<Button type='submit'>Sign In</Button>
					<Button onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</Button>
				</div>
			</form>
		</div>
	);

}

export default Login;