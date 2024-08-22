import React from 'react';

type Property = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
};

const Cart: React.FC<{ cart: Property[]; removeFromCart: (id: number) => void }> = ({ cart, removeFromCart }) => {
    const total = cart.reduce((acc, property) => acc + property.price, 0);

    return (
        <div>
            <h2>Booking Cart</h2>
            {cart.length === 0 ? (
                <p>No properties booked yet.</p>
            ) : (
                <div>
                    {cart.map((property) => (
                        <div key={property.id} style={{ borderBottom: '1px solid #ccc', padding: '16px 0' }}>
                            <h3>{property.title}</h3>
                            <p>${property.price}</p>
                            <button onClick={() => removeFromCart(property.id)}>Remove</button>
                        </div>
                    ))}
                    <h3>Total: ${total}</h3>
                </div>
            )}
        </div>
    );
};

export default Cart;
