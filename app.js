// New Assignment


// Answer no 1

// var a = new Date();
// var b = a.getHours();
// var c= a.getMinutes();
// var d = a.getSeconds();
// var e = a.getMonth();
// var f = a.getDay();
// var g = a.getFullYear();

// document.write("Current Date is " + f +" " + e +" " + g + "<br>Current Time is " + b +" : " + c +" : " + d);

// Answer no 2

// var a = new Date
// var monthNumber = a.getMonth();
// var months =['January','febuary',"March","april","may", "June", "July ","august", "september","October","november","December"]
// var final = months[monthNumber]
// alert(final)

// Answer no 3

// var a = new Date()
// var dayNumber = a.getDay();
// var day =["sun","mon","tue","wed","thurs","fri","sat"]
// var final = day[dayNumber]

// document.write(final)

// Answer no 4

// var a = new Date();
// var b = a.getDay();
// if(b == 0 || b == 6){
//     alert("Its Fun Day")
// }
// else(
//     alert("Its Working Day")
// )

// Answer no 5

// var a = new Date
// var b = a.getDate();
// if(b < 16){
//     alert("First Fifteen Days Of Month")
// }
// else (
//     alert("Last Days Of Month")
// )

// Answer no 6

// var a = new Date("Dec 05 2015 22:32:23")
// var b = new Date("Jan 1 1970");

// var c = a.getTime();
// var d = b.getTime();

// var final1 = (c - d)/(1000*60*60)
// var final2 = (c - d)/(1000)
// document.write("Current Date: " + a + "<br>" + "Elapsed miliseconds since 1 Jan 1970: " + final2 + "<br>" + "Elapsed Minutes since 1 Jan 1970: " + final1)



// Answer no 7

// var a = new Date();
// var b = a.getHours();
// if(b < 12){
//     alert ("Its AM")
// }
// else (
//     alert("Its PM")
// )

// Answer no 8

// var LaterDate = new Date("31 Dec 2020");
// document.write("Later Date: " + LaterDate)

// Answer no 9

// var a = new Date("18 June 2015");
// var b = new Date("18 January 2021");
// var c = a.getTime();
// var d = b.getTime();
// var e = (d - c) / (1000 * 60 * 60 * 24)
// alert(e.toFixed(0) + " Days have passed Since 1st Ramadan, 2015")



// Answer no 10


// var a = new Date("05 Dec 2015 22:50:16 ")
// var b = new Date("1 Jan 2015")
// var ref = a.getTime();
// var beg = b.getTime();

// var final = (ref - beg)/ (1000*60)
// document.write("On Refference Date " + a + " <br>" + final.toFixed(0) + " Seconds have Passed Since beginning of 2015")

// Answer no 11

// var current = new Date("05 Dec 2015 23:08:16")
// var a = new Date("05 Dec 2015 23:08:16")
// var b = a.setHours(a.getHours()-1);
// var c = new Date(b)
// document.write("Current Date: " + current + "<br>" + "1hour Ago, it was " + c);

// Answer no 12

// var current = new Date("Dec 05 2015 23:09:16 ");
// var a = new Date("Dec 05 2015 23:09:16 ");
// var b = a.setFullYear(a.getFullYear()-100);
// var c = new Date(b)
// document.write("Current Date: " + current + "<br>" + "100 years Back, it was " + c)

// Answer no 13

// document.write("<h2>K-ELectric Bill</h2>")

// var CustomerName = "Ahmed"
// var Month = "January"
// var units = 410
// var charges = 16
// var late = 350
// var netAMount = units*charges 

// document.write("Customer Name: " + CustomerName + "<br>" + "Month: " + Month + "<br>" + "No of Units " + units + "<br>" + "Charges per Unit: " + charges + "<br>" + "<br>")
// document.write("Net Amount Payable (within Due Date): " + netAMount + "<br>" + "Late PAyment Sucharges: " + late + "<br>" + "Gross Amount Payable(after Due Date): " + (netAMount + late))


// Chapter no 35-38

// Answer no 1

// function date(){
//    var a = new Date();
//     document.write(a)
// }

// date();

// Answer no 2

// function greet(){
// var a = prompt("Enter your first Name")
// var b = prompt("Enter your Last Name")
// alert("Welcome! To my website " + a + " " + b)
// }

// greet();


//Answer no 3
// var input = +prompt("Enter first number");
// var input1 = +prompt("Enter second number");
// function sum(input,input2){
//     alert(input+input1);
// }
// sum(input,input1)

//Answer no 4
// var num1 = prompt("Enter first value");
// var oper = prompt("Enter your operator");
// var num2 = prompt("Enter second value");
// function calc(num1,oper,num2){
// if(oper === "+"){
//     return +num1 + +num2 
// }
// else if(oper === "-"){
//     return num1 - num2
// }
// else if(oper === "*"){
//     return num1 * num2
// }

// else if(oper === "/"){
//     return num1 / num2
// }

// else if(oper === "%"){
//    return num1 / num2*100
// }
// }
// document.write("The output is: " + calc( num1 , oper , num2))

// Answer no 5
// function s(num) {
//     for (i=0; i<=num; i++){
//         var sum=0;
//         var j = i*i;
//         sum = j;
//         document.write('<br>Squares Number : '+sum);
//     }
//     document.write("<br><br>The sum of squares for numbers up to and including " +num+ " is " +sum ) ;
// }

// var num = +prompt("Enter a number for Squares :");
// s(num);

// Answer no 6
// function factorial(x) { 
//     if (x === 0) {
//     return 1;
//     }
//     return x * factorial(x-1);
// }
// var factor = +prompt("Enter a Factorial Number ")
// document.write("<br><br>" + factorial(factor) + "<br><br>");

// Answer no 7
// function counting (startnum,endnum){
//     for (i=startnum; i <= endnum; i++){
//         document.write("<br>" + i);
//     }
// }
// var startnum = +prompt('Enter a number for Start Counting ');
// var endnum = +prompt('Enter a number for End Counting ');
// document.write("<h2>Counting</h2>");
// document.write("Starting number : " + startnum +"Ending number is : "+endnum);
// counting(startnum,endnum);

//Answer no 10
// var  word = prompt("Enter your word")
// var drome = "";
// function palindrome(palin,drome){
//     for(var i = palin.length - 1;i <= 0;i--){
// drome += [i]
//     }
//     if(word === drome){
//         return word + " is palindrome word"
//     }
//     else{
//         return "This is not a palindrome word"
//     }
// }
//     alert(palindrome(word , drome ,i))

//Answer no 11
// function upper(string){
// document.write("the quick brown fox".ucwords())
// }
// document.write(upper())