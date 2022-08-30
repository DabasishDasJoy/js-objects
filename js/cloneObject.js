const obj1 = {name: 'joy', age: 60, height: 5.4};

//To copy the object obj1 to another obj2 there are different methods to follow: 

const obj2 = obj1; //This will fall in referential integrity. That is both refer to the same object. So if you make any change in obj2 it will effect in obj1.

//The perfecto two methods are:
//Using spread operator

const obj3 = {...obj1} //Only takes the properties and assign to the new obj3. Referes difference object

//Deep Copy

const obj4 = JSON.parse(JSON.stringify(obj1)); //Deep copy