import React, { useState } from 'react';

type Property = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
};

const properties: Property[] = [
    { id: 1, title: 'Luxury Villa', description: 'A luxurious villa with a private pool', price: 250, image: '/images/villa.jpg' },
    { id: 2, title: 'City Apartment', description: 'A modern apartment in the city center', price: 150, image: '/images/apartment.jpg' },
    // Add more properties as needed...
];

const PropertyList: React.FC<{ addToCart: (property: Property) => void }> = ({ addToCart }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {properties.map(property => (
                <div key={property.id} style={{ border: '1px solid #ccc', padding: '16px', width: '300px', marginBottom: '16px' }}>
                    <img src={property.image} alt={property.title} style={{ width: '100%', height: 'auto' }} />
                    <h2>{property.title}</h2>
                    <p>{property.description}</p>
                    <p>${property.price} per night</p>
                    <button onClick={() => addToCart(property)}>Book Now</button>
                </div>
            ))}
        </div>
    );
};

export default PropertyList;
