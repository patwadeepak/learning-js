"use strict";
let user,
    password;
if("Admin" === (user = prompt("Who's there?",""))){
    if("TheMaster" === (password = prompt("Password?",""))){
        alert("Welcome!");
    }
    else if(password === null || password === ""){
        alert('Cancelled');
    }
    else{
        alert("Wrong Password");
    }
}
else if(user === null || user === ""){
    alert("Cancelled");
}
else{
    alert("I don't know you");
}