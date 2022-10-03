import {React, useState} from 'react';
import {useCartContext} from './context/CartContext';
import {db} from './services/firebase';
import {addDoc,collection} from 'firebase/firestore';

const Checkout = () => {
    const {cart,totalPrice,clearCart} = useCartContext();

    const [buyer, setBuyer] = useState({name:'',email:'',tel:''})

    const [orderData, setOrder] = useState()

    const {name,email,tel} = buyer;

    const Order = async(data) => {
        try {
            const col = collection(db,"Orders")
            const resume = await addDoc(col,data)
            setOrder(resume)
            clearCart();
        } catch (error) {
            console.log(error);
        }
    }

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name] : e.target.value
        })
    } 

    const handleSubmit = (element)  => {
        element.preventDefault()
        const items = cart.map(e => {return {id:e.item.id,title: e.item.name, price: e.item.price,amount: e.amount}})
        const date = new Date()
        const total = totalPrice()
        const data = {buyer,items,date,total}
        Order(data)
    }

    return (
        <>
            <h2>Checkout</h2>
            {!orderData?
            (<div>
                <p>Completar datos:</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <input type='text' name='name' onChange={handleInputChange} value={name}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type='email' name='email' onChange={handleInputChange} value={email}/>
                    </div>
                    <div>
                        <label htmlFor="tel">Numero de telefono</label>
                        <input type='text' name='tel' onChange={handleInputChange} value={tel}/>
                    </div>
                    <div>
                        <input type="submit"/>                   
                    </div> 
                </form>
            </div>) 
            : (
                <div>
                    <p>Compra realizada con exito!</p>
                    <p>Numero del pedido: {orderData.id}</p>
                </div>
            )}
        </>
    );
}

export default Checkout;
