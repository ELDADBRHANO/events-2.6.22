var userAge;
var nowDate=new Date();
var my_p=document.getElementById("my_p");
var inputDate= document.getElementById("input_date")
var btn1=document.getElementById("my_btn");
btn1.addEventListener("click",prinitW);
var img1 = document.getElementById("img1");
my_p.addEventListener("mouseover",()=>{
  my_p.style.color="green"
});

var isUser18=false;
function prinitW(){
  if(nowDate.getFullYear()-getAgeValue()>18){
    my_p.style.color="blue"
    my_p.innerText="you are welcome"
    // my_p.innerText=input_name;
    isUser18=true;
  }
  else{
    my_p.style.color="red"
    my_p.innerText="no entry."
    img1.src="https://c.tenor.com/-0wLd8WRKLQAAAAM/cl03.gif"
  }
  var arrayNames=[]
if(isUser18){
  var inputLastName=document.createElement("input");
  document.body.append(inputLastName);
  inputLastName.id="inputLastNameId";
  
  var inputPrivateName=document.createElement("input");
  document.body.append(inputPrivateName)
  inputPrivateName.id="inputPrivateNameId";
  
  var btnPrivateNames=document.createElement("button");
  btnPrivateNames.innerText="save"
  document.body.append(btnPrivateNames)
  btnPrivateNames.addEventListener("click",()=>{
    arrayNames.push(inputPrivateName.value);

    var myUl=document.createElement("ul");
    document.body.append(myUl)
    
    if(arrayNames.length==4){
      for(var i = 0; i < arrayNames.length ; i++){
        myUl.innerHTML+="<li>"+arrayNames[i] +" "+inputLastNameId.value+"</li>"
      }

    }
  }) 
  
}
}


function getAgeValue(){
var result=inputDate.value;
for(var i = 0; i < result.length;i++){
  result+=result[i]
  if(result[i]=="-"){
    return parseInt(result)
  }
}
}




//  function getAge() {
//   var today = new Date();

//   var birthDate = new Date(inputDate);

//   var age = today.getFullYear() - birthDate.getFullYear();

//   var m = today.getMonth() - birthDate.getMonth();

//   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//   }
//   return age;
// }

// function test(){
//   if(getAge() > 18) {
//     alert("You have 18 or more years old!");
//   } else{
//     alert("2pac")
//   }
// }



