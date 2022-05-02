// write js code here corresponding to matches.html
var getdata=JSON.parse(localStorage.getItem("schedule"));
 var getdataarr=JSON.parse(localStorage.getItem("favourites"))||[];
displaydata(getdata);

document.querySelector("#filterVanue").addEventListener("onchange",filterfun);

function filterfun(){
    var obj={
        filtervalue:filterVanue.value,
        

    }
    

}


function displaydata(data){
    // console.log(getdata)
     getdata.map(function(elem){
         console.log(elem)


       tr1= document.createElement("tr");
       td1= document.createElement("td");
       td2= document.createElement("td");
       td3= document.createElement("td");
       td4= document.createElement("td");
       td5= document.createElement("td");
       td6= document.createElement("td");
       td6.innerText="Add as Favourites";
       td6.style.color="green";
       td6.addEventListener("click",function(){
           lastdata(elem)
       })
      tr1.append(td1,td2,td3,td4,td5,td6);
      document.querySelector("tbody").append(tr1);

      td1.innerText=elem.one;
      td2.innerText=elem.two;
      td3.innerText=elem.three;
      td4.innerText=elem.four;
      td5.innerText=elem.five;
     
 

 function lastdata(elem){
     getdataarr.push(elem);
     console.log(getdataarr);
      localStorage.setItem("favourites",JSON.stringify(getdataarr));
 }
      
       


     })


}