let user1 = new Object();
let user2 = {};

let user3 = {
    name: "John",
    age: 30
};

console.log(user3.name);
console.log(user3.age);

user3.isAdmin = true;

delete user3.age;

let user4 = {
    name: "John",
    age: 30,
    "likes birds": true
};

let user5 = {
    name: "John",
    age: 30,
};

let user6 = {};

user6["likes birds"] = true;

console.log(user6["likes birds"]);

delete user6["likes birds"];

let key = "likes birds";

user6[key] = true;

let user7 = {
    name: "John",
    age: 30
};

let user8 = {
    name: "John",
    age: 30
};

let key2 = "name";
console.log(user8[key2]);

let fruit = 'apple';
let bag = {
    [fruit]: 5,
};

console.log(bag.apple);

let fruit2 = 'apple';
let bag2 = {};

bag2[fruit2] = 5;

let fruit3 = 'apple';
let bag3 = {
    [fruit3 + 'Computers']: 5
};

function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}

let user9 = makeUser("John", 30);
console.log(user9.name);

function makeUser2(name, age) {
    return {
        name,
        age,
    };
}

let user10 = {
    name: "John",
    age: 30
};

let obj = {
    for: 1,
    let: 2,
    return: 3
};

console.log(obj.for + obj.let + obj.return);

let obj2 = {
    0: "test"
};

console.log(obj2["0"]);
console.log(obj2[0]);

let obj3 = {};
obj3.__proto__ = 5;
console.log(obj3.__proto__);

let user11 = {};

console.log(user11.noSuchProperty === undefined);

let user12 = { name: "John", age: 30 };

console.log("age" in user12);
console.log("blabla" in user12);

let user13 = { age: 30 };

let key3 = "age";
console.log(key3 in user13);

let obj4 = {
    test: undefined
};

console.log(obj4.test);

console.log("test" in obj4);

let user14 = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user14) {
    console.log(key);
    console.log(user14[key]);
}

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "1": "USA"
};

for (let code in codes) {
    console.log(code);
}

console.log(String(Math.trunc(Number("49"))));
console.log(String(Math.trunc(Number("+49"))));
console.log(String(Math.trunc(Number("1.2"))));

let user15 = {
    name: "John",
    surname: "Smith"
};
user15.age = 25;

for (let prop in user15) {
    console.log(prop);
}

let codes2 = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    "+1": "USA"
};

for (let code in codes2) {
    console.log(+code);
}

let message = "Hello!";
let phrase = message;

let user16 = {
    name: "John"
};

let user17 = { name: "John" };

let admin = user17;

let user18 = { name: 'John' };

let admin2 = user18;

admin2.name = 'Pete';

console.log(user18.name);

let a = {};
let b = a;

console.log(a == b);
console.log(a === b);

let a2 = {};
let b2 = {};

console.log(a2 == b2);

const user19 = {
    name: "John"
};

user19.name = "Pete";

console.log(user19.name);

let user20 = {
    name: "John",
    age: 30
};

let clone = {};

for (let key in user20) {
    clone[key] = user20[key];
}

clone.name = "Pete";

console.log(user20.name);

let user21 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user21, permissions1, permissions2);

console.log(user21.name);
console.log(user21.canView);
console.log(user21.canEdit);

let user22 = { name: "John" };

Object.assign(user22, { name: "Pete" });

console.log(user22.name);

let user23 = {
    name: "John",
    age: 30
};

let clone2 = Object.assign({}, user23);

console.log(clone2.name);
console.log(clone2.age);

let user24 = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

console.log(user24.sizes.height);

let user25 = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone3 = Object.assign({}, user25);

console.log(user25.sizes === clone3.sizes);

user25.sizes.width = 60;
console.log(clone3.sizes.width);

let user26 = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone4 = structuredClone(user26);

console.log(user26.sizes === clone4.sizes);

user26.sizes.width = 60;
console.log(clone4.sizes.width);

let user27 = {};
user27.me = user27;

let clone5 = structuredClone(user27);
console.log(clone5.me === clone5);

let user28 = {
    name: "John"
};

user28 = null;

let user29 = {
    name: "John"
};

let admin3 = user29;

user29 = null;

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});

delete family.father;
delete family.mother.husband;

family = null;

let user30 = {
    name: "John",
    age: 30
};

user30.sayHi = function() {
    console.log("Hello!");
};

user30.sayHi();

let user31 = {};

function sayHi() {
    console.log("Hello!");
}

user31.sayHi = sayHi;

user31.sayHi();

let user32 = {
    sayHi: function() {
        console.log("Hello");
    }
};

let user33 = {
    sayHi() {
        console.log("Hello");
    }
};

let user34 = {
    name: "John",
    age: 30,

    sayHi() {
        console.log(this.name);
    }

};

user34.sayHi();

let user35 = {
    name: "John",
    age: 30,

    sayHi() {
        console.log(user35.name);
    }

};

let admin4 = user35;
user35 = null;

function sayHi2() {
    console.log(this.name);
}

let user36 = { name: "John" };
let admin5 = { name: "Admin" };

function sayHi3() {
    console.log(this.name);
}

user36.f = sayHi3;
admin5.f = sayHi3;

user36.f();
admin5.f();

admin5['f']();

function sayHi4() {
    console.log(this);
}

sayHi4();

let user37 = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user37.sayHi();

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user38 = new User("Jack");

console.log(user38.name);
console.log(user38.isAdmin);

let user39 = {
    name: "Jack",
    isAdmin: false
};

let user40 = new function() {
    this.name = "John";
    this.isAdmin = false;
};

function User2() {
    console.log(new.target);
}

User2();

new User2();

function User3(name) {
    if (!new.target) {
        return new User3(name);
    }

    this.name = name;
}

let john = User3("John");
console.log(john.name);

function BigUser() {

    this.name = "John";

    return { name: "Godzilla" };
}

console.log(new BigUser().name);

function SmallUser() {

    this.name = "John";

    return;
}

console.log(new SmallUser().name);

let user41 = new User("Test");

let user42 = new User("Test2");

function User4(name) {
    this.name = name;

    this.sayHi = function() {
        console.log("My name is: " + this.name);
    };
}

let john2 = new User4("John");

john2.sayHi();

let user43 = null;
let x = 0;

user43?.sayHi(x++);

console.log(x);

let userAdmin = {
    admin() {
        console.log("I am admin");
    }
};

let userGuest = {};

userAdmin.admin?.();

userGuest.admin?.();

let key4 = "firstName";

let user44 = {
    firstName: "John"
};

let user45 = null;

console.log(user44?.[key4]);
console.log(user45?.[key4]);

let id = Symbol();

let id2 = Symbol("id");

let id1 = Symbol("id");
let id3 = Symbol("id");

console.log(id1 == id3);

let id4 = Symbol("id");
console.log(id4.toString());

let id5 = Symbol("id");
console.log(id5.description);

let user46 = {
    name: "John"
};

let id6 = Symbol("id");

user46[id6] = 1;

console.log(user46[id6]);

let id7 = Symbol("id");

let user47 = {
    name: "John",
    [id7]: 123
};

let id8 = Symbol("id");
let user48 = {
    name: "John",
    age: 30,
    [id8]: 123
};

for (let key in user48) console.log(key);

console.log("Direct: " + user48[id8]);

let id9 = Symbol("id");
let user49 = {
    [id9]: 123
};

let clone6 = Object.assign({}, user49);

console.log(clone6[id9]);

let id10 = Symbol.for("id");

let idAgain = Symbol.for("id");

console.log(id10 === idAgain);

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

console.log(Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym2));

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log(Symbol.keyFor(globalSymbol));
console.log(Symbol.keyFor(localSymbol));

console.log(localSymbol.description);

let user50 = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

console.log(String(user50));
console.log(+user50);
console.log(user50 + 500);

let user51 = {name: "John"};

console.log(String(user51));
console.log(user51.valueOf() === user51);

let user52 = {
    name: "John",
    money: 1000,

    toString() {
        return `{name: "${this.name}"}`;
    },

    valueOf() {
        return this.money;
    }

};

console.log(String(user52));
console.log(+user52);
console.log(user52 + 500);

let user53 = {
    name: "John",

    toString() {
        return this.name;
    }
};

console.log(String(user53));
console.log(user53 + 500);

let obj5 = {
    toString() {
        return "2";
    }
};

console.log(obj5 * 2);

let obj6 = {
    toString() {
        return "2";
    }
};

console.log(obj6 + 2);