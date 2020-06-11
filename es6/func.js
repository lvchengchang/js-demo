// function ajax (url, method, payload) {
//     if (typeof url == 'undefined') throw Error("123");
//     console.log(url, method, payload);
// }
//
// try{
//     ajax();
// }catch (e) {
//     console.log(e.message);
// }
//
let arr4 = [1, 2, 3, 4];
//
// let result = arr4.reduceRight(function (val, item, index, origin) {
//     if (index === 0) return (val + item) / origin.length;
//     return val + item;
// }, 0);
// console.log(result);
// Array.prototype.reduce1 = function(reduce, init) {
//     for (let i = 0; i<this.length;i ++) { // 循环长度
//         init = reduce(init, this[i]);
//     }
//     return init
// };
//
// let result = arr4.reduce1(function (val, item) {
//     return val + item;
// }, 0)
// console.log(result);

// let arr5 = [1, 2, 3];
// let arr6 = [4, 5, 6];
// let arr7 = arr5.concat(arr6);
// let arr8 = [...arr5, ...arr6];
// console.log(arr7, arr8);
//
// // let max = Math.max(1, 2, 3);
// let max = Math.max(...arr6);
// console.log(max);
//
// let obj1 = {name: '1'};
// let obj2 = {age: 20};
//
// let obj3 = {};
// // Object.assign(obj3, obj1, obj2);
// obj3 = {...obj1, ...obj2}
// console.log(obj3);

let obj5 = {
    name: '123', home: {
        city: 'beijing',
    }
}

function clone (origin) {
    let newObj = {};
    for (let key in origin) {
        if (typeof origin[key] == 'object') {
            newObj[key] = clone(origin[key]);
        } else {
            newObj[key] = origin[key];
        }
    }

    return newObj;
}

let obj6 = {};
// obj6 = Object.assign(obj6, obj5); // 深拷贝
// obj6 = JSON.parse(JSON.stringify(obj5)); // 浅拷贝
obj = clone(obj5);
obj6.home.city = '123';
console.log(obj5, obj6);