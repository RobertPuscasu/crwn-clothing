import * as React from 'react';
import './style.scss';
import Directory from '../../components/Directory/Directory';

interface IProps {}
const Main: React.FC<IProps> = props => (
  <div className="main">
    <Directory />
  </div>
);

export default Main;
