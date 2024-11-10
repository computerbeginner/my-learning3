// 導入fs模塊
const fs = require('fs');

// 讀取文件
// fs.readFile('./為學.txt', (err, data) => {
//     // 如果失敗，拋出錯誤
//     if(err) throw err;
//     // 如果成功，輸出內容
//     console.log(data.toString());
// })

// 用promise封裝
let p = new Promise((resolve, reject) => {
    fs.readFile('./為學.txt', (err, data) => {
        // 如果失敗
        if(err) reject(err);
        // 如果成功
        resolve(data);
    })
})

p.then((value) => {
    console.log(value.toString());
}, (reason) => {
    console.error('讀取失敗');
})