import React, { useEffect, useState } from "react";
import { Button, Card } from "antd";
import { withRouter, Link, routerRedux } from "dva/router";
import * as api from "../services/example";

// << UI component >>
const Product = ({ productList, dispatch, history }) => {
  const [data, getData] = useState({}); // mock的product with 2 ingredients
  const [posts, getPosts] = useState({}); // mock的posts with mockjs API user data

  // 呼叫API看看。不需要用fetch語法，直接用example那邊的API
  // ComponentDidMount(){
  //   api.getProduct()
  //   .then(response => response.json())
  //   .then(result => console.log(result))
  // }

  useEffect(() => {
    api.getProduct().then((result) => getData(result.data));
  }, []);

  useEffect(() => {
    api.posts().then(result => getPosts(result.data))
  }, [])
  // 沒有加[]，且有用到setState，useEffect會被執行多次

  // 可利用dispatch把資訊帶到redux。直接用reducer的 function
  const handleAdd = (event) => {
    const onion = { name: "洋蔥" };
    dispatch({
      type: "product/updateList", // 這邊寫"hello"，inspector就會收到hello
      payload: onion,
    });
  };

  // 不用reducer的function，而是用effects模擬非同步動作
  const handleAddAsync = (event) => {
    const pepper = { name: "黑胡椒" }
    dispatch({
      type: "product/updateListAsync", // 呼叫的是example裡面的effect的async function
      payload: pepper
    })
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
      <Button type="primary" onClick={handleAdd} style={{ marginRight: "10px" }}>
        reducer add
      </Button>
      <Button type="primary" onClick={handleAddAsync}>
        effects add
      </Button>
      <br />
      {/* 跳轉方法1，用dva/router裡面的Link */}
      <Link to="/">回首頁link</Link>
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
