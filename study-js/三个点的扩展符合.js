
// 有些 深拷贝的 意思
let a = [1,3,4,5,6]
let b = [...a]
b.push(333)
console.log(a)
console.log(b)
let c = {cca: 11, ccb: 22, ccd: 33}
let d = {...c}
d.ccf = 555
let c1 = c
c1.ac = 99
console.log(c)
console.log(c1)
console.log(d)


let dddd = [1,3,4,5,6]
let e1 = dddd.map(item => {

    return 99
})
// console.log(dddd)
// console.log(e1)
let dddd1 = [{name: 1,},{name: 1,},{name: 1,},{name: 1,},{name: 1,}]
let e11 = dddd1.map(item => {
// dddd1.map(item => {
    item.name = 8888
    return 99
})

let dddd2 = dddd1
// console.log(dddd1)
// console.log(dddd2)
// console.log(e11)
