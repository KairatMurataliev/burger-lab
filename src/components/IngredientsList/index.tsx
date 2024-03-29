import React from 'react';
import {INGREDIENTS} from "../../contants.ts";
import {Avatar, Button, List} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

interface Props {
  onAddIngredient: (name: string) => void;
  renderCount: (name: string) => number;
  onRemoveIngredient: (e: React.MouseEvent, name: string) => void;
}

const IngredientsList: React.FC<Props> = ({onAddIngredient, renderCount, onRemoveIngredient}) => {
  return (
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
                danger
                disabled={renderCount(item.name) === 0}
                onClick={(e) => onRemoveIngredient(e, item.name)}
                icon={<DeleteOutlined/>}
              />
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.image}/>}
              title={item.name}
              description={`Price - ${item.price}`}
            />
            <div>x {renderCount(item.name)}</div>
          </List.Item>
        )
      }}
    />
  );
};

export default IngredientsList;