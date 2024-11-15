// 1.
// const object = {
//     name: "Abdulloh",
//     age: 19,
//     job: "Logistic Company",
//     interest: "game",
//     hobby: "sleep",             //88
//     number: "+998944683325",
//     username: "AU"
// };

// const entries = Object.entries(object);

// console.log(entries);


// 2.
// const person1 = {
//     name: "Abdulloh",
//     age: 19
// }
// const person2 = {
//     hobby: "Volleybool",
//     interest: "sleep"
// }
// const connectObj = Object.assign(person1, person2)
// console.log(connectObj);


// 3.
// let arr = [1,2,3,4,5,6]
// function fn(arr){
//     let lastNumber = arr[arr.length - 1] + 1
//     arr.push(lastNumber)
//     console.log(arr);
// }
// fn(arr)


// 4.
// let arr = [1,2,3,4,5,6]
// function fn(arr){
//     let result = 0
//     for(let num of arr){
//         result += num
//     }
//     if(arr[0] % 2 == 0){
//         arr.unshift(result)
//     }
//     else{
//         arr.push(result) 
//     }
//     console.log(arr);
// }
// fn(arr)


// 5.
// let arr = [1, 2, 3, 4, 5, 6];
// function fn(arr) {
//     let temp = arr[0];
//     arr[0] = arr[arr.length - 1];
//     arr[arr.length - 1] = temp;
//     console.log(arr);
// }
// fn(arr);

//-----------------------------------------------VAZIFA-2----------------------------------------------------\\

// 2.
// const arr1 = [5,6,true,null,8]
// const arr2 = [0,2,5,false,6]
// let sumArr = arr1.map((value, index) => value + arr2[index]);
// let totalSum = 0;
// for (let i = 0; i < sumArr.length; i++) {
//     totalSum += sumArr[i]; 
// }
// console.log(sumArr);
// console.log(totalSum);


// 3.
// let arr = [1, 2, 3, 4, -5, 6, 7, 9, 8];
// let minNum = Math.min(...arr); 
// let minIndex = arr.indexOf(minNum); 
// console.log(minIndex); 


// 5.
// let arr1 = [5,4,3,6,3,7,1]
// let arr2 = [22,1,42,34,55,67,11,32]
// let combinedArray = [...arr1, ...arr2]
// let res = combinedArray.sort((a, b) => a - b)
// console.log(res);