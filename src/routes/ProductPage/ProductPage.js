import React from "react";
import Product from "../../components/Product";
import { connect } from "dva"; // 連接redux和app

const IndexPage = (props) => {
  const { productList } = props;
  return (
    <div>
      商品首頁
      <Product
        // title="食材"
        productList={productList.productList}
        dispatch={props.dispatch}
      />
    </div>
  );
};

// connect
// state 要指向該model的name space
// 用object的寫法
const mapStateToProps = (state) => {
  return { productList: state.product };
};

// export default IndexPage;
export default connect(mapStateToProps)(IndexPage);
