let name = 'chang',age = 20;

// let desc = name + "今年" + age + "岁了";
let a = `${name} 今年 ${age} 岁了`;
console.log(a);


let users = [{id:1, name:'hello'}, {id:2, name: 'world'}];

let data = users.map(function (user, index) {
    return `<li>${user.name}</li>`
}).join('');
console.log(data);


function desc(strings, ...rest) {
    let result = '';
    for (let i = 0;i < rest.length; i++) {
        result += (strings[i] + rest[i]);
    }
    result += strings[strings.length - 1];
    return result.toUpperCase();
}
let str = desc`${name} 今年 ${age} 岁了`;
console.log(str);