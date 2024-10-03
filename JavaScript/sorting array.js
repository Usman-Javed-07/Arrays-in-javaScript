//    sorting array 

// sort
// const number = [3,1,2];
// number.sort();
// console.log(number);
// // reverse 

// number.reverse();
// console.log(number);



const couse  = [
    {id:1 , name : 'Node'},
    {id:2 , name : 'Javascript'}
];

 couse.sort (function (a,b) {
  
    // a < b => -1
    // a > b => 1
    // a === b => 0

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;

 });

 console.log(couse);

