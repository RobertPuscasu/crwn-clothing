import * as React from 'react';
import './style.scss'

interface TLoginFormOwnProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  type: string;
  required: boolean;
  label?: string;
}


const LoginForm: React.FC<TLoginFormOwnProps> = ({
	onChange,
  label,
  ...otherProps
}) => (
  <div className="group">
    <input className="login-input" onChange={onChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
	  {label}
	  </label>
    ) : null}
  </div>
);

export default LoginForm;
