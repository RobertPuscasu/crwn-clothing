import * as React from 'react';
import CollectionOverview from 'src/components/Collections/CollectionOverview/CollectionOverview';
import { Route, RouteComponentProps } from 'react-router-dom';
import Collection from '../Collection/Collection';


const Shop: React.FC<RouteComponentProps> = (props) => {
 
  console.log(props.match.path);
  return (
    <div className="shop-page">
       <Route exact path= {`${props.match.path}`} component={CollectionOverview} />
    
       <Route path={`${props.match.path}/:collectionId`} component= {Collection} /> 
       
    </div>
  );
};

export default Shop;
