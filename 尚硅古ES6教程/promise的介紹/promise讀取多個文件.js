const fs = require('fs');

// 回調地獄
// fs.readFile('./你好.txt', (err, data1) => {
//     fs.readFile('./你好1.txt', (err, data2) => {
//         fs.readFile('./為學.txt', (err, data3) => {
//             let result = data1 + '\r\n' + data2 + '\r\n' + data3;
//             console.log(result);
//         });
//     });
// });

// 用promise讀取多文件
let p = new Promise((resolve, reject) => {
    fs.readFile('./你好.txt', (err, data) => {
        resolve(data);
    })
});

p.then((value) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./你好1.txt', (err, data) => {
            resolve([value, data]);
        })
    })
}).then((value) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./為學.txt', (err, data) => {
            value.push(data);
            resolve(value);
        })
    })
}).then((value) => {
    console.log(value.join('\r\n'));
})