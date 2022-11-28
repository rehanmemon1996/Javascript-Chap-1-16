//Q Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// var string = prompt("Enter a character: ");

// if (string.charCodeAt() >= 65 && string.charCodeAt() <= 90) {
//     document.write(string + " is capital leter")
// }
// else if (string.charCodeAt() >= 97 && string.charCodeAt() <= 112) {
//     document.write(string + " is small letter")
// }
// else if (string.charCodeAt() >= 48 && string.charCodeAt() <= 57) {
//     document.write(string + " is number")
// }

//Q 2  Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var Num1 = prompt("Enter first number")
// var Num2 = prompt("Enter second number")

// if(Num1>Num2){
//     document.write(Num1+ " is greater than " + Num2)
// }
// else if(Num1<Num2){
//     document.write(Num1+ " is less than " + Num2)

// }
// else if(Num1==Num2){
//     document.write(Num1 + " is Equal to " +  Num2)
// }

// Q 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var input = prompt("Enter Number")

// if(input>0){
//     document.write(input+ " the number is positive")
// }
// else if(input<0){
//     document.write(input +" the number is negative")
// }
// else if(input == 0){
//     document.write(input+ " the number is zero")
// }
// else{
//      document.write("Enter a correct Number")
// }

//Q 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

// var vowel = prompt("Enter String ");
//  vowel = vowel.toUpperCase();
// if((vowel == "A" || vowel == "E" || vowel == "I" || vowel == "O" || vowel == "U")){
//     document.write(vowel+" True for vowel letter");//is a Vowel Letter
// }
// else{
//     document.write(vowel+" False for consonent ");//is Consonent
// }

//Q 5 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var password = prompt("Enter your Password")

// if (password == "7902") {
//     alert("Correct!!")

// }
// else if (password == "") {
//     alert("please enter your password")
// }
// else {
//     alert("incorrect password")
// }

//Q 6 6. This if/else statement does not work. Try to fix it: 

// var greeting;
// var hour = 13;
// if (hour < 18) {
//      alert("Good day");
     
// }
// else{ 
//     alert("Good evening");
// }

// Q 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

// var time = prompt("Enter time")

// if(time <=0000 && time<1200){
//     alert("Good Morning")
// }
// else if(time>=1200 && time<1700){
//     alert("Good afternoon")
// }
// else if(time>=1700 && time<2100){
//     alert("Good evening")
// }
// else if(time>=2100 && time<2359){
//     alert("Good Night!!")
// }