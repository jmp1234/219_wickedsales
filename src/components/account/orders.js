import React from 'react';

const Orders = props => {
  console.log('Props: ', props)

  return(
    <div>
      <h1 className="center">My Orders</h1>
      <ol>
        <li>Wicked thing</li>
        <li>Wicked thing</li>
        <li>Wicked thing</li>
      </ol>
    </div>
  );
}


export default Orders
