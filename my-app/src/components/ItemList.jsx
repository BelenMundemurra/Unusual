import {React} from 'react';
import Item from './Item';

const ItemList = ({productsList}) => {
    return (
        <div className='row'>
            {productsList.map((product) => <Item key={product.id} img={product.img} title={product.name} price={product.price} id={product.id}/>)}
        </div>
    );
}

export default ItemList;


