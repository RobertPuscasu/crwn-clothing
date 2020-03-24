import * as React from 'react';

import './style.scss';

type Props = {
  isGoogleSignIn?: boolean;
  inverted?: boolean;
} & React.ComponentPropsWithoutRef<'button'>;

const Button = React.forwardRef(
  (
    { isGoogleSignIn, inverted, ...props }: Props,
    ref: React.Ref<HTMLButtonElement>
  ) => (
    <button
      className={
      `${inverted ? 'inverted' : ''}
      ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      ref={ref}
      {...props}
    />
  )
);

export default Button;
