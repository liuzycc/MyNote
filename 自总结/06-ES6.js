##Array.from()方法
let arrayLike = {
  0: 'tom', 
  1: '65',
  2: '男',
  3: ['jane','john','Mary'],
  'length': 4
}
let arr = Array.from(arrayLike)
console.log(arr) // ['tom','65','男',['jane','john','Mary']]