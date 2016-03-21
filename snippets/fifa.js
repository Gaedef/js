function Player(velocity, skill, strength, name){
  this.velocity = velocity,
  this.skill = skill,
  this.strength = strength,
  this.name = name
}


var messi = new Player(95,90,85,'Messi')
var neymar = new Player(90,91,85,'Neymar')

var totalMessi = messi.velocity + messi.skill + messi.strength
var totalNeymar = neymar.velocity + neymar.skill + neymar.strength

if(totalMessi > totalNeymar){
  console.log('Messi es mejor jugador que Neymar')
} else{
  console.log('Neymar es mejor jugador que Messi')
}






