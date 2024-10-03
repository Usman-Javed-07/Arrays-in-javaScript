//    reducing an array 

const number = [1,-1,2,3];
 
const sum = number.reduce ((accmulator , currentnumber) => accmulator + currentnumber);

console.log(sum);