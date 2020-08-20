import React from 'react';
import './style.scss';

import { createMatchSelector } from 'connected-react-router';
import { useStore, useSelector } from 'react-redux';
import { selectCollection } from 'src/store/shop/shop.selectors';

import CollectionItem from 'src/components/Collections/CollectionItem/CollectionItem';
import { IShop } from 'src/interfaces/models/shop.model';

const Collection: React.FC = () => {
  const matchSelector = createMatchSelector('/shop/:collectionId');
  const store = useStore();
  const match: any = matchSelector(store.getState());
  const collection:  IShop = useSelector(selectCollection(match!.params!.collectionId));
  
  return (
    <div className="collection-page">
      <h2 className='title'>{collection.title}</h2>
      <div className='items'>
        {
         collection.items.map(i => 
            (
            <CollectionItem key={i.id} item={i} />
            ))
        }
      </div>
    </div>
  );
};

export default Collection;
