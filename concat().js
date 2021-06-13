/* 
concat()
It merges two or more arrays or values. It doesnt change the existing array. 
It returns a new array
*/

const fruits = ['orange', 'banana']
const vegetables = ['beans', 'broccoli']

const fruitsAndVeggies = fruits.concat(vegetables)

// fruitsAndVeggies = ['orange', 'banana', 'beans', 'broccoli']

let myList = ['Fish', 'Smoke', 'Drink', 'Work']
let myList_2 = ['Run', 'Yoga', 'Taichi']
let newList  = myList.concat(myList_2)
console.log(newList);
