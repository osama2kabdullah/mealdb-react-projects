import React from 'react';

const Cart = (props) => {
    console.log(props.data);
    return (
        <div>
            {
                props.data.map(data=><p key={data.idMeal
                }>{data.strMeal}: {data.quality}</p>)
            }
        </div>
    );
};

export default Cart;