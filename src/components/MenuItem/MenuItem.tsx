import * as React from 'react';
import './style.scss'
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

interface IMenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string
}

const MenuItem: React.FC<IMenuItemProps> = ({ title, imageUrl, size, linkUrl }) => {
  const dispatch = useDispatch();
  return (
  <div className={`${size} menu-item`} onClick={() => dispatch(push(`${linkUrl}`))}>
    <div
	  className='background-image'
      style=
      {{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);
    }

export default MenuItem;
