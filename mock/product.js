// 設定模擬的接口"/api/product"、連接方法、提供的數據。

// module.exports = {
//   // 數據讀取
//   "GET /api/product": { name: "橄欖油" },
// };

//處理參數的版本：
module.exports = {
  "GET /api/product": (req, res) => {
    console.log("req", req);
    const params = req.query; // console不出來，裡面沒有query這個東西
    // console.log("params", params);

    res.send({
      name: "橄欖油",
    });
  },
};
