import React from "react";
import { Button, Card } from "antd";

// << UI component >>
// { productList, title, dispatch }
const Product = ({ props }) => {
  // 在這邊定義按鈕要執行的function，可利用dispatch把資訊帶到redux
  const handleAdd = (event) => {
    const onion = { name: "洋蔥" };
    props.dispatch({
      type: "product/updateList", // 這邊寫"hello"，inspector就會收到hello
      payload: onion,
    });
  };
  console.log("products, props", props);
  // const { productList } = props.productList;

  return (
    <Card>
      <ul>
        {/* {productList.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })} */}
      </ul>
      <Button type="primary" onClick={handleAdd}>
        新增一項
      </Button>
    </Card>
  );
};

export default Product;
