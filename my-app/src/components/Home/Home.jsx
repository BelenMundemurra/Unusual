import {React} from 'react';  
import ItemListContainer from '../ItemContainerComponents/ItemListContainer';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <>
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 carousel-img"
                        src="https://firebasestorage.googleapis.com/v0/b/ecommerce-react---coderhouse.appspot.com/o/home1%20(2).png?alt=media&token=4fed681e-677e-423e-906b-490bcdc5d02b"
                        alt="First slide"/>
                        <Carousel.Caption>
                            <h3>PROXIMAMENTE NUEVA COLECCION DE CARTERAS</h3>
                            <p>Porque sabemos lo que te gusta</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 carousel-img"
                        src="https://firebasestorage.googleapis.com/v0/b/ecommerce-react---coderhouse.appspot.com/o/imagen.png?alt=media&token=6ccf4de1-9ad3-42e6-9b10-dd1967c54c79"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>QUE LA ROPA SE AJUSTE A VOS</h3>
                            <p>Talles par todo tipo de cuerpos</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
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
