/* 
    Object can have variable or methos as property.
    Accessing a method property is shown below:
*/

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
    moneyDeducted: function(amount){
        //Also function can be used to set the value of a variable property. Here is an example:
        this.money -= amount; 
    }
}


const isExam = student.exam();
console.log(isExam);
const isImprovement = student.improvement('math');
console.log(isImprovement);

student.moneyDeducted(500);
console.log(student.money);