import {React} from 'react';
import Item from './Item';

const ItemList = ({productsList}) => {
    return (
        <div className='row'>
            {productsList.map((product) => <Item key={product.id} el={product}/>)}
        </div>
    );
}

export default ItemList;


