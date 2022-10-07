"use strict";



/*
if(num<45) {
     console.log('Error');
} else if (num>100) {
     console.log('too much');
} else {
     console.log('ok');
}

(num ===50) ? console.log('ok'): console.log('Error');*/
const num = "50";
switch (num) {
   case 49:
     console.log('wrong');
     break;
   case 100:
     console.log('wrong');
     break; 
   case 50:
          console.log('right');
          break;   
   default:
          console.log('not this time');
          break;        
} 
//not this time