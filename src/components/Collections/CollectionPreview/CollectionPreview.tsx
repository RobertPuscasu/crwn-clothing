import * as React from 'react';
import './style.scss';
import { IShopItem } from '../../../interfaces/models/shop-item.model';
import CollectionItem from '../CollectionItem/CollectionItem';

interface ICollectionPreviewProps {
  title: string;
  items: IShopItem[];
}

const CollectionPreview: React.FC<ICollectionPreviewProps> = ({
  title,
  items
}) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
	  {items.filter((item, idx) => idx < 4)
	  	.map(({id, ...itemProps}) => (
        <CollectionItem key={id} {...itemProps}></CollectionItem>
      ))}
    </div>
  </div>
);

export default CollectionPreview;
