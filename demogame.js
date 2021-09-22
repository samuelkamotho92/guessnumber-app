
let correctvalue = Math.trunc(Math.random()*20) + 1;
let scorevalue = 20;
let highscore = 0;
let btn = document.querySelector(".check");
const refactormesages = (message)=>{
    document.querySelector(".message") .textContent = message;
};
btn.addEventListener("click",()=>{
    let userinput = Number(document.querySelector(".guess").value);
    console.log(userinput);
    if (!userinput) {
    refactormesages("⛔ no number");
    }else if (correctvalue === userinput) {
        refactormesages("🌹 correct score");
        document.querySelector(".number").textContent = correctvalue;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.backgroundColor = "20rem";
        if (scorevalue > highscore) {
            highscore = scorevalue;
            document.querySelector(".highscore").textContent = highscore;
        }
//diffrent guess
    }else if ( correctvalue !== userinput) {
        if (scorevalue > 1) {
            // document.querySelector(".message") .textContent = userinput > correctvalue ? "🔆 high guess":"🔻 low guess";
            refactormesages(userinput > correctvalue ? "🔆 high guess":"🔻 low guess");
            scorevalue--;
            document.querySelector(".score").textContent = scorevalue;
        }else{
           refactormesages("🤯 You lost the game");
            document.querySelector(".score").textContent = 0;
        }
    }
    //guess being low
//     else if (userinput < correctvalue) {
//  if (scorevalue > 1) {
//     document.querySelector(".message") .textContent = "🔻 low guess"
//     scorevalue--;
//     document.querySelector(".score").textContent = scorevalue;
//  }else{
//     document.querySelector(".message") .textContent = "🤯 You lost the game";
//     document.querySelector(".score").textContent = 0;
//  }
//  //guess being high
//     }else if (userinput > correctvalue) {
//         if (scorevalue > 1) {
//             document.querySelector(".message") .textContent = "🔆 high guess"
//             scorevalue--;
//             document.querySelector(".score").textContent = scorevalue;
//         }else{
// document.querySelector(".message") .textContent = "🤯 You lost the game";
// document.querySelector(".score").textContent = 0;
//         }
//     }
})

//code challege
const again = document.querySelector(".again");
again.addEventListener("click",()=>{
    scorevalue = 20;
    correctvalue = Math.trunc(Math.random()*20) + 1;
   refactormesages("start guessing....");
    document.querySelector(".score").textContent = scorevalue;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.backgroundColor = "15rem";
})

//refactor

