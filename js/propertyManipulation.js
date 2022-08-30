/* 
    Anl objecst has key and values
    object = {
        key: value
    }
*/
const student = {
    id: "01306122",
    name: "Dabasish Das Joy", 
    isStudent: true,
    trimester: 02, 
    gender : "male"
}
// To get the object keys:
const keys = Object.keys(student);
console.log(keys);

//To get the values: 
const values = Object.values(student);
console.log(values);

//Here keys and values are get in different variable
//If we want the keys along with values in an variable -> entries
const entries = Object.entries(student);
console.log(entries);

//To delete a property
console.log(student);
delete student.isStudent; //Deletes a property
console.log(student);

//If we don't want to add or remove any property to object we can seal the object
console.log(student);
Object.seal(student);
delete student.name;
student.passed = true;
//But sealed object's property can be modified
student.name = "Joy";
student.trimester += 1;
console.log(student);


/* 
    Ther's another method which make the object immutable, that is object cannot be modified or added or deleted
*/
console.log(student);
Object.freeze(student);
delete student.name;
student.passed = true;
student.name = "Joy";
student.trimester += 1;
console.log(student);

//As the object is freezed nothing will work

