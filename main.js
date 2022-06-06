var userAge;
var nowDate=new Date();
var my_p=document.getElementById("my_p");
var inputDate= document.getElementById("input_date");
var inputName= document.getElementById("input_name");
var btn1=document.getElementById("my_btn");
btn1.addEventListener("click",main);
var img1 = document.getElementById("img1");
my_p.addEventListener("mouseover",()=>{
  my_p.style.color="green"
});
var temp=""

var isUser18=false;
function main(){
  if(nowDate.getFullYear()-getAgeValue()>18){
    my_p.style.color="blue"
    my_p.innerText="you are welcome"
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
  inputLastName.placeholder="enter last name";
  
  var inputPrivateName=document.createElement("input");
  document.body.append(inputPrivateName)
  inputPrivateName.id="inputPrivateNameId";
  inputPrivateName.placeholder="enter 4 private names"
  
  var btnPrivateNames=document.createElement("button");
  btnPrivateNames.innerText="save"
  document.body.append(btnPrivateNames)
  btnPrivateNames.addEventListener("click",()=>{
    arrayNames.push(inputPrivateName.value);
    inputPrivateName.value=" "


    var myUl=document.createElement("ul");
    document.body.append(myUl)

    if(arrayNames.length==4){
      for(var i = 0; i < arrayNames.length ; i++){
        myUl.innerHTML+="<li id='li_"+i+"'>"+arrayNames[i] +" "+ inputLastName.value + "</li>";
        if(arrayNames[i][0]==inputName.value[0]){
          document.getElementById("li_" + i).style.color="green";
      }
      }
      var btnSearch=document.createElement("button");
        document.body.append(btnSearch)
        btnSearch.innerText="click for search"
        btnSearch.onclick= ()=>{
        var myIput=document.createElement("input");
        document.body.append(myIput)
        myIput.type="search";
        var myT=document.createElement("p");
        document.body.append(myT);
        if(myIput.value==arrayNames.length[i]){
          return arrayNames[i]
        }
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








