
// false
// 0
// null //초기화되지 않는 객체
// undefined //정의되지 않은 객체
// NaN //Not-a-Number / Infinity
// ""




// var number = [2,3,4,5,6,7,8,9];
//
// for(var i of number){
//   for(var j of number){
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
//   console.log("------------")
// }




// let arr = [1,2,3];
// let arr = new Array(1,2,3);
//
// let arr = new Array(10);
// let arr = [];
// arr.length = 10;
//
// let arr2 = [4,5,6];
// arr //instance
// arr.prototype  // == arr2.prototype
// arr2.prototype // == arr.prototype




//let arr = [1,2,3];
//let arr2 = [4,5,6];

//console.log(arr.concat(arr2));

//let filtered = arr.filter(obj => obj > 1);
//console.log(filtered);

// let mapped = arr.map(n => n*n);
// console.log(mapped);

//console.log(arr.find(n => n === 2));




// Object
// Array
// String
// Number
// Boolean
// Date
// Math
// Function

// let slime = new Object();
// slime.hp = 10; //slime에 hp가 없어도 추가됨
// slime.name = "MySlime";

// let slime = {
//   hp: 10,
//   name: "MySlime"
// }
// console.log(slime["hp"]);

let Slime = function () {
  this.hp = 10;
  this.name = "MySlime";

  SetInterval(function aaa() {//aaa의 hp값 조정
    this.hp += 10;
  }, 1000);

  SetInterval(() => {//바깥(slime)의 hp값 조정
    this.hp += 10;
  }, 1000);
}
let slime = new Slime();
console.log(slime.hp);





















//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
