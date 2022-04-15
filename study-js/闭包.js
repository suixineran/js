/*
 每个javascript函数都是一个对象，对象中有些属性我们可以进行访问，
 但有些属性不可以，这些属性仅供javascript引擎存取，其中[[scope]]就是其中一个
 作用域就是[[scope]]所指的，查找对象的时候从作用域量的顶端依次向下查找
 这里需要注意一个问题:执行上下文相对应GO :是按顺序从上往下执行的，
 其中销毁执行上下文AO：回到被定义的状态，等待下次被执行
 */

function a1() {
    console.log(a1);

    function b() {
        var b = 234;
        console.log(b)

    }

    var a = 123;
    b();
}

var glob = 100;
a1();
/*闭包：将内部函数被保存到外部
 闭包会造成的问题：原作用域链不会释放，会造成内存泄露
 */

/*闭包的作用：1：实现共有变量*/
function add() {
    var count = 0;

    function demo() {
        count++;
        console.log(count);
    }

    return demo;  //这里返回的是引用值即引用地址
}

var aa = add();
console.log(aa)
aa();

/*2:可以做缓存可以当做存储结构*/
function test() {
    var num = 100;

    function a() {
        num++;
        console.log(num);
    }

    function b() {
        num--;
        console.log(num);

    }

    return [a, b];
}

var myArr = test();
console.log(myArr);
myArr[0]();
myArr[1]();


function eater() {
    var food = " ";
    var obj = { //对象之中可以有方法即函数
        eat: function () {
            console.log(" i am eating" + food);
            food = "";

        },
        push: function (myfood) {
            food = myfood;
        }
    }
    return obj;
}

var eater1 = eater();
eater1.push("apple")
eater1.eat();

/*闭包：*/
function testb() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        arr[i] = function () {
            /*在for循环的时候i是变量未知数， 只有myarr[j]();执行的时候才知道i的值*/
            // document.write(i + " ");
            console.log('-------testb---i', i)
        }
    }
    return arr;
}


var myarr = testb();
for (var j = 0; j < 10; j++) {
    myarr[j]();
}
/*打印出十个10*/

/*改进打印出0-9*/
function test12() {
    var arr = [];
    for (var i = 0; i < 10; i++) {

        /*立即执行函数：读到它就会被执行，但是下面的函数还是赋值函数，不会立即被执行，这里需要注意一个问题是在这里立即执行函数执行完被销毁之后，下面的function（）{}AO是在原来执行上下文的基础上*/
        (function (j) {
            arr[j] = function () {
                // document.write(j + " ");
                console.log('-------write---j', j)
            }
        }(i));
    }
    return arr;
}

var myarr12 = test12();
for (var j = 0; j < 10; j++) {
    myarr12[j]();
}
/*打印出0-9*/
console.log('-------------------------------------------')

/******************** ****************************************/

// 闭包的用途：
// 可以在函数外部读取函数内部成员
// 让函数内成员始终存活在内存中
//闭包的问题
var arr = [];
for (var i = 0; i <= 10; i++) {
    arr[i] = function () {
        console.log(i);
    }
}

//应该是输出对应下标
arr[0]();//11
arr[1]();//11
arr[2]();//11</pre>


//解决
var arr = [];
for (var i = 0; i <= 10; i++) {
    //自调用函数
    (function (i) {
        arr[i] = function () {
            console.log(i);
        }
    })(i);
}

//应该是输出对应下标
arr[0]();//0
arr[1]();//1
arr[2]();//2
/******************** ****************************************/
