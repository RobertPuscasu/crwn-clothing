import * as React from 'react';
import './style.scss'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface IMenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string
}

const MenuItem: React.FC<IMenuItemProps & RouteComponentProps> = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);
