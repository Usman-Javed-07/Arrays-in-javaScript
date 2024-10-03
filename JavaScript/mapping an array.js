const numbers = [1,2,3,-1,-2,7];

// const filter = numbers.filter(n => n >= 0);

// const item = filter.map( n => '<li>' + n + '</li>');

// const html =  '<ul>' + item.join('') + '/ul';



const items = numbers
.filter (n => n >= 0)
.map (n => ({value : n}))
.filter( obj => obj.value > 1)
.map (obj => obj.value)

console.log(items);
   