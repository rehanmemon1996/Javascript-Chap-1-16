// //Q 1 Write a program that take two numbers & add them in a
// // new variable. Show the result in your browser.

// // var n1 = parseInt(prompt("Enter your First Number"))
// // var n2 = parseInt(prompt("Enter your Second Number"))

// // var sum = n1 + n2

// // document.write("Sum of " +n1+ " and " +n2+ " is " + sum )

// Q 2---------------------------------------------------------

// // // Subtraction

// // var n1 = parseInt(prompt("Enter your First Number"))
// // var n2 = parseInt(prompt("Enter your Second Number"))

// // var subt = n1 - n2

// // document.write("Subtraction of " +n1+ " and " +n2+ " is " + subt )

// // Multiplication

// // var n1 = parseInt(prompt("Enter your First Number"))
// // var n2 = parseInt(prompt("Enter your Second Number"))

// // var multi = n1 * n2

// // document.write("Multiplication of " +n1+ " and " +n2+ " is " + multi )

// // divison

// // var n1 = parseInt(prompt("Enter your First Number"))
// // var n2 = parseInt(prompt("Enter your Second Number"))

// // var divison = n1 / n2

// // document.write("Division of " +n1+ " and " +n2+ " is " + divison )

// //Modulus.

// var n1 = parseInt(prompt("Enter your First Number"))
// var n2 = parseInt(prompt("Enter your Second Number"))

// var Modulus = n1 % n2

// document.write("Modulus of " +n1+ " and " +n2+ " is " + Modulus )

// ---------------------------------------------------------

//Q 3 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.

// var b = undefined

// document.write("Value after variable declaration is " + b + "<br>")

// var c = 5

// document.write("Initial value: " + c + "<br>")

// var f = ++c

// document.write("Value after increment is: " + f + "<br>")

// var g = ++c + 5 + 1

// document.write("value after addition is: " + g+ "<br>")

// var j = --c + 5 + 1

// document.write("Value after decrement is: " + j + "<br>")

// var k = 3%3

// document.write("The remainder is: " + k)


// ---------------------------------------------------------

// //Q 4 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets

// var ticketPrice = 600
// var ticket = parseInt(prompt("How many Ticket do you want? "))
// var tick = ticketPrice * ticket


// document.write("<br>Total cost of buy 5 tickets to a movies is " + tick + " PKR")

// ---------------------------------------------------------

// Q 5 Write a script to display multiplication table of any number in your browser.

// var num = parseInt(prompt("Enter a number : "));
// var i = i=1;  i<=10; i++

// if(i){
// document.write(number + " * " + i + " = " + number * i )} ;

// var  t=parseInt(prompt("Enter a number : "));
// var  i=1;
// document.write("Table of  2" + t + "<br>");2
// while(i<=10)
// {
    
// document.write(t+  "  X  "  +i+  "  =  "  +i*t+   "<br>");
// i++;
// }

// ---------------------------------------------------------

// Q 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// var celcius = 25
// var f = (celcius * 9/5) + 32

// document.write(celcius + '°C is ' + f + '°F'  +"<br>")

// var Fahrenheit = 70;
// var c = ((Fahrenheit - 32)*5)/9

// document.write(Fahrenheit + '°F is ' + c + '°C' +"<br>")

// ---------------------------------------------------------

// Q 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables

// var item1 = 650
// var qty_item1 = parseInt(prompt("Quantity of item 1 is " ))
// sum1 = item1*qty_item1
// var item2 = 100
// var qty_item2 = parseInt(prompt("Quantity of item 2 is "))
// sum2 = item2*qty_item2
// var ship_charges = 100
// sum = sum1 + sum2 + ship_charges
// document.write("<h1><b>Shopping Cart</b> </h1>")
// document.write("Price of item 1 is: " +item1)
// document.write("<br> Quantity of item 1 is " +qty_item1)
// document.write("<br> Price of item 2 is " +item2)
// document.write("<br> Quantity of item  2 is " +qty_item2)
// document.write("<br> Shipping Charges " + ship_charges)
// document.write("<br><br>Total cost of your order is " + sum)

// ---------------------------------------------------------

//Q 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

// var marks = 980
// var mark_obt = 804
// var perc = (mark_obt/marks) * 100

// document.write("<h1>Marks Sheet</h1>")
// document.write("Total Marks "+marks+ "<br>Marks obtained "+mark_obt+ "<br>Percentage: " +perc)

// ---------------------------------------------------------

// QQ 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.

// var UsDollar = 104.80
// var pkr = parseInt(prompt("Currency convert USD into PKR " ))
// var Riyal = 28

// var pkr1 = parseInt(prompt("Currency convert Saudi Riyal into PKR " ))
// sum1 = UsDollar*pkr
// sum2 = Riyal*pkr1
// sum = sum1 + sum2

// document.write("<h1>Currency in PKR</h1>")


// document.write("Total Currency in PKR: " + sum)

// ---------------------------------------------------------

// Q 10 Write a program to initialize a variable with some number and do arithmetic in following sequence:

// var add = 5
// var mult = 10
// var div = 2

// var add_mult_div = (5 * 10)/2

// document.write("Number and Arthmetic in following sequence: "+ add_mult_div)

// ---------------------------------------------------------

// Q 11 11. The Age Calculator: Forgot how old someone is? Calculate it!

// var current_year = parseInt(prompt("Enter Current year here: "))
// var birth_year = parseInt(prompt("Enter your birth year"))
// var dob = current_year - birth_year

// document.write("<h1>Age Calculator</h1>")

// document.write("Current Year: " + current_year + "<br>" )
// document.write("Birth Year: " + birth_year + "<br>")
// document.write("your Age is:  " + dob )

// ---------------------------------------------------------

// Q 12 The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output

// var radius = 20 
// var circum = 2*3.142*radius
// document.write("<h1>The Geometrizer</h1>")
// document.write("Radius of a circle: " +radius + "<br>")
// document.write("The Circumferecne is: " + circum + "<br>")

// var area = 3.142*radius*radius
// document.write("The Area is: " + area)

// ---------------------------------------------------------

//Q 13. The Lifetime Supply Calculator: 
// Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.

// var age = 26;
// var max_age = 100;
// var numberDay = 3;
// var total_eat = (numberDay * 365) * (max_age - age)

// document.write("<h1>The Lifetime Supply Calculator</h1> <br>")

// document.write("Favourite Snack: chocolate chip <br>")
// document.write("Current age: " + age +" <br>")
// document.write("Estimated Maximum Age " +max_age+ "<br>")
// document.write("Amount of snacks per day: "+numberDay+" <br>")
// document.write("you will need " +total_eat+ " chocolate chip to last you until the ripe old age of "+max_age)










