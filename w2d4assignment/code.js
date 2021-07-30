// problem 2 a) filter function on String object to filter a string by removing a string
String.prototype.filter = function(...str){
    let string = this;
    for(let i = 0; i < str.length; i++){
        var regex = new RegExp(str[i], "g");
        string = string.replace(regex, '').replace(/  +/g, ' ');
    }
    return string;
};
// console.log("This not house bad is not nice!".filter('not', 'bad'));


// problem 2 b) bubble sort on Array object
Array.prototype.bubbleSort = function(){
    let temp;
    for(var i = 0; i < this.length; i++){
        for(var j = 0; j < this.length - i -1; j++){
            if(this[j] > this[j+1]){
                temp = this[j]
                this[j] = this[j + 1]
                this[j+1] = temp
            }
        }
    }
    return this;
};
// console.log([6,4,0, 3,-2,1].bubbleSort());


// problem 2 c)
var Person = function() {};
Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function(){
    return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject){
    console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

// my code for teacher
var Teacher = function(){
    this.teach = function(subject){
        return this.name + " is now teaching " + subject;    
    }
};
Teacher.prototype = new Person();

// this can also be used : teach is set outside constructor function like in Student
// Teacher.prototype.teach = function(subject){ 
//     return this.name + " is now teaching " + subject;
// }