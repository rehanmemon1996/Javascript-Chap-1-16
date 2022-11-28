// Q 1. Declare an empty array using JS literal notation to store
// student names in future.

// var Student_name = []

// i = 0;
// while (i == 0) {
//     input = prompt("Enter student names")
//     Student_name.push(input)
//     i = prompt("do you want to enter student name")
// }
// console.log(Student_name)

// Q 2. Declare an empty array using JS object notation to store
// student names in future.

// var StudentName = prompt("Enter student name");


// var object = {
//     StudentName: "" 
// }
// console.log(StudentName)

// Q 3. Declare and initialize a strings array.

// var array = ["javascript", "python", "ReactJs", "Nodejs"]

// Q 4. Declare and initialize a numbers array.

// var array = [1,2,3,4,5,6,7,8,9]

// Q 5. Declare and initialize a boolean array.

// var booleanArray = [true,false]

// Q 6. Declare and initialize a mixed array.

// var mixarr = ["Rehan", 25 , true , "Memon"]

// Q 7. Declare and Initialize an array and store available

// var Qualification = ["1) SSC", "2) HSC", "3) BCS", "4) BS", "5) BCOM", "6) MS", "7) M.PHIL", "8) PHD"];

// document.write("<h1>Qualifications:</h1>");
// for (var i = 0; i < Qualification.length; i++) {
//     document.write("<br>" + Qualification[i]);
// }

// Q 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

// var student = ["Michael" , "John", "Tony"]
// var score = []

// for(i= 0; i<student.length; i++){
//     var data = prompt("enter  marks")
//     score.push(data)
//     var perc = (data/500)*100
//     document.write("<br> Score of " +student[i]+ " is " +data+ ". Percentage: "+perc+"%")
// }

//  Q 9. Initialize an array with color names. Display the array elements in your browser.

// var ColorName = ["Red", "brown", "black", "Pink", "blue"]

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.

// var user = prompt("Which Color would you like to add at the beginning?")
// var store = ColorName.unshift(user)
// document.write("<br>" + ColorName)

//b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.

// var user2 = prompt("Which Color would you like to add at the End?")
// var store = ColorName.push(user2)
// document.write("<br>" + ColorName)

//c. Add two more color to the beginning of the array. Display the updated array in your browser.

// for(var i = 0; i < 2; i++){
//     var addColor = prompt("Add two Color")
//     ColorName.unshift(addColor)
// }
// document.write("<br>"+  ColorName)

//d. Delete the first color in the array. Display the updated array in your browser.

// var store = ColorName.shift()
// document.write("<br>" + ColorName)

// e. Delete the last color in the array. Display the updated array in your browser.

// var store = ColorName.pop()
// document.write("<br>" + ColorName)

//f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.

// var position = parseInt(prompt("Which index he/she wants to add a color & color name"))
// var add = prompt("Enter Color: ")
// ColorName.slice(position,1,add);
// document.write("<br>"+ColorName);

// // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser

// var index = parseInt(prompt("At what index you want to delete color: "));
// var howMany = parseInt(prompt("Enter how many element you want to delete "));
// ColorName.splice(index,howMany);
// document.write("<br>"+ColorName);

// Q 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// var arr = [320,230,480,120];

// document.write("<br>Score of Student: " + arr)
// document.write("<br>Ordered Scores of Student: " +arr.sort())

// Q 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// var CityNam = ["karachi", "Lahore", "Islamabad", "Quetta", "peshawer"]
// var selected = ["karachi", "Islamabad"]
// document.write("<h3>Cities list: </h3>" + CityNam)
// document.write("<br>Selected cities list:<br> " +selected)

//Q 12. Write a program to create a single string from the below mentioned 
// array: var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This"," is ", "my ", "cat"];
// var results = arr.join("")
// document.write("<h2>Array: </h2>\n "+ arr)
// document.write("<h2>String: </h2>\n "+ results)

// Q 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// lifo: last in and first out
// fifo : first in first out

// var array = ["keyboard", "mouse ", "printer ", "monitor "]

// for(var i=0;i<array.length;i++){
//     var remove = array.pop() //// last ko remove karega
// //     document.write("remove data " + remove + " <br>")
// //     document.write(array +" <br>")
//     i = i -1
// // }

// for(var i=0;i<array.length;i++){
//     var remove = array.shift()
//     document.write(" remove data " + remove + " <br>")
//     document.write(array +"<br>")

//     i = i -1
// }

// add = push 
// remove = pop
// remove = shift

// Q 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your browser using document.write() method:

// var phone = ["Apple", "Samsung", "Motorola", " Nokia", "Sony", "Haier"]

// document.write("<select>")
// for (var i = 0; i < phone.length; i++) {
//     document.write("<option> " + phone[i] + " </option>")
// }

// document.write("</select>")