//


// function a() {
//     setTimeout(() => {
//         console.log(1)
//     }, 200)
// }
//
// function b() {
//     setTimeout(() => {
//         console.log(2)
//     }, 10)
// }
//
// function c() {
//     setTimeout(() => {
//         console.log(3)
//     }, 30)
// }
//
// function a1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve(9999), 200, 11111)
//     })
// }
//
// function b1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 10, 222222)
//     })
// }
//
// function c1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 30, 33333)
//     })
// }

//
// a().then(res => {
//     console.log(res)
//     b().then(res => {
//         console.log(res)
//         c().then(res => {
//             console.log(res)
//             console.log(4)
//         })
//     })
// })
// a()

// Promise.resolve().then(() => a())
//     .then(res => console.log('11', res))
//     .then(() => b())
//     .then(res => console.log('22', res))
//     .then(() => c())
//     .then(res => console.log('33', res))
//     .then(() => console.log(4))

// async function log(a, b, c) {
//     const args = [].slice.call(arguments, 0)
//     for (let item of args) {
//         // let res = await item()
//         let res = await item().then()
//         console.log('第一组 async 的结果', res)
//     }
//     console.log(4)
// }

// log(b1, a1, c1)

//
// Promise.resolve()
//     .then(res => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log('11111111111',)
//                 resolve('第一个异步进程')
//             }, 1000)
//         })
//         // 只有当第一个then返回了promise对象才会接着调用下一个的then方法
//     })
//     .then((res) => {
//         console.log('res-----1', res)
//         return 44
//     })
//
//     .then((res) => {
//         console.log('res-----2', res)
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log('2222222222',)
//                 resolve('第二个异步进程')
//             }, 1000)
//         })
//     })
//     .then(() => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log('33333333',)
//                 resolve('第三个异步进程')
//             }, 1000)
//         })
//     })


// let a2 = function () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('11111111111',)
//             resolve('第一个异步进程')
//         }, 3000)
//     })
// }
// let b2 = function () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('2222222222')
//             resolve('第二个异步进程')
//         }, 2000)
//     })
// }
// let c2 = function () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('3333333333333')
//             resolve('第三个异步进程')
//         }, 1000)
//     })
// }
//
// let arr = [a2, b2, c2]
//
// async function fun(arr) {
//     for (const item of arr) {
//         // const res = await item().then()
//         const res = await item()
//         console.log('--------第二组await 的结果-----', res)
//     }
// }

// fun(arr)

// let arr111 = []
// for (let i = 0; i < 10; i++) {
//     let a = i
//     arr111.push(i)
// }


// console.log('-------arr111', arr111)
// let ccc = arr111.slice(0, 30)
// console.log('ccccc', ccc)


let aname = 'wang'
let obj = {
    aname: 'zhang',
    getName: function () {
        console.log('this',this)
        return this.aname

    }
}
console.log(obj.getName())
let test = obj.getName
console.log(test())
