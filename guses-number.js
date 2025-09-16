let random1=parseInt(Math.random()*100+1)
console.log(random1);
  document.querySelector("#buttonArea").addEventListener("click",function()
  {
            let test=document.getElementById("test")
            let game=document.getElementById("game")

            
            let userGusess=Number(document.querySelector("#userGuess").value)
            if(1<=userGusess && userGusess<=100)
            { 
              if(userGusess===random1){
                  test.innerHTML="You win Goooood job"
                  game.style.background="#7F7FD5"
                  document.querySelector("#userGuess").disabled=true
              }
              else if (userGusess>random1) {
                  test.innerHTML="Its too big try again"
              }
              else if (userGusess<random1) {
                  test.innerHTML="Its too short try again"
              }
              else{
                  test.innerHTML="Try agine"
              }
            }
            else{
                 test.innerHTML="please enter number between 1-100"
                 game.style.background="#c33c3c"
            }

})