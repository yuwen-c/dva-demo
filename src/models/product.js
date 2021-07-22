// 原本的redux需要分別編寫action, reducer等等檔案，且很難搞清楚之間的關係，
// 加上又引入了saga，saga本身也有檔案要加，這樣一來就會有非常多檔案。
// dva現在把他們全部包在model這裡：

export default {
  namespace: "product",

  state: {
    productList: [
      {
        name: "馬鈴薯",
      },
      {
        name: "紅蘿蔔",
      },
    ],
  },

  reducers: {
    // 要用像constructor的寫法那樣
    updateList(state, action) {
      const copiedState = Object.assign([], state);
      // copiedState.productList.push(action.payload);
return copiedState.concat(action.payload)

      // let currentProductList = deepClone(state);
      // currentProductList.productList.push(action.payload);
      // return currentProductList
    },
    // 不能放arrow function:
    // updateList = (state, action) => {...}
  },
};

//第6集 7:20
// const deepClone = (arr) => {
//   let obj = JSON.stringify(arr),
//     objClone = JSON.parse(obj);
//   console.log("objClone", objClone);
//   return objClone;
// };
