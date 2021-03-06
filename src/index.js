import dva from "dva";
import "./index.css";
// import Router from './router';
import { createBrowserHistory as createHistory } from "history";
// console.log(Router);

// << 主入口設定 >>

// 1. Initialize
// const app = dva();
const app = dva({
  history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require("./models/example").default);
// app.model(require("./models/product").default);
// 在model> index.js裡面一次全部引入
require("./models").default.forEach((key) => app.model(key.default));

// 4. Router
app.router(require("./router").default);
// console.log(require('./router'));

// 5. Start
app.start("#root");

// 錨點：
{
  /* <a href="#hello">Hello</a>
頁面會跳轉到#hello的地方 */
}

// Html5 history API
// https://developer.mozilla.org/zh-TW/docs/Web/API/History
