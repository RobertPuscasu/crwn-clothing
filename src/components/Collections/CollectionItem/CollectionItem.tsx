import * as React from 'react';

import './style.scss';
import { IShopItem } from '../../../interfaces/models/shop-item.model';
import Button from '../../../forms/Button/Button';

const CollectionItem: React.FC<IShopItem>= (props) => (
  <div className="collection-item">
    <div className="image" style={{
		backgroundImage: `url(${props.imageUrl})`
	}} />
	<div className='collection-footer'>
		<span className='name'>{ props.name }</span>
		<span className='price'>{ props.price }</span>
	</div>

	<Button inverted>Add to cart</Button>
  </div>
);

export default CollectionItem
