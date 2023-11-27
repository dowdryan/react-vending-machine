import React, {useState} from 'react';

const VendingMachine = () => {
    const [snacks] = useState([
        {id: 1, name: 'Chips', price: 1.99},
        {id: 2, name: 'Candy Bar', price: 1.99},
        {id: 3, name: 'Soda', price: 2.99},
    ])
    return (
        <div>
            <h1>Vending Machine</h1>
            <ul>
                {snacks.map((snack) => (
                    <li key={snack.id}>
                        <h2>{snack.name}</h2>
                        <p>Price: ${snack.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default VendingMachine