const fs = require('fs');

// 讀取文件
function readFile1(){
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/你好.txt', (err, data) => {
            // 如果失敗
            if(err) reject(err);
            // 如果成功
            resolve(data);
        })
    })
}

function readFile2(){
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/你好1.txt', (err, data) => {
            // 如果失敗
            if(err) reject(err);
            // 如果成功
            resolve(data);
        })
    })
}

function readFile3(){
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/為學.txt', (err, data) => {
            // 如果失敗
            if(err) reject(err);
            // 如果成功
            resolve(data);
        })
    })
}

async function main() {
    let file1 = await readFile1();
    let file2 = await readFile2();
    let file3 = await readFile3();

    console.log(file1.toString());
    console.log(file2.toString());
    console.log(file3.toString());
}

main();