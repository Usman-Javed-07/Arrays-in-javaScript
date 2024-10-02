//   combining and slicing an array

// const first = [1,2,3]; 
const first = [{id:1}];
const second = [4,5,6];

// combining an array 
   const combine =  first.concat(second);
   first[0].id = 10;


//  slicing an array 

//   const slice = combine.slice(2,4);  // first way 
//   const slice = combine.slice(3);    // second way
     const slice = combine.slice();   // third way


  console.log(combine);   
  console.log(slice);