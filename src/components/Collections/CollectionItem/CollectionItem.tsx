import * as React from 'react';

import './style.scss';
import { IShopItem } from '../../../interfaces/models/shop-item.model';
import Button from '../../../forms/Button/Button';
import { useDispatch } from 'react-redux';
import { addCartAction } from 'src/store/cart/cart.actions';

interface ICollectionItemProps {
	item: IShopItem
}

const CollectionItem: React.FC<ICollectionItemProps> = ({item}) => {

	const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${item.imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>

      <Button onClick={() => dispatch(addCartAction(item))} inverted>Add to cart</Button>
    </div>
  );
};

export default CollectionItem;
