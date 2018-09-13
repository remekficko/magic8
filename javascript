var userQuestion='Where should I live?';
var randomNumber=Math.floor(Math.random()*8);
var eightBall="";
console.log(randomNumber);
switch (randomNumber) {
  case 0:
    eightBall='Spain'
    break;
  case 1:
    eightBall='B'
    break;
      case 2:
    eightBall='C'
    break;
      case 3:
    eightBall='D'
    break;
      case 4:
    eightBall='E'
    break;
      case 5:
    eightBall='F'
    break;
      case 6:
    eightBall='G'
    break;
  default:
    eightBall='Hungary'
}
console.log(userQuestion);
    console.log(eightBall);
