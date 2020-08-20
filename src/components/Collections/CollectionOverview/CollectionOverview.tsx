import React from 'react';
import './style.scss';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { useSelector } from 'react-redux';
import { selectCollections } from 'src/store/shop/shop.selectors';
import { IShop } from 'src/interfaces/models/shop.model';

const CollectionOverview: React.FC = () => {
  const collections: {[key:string]: IShop} = useSelector(selectCollections);

  const collectionPreview = () => {
    const res: JSX.Element[] = [];
    for (let key in collections) {
      let value = collections[key];
      res.push(<CollectionPreview key={value.id} {...value} />);
    }
    return res;
  }

  return (
    <div className="collection-overview">
      {
          collectionPreview()
      }
    </div>
  );
};

export default CollectionOverview;
