import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectCollections } from 'src/store/shop/shop.selectors';
import { ICollectionsState } from 'src/interfaces/states/collection.state';
import CollectionOverview from 'src/components/Collections/CollectionOverview/CollectionOverview';

const Shop: React.FC = () => {
  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  );
};

export default Shop;
