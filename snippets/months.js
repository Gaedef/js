/*
@understands: Write a JS program to enter month number between(1-12) and print the number of days in month. 
@author: gaedef
*/

var month = 33

if( month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
  console.log(" tiene 31 dias ")
}

if( month == 2 ) {
  console.log("tiene 28 ó 29 dias")
}

if( month == 4 || month == 6 || month == 9 || month == 11) {
  console.log(" tiene 30 dias ")
}

if(month < 0  || month > 12) {
	console.log("ese mes no existe ,pero puedes intentar con uno real ahora")
}