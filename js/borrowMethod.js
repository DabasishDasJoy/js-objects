const student = {
    name: "Dabasish",
    money: 5000, 
    studey: "CSE",
    subjects: ["math", "english", "OOP"],
    exam: function (){
        //Accessing a property from method is different. Use this to refer same class object and then access property of the class
        return `${this.name} is taking an exam`;
    },
    improvement: function(subject){
        //Another function canbe access as same as the vaiable accessing
        //Also accepts parameter
        this.exam();
        return `${this.name} is taking an improvement exam on ${this.subjects[1]} passed on ${subject}`;
        //to access the parameter should not use this as parameter is the scope variable.
    },
    moneyDeducted: function(amount, tips){
        //Also function can be used to set the value of a variable property. Here is an example:
        this.money = this.money - amount - tips; 
    }
}

/* 
    Borrowing other method means applying one object's method to another object. It can be achieved in three different ways.
*/
//Another object
const student1 = {
    name: "Kodom Ali", 
    money: "8000"
}

//1. call method
/* 
    call method calls the method to given parameter object reference
    
    syntax: call(thisArgOfTargetObject, paramenter);
*/
student.moneyDeducted.call(student1, 1000, 500);
console.log(student1.money);

//2. apply method
/* 
    apply method calls the method to given parameter object reference
    
    syntax: call(thisArgOfTargetObject, [paramenter1,parameter2]);
    here the diference with call is parameter list is an array
*/

student.moneyDeducted.apply(student1, [500, 200]);
console.log(student1.money);

//3. bind method
/* 
    bind method calls the method to given parameter object reference
    
    syntax: bind(thisArgOfTargetObject);
    here the diference is that bind method creates an function autometically.
    Then the function can be reused!
*/

const student1MoneyDeducted = student.moneyDeducted.bind(student1) //creates a function
//Now use the function
student1MoneyDeducted(800, 100);
console.log(student1.money);