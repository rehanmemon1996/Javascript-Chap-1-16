// // //Q1 Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// // var a = 10;

// // document.write("<h1>Result</h1>");

// // document.write("The value of a is : " +a);

// // document.write("<br>-------------------------------")

// // document.write("<br> The value of a++ : " + ++a)

// // document.write("<br>Now the value of a is: " +a)

// // document.write("<br> The value of a++ : " + ++a)

// // document.write("<br>Now the value of a is: " +a)

// // document.write("<br> The value of --a : " + --a)

// // document.write("<br>Now the value of a is: " +a)

// // document.write("<br> The value of --a : " + --a)

// // document.write("<br>Now the value of a is: " +a)

// // // Q2  What will be the output in variables a, b & result after execution of the following script: 

// // var a = 2, b = 1;
// // var result = --a - --b + ++b + b--;

// // // Explain the output at each stage: 
// // // var result1 = --a; 
// // // var result2 = --a - --b;
// // // var result3 = --a - --b + ++b;
// // // var result4 = --a - --b + ++b + b--;

// // document.write("<br>a is " + a)
// // document.write("<br>b is " + b)
// // document.write("<br>result is  " + result)

// // // document.write("<br>result is  " + result1)
// // // document.write("<br>result is  " + result2)
// // // document.write("<br>result is  " + result3)
// // // document.write("<br>result is  " + result4)


// // //Q 3 Write a program that takes input a name from user & greet the user.


// // var myname = prompt("Enter your name")

// // document.write(myname+ " you are very welcome in our website!!")

// // if(myname=="")
// // alert("Please Enter your good name")

// //Q 5 Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

// // var num = parseInt(prompt("Enter Number " , "0"))

// // var i = 0

// // document.write('<table border="1" cellspacing="0">');

// // for (i=1;i<11;i++){
// //     document.write("<tr><td>" + num + " x " + i + " = " + num * i + "</td></tr>")
// // }

// // Q 6 a) Take three subjects name from user and store them in 3 different variables.

// // a) Take three subjects name from user and store them in 3 different variables.

// //b) Total marks for each subject is 100, store it in another variable.

// //Take obtained marks for first subject from user and stored it in different variable.

// var English = parseInt(prompt("Enter English Marks"))
// if (English >= 0 && English <= 100) {

//     var Urdu = parseInt(prompt("Enter Urdu Marks"))
//     if (Urdu >= 0 && Urdu <= 100) {
//         var maths = parseInt(prompt("Enter Maths Marks"))
//         if (maths >= 0 && maths <= 100) {
//             console.log("Good Work")

//             var eng_per = ((English / 100) * 100).toFixed()
//             var urdu_per = ((Urdu / 100) * 100).toFixed()
//             var math_per = ((maths / 100) * 100).toFixed()

//             var sum = English + Urdu + maths

//             var tper = (sum / 300 * 100).toFixed()

//             document.write("<table>")
//             document.write("<tr><th> Subject </th>")
//             document.write("<th> Obtained Marks </th>")
//             document.write("<th> Total Marks </th>")
//             document.write("<th> sub Percentage </th>")
//             document.write("</tr>")

//             document.write("<tr><th> English </th>")
//             document.write("<th> " + English + " </th>")
//             document.write("<th> 100 </th>")
//             document.write("<th> " + eng_per + "%</th>")
//             document.write("</tr>")

//             document.write("<tr><th> Urdu </th>")
//             document.write("<th> " + Urdu + " </th>")
//             document.write("<th> 100 </th>")
//             document.write("<th> " + urdu_per + "%</th>")
//             document.write("</tr>")

//             document.write("<tr><th> Math </th>")
//             document.write("<th> " + maths + " </th>")
//             document.write("<th> 100 </th>")
//             document.write("<th> " + math_per + "%</th>")
//             document.write("</tr>")

//             document.write("<tr><th> </th>")
//             document.write("<th> " + sum + "</th>")
//             document.write("<th> 300 </th>")
//             document.write("<th> " + tper + "%</th>")
//             document.write("</tr>")


//         }
//         else {
//             alert("You enter encorrect marks of Math")
//         }
//     }
//     else {
//         alert("You enter encorrect marks of Urdu")

//     }
// }
// else {
//     document.write("You enter encorrect marks of eng")
//     alert("You enter encorrect marks of eng")
// }




