import React, {useState} from 'react';
import {Card, Col, Row} from "antd";
import {INGREDIENTS} from "../../contants.ts";
import {CartIngredient} from "../../types.ts";
import Cart from "../../components/Cart";
import IngredientsList from "../../components/IngredientsList";

const BurgerBuilder = () => {
  const [cart, setCart] = useState<CartIngredient[]>([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  const onRemoveIngredient = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    const copyCart = [...cart];
    const index = copyCart.findIndex(item => item.name === name);

    if (index !== -1) {
      const ingredient = {...copyCart[index]};
      ingredient.count = ingredient.count - 1;
      copyCart[index] = ingredient;
      setCart(copyCart);
    }
  }

  const onAddIngredient = (name: string) => {
    const copyCart = [...cart];
    const index = copyCart.findIndex(item => item.name === name);

    if (index !== -1) {
      const ingredient = {...copyCart[index]};
      ingredient.count += 1;
      copyCart[index] = ingredient;
      setCart(copyCart);
    }
  }

  const renderCount = (name: string) => {
    const copyCart = [...cart];
    const index = copyCart.findIndex(item => item.name === name);
    if (index !== -1) return copyCart[index].count;
    return 0
  }

  const getTotal = (): number => {
     let total: number = 0;

     cart.forEach(item => {
       const ingredient = INGREDIENTS.find(ingr => ingr.name === item.name);

       if (ingredient) {
         total += ingredient.price * item.count;
       }
     })

    return total;
  }

  return (
    <Row gutter={10}>
      <Col span={12}>
        <Card title="Ingredients">
          <IngredientsList
            onAddIngredient={onAddIngredient}
            onRemoveIngredient={onRemoveIngredient}
            renderCount={renderCount}
          />
        </Card>
      </Col>
      <Col span={12}>
        <Cart getTotal={getTotal} cart={cart}/>
      </Col>
    </Row>
  );
};

export default BurgerBuilder;