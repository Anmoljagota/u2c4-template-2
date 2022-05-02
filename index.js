// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myfun);
var newarr=JSON.parse(localStorage.getItem("schedule"))||[];
function myfun(){
    event.preventDefault();
var newobj={
   one:masaiForm.matchNum.value,
   two:masaiForm.teamA.value,
   three:masaiForm.teamB.value,
   four:masaiForm.date.value,
   five:masaiForm.venue.value,


  
};
newarr.push(newobj);
localStorage.setItem("schedule",JSON.stringify(newarr))


}
