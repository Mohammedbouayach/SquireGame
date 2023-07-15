
document.querySelector(".control button").onclick = function() {
let yourName = prompt("gamer 1")
 if (yourName === null || yourName === "") {
  document.querySelector(".name1").innerHTML = `gamer 1 : X`
  document.querySelector(".control").remove()
  document.querySelector(".header h4").innerHTML = `X`
 }


else {
  document.querySelector(".name1").innerHTML = `${yourName} : X`;
 
 document.querySelector(".control").remove()
 
 }
 
 let yourName1 = prompt("gamer 2");
 if (yourName1 === null || yourName1 === "") {
  document.querySelector(".name2").innerHTML = `gamer 2 : O`
 }
 else {
  document.querySelector(".name2").innerHTML = `${yourName1} : O`;
 
 document.querySelector(".control").remove()
}
}

let squiers =[]
function winner() {
 for(let i=1;i<10;i++){
  squiers[i] = document.getElementById("item"+i).innerHTML
 }
 if (squiers[1]==squiers[2]&&squiers[2]==squiers[3]&&squiers[1] != "") 
 {
 titel.innerHTML = `${squiers[1]} winner`;
 end(1, 2, 3)
 }
else if (squiers[4] == squiers[5] && squiers[5] == squiers[6] && squiers[6] != "") {
  titel.innerHTML = `${squiers[6]} winner`;
  end(4,5,6)
 }
 else if (squiers[7] == squiers[8] && squiers[8] == squiers[9] && squiers[9] != "") {
  titel.innerHTML = `${squiers[9]} winner`;
  end(7,8,9)
 }
 else if (squiers[2] == squiers[5] && squiers[5] == squiers[8] && squiers[8] != "") {
  titel.innerHTML = `${squiers[8]} winner`;
  
  end(2,5,8)
 }
 else if (squiers[1] == squiers[4] && squiers[4] == squiers[7] && squiers[7] != "") {
  titel.innerHTML = `${squiers[7]} winner`;
  end(1,4,7)
 }
 else if (squiers[3] == squiers[6] && squiers[6] == squiers[9] && squiers[9] != "") {
  titel.innerHTML = `${squiers[9]}  winner`;
  end(3,6,9)
 }
 else if (squiers[1] == squiers[5] && squiers[5] == squiers[9] && squiers[9] != "") {
  titel.innerHTML = `${squiers[9]} winner`;
  end(1,5,9)
 }
 else if (squiers[3] == squiers[5] && squiers[5] == squiers[7] && squiers[7] != "") {
  titel.innerHTML = `${squiers[7]} winner`;
  
  end(3,5,7)
 }
 
} 

function end(num1,num2,num3){
 titel.innerHTML =`${squiers[num1]}`
 document.getElementById("item"+num1).style.background = "green"
 document.getElementById("item"+num2).style.background = "green"
 document.getElementById("item"+num3).style.background = "green"
 
 setInterval(function(){
   titel.innerHTML +=`.` ;
   
   document.querySelector(".control").remove()
   
  },1000 
  )
  
  setTimeout(function(){location.reload()},2000)
}


let titel= document.querySelector(".header h4")
let turn = "x"

function game(id){
 let  element =  document.getElementById(id);
 
 if (turn === "x" && element.innerHTML === "") {
  element.innerHTML = "x";
 turn="O";
  titel.innerHTML = "O";
 }
 
 else if(turn === "O" && element.innerHTML === ""  ){
element.innerHTML = "O"
 turn = "x"
  titel.innerHTML = "x"
  
 } winner()
 
}





