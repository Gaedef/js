var age = -1

if(age >= 0 && age <= 2 ) {
  console.log(" es un bebe ")
}

if(age >= 3 && age <= 11 ) {
  console.log("es un niño ")	
}

if(age >= 12 && age <= 17 ) {
  console.log(" es un adolescente ")
}

if(age >= 18 && age <= 59 ) {
  console.log(" es un adulto ")
}

if(age >= 60 && age <= 200 ) {
  console.log(" es un anciano ")
}

if(age >= 201 ) {
	console.log("Deberías estar muerto")
}

if(age < 0  ) {
	console.log("Aún no naces")
}