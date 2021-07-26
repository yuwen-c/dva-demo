export default {
  ...require("./mock/product"),
};

// 下面的code 竟然不能用＠＠!!!! ｄｅｂｕｇ好久

// import fs from 'fs'; //file system
// import path from 'path';

// const mock = {};
// fs.readdirSync(path.join(__dirname + '/mock')).forEach(function (file){
//   if(file.match(/\.js$/)){
//     Object.assign(mock, require('./mock/' + file))
//   }
// })

// export default mock;

