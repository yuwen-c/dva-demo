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

  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     // eslint-disable-line
  //   },
  // },

  // effects: {
  //   *fetch({ payload }, { call, put }) {
  //     // eslint-disable-line
  //     yield put({ type: "save" });
  //   },
  // },

  reducers: {
    // 不能放arrow function
    // updateList = (state, action) => {
    //   return Object.assign({}, state, action.payload);
    // }

    // 要用像constructor的寫法那樣
    updateList(state, action) {
      return Object.assign({}, state, action.payload);
    },
  },
};
