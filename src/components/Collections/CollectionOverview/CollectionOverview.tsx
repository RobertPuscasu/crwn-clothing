import React from 'react';
import './style.scss';
import { ICollectionsState } from 'src/interfaces/states/collection.state';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { useSelector } from 'react-redux';
import { selectCollections } from 'src/store/shop/shop.selectors';

const CollectionOverview: React.FC = () => {
  const collections: ICollectionsState[] = useSelector(selectCollections);

  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
