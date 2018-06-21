alert("Enable js to make most of the web");
var QUER,HEAD,BUT;
var iter=1;
var i=0;
var f;
var display=["Achayan's Homestay","Book a Houseboat","Get Great Discounts!","Find Us On the Map"];
var butto=["Venice of the East","Book Now","Register","Mark"];
var image=function()
{
	QUER=document.querySelector("header");
	HEAD=document.querySelector("h2");
	BUT=document.getElementById("but");
	if(iter==4)
	{
		iter=0;

	}
	
	{   
		iter++;
		f=iter;
		QUER.setAttribute("style","background-image: url(Resource/p"+iter+".jpg)");
		HEAD.innerHTML=display[(f-1)];
		BUT.innerHTML=butto[(f-1)];
		BUT.setAttribute("value",f);
		
	}
}
setInterval(image,10000);

function reveal()
{
let SET=document.getElementById("but");
let GET=document.getElementById("ad");
let GO=document.getElementById("blu");
	if(SET.value==1)
	{
		window.open("https://en.wikipedia.org/wiki/Alappuzha",'_blank')
	}

	if(SET.value==4)
	{
		console.log(SET);
		GET.setAttribute("class","show");
		GO.setAttribute("class","shower");
	}
}
let AE=document.getElementById("ae");

function close()
{
	let GET=document.getElementById("ad");
	let GO=document.getElementById("blu");
	GET.setAttribute("class","hidden");
	GO.setAttribute("class","hidden")

}
AE.onclick=close;

let AB=document.getElementById("ab");
function searc() {
 
   var name = document.getElementById("searchForm").value;
   var pattern = name.toLowerCase();
   if(pattern==="description")
   
         document.getElementById("aa").scrollIntoView();
     if(pattern==="services")
   
         document.getElementById("abaa").scrollIntoView();
     if(pattern==="facilities")
   
         document.getElementById("aba").scrollIntoView();
     if(pattern==="breakfast")
   
         document.getElementById("ac").scrollIntoView();

       
   }  


AB.onclick=searc;