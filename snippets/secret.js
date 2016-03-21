var secret = 'llllo'
var code = ''

console.log("La palabra secreta es:", secret)

var count = 0
while(count < secret.length){
  if(secret.charAt(count) === 'h'){
    code = code + '.'
  }else if(secret.charAt(count) === 'o'){
    code = code + ','
  }else if(secret.charAt(count) === 'l'){
    code = code + '*'
  }else if(secret.charAt(count) === 'a'){
    code = code + '?'
  }
  count = count + 1
}


console.log('El codigo es:', code)


