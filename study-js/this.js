// function a() {
//     var user = "追梦子";
//     console.log('this.user--------->', this.user); //undefined
//     console.log('this--------->',    this); //Window
// }
// a();

// function a(){
//     var user = "追梦子";
//     console.log(this.user); //undefined
//     console.log(this);　　//Window
// }
// window.a();


// var o = {
//     user:"追梦子",
//     fn:function(){
//         console.log(this.user);  //追梦子
//     }
// }
// o.fn();   // 追梦子

// 这里再次强调一点，this的指向在函数创建的时候是决定不了的，
// 在调用的时候才能决定，谁调用的就指向谁，一定要搞清楚这个。

// var o = {
//     user:"追梦子",
//     fn:function(){
//         console.log(this.user); //追梦子
//     }
// }
// window.o.fn();


// var o = {
//     a:10,
//     b:{
//         a:12,
//         fn:function(){
//             console.log(this.a); //undefined
//             console.log(this); //window
//         }
//     }
// }
// var j = o.b.fn;
// j();

// this讲来讲去其实就是那么一回事，
// 只不过在不同的情况下指向的会有些不同，上面的总结每个地方都有些小错误，也不能说是错误，
// 而是在不同环境下情况就会有不同，所以我也没有办法一次解释清楚，只能你慢慢地的去体会

// function Fn(){
//     this.user = "追梦子";
// }
// var a = new Fn();
// console.log(a.user); //追梦子


// this碰到return时
// 那么this指向的就是那个返回的对象，
// 如果返回值不是一个对象那么this还是指向函数的实例。















