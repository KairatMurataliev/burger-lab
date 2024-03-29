import React from 'react';
import Meta from "antd/es/card/Meta";
import {Card} from "antd";
import {CartIngredient} from "../../types.ts";

interface Props {
  cart: CartIngredient[];
  getTotal: () => void
}

const showIngredient = (item: CartIngredient) => {
  const elements: React.ReactElement[] = [];

  for (let i = 0; i < item.count; i++) {
    elements.push(<div className={item.name}></div>)
  }

  return elements;
}

const Cart: React.FC<Props> = ({cart, getTotal}) => {
  return (
    <Card title='Your Order'>
      <div className='Burger'>
        <div className='BreadTop'>
          <div className='Seeds1'></div>
          <div className='Seeds2'></div>
        </div>
        {cart.map((item) => showIngredient(item))}
        <div className='BreadBottom'></div>
      </div>
      <Meta title={`Total price - ${getTotal()}`} />
    </Card>
  );
};

export default Cart;