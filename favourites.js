// write js code here corresponding to favourites.html
var mostlast=JSON.parse(localStorage.getItem("favourites"));

displaydata(mostlast);


function displaydata(mostlast){
    mostlast.map(function(elem,index){

    
   
        console.log(mostlast)
        tr1= document.createElement("tr");
        td1= document.createElement("td");
        td2= document.createElement("td");
        td3= document.createElement("td");
        td4= document.createElement("td");
        td5= document.createElement("td");
        td6= document.createElement("td");
        td6.innerText="Delete";
        td6.addEventListener("click",function(){
            deleterow(elem);
        })


        tr1.append(td1,td2,td3,td4,td5,td6);
      document.querySelector("tbody").append(tr1);

      td1.innerText=elem.one;
      td2.innerText=elem.two;
      td3.innerText=elem.three;
      td4.innerText=elem.four;
      td5.innerText=elem.five;
    })
    
}
function deleterow(elem,index){
    mostlast.splice(index,1);
    localStorage.setItem("favourites",JSON.stringify(mostlast));
    window.location.reload();
}



