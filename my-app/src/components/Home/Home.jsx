import {React} from 'react';  
import ItemListContainer from '../ItemContainerComponents/ItemListContainer';

const Home = () => {
    return (
        <>
            <div className='home'>
                <div>
                    <p>La ropa no significa nada hasta que alguien vive en ella</p>
                    <p>by KARL LAGERFELD</p>
                </div>
            </div>
            <div className='home_products'>
                <div>
                    <ItemListContainer/>
                </div>
            </div>
            
        </>
    );
}

export default Home;