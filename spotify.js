$(document).ready(function(){
    $(".chennai").on('mouseover',(function(){
        $(".play").fadeIn();
    }))
    $(".chennai").on('mouseleave',(function(){
        $(".play").css({"display":"none"});
    }));
    $(".bollywood").on('mouseover',(function(){
        $(".bplay").fadeIn();
    }));
    $(".bollywood").on('mouseleave',(function(){
        $(".bplay").css({"display":"none"});
    }));
    $(".tollywood").on('mouseover',(function(){
        $(".tplay").fadeIn();
    }));
    $(".tollywood").on('mouseleave',(function(){
        $(".tplay").css({"display":"none"});
    }));
    $(".mollywood").on('mouseover',(function(){
        $(".mplay").fadeIn();
    }));
    $(".mollywood").on('mouseleave',(function(){
        $(".mplay").css({"display":"none"});
    }));
})
let aval=document.querySelector(".aval")
let aval1=document.querySelector(".avalplay")
let hawaii=document.querySelector(".hawaii")
let hawaii1=document.querySelector(".hawaiiplay")
let bones=document.querySelector(".bones")
let bones1=document.querySelector(".bonesplay")
let middle=document.querySelector(".middle")
let middle1=document.querySelector(".middleplay")
aval1.addEventListener('click',()=>{
    aval.play();
    aval1.style.color="rgb(26,178,107)";
    bones1.style.color="white";
    middle1.style.color="white";
    hawaii1.style.color="white";
    bones.pause();
    middle.pause();
    hawaii.pause();
    bones.currentTime=0;
    middle.currentTime=0;
    hawaii.currentTime=0;
})
aval1.addEventListener('dblclick',()=>{
    aval.pause();
    aval1.style.color="white";
    bones1.style.color="white";
    middle1.style.color="white";
    hawaii1.style.color="white";
    bones.pause();
    middle.pause();
    hawaii.pause();
    bones.currentTime=0;
    middle.currentTime=0;
    hawaii.currentTime=0;
})
bones1.addEventListener('click',()=>{
    bones.play(); 
    bones1.style.color="rgb(26,178,107)";
    aval1.style.color="white";
    middle1.style.color="white";
    hawaii1.style.color="white";
    aval.pause();
    middle.pause();
    hawaii.pause();
    aval.currentTime=0;
    middle.currentTime=0;
    hawaii.currentTime=0;
})
bones1.addEventListener('dblclick',()=>{
    bones.pause();
    bones1.style.color="white";
    aval1.style.color="white";
    middle1.style.color="white";
    hawaii1.style.color="white";
    aval.pause();
    middle.pause();
    hawaii.pause();
    aval.currentTime=0;
    middle.currentTime=0;
    hawaii.currentTime=0;
})
middle1.addEventListener('click',()=>{
    middle.play();
    bones1.style.color="white";
    middle1.style.color="rgb(26,178,107)";
    hawaii1.style.color="white";
    aval1.style.color="white";
    bones.pause();
    aval.pause();
    hawaii.pause();
    aval.currentTime=0;
    bones.currentTime=0;
    hawaii.currentTime=0;
})
middle1.addEventListener('dblclick',()=>{
    middle.pause();
    bones1.style.color="white";
    middle1.style.color="white";
    hawaii1.style.color="white";
    aval1.style.color="white";
    bones.pause();
    aval.pause();
    hawaii.pause();
    aval.currentTime=0;
    bones.currentTime=0;
    hawaii.currentTime=0;
})
hawaii1.addEventListener('click',()=>{
    hawaii.play();
    bones1.style.color="white";
    middle1.style.color="white";
    hawaii1.style.color="rgb(26,178,107)";
    aval1.style.color="white";
    middle.pause();
    bones.pause();
    aval.pause();
    aval.currentTime=0;
    bones.currentTime=0;
    middle.currentTime=0;
})
hawaii1.addEventListener('dblclick',()=>{
    hawaii.pause();
    bones1.style.color="white";
    middle1.style.color="white";
    hawaii1.style.color="white";
    aval1.style.color="white";
    middle.pause();
    bones.pause();
    aval.pause();
    aval.currentTime=0;
    bones.currentTime=0;
    middle.currentTime=0;
})
let username=document.querySelector(".username");
let password=document.querySelector(".password");
let pa=document.querySelector(".password").value;
let cnfrm=document.querySelector(".cnfrm");
let valid=document.querySelector(".valid");
let eval=document.querySelector(".eval")
eval.addEventListener('submit',(e)=>{
    if(username.value==""){
        username.classList.add("fail")
    }else{
        username.classList.remove("fail")
        username.classList.add("success")
    }
    if(password.value.length >=8){
        if(password.value==cnfrm.value){
            valid.style.color="green";
            valid.textContent="Valid Password";
            password.classList.remove("fail");
            cnfrm.classList.remove("fail");
            password.classList.add("success");
            cnfrm.classList.add("success");
            e.preventDefault();
        }
        else{
            valid.textContent="Retype the password"
            valid.style.color="red";
            password.classList.remove("success");
            cnfrm.classList.remove("success");
            password.classList.add("fail");
            cnfrm.classList.add("fail");
            e.preventDefault();
        }
        e.preventDefault();
    }else{
        valid.textContent="Password Must have above 8 character"
        valid.style.color="red";
        password.classList.remove("success");
        cnfrm.classList.remove("success");
        password.classList.add("fail");
        cnfrm.classList.add("fail");
        e.preventDefault();
    }
})
let show=document.querySelector('.signin');
let hide=document.querySelector(".close");
let hide1=document.querySelector(".close1");
let log=document.querySelector(".signinform")
let logg=document.querySelector(".signinform2")
let log1=document.querySelector(".login");
show.addEventListener('click',()=>{
    log.style.display="block";
    logg.style.display="none";
})
hide.addEventListener('click',()=>{
    log.style.display="none";
})
hide1.addEventListener('click',()=>{
    logg.style.display="none";
})
log1.addEventListener('click',()=>{
    logg.style.display="block";
    log.style.display="none";
})