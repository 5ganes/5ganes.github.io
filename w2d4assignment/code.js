// filter function on String object to filter a string by removing a string
String.prototype.filter = function(str){
    var regex = new RegExp(" " + str, "g"); // RE to remove banned word str from all the places of string
    return this.replace(regex, '');
};
// console.log("This not house is not nice!".filter('not'));


// bubble sort on Array object
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