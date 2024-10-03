//   iterating an array 
   
// first way 
 const numbers = [1,2,3,7]
 for (let number of numbers) 
    console.log(number);

//  second way 

//   numbers.forEach (function (number) {
//     console.log(number);
    
//   });

//  more simple way 

numbers.forEach ( (number, index) => console.log(index, number));