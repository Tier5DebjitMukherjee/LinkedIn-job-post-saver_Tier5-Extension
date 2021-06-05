const debjit = document.querySelector("#debjit");
debjit.addEventListener("submit",function(event)
{
  var a=document.querySelector(".mail").value; 
  var atposition=a.indexOf("@");  
  var dotposition=a.lastIndexOf(".");
  var password=document.querySelector("password");
  
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=a.length)
  {
    var newTextEmail = document.createElement("pass");
    newTextEmail.innerText = "Enter Username";
    var error1 = document.querySelector(".err-msg-1");
    error1.appendChild(newTextEmail);
    event.preventDefault();
  }
   else {
     return false;
   } 
})