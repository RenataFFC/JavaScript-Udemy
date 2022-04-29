const arr = new Array ()
console.log (arr)
const arr2 = new Array(true,"daniel", 28, new Array(2,4,10))
console.log (arr2)
arr[0]="daniel"
arr[1]=41
console.log (arr2[3][arr2[3].length-1])

const arr3 = ["Daniel",40, [ 3,6,9],true]
console.log (arr3)
console.log (arr3[2])
arr3[4] = "novo"
arr3[arr3.length]="novo2"
arr3.push("Renata","teste",3)
console.log (arr3)
let n = 6
console.log (arr3[n])