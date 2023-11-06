// Program to Remove Duplicates from an Array



//Method:1
const originalArray = [1, 2, 4, 5, 5, 5, 6, 6, 7, 8, 9];
const uniqueArray = [...new Set(originalArray)];

console.log(uniqueArray);



//Method:2
const originalArray2 = [1, 2, 4, 5, 5, 5, 6, 6, 7, 8, 9];
const uniqueArray2 = [];

originalArray.forEach(item => {
  if (!uniqueArray.includes(item)) {
    uniqueArray.push(item);
  }
});

console.log(uniqueArray);
