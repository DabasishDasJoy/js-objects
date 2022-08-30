const student = {
    id: "01306122",
    name: "Dabasish Das Joy", 
    isStudent: true,
    trimester: 02, 
    gender : "male"
}

//Destructuring
const {name, id, gender} = student;
console.log(id);

//1. looping in arrray is easy using forOf()
//But looping in object using forOf is not directly possible but possible in another way

/* 
    as object.keys returns an array of keys. we can use forOf on that array
*/

const keys = Object.keys(student);
console.log(keys);
//Now loop over the keys array using forOf()

for (const key of keys) {
    console.log(key, student[key]); //here getting the value using bracket notation
}


// 2. Using forin
//For objects use forin to loop through
//Same as for of but here keys may not be stored differently
for (const key in student) {
    console.log(key, student[key]);
}


/* 
    Third way is bit easy and complex. Here three thing will work simultenously
    1. Object.entries
    2. Object destruturing
    3. For of
*/
console.log("=========================");
for (const [key, value] of Object.entries(student)) {
    console.log(key, value);
}