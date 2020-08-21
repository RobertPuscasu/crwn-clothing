import React from 'react';
import './style.scss';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { useSelector } from 'react-redux';
import { selectCollections, selectCollectionsForPreview } from 'src/store/shop/shop.selectors';
import { IShop } from 'src/interfaces/models/shop.model';

const CollectionOverview: React.FC = () => {
  const collections: IShop[] = useSelector(selectCollectionsForPreview);
  console.log();

  return (
    <div className="collection-overview">
      {
          collections.map(shop => (
            <CollectionPreview  key={shop.id} {...shop}/>
          ))
      }
    </div>
  );
};

export default CollectionOverview;
