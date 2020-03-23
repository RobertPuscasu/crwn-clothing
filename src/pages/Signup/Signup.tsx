import * as React from 'react';
import LoginForm from '../../forms/LoginForm/LoginForm';
import { ISignUpState } from '../../interfaces/states/signup.state';
import Button from '../../forms/Button/Button';
import { auth, createUserProfileDocument } from './../../firebase/firebase';
import './style.scss';

const Signup: React.FC = () => {
  const [signup, setSignup] = React.useState<ISignUpState>({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (Object.keys(signup).includes(name)) {
      setSignup({ ...signup, [name]: value } as Pick<
        ISignUpState,
        keyof ISignUpState
      >);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (signup.password !== signup.confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        signup.email,
        signup.password
      );

      await createUserProfileDocument(user, {
        displayName: signup.displayName
      });
      setSignup({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <LoginForm
          type="text"
          name="displayName"
          value={signup.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <LoginForm
          type="email"
          name="email"
          value={signup.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <LoginForm
          type="password"
          name="password"
          value={signup.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <LoginForm
          type="password"
          name="confirmPassword"
          value={signup.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  );
};

export default Signup;
