import * as React from 'react';

import './style.scss';

type Props = {
  isGoogleSignIn?: boolean;
} & React.ComponentPropsWithoutRef<'button'>;

const Button = React.forwardRef(
  ({ isGoogleSignIn, ...props }: Props, ref: React.Ref<HTMLButtonElement>) => (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      ref={ref}
      {...props}
    />
  )
);

export default Button;
