import React, { useState } from 'react';
import PropertyList from '../components/PropertyList';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';

type Property = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
};

const Home: React.FC = () => {
    const [cart, setCart] = useState<Property[]>([]);

    const addToCart = (property: Property) => {
        setCart([...cart, property]);
    };

    const removeFromCart = (id: number) => {
        setCart(cart.filter(property => property.id !== id));
    };

    return (
        <div style={{ padding: '32px' }}>
            <h1>Property Rental Platform</h1>
            <PropertyList addToCart={addToCart} />
            <Cart cart={cart} removeFromCart={removeFromCart} />
            {cart.length > 0 && <Checkout />}
        </div>
    );
};

export default Home;
