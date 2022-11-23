// // Q1 Write a program to take “city” name as input from user. If
// // user enters “Karachi”, welcome the user like this:
// // “Welcome to city of lights”

// // var city = prompt("Enter your city Name")
// // if(city.toLocaleLowerCase()=="karachi"){
// //     document.write("Welcome to city of light ")
// // }
// // else{
// //     document.write("welcome to  " + city)
// // }

// // Q2 Write a program to take “gender” as input from user. If the
// // user is male, give the message: Good Morning Sir. If the
// // user is female, give the message: Good Morning Ma’am. 

// // var gender = prompt("Enter your gender")
// // if (gender == "male") {
// //     document.write("Good Morning Sir")
// // }
// // if(gender == "female"){
// //     document.write("Good Morning Ma'am")
// // }

// // // Q 3. Write a program to take input color of road traffic signal
// // // from the user & show the message according to this table:

// // var signalColour = prompt("Enter traffic Colour")

// // if(signalColour == "red"){
// //     document.write("Must Stop")

// // }
// // else if(signalColour== "yellow"){
// //     document.write("Ready to move")
// // }
// // else if(signalColour== "green"){
// //     document.write("Move now")
// // }


// document.write("<table class= 'c1'>" )
// document.write("<tr ><th class= 'c1'> Signal Color </th>")
// document.write("<th class= 'c1'> Message </th>")

// document.write("<tr><th class= 'c1'> Red </th>")
// document.write("<th class= 'c1'> Must Stop </th>")
// document.write("<tr><th class= 'c1'> Yellow </th>")
// document.write("<th class= 'c1'> Ready to move  </th>")
// document.write("<tr><th class= 'c1'> Green </th>")
// document.write("<th class= 'c1'> Move</th>")


// //Q 4. Write a program to take input remaining fuel in car (in
// // litres) from user. If the current fuel is less than 0.25litres,
// // show the message “Please refill the fuel in your car”

// // var carFuel = prompt("Enter fuel in litres")

// // if(carFuel < 0.25){
// //     document.write("Please refil the fuel in your car")

// // }
// // else{
// //     document.write("you already have enough fuel to drive a car")
// // }


// //Q  5. Run this script, & check whether alert message would be
// // displayed or not. Record the outputs.

// var a = 4;
// if (++a == 5) {
//     alert("given condition for variable b is true")
// }
// var b = 82;
// if (b++ == 83) {
//     alert("given condition for variable b is ture")
// }

// var c = 12;
// if (c++ == 13) {
//     alert("condition 1 is ture")
// }
// if (c == 13) {
//     alert("condition 2 is true")
// }
// if (++c < 14) {
//     alert("condition 3 is true")
// }
// if (c == 14) {
//     alert("condition 4 is true")
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// if (true) {
//     alert("True");}
//      if (false) { alert("False"); 
// }
//  if("car" < "cat"){
//      alert("car is smaller than cat");
//  }

// q 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

// document.write("<h1 class='c2'>Mark Sheet</h1>")
// var subject1_Marks =parseInt( prompt("Enter your first subject marks "));
// var subject2_Marks =parseInt( prompt("Enter your second subject marks "));
// var subject3_Marks =parseInt (prompt("Enter your third subject marks "));
// var obtainedMarks = (subject1_Marks + subject2_Marks + subject3_Marks) ;
// var percentage = (obtainedMarks / 300) * 100;

// if (percentage >= "90"){
//     document.write("<table class=c2 >")
//     document.write("<br> Total Marks 300");
//     document.write("<br> Marks Obtained: "+obtainedMarks);
//     document.write("<br> Percentage: "+percentage+"%");
//     document.write("<br> Grade A-One");
//     document.write("<br>Remarks:  Excellent");
// }
// else if (percentage >= "70"){
//     document.write("<table class=c2 >")
//     document.write("<br> Total Marks 300");
//     document.write("<br> Marks Obtained: "+obtainedMarks);
//     document.write("<br> Percentage: "+percentage+"%");
//     document.write("<br> Grade A");
//     document.write("<br>Remarks:  Good");
// }
// else if (percentage >= "55"){
//     document.write("<table class=c2 >")
//     document.write("<br> Total Marks 300");
//     document.write("<br> Marks Obtained: "+obtainedMarks);
//     document.write("<br> Percentage: "+percentage+"%");
//     document.write("<br> Grade B");
//     document.write("<br>Remarks:  You need to improve");
// }
// else if (percentage < "40"){
//     document.write("<table class=c2 >")
//     document.write("<br> Total Marks 300");
//     document.write("<br> Marks Obtained: "+obtainedMarks);
//     document.write("<br> Percentage: "+percentage+"%");
//     document.write("<br> Fail");
//     document.write("<br> Remarks: Sorry <br>");
// }

// Q 7 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct answer”. 
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

// var btn = document.getElementById("btn");
// var output = document.getElementById("outputtext");

// var number = [Math.floor(Math.random() *100)]
// btn.addEventListener("click", function(){
//     var input = document.getElementById("userInput").value;
//     if(input == number){
//         output.innerHTML = 'you guessed right , bingo!! Correct' + {number}
//     } else if (input<number){
//         output.innerHTML = "You guessed too low!"
//     };
//     if(input> number){
//         output.innerHTML = "you guessed too high!"
//     }
// })


// var S_Number =parseInt(prompt("Enter any random number 1-10"))
// var G_Number = S_Number + 1;

// if(G_Number=S_Number){
//     document.write("Bingo!! Correct")

// }
// else{
//     document.write("Please enter any number")
// }

//Q 8 Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// var givennumber = parseInt(prompt("Enter any number"))
// var dividednumber = givennumber
// if(givennumber /=3){
//     document.write("<br>" + dividednumber+ " if the number is divisble by 3 Answer is " + givennumber);

// }
// else{
//     document.write("<br> please enter a number");
// }

//Q 9Write a program that checks whether the given input is an even number or an odd number.

// odd number are those cannont be divide into 2
//even number are those can be divide by 2

// var oddNum = []
// var evenNum = []

// for (var j = 0; j < 2; j++) {
//     var number1 = prompt("enter number")
//     if (number1.length > 0) {
//         if (number1.charCodeAt(0) >= 48 && number1.charCodeAt <= 57) {
//             if (number1 % 2 == 0) {
//                 document.write(number1 + " is even number<br>")
//             }
//             else {
//                 document.write(number1 + " is odd number <br>")
//             }
//         }
//         else {

//             document.write("Enter Only number <br>")
//         }

//     }
//     else {

//         document.write("Value input must")
//     }
// }


//Q10 Write a program that takes temperature as input and shows a message based on following criteria

//a)  T > 40 then “It is too hot outside.” 
//b)  T > 30 then “The Weather today is Normal.” 
//c)  T > 20 then “Today’s Weather is cool.” 
//d)  T > 10 then “OMG! Today’s weather is so Cool.” 

// var temperature = prompt("Enter temperature ");
// if(temperature > "40"){
//     document.write(" its too hot outside.");
// }
// else if(temperature > "30"){
//     document.write("The Weather today is Normal..");
// } 
// else if(temperature > "20"){
//     document.write("Today’s Weather is cool.");
// }
// else if(temperature > "10"){
//     document.write("OMG! Today’s weather is so Cool.");
// }



//Q11 Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input

// var inputNumber1 = parseInt(prompt("Enter first number "));
// var inputNumber2 = parseInt(prompt("Enter second number "));
// var operator = prompt("Enter any operator ");

// if(operator == "+"){
//     var sum = inputNumber1 + inputNumber2;
//     document.write("<br>"+inputNumber1+" and "+inputNumber2+" = "+sum);
// }
// else if(operator = "-"){
//     var subtraction = inputNumber1 - inputNumber2;
//     document.write("<br>"+inputNumber1+" and "+inputNumber2+" = "+subtraction);
// }
// else if(operator = "/"){
//     var division = inputNumber1 / inputNumber2;
//     document.write("<br>"+inputNumber1+" and "+inputNumber2+" = "+division);
// }
// else if(operator = "*"){
//     var multiplication = inputNumber1 * inputNumber2;
//     document.write("<br>"+inputNumber1+" and "+inputNumber2+" = "+multiplication);
// }
// else if(operator = "%"){
//     var modulus = inputNumber1 % inputNumber2;
//     document.write("<br>"+inputNumber1+" and "+inputNumber2+" = "+mudulus);
// }















