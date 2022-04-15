// 实例有__proto__属性指向原型对象
//
// 原型对象有constructor指针指向构造函数
//
// 构造函数又有prototype属性指向原型对象



// 1.声明式函数定义 　　　　2.函数表达式：  　3.new Function 形式：

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype = {
//     constructor: Person,
//     sayName: function(){
//         console.log(this.name);
//     }
// }
// var p = new Person('xxx',22);
// p.sayName();//'xxx'
// console.log(p.age);//22


// function Person(age){
//     this.age = age;//创建实例时赋给实例的属性
// }
// Person.prototype = {
//     constructor: Person,
//     name: 'xxx',
//     age: 22,
//     sayName: function(){
//         console.log(this.name);
//     }
// }
// var p = new Person(233);
// console.log(p.age);//233
// p.age = 333;
// console.log(p.age);//333


//
// function Person(){
//     this.age = 233;//创建实例时赋给实例的属性
// }
// Person.prototype = {
//     constructor: Person,
//     name: 'xxx',
//     age: 22,
//     sayName: function(){
//         console.log(this.name);
//     }
// }
// var p = new Person();
// console.log(p.age);//233
// p.age = 333;
// console.log(p.age);//333
// function Student(){
//
// }
// Student.prototype = new Person();//继承
// var s = new Student();
// console.log(s.name);//'xxx'
// s.name = 'qqq';
// console.log(s.name);//'qqq'



class Parent {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log('this is Parent');
    }
}
class Child extends Parent {
    constructor(name, age) {
        super(name); //调用父类
        this.age = age;
    }
    speak() {
        console.log('this is Child');
    }
}
var c = new Child('aaa', 233);
c.say();
c.speak();
console.log(c);
