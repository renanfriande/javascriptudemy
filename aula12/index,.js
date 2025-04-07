let a = 'a' //  b
let b = 'b' //  c
let c = 'c' //  a
let limbo // a

limbo = a

a = b
b = c
c = limbo

console.log(a, b , c)





