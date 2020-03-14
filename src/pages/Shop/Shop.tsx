
import * as React from 'react';
import { useState } from 'react';
import { IShop } from '../../interfaces/models/shop.model';
import SHOP_DATA from '../../utils/data/shop';
import CollectionPreview from '../../components/Collections/CollectionPreview/CollectionPreview';

const Shop: React.FC = () => {

	const [collections, setCollections] = useState<IShop[]>(SHOP_DATA);

	return (
		<div className='shop-page'>
			{
				collections.map(({id, ...otherCollectionProps}) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))
			}
		</div>
	)
}

export default Shop;