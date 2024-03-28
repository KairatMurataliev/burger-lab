import React, {useState} from 'react';
import {Avatar, Button, Col, List, Row} from "antd";
import {INGREDIENTS} from "../../contants.ts";
import {DeleteOutlined} from "@ant-design/icons";
import {CartIngredient} from "../../types.ts";

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
  }

  const showIngredient = (item: CartIngredient) => {
    const elements: React.ReactElement[] = [];

    for (let i = 0; i < item.count; i++) {
     elements.push(<div className={item.name}></div>)
    }

    return elements;
  }

  return (
    <Row>
      <Col span={12}>
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={INGREDIENTS}
          renderItem={(item) => {
            return (
              <List.Item
                onClick={() => onAddIngredient(item.name)}
                actions={[
                  <Button
                    type='primary'
                    disabled={renderCount(item.name) === 0}
                    onClick={(e) => onRemoveIngredient(e, item.name)}
                    icon={<DeleteOutlined/>}
                  />
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.image}/>}
                  title={item.name}
                />
                <div>{renderCount(item.name)}</div>
              </List.Item>
            )
          }}
        />
      </Col>
      <Col span={12}>
        <div className='Burger'>
          <div className='BreadTop'>
            <div className='Seeds1'></div>
            <div className='Seeds2'></div>
          </div>
          {cart.map((item) => showIngredient(item))}
          <div className='BreadBottom'></div>
        </div>
      </Col>
    </Row>
  );
};

export default BurgerBuilder;