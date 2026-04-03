let john = {
    name: "John",
    sayHi: function() {
        console.log("Hi buddy!");
    }
};

john.sayHi();

let str = "Hello";

console.log(str.toUpperCase());

let n = 1.23456;

console.log(n.toFixed(2));

console.log(typeof 0);

console.log(typeof new Number(0));

let zero = new Number(0);

if (zero) {
    console.log("zero is truthy!?!");
}

let num = Number("123");

let billion = 1000000000;

let billion2 = 1_000_000_000;

let billion3 = 1e9;

console.log(7.3e9);

let mcs = 0.000001;

let mcs2 = 1e-6;

console.log(0xff);
console.log(0xFF);

let a = 0b11111111;
let b = 0o377;

console.log(a == b);

let num2 = 255;

console.log(num2.toString(16));
console.log(num2.toString(2));

console.log(123456..toString(36));

function sum(a, b) {
    return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`);

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList);

let guestList2 = "Guests:\n * John\n * Pete\n * Mary";

console.log(guestList2);

let str1 = "Hello\nWorld";

let str2 = `Hello
World`;

console.log(str1 == str2);

console.log('a' > 'Z');

console.log('Österreich' > 'Zealand');

console.log("Z".codePointAt(0));
console.log("z".codePointAt(0));
console.log("z".codePointAt(0).toString(16));

console.log(String.fromCodePoint(90));
console.log(String.fromCodePoint(0x5a));

let str3 = '';

for (let i = 65; i <= 220; i++) {
    str3 += String.fromCodePoint(i);
}
console.log(str3);

console.log('Österreich'.localeCompare('Zealand'));

let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[2] = 'Pear';

fruits[3] = 'Lemon';

console.log(fruits.length);

console.log(fruits);

let arr = ['Apple', { name: 'John' }, true, function() { console.log('hello'); }];

console.log(arr[1].name);

arr[3]();

let fruits2 = ["Apple", "Orange", "Plum"];

console.log(fruits2[fruits2.length-1]);

let fruits3 = ["Apple", "Orange", "Plum"];

console.log(fruits3.at(-1));

let fruits4 = ["Apple", "Orange", "Pear"];

console.log(fruits4.pop());

console.log(fruits4);

let fruits5 = ["Apple", "Orange"];

fruits5.push("Pear");

console.log(fruits5);

let fruits6 = ["Apple", "Orange", "Pear"];

console.log(fruits6.shift());

console.log(fruits6);

let fruits7 = ["Orange", "Pear"];

fruits7.unshift('Apple');

console.log(fruits7);

let fruits8 = ["Apple"];

fruits8.push("Orange", "Peach");
fruits8.unshift("Pineapple", "Lemon");

console.log(fruits8);

let fruits9 = ["Banana"];

let arr2 = fruits9;

console.log(arr2 === fruits9);

arr2.push("Pear");

console.log(fruits9);

let arr3 = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}

let fruits10 = ["Apple", "Orange", "Plum"];

for (let fruit of fruits10) {
    console.log(fruit);
}

let arr4 = ["Apple", "Orange", "Pear"];

for (let key in arr4) {
    console.log(arr4[key]);
}

let fruits11 = [];
fruits11[123] = "Apple";

console.log(fruits11.length);

let arr5 = [1, 2, 3, 4, 5];

arr5.length = 2;
console.log(arr5);

arr5.length = 5;
console.log(arr5[3]);

let arr6 = new Array(2);

console.log(arr6[0]);

console.log(arr6.length);

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][1]);

let arr7 = [1, 2, 3];

console.log(arr7);
console.log(String(arr7) === '1,2,3');

console.log([] + 1);
console.log([1] + 1);
console.log([1,2] + 1);

console.log([] == []);
console.log([0] == [0]);

console.log(0 == []);

console.log('0' == []);

console.log(0 == '');

console.log('0' == '');

let arr8 = ["I", "go", "home"];

delete arr8[1];

console.log(arr8[1]);

console.log(arr8.length);

let arr9 = ["I", "study", "JavaScript"];

arr9.splice(1, 1);

console.log(arr9);

let arr10 = ["I", "study", "JavaScript", "right", "now"];

arr10.splice(0, 3, "Let's", "dance");

console.log(arr10);

let arr11 = ["I", "study", "JavaScript", "right", "now"];

let removed = arr11.splice(0, 2);

console.log(removed);

let arr12 = ["I", "study", "JavaScript"];

arr12.splice(2, 0, "complex", "language");

console.log(arr12);

let arr13 = [1, 2, 5];

arr13.splice(-1, 0, 3, 4);

console.log(arr13);

let arr14 = ["t", "e", "s", "t"];

console.log(arr14.slice(1, 3));

console.log(arr14.slice(-2));

let arr15 = [1, 2];

console.log(arr15.concat([3, 4]));

console.log(arr15.concat([3, 4], [5, 6]));

console.log(arr15.concat([3, 4], 5, 6));

let arr16 = [1, 2];

let arrayLike = {
    0: "something",
    length: 1
};

console.log(arr16.concat(arrayLike));

let arr17 = [1, 2];

let arrayLike2 = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

console.log(arr17.concat(arrayLike2));

["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});

let arr18 = [1, 0, false];

console.log(arr18.indexOf(0));
console.log(arr18.indexOf(false));
console.log(arr18.indexOf(null));

console.log(arr18.includes(1));

let fruits12 = ['Apple', 'Orange', 'Apple'];

console.log(fruits12.indexOf('Apple'));
console.log(fruits12.lastIndexOf('Apple'));

const arr19 = [NaN];
console.log(arr19.indexOf(NaN));
console.log(arr19.includes(NaN));

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

console.log(user.name);

let users2 = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"}
];

console.log(users2.findIndex(user => user.name == 'John'));

console.log(users2.findLastIndex(user => user.name == 'John'));

let users3 = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];

let someUsers = users3.filter(item => item.id < 3);

console.log(someUsers.length);

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths);

let arr20 = [1, 2, 15];

arr20.sort();

console.log(arr20);

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

let arr21 = [1, 2, 15];

arr21.sort(compareNumeric);

console.log(arr21);

[1, -2, 15, 2, 0, 8].sort(function(a, b) {
    console.log(a + " <> " + b);
    return a - b;
});

let arr22 = [1, 2, 15];

arr22.sort(function(a, b) { return a - b; });

console.log(arr22);

let countries = ['Österreich', 'Andorra', 'Vietnam'];

console.log(countries.sort((a, b) => a > b ? 1 : -1));

console.log(countries.sort((a, b) => a.localeCompare(b)));

let arr23 = [1, 2, 3, 4, 5];
arr23.reverse();

console.log(arr23);

let names = 'Bilbo, Gandalf, Nazgul';

let arr24 = names.split(', ');

for (let name of arr24) {
    console.log(`A message to ${name}.`);
}

let arr25 = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

console.log(arr25);

let str4 = "test";

console.log(str4.split(''));

let arr26 = ['Bilbo', 'Gandalf', 'Nazgul'];

let str5 = arr26.join(';');

console.log(str5);

let arr27 = [1, 2, 3, 4, 5];

let result = arr27.reduce((sum, current) => sum + current, 0);

console.log(result);

let range = {
    from: 1,
    to: 5
};

range[Symbol.iterator] = function() {

    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

for (let num of range) {
    console.log(num);
}

let range2 = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let num of range2) {
    console.log(num);
}

for (let char of "test") {
    console.log(char);
}

let str6 = '𝒳😂';
for (let char of str6) {
    console.log(char);
}

let str7 = "Hello";

let iterator = str7[Symbol.iterator]();

while (true) {
    let result2 = iterator.next();
    if (result2.done) break;
    console.log(result2.value);
}

let arrayLike3 = {
    0: "Hello",
    1: "World",
    length: 2
};

let arr28 = Array.from(arrayLike3);
console.log(arr28.pop());

let arr29 = Array.from(range);
console.log(arr29);

let arr30 = Array.from(range, num => num * num);

console.log(arr30);

let str8 = '𝒳😂';

let chars = Array.from(str8);

console.log(chars[0]);
console.log(chars[1]);
console.log(chars.length);

let str9 = '𝒳😂';

let chars2 = [];
for (let char of str9) {
    chars2.push(char);
}

console.log(chars2);

function slice(str, start, end) {
    return Array.from(str).slice(start, end).join('');
}

let str10 = '𝒳😂𩷶';

console.log(slice(str10, 1, 3));

console.log(str10.slice(1, 3));

let map = new Map();

map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');

console.log(map.get(1));
console.log(map.get('1'));

console.log(map.size);

let john2 = { name: "John" };

let visitsCountMap = new Map();

visitsCountMap.set(john2, 123);

console.log(visitsCountMap.get(john2));

let john3 = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {};

visitsCountObj[ben] = 234;
visitsCountObj[john3] = 123;

console.log(visitsCountObj["[object Object]"]);

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
]);

for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
}

for (let amount of recipeMap.values()) {
    console.log(amount);
}

for (let entry of recipeMap) {
    console.log(entry);
}

recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
});

let map2 = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
]);

console.log(map2.get('1'));

let obj = {
    name: "John",
    age: 30
};

let map3 = new Map(Object.entries(obj));

console.log(map3.get('name'));

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

console.log(prices.orange);

let map4 = new Map();
map4.set('banana', 1);
map4.set('orange', 2);
map4.set('meat', 4);

let obj2 = Object.fromEntries(map4.entries());

console.log(obj2.orange);

let obj3 = Object.fromEntries(map4);

let set = new Set();

let john4 = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john4);
set.add(pete);
set.add(mary);
set.add(john4);
set.add(mary);

console.log(set.size);

for (let user2 of set) {
    console.log(user2.name);
}

let set2 = new Set(["oranges", "apples", "bananas"]);

for (let value of set2) console.log(value);

set2.forEach((value, valueAgain, set) => {
    console.log(value);
});

let john5 = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john5, "...");

john5 = null;

let visitedSet = new WeakSet();

let john6 = { name: "John" };
let pete2 = { name: "Pete" };
let mary2 = { name: "Mary" };

visitedSet.add(john6);
visitedSet.add(pete2);
visitedSet.add(john6);

console.log(visitedSet.has(john6));

console.log(visitedSet.has(mary2));

john6 = null;

let user3 = {
    name: "John",
    age: 30
};

for (let value of Object.values(user3)) {
    console.log(value);
}

let prices2 = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    Object.entries(prices2).map(entry => [entry[0], entry[1] * 2])
);

console.log(doublePrices.meat);

let arr31 = ["John", "Smith"];

let [firstName, surname] = arr31;

console.log(firstName);
console.log(surname);

let [firstName2, surname2] = "John Smith".split(' ');
console.log(firstName2);
console.log(surname2);

let [firstName3, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(title);

let [a2, b2, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);

let user4 = {};
[user4.name, user4.surname] = "John Smith".split(' ');

console.log(user4.name);
console.log(user4.surname);

let user5 = {
    name: "John",
    age: 30
};

for (let [key, value] of Object.entries(user5)) {
    console.log(`${key}:${value}`);
}

let user6 = new Map();
user6.set("name", "John");
user6.set("age", "30");

for (let [key, value] of user6) {
    console.log(`${key}:${value}`);
}

let guest = "Jane";
let admin = "Pete";

[guest, admin] = [admin, guest];

console.log(`${guest} ${admin}`);

let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1);
console.log(name2);

let [name3, name4, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(rest[0]);
console.log(rest[1]);
console.log(rest.length);

let [name5, name6, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

let [firstName4, surname4] = [];

console.log(firstName4);
console.log(surname4);

let [name7 = "Guest", surname5 = "Anonymous"] = ["Julius"];

console.log(name7);
console.log(surname5);

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {title2, width, height} = options;

console.log(title2);
console.log(width);
console.log(height);

let {height: h, width: w, title: title3} = { title: "Menu", height: 200, width: 100 };

let options2 = {
    title: "Menu",
    width: 100,
    height: 200
};

let {width: w2, height: h2, title: title4} = options2;

console.log(title4);
console.log(w2);
console.log(h2);

let options3 = {
    title: "Menu"
};

let {width: width2 = 100, height: height2 = 200, title: title5} = options3;

console.log(title5);
console.log(width2);
console.log(height2);

let options4 = {
    title: "Menu"
};

let {width: w3 = 100, height: h3 = 200, title: title6} = options4;

console.log(title6);
console.log(w3);
console.log(h3);

let options5 = {
    title: "Menu",
    width: 100,
    height: 200
};

let { title: title7 } = options5;

console.log(title7);

let options6 = {
    title: "Menu",
    height: 200,
    width: 100
};

let {title: title8, ...rest2} = options6;

console.log(rest2.height);
console.log(rest2.width);

let title9, width3, height3;

({title: title9, width: width3, height: height3} = {title: "Menu", width: 200, height: 100});

console.log(title9);

let options7 = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

let {
    size: {
        width: width4,
        height: height4
    },
    items: [item1, item2],
    title: title10 = "Menu"
} = options7;

console.log(title10);
console.log(width4);
console.log(height4);
console.log(item1);
console.log(item2);

let options8 = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

function showMenu({title: title11 = "Untitled", width: width5 = 200, height: height5 = 100, items: items = []}) {
    console.log(`${title11} ${width5} ${height5}`);
    console.log(items);
}

showMenu(options8);

let options9 = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

function showMenu2({
                       title: title12 = "Untitled",
                       width: w4 = 100,
                       height: h4 = 200,
                       items: [item3, item4]
                   }) {
    console.log(`${title12} ${w4} ${h4}`);
    console.log(item3);
    console.log(item4);
}

showMenu2(options9);

function showMenu3({ title: title13 = "Menu", width: width6 = 100, height: height6 = 200 } = {}) {
    console.log(`${title13} ${width6} ${height6}`);
}

showMenu3();

let now = new Date();
console.log(now);

let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);

let date = new Date("2017-01-26");
console.log(date);

let date2 = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log(date2);

let date3 = new Date();

console.log(date3.getHours());

console.log(date3.getUTCHours());

console.log(new Date().getTimezoneOffset());

let today = new Date();

today.setHours(0);
console.log(today);

today.setHours(0, 0, 0, 0);
console.log(today);

let date4 = new Date(2013, 0, 32);
console.log(date4);

let date5 = new Date(2016, 1, 28);
date5.setDate(date5.getDate() + 2);

console.log(date5);

let date6 = new Date();
date6.setSeconds(date6.getSeconds() + 70);

console.log(date6);

let date7 = new Date(2016, 0, 2);

date7.setDate(1);
console.log(date7);

date7.setDate(0);
console.log(date7);

let date8 = new Date();
console.log(+date8);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}

let end = new Date();

console.log(`The loop took ${end - start} ms`);

let start2 = Date.now();

for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}

let end2 = Date.now();

console.log(`The loop took ${end2 - start2} ms`);

function diffSubtract(date1, date2) {
    return date2 - date1;
}

function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}

function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
}

console.log('Time of diffSubtract: ' + bench(diffSubtract) + 'ms');
console.log('Time of diffGetTime: ' + bench(diffGetTime) + 'ms');

function bench2(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

for (let i = 0; i < 10; i++) {
    time1 += bench2(diffSubtract);
    time2 += bench2(diffGetTime);
}

console.log('Total time for diffSubtract: ' + time1);
console.log('Total time for diffGetTime: ' + time2);

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

console.log(ms);

let date9 = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));

console.log(date9);

console.log(`Loading started ${performance.now()}ms ago`);