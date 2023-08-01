var firstTransform=document.querySelector('#first-transform');
var secTransform=document.querySelector('#sec-transform');
var firstBage=document.querySelector('#first-bage');
var secBage=document.querySelector('#sec-bage');
var thirBage=document.querySelector('#thr-bage');
var registerName=document.querySelector('#reg-name');
var registerMail=document.querySelector('#reg-email');
var registerPassword=document.querySelector('#reg-password');
var registerButton=document.querySelector('#reg-btn');
var signButton=document.querySelector('#sign-btn');
var signEmail=document.querySelector('#sign-email');
var signPassword=document.querySelector('#sign-password');
var logOut=document.querySelector(".out");
var operator="";
var clints=[];
var lastIndex=0;
if(localStorage.getItem("clints")!=null){
    clints=JSON.parse(localStorage.getItem("clints"))
    operator=localStorage.getItem("operator");
}

if(operator=="register"){
    firstBage.classList.add("d-none");
    secBage.classList.replace("d-none","d-block");
}else if(operator=="sign"){
    firstBage.classList.replace("d-none","d-block");
    secBage.classList.replace("d-block","d-none");
}else if(operator=="home"){
    firstBage.classList.add("d-none");
    thirBage.classList.replace("d-none","d-block")
    document.querySelector(".name").innerHTML="welcome "+clints[lastIndex].name;
}else{
    secBage.classList.add("d-none");
    thirBage.classList.add("d-none");
    firstBage.classList.replace("d-none","d-block");
}


firstTransform.addEventListener('click',function(){

firstBage.classList.add("d-none");
secBage.classList.replace("d-none","d-block");
operator="register";
localStorage.setItem("operator",operator);

});

secTransform.addEventListener('click',function(){

firstBage.classList.replace("d-none","d-block");
secBage.classList.replace("d-block","d-none");
operator="sign";
localStorage.setItem("operator",operator);

});

registerButton.addEventListener("click",function(){
    if(registerName.value!=""&&registerMail.value!=""&&registerPassword.value!=""){
    var clint={
        name:registerName.value,
        mail:registerMail.value,
        password:registerPassword.value,
    };
    clints.push(clint);
    localStorage.setItem("clints",JSON.stringify(clints));
    document.querySelector(".erore-2").innerHTML="sucsess";
    }else{
        document.querySelector(".erore-2").innerHTML="you must fill all field";
    }
});

function serchName(mail){
    for(var i=0;i<clints.length;i++){
        if(clints[i].mail==mail){
            return i;
        }
    }
    return -1;
}
signButton.addEventListener("click",function(){
var foundIndex= serchName(signEmail.value);
if(foundIndex>=0){
    if(clints[foundIndex].password==signPassword.value){
        firstBage.classList.add("d-none");
        thirBage.classList.replace("d-none","d-block")
        operator="home";
        lastIndex=foundIndex;
        localStorage.setItem("operator",operator);
        document.querySelector(".name").innerHTML="welcome "+clints[foundIndex].name;
    }else{
        document.getElementById("error-1").innerHTML="your password is't correct";
        document.getElementById("error-1").classList.remove("opacity-0");
    }
}else{
    document.getElementById("error-1").innerHTML="your email is't correct";
    document.getElementById("error-1").classList.remove("opacity-0");
}
})
logOut.addEventListener("click",function(){
    secBage.classList.add("d-none");
    thirBage.classList.add("d-none");
    firstBage.classList.replace("d-none","d-block");
    operator="";
    localStorage.setItem("operator",operator);
})
