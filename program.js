
//starting value is 2, because we just want the numbers in the object, not the other 2 
let result = 0 
for(var i = 2; i < process.argv.length ; i++){
    
    result += Number(process.argv[i]); // converts the contents of the brackets into a number
}
console.log(result)
//1. process.argv gives an array of the command line arguments.
//2.a  For loop consists of a variable declaration, a condition, a task to run if the condition is true and another task to run after this to close the loop.
//3.you can declare variables using var {variablename} = {value}
//4.you can use inequality symbols for your conditional statement
//5.++ adds 1 to the value of the variable and reassigns this new value to the variable.
//6.+= adds the value on the left to the value of the variable on the right and reassigns this.
//7.number() returns the number value of the contents fo the brackets.
//8.using the square brackets [ ] you can select a specific item in an array.
