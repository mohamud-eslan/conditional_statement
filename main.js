var user ={
    username: "username",
    password: "password"
}
document.getElementById("login").onclick = function(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
 const output = document.getElementById("output");


 if(!username){
     return output.innerHTML = "please enter a username"
 }
 if(!password){
    return output.innerHTML = "please enter a password"
}

 if(username === user.username){
    output.innerHTML = "enter your password"
    if (password === user.password) {
        output.innerHTML = "you are successfully login"
         
     } else {
        output.innerHTML = "incorrect password"
     }
    
 }else{
    output.innerHTML = "invalid user"
   
 }
 

 }

   


