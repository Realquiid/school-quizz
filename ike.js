let loginButton = document.getElementById('loginButton');
let personName = document.getElementById('namee');
let firstCon = document.getElementById('firstCon');
let Age = document.getElementById('Age');
let secondCon = document.getElementById('secondCon');
let nextButton = document.getElementById('nextButton');
let nextInput = document.getElementById('nextInput');
let thirdCon = document.getElementById('thirdCon');
let nextButtontwo = document.getElementById('nextButtontwo');
let previous = document.getElementById('previous');
let nextInputtwo = document.getElementById('nextInputtwo');
let forthCon = document.getElementById('forthCon');
let nextButtonthree = document.getElementById('nextButtonthree');
let previoustwo = document.getElementById('previoustwo');
let nextInputthree = document.getElementById('nextInputthree');
let fifthCon = document.getElementById('fifthCon');
let nextButtonfour = document.getElementById('nextButtonfour');
let previousthree = document.getElementById('previousthree');
let nextInputfour = document.getElementById('nextInputfour');
let lastCon = document.getElementById('lastCon');
let lastPrevious = document.getElementById('lastPrevious');
let lastInput = document.getElementById('lastInput');
let submitbutton = document.getElementById('submitbutton');
let sub = document.getElementById('sub');
let Results = document.getElementById('ressult');

let day = new Date();

let timeOfDay = day.getHours();

//firstCon.style.display = 'none'
secondCon.style.display = 'none'
thirdCon.style.display ='none'
forthCon.style.display ='none'
fifthCon.style.display ='none'
lastCon.style.display ='none'
sub.style.display = 'none'



loginButton.addEventListener('click', function() {

    if (personName.value === '' || Age.value === '' ){
        //personName.style.border = 'solid 2px red';
        alert('Please fill all field appropriately');
    }else{
        //personName.style.border = 'solid 1px green';
        alert('login successful');

        setTimeout(() => {

            firstCon.style.display = 'none';
            secondCon.style.display = 'block';
        }, 3000);
    }
});

function heart(){
    nextInput.value += 'Heart';
    
}

function liver(){
    nextInput.value += 'Liver';

    setTimeout(() => {
        nextInput.innerHTML = '';
        console.log("this will run after 2 seconds")
    }, 1000);
}

function skin(){
    nextInput.value += 'Skin';
}

function lungs(){
    nextInput.value += 'Lungs';
}

nextButton.addEventListener('click', function() {
    secondCon.style.display = 'none';
    thirdCon.style.display = 'block';
    
});

function shark(){
    nextInputtwo.value += 'Shark';
}
function whale(){
    nextInputtwo.value += 'Blue Whale';
}
function giraffe(){
    nextInputtwo.value += 'giraffe';
}
function elephant(){
    nextInputtwo.value += 'Elephant';
}
nextButtontwo.addEventListener('click', function() {

    thirdCon.style.display = 'none';
    forthCon.style.display = 'block';

});
previous.addEventListener('click', function() {

    thirdCon.style.display = 'none';
    secondCon.style.display = 'block';

});

function bread(){
    nextInputthree.value += 'Bread';
}
function milk(){
    nextInputthree.value += 'Milk';
}
function sand(){
    nextInputthree.value += 'Sand';
}
function water(){
    nextInputthree.value += 'Water';
}
nextButtonthree.addEventListener('click', function() {

    forthCon.style.display = 'none';
    fifthCon.style.display = 'block';
});
previoustwo.addEventListener('click', function() {

    thirdCon.style.display = 'block';
    forthCon.style.display = 'none';

});

function cancer(){
    nextInputfour.value += 'The tropic of cancer';
}
function circle(){
    nextInputfour.value += 'The Arctic circle';
}
function tropic(){
    nextInputfour.value += 'The tropic of capricon';
}
function equator(){
    nextInputfour.value += 'The equator';
}

nextButtonfour.addEventListener('click', function() {
    lastCon.style.display = 'block';
    fifthCon.style.display = 'none';
});
previousthree.addEventListener('click', function() {
    fifthCon.style.display = 'none';
    forthCon.style.display = 'block';

});

function beaver(){
    lastInput.value += 'Beaver';
}
function rabbit(){
    lastInput.value += 'Rabbit';
}
function fox(){
    lastInput.value += 'Fox';
}
function squirrel(){
    lastInput.value += 'Squirrel';
}
lastPrevious.addEventListener('click', function() {
    lastCon.style.display = 'none';
    fifthCon.style.display = 'block';

});

submitbutton.addEventListener('click', function(){
  lastCon.style.display = 'none';
  sub.style.display = 'flex';

   let score = 0

   if(nextInput.value === 'skin'){
    score ++;
   }
   if(nextInputtwo.value === 'whale'){
    score ++;
   }
   if(nextInputthree.value === 'water'){
    score ++;
   }
   if(nextInputfour.value === 'equator'){
    score ++;
   }
   if(lastInput.value === 'beaver'){
    score ++;
   }

   setTimeout(() => {
    Results.innerHTML =  `${personName.value} your score ${score} out of 5`;
}, 4000);
});