//   sign-up

let userName=document.getElementById('sign-upInputName');
let userEmail=document.getElementById('sign-upInputEmail');
let userPassword=document.getElementById('sign-upInputPassword');
let signUpMessage=document.getElementById('messageDanger');
let signUpButton=document.getElementById('bttn-signInput')
let itemList=[];
if(localStorage.getItem('user')!=null){
    itemList=JSON.parse(localStorage.getItem('user'))
}

// Sign Up
function signUp(){
let user={
    nameUser:userName.value,
    emailUser:userEmail.value,
    passwordUser:userPassword.value
}

    //empty inputs
    if(userName.value=='' || userEmail.value=='' || userPassword.value=='' ){
        signUpMessage.innerHTML='All inputs is required';
        signUpMessage.style.color="red" ;
    } 
    else if(emailExists()){
        signUpMessage.innerHTML='Email already exists'
        signUpMessage.style.color="red" ;
    }
    else{ // inputs not empty and success
        itemList.push(user);
        localStorage.setItem('user',JSON.stringify(itemList));
        signUpMessage.innerHTML='Success';
        signUpMessage.style.color="green" ;
    }
}
//Email exists
function emailExists(){
    for(let i=0; i<itemList.length;i++){
        if(userEmail.value==itemList[i].emailUser){
            return true;
        }
    }
    return false;
}
if(signUpButton !=null){
signUpButton.addEventListener('click',signUp);
}

 
//login
let loginEmail=document.getElementById('loginInputEmail');
let loginPass=document.getElementById('loginInputPassword');
let loginMessage =document.getElementById('loginMeessage');
let loginButton=document.getElementById('bttn-loginInput');


function login(){
    //input is empty
    if( loginEmail.value==''|| loginPass.value==''){
        loginMessage.innerHTML='All inputs is required';
        loginMessage.style.color="red" ;
        
    }else if(userExist()==false){
        loginMessage.innerHTML='incorrect Email OR Passowrd';
        loginMessage.style.color="red" ;
    }
    else{
        loginButton.href='home.html';
    }
 
}
//old user
function userExist(){
for(let i=0; i<itemList.length; i++){
    if(loginEmail.value==itemList[i].emailUser && loginPass.value==itemList[i].passwordUser){
         localStorage.setItem('nameOfUser',JSON.stringify(itemList[i].nameUser) )
return true;

    }
}
return false;

}

if(loginButton!=null){
loginButton.addEventListener('click',login);

}
//welcome user

let paragraph =document.getElementById('message-home');
if (paragraph!=null){
    var userrname=JSON.parse(localStorage.getItem('nameOfUser'));
    paragraph.innerHTML=`Welcom ${userrname}`;
}
