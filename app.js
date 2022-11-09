const button=document.querySelector('.container button');
const setup=document.querySelector('.container p ');
const punchline=document.querySelector('.container  button');
document.addEventListener('DOMContentLoaded',getJoke);

button.addEventListener('click',getJoke);

function getJoke(){
  fetch('https://official-joke-api.appspot.com/random_joke' )
  .then(res=> res.json())
  .then(data=>{
    setup.innerHTML=data.setup;
    punchline.innerHTML=data.punchline;
  }) 
}

