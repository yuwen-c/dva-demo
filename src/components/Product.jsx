import React from "react";
import { Button, Card } from "antd";
import { withRouter, Link, routerRedux } from "dva/router";

// << UI component >>
const Product = ({ productList, dispatch, history }) => {
  // 在這邊定義按鈕要執行的function，可利用dispatch把資訊帶到redux
  const handleAdd = (event) => {
    const onion = { name: "洋蔥" };
    dispatch({
      type: "product/updateList", // 這邊寫"hello"，inspector就會收到hello
      payload: onion,
    });
  };
  // 跳轉方法2和方法3
  const handleBack = (event) => {
    console.log("back", history);
    history.push("/");
  };

  // 跳轉方法4
  const handleBackRedux = (event) => {
    dispatch(routerRedux.push("/"));
  };
  return (
    <Card>
      <ul>
        {productList.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
      <Button type="primary" onClick={handleAdd}>
        新增一項
      </Button>
      <br />
      {/* 跳轉方法1，用dva/router裡面的Link */}
      <Link to="/">回首頁</Link>
      <br />
      {/* 跳轉方法2，用傳來的props裡面的history.push方法  -> 很多層、複雜頁面，不適用*/}
      <Button onClick={handleBack}>回首頁history</Button>
      {/* 跳轉方法3，不用傳props，用dva/router裡面的withRouter搭配HOF的寫法，可用到裡面的history.push方法 */}
      <Button onClick={handleBack}>回首頁withRouter</Button>
      {/* 跳轉方法4，用routeRedex裡面的push方法，但是要搭配dispatch使用 */}
      <Button onClick={handleBackRedux}>回首頁Redux</Button>
    </Card>
  );
};

// export default Product;
export default withRouter(Product);
