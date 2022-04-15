/*立即执行函数:此类函数没有声明，在一次执行完之后会立即被释放，
适合做初始化的工作,读到它就会被执行
 初始化功能的函数：这个函数只使用一个
//  */
// (function () {
//     var a = 124;
//     var b = 34;
//     console.log("和--->" + (a + b))
// }())


//  2个同时执行立即执行函数 不能同时执行  只能一个一个执行  会报错
// (function (a, b) {
//     // console.log("和" + (a + b));
//         console.log('----------', a, b)
// }(1, 3))


/*函数声明
 只有表达式才能被执行符号执行
 */
// function test() {
//     var aa = 123;
// }

/*如下的样式才可以被执行
 被执行符号执行的表达式，函数名就会被放弃，也就是立即执行函数*/
// var test = (function () {
//     console.log("aoaoaoao");
// }())
//
// console.log('--------test', test)


//第一种写法
(function () {
    console.log('this is a function')
})();

//第二种写法
(function (a,b) {
    console.log('this is a function', a,b)
})(1, 3);


// 意思是函数声明需要一个函数名
// function (){
//     console.log('this is a function')
// }()


// !function(){
//     console.log('this is a function1')
// }()
// // this is a function1
//
// +function(){
//     console.log('this is a function2')
// }()
// // this is a function2
//
// -function(){
//     console.log('this is a function3')
// }()
// // this is a function3
//
// ;(function(){
//     console.log('this is a function4')
// })()
// this is a function4
// ————————————————
// 版权声明：本文为CSDN博主「xu_song」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/xu_song/article/details/107077675

