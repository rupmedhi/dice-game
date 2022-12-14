 var button=document.createElement("button");
 button.innerHTML="PLAY DICE";
 button.className="btn";
 button.style.color="white";
 button.style.fontFamily="cursive";
 button.style.fontWeight="bold";
 button.style.fontSize="17px";
 button.style.backgroundColor="red";

 var btnclick=document.getElementById("btn");
 btnclick.appendChild(button);

 var centerBtn=document.getElementById("btn");
 centerBtn.style.textAlign="center";
 centerBtn.style.marginTop="50px";
 centerBtn.style.marginLeft="28px";

//  var btnColorChange=document.getElementsByClassName("btn");

 
 

 centerBtn.addEventListener("click", play);

 function play(){
    
 var randomvalue= Math.floor(Math.random()*6)+1;
 var randomimg="dice"+ randomvalue +".jpg";

 var randomImgSource="img/"+ randomimg;

 var img1=document.getElementsByTagName("img");
 img1[0].setAttribute("src", randomImgSource);

  

//  var rendomValue2=Math.floor(Math.random()*6)+1;

//  var randomImgSource2="img/"+"dice"+rendomValue2+".jpg";

//  var img2=document.getElementsByName("img")[1].setAttribute("src",randomImgSource2);

var randomvalue2= Math.floor(Math.random()*6)+1;
 var randomimg2="dice"+ randomvalue2 +".jpg";

 var randomImgSource2="img/"+ randomimg2;

 var img2=document.getElementsByTagName("img");
 img1[1].setAttribute("src", randomImgSource2);


 if(randomvalue>randomvalue2)
 {
    
    var result=document.getElementsByTagName("h1");
    result[0].innerHTML="WIN - 1st";
 }
 else if(randomvalue<randomvalue2)
 {
   
    var result=document.getElementsByTagName("h1");
    result[0].innerHTML="2nd - WIN";
    
 }
 else{
    var result=document.getElementsByTagName("h1");
    result[0].innerHTML="Draw";
 }

 }

 var para=document.getElementById("para");
 para.style.color="red";
 para.style.fontFamily="cursive";
 para.style.fontSize="25px";
 para.style.fontWeight="bold";
 
 
 
 
 
 
 
 
 
 
 

