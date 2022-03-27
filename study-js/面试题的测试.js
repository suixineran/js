// for (var i = 0; i < 4; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 1000)
// }

//  这段代码  声明只能用 var 而且需要 在浏览器中 能打印出 wang
// 如果换成let  是undefined
// var aname = 'wang'
// var obj = {
//     aname: 'zhang',
//     getName: function () {
//         console.log('输出',this.aname)
//         console.log('输出',this)
//         return this.aname
//     }
// }
// console.log(obj.getName())
// var test = obj.getName
// test()


global.aname = 'wang'
let a = 'liudehau'
let obj = {
    aname: 'zhang',
    getName: function () {
        // console.log('输出值-->', this.aname)
        // console.log('输出值-->', this.aname)
        return this.aname
    }
}
obj.getName()
let test = obj.getName
test()
// console.log('-------this', this)

// var a = 66
// var o = {
//     a:10,
//     fn:function(){
//         console.log(this.a); //undefined
//         console.log(this); //window
//     },
//     b:{
//         a:12,
//         fn:function(){
//             console.log(this.a); //undefined
//             console.log(this); //window
//         }
//     },
// }

// var a = 66
// function fn (){
//     console.log('a=>', this.a); //undefined
//     // console.log(this); //window
// }
//
// fn()
// o.fn()
// o.b.fn()

// var j = o.b.fn;
// j();

// console.log(o.a)
// console.log(a)


// var x = 1;
// function test() {
//     console.log(this.x);
// }
// test();//1

