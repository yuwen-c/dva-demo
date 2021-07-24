// 原本的redux需要分別編寫action, reducer等等檔案，且很難搞清楚之間的關係，
// 加上又引入了saga，saga本身也有檔案要加，這樣一來就會有非常多檔案。
// dva現在把他們全部包在model這裡：
import * as api from "../services/example";

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
    updateList(state, action) {
      const copiedState = Object.assign({}, state);
      copiedState.productList.push(action.payload);
      return copiedState;
    },
    // 不能放arrow function: (要用像constructor的寫法那樣)
    // updateList = (state, action) => {...}
  },

  // saga的非同步處理放這
  // * -> generator
  effects: {
    *updateListAsync({ payload }, { call, put }) {
      yield put({
        type: "updateList",
        payload: payload
      });
    },

    // *updateListHttp({payload}, {call, put}){
    //   // 網路請求
    //   const result = yield call(api.getProduct.payload);
    //   const data = result.data;
    //   if(data){
    //     yield put({
    //       type: "updateList",
    //       payload: data
    //     })
    //   }

    // }
  },
};

