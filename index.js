var w=document.querySelector(".set .w");
var a=document.querySelector(".set .a");
var s=document.querySelector(".set .s");
var d=document.querySelector(".set .d");
var j=document.querySelector(".set .j");
var k=document.querySelector(".set .k");
var l=document.querySelector(".set .l");
var waudio=document.querySelector(".waudio");
var aaudio=document.querySelector(".aaudio");
var saudio=document.querySelector(".saudio");
var daudio=document.querySelector(".daudio");
var jaudio=document.querySelector(".jaudio");
var kaudio=document.querySelector(".kaudio");
var laudio=document.querySelector(".laudio");


w.addEventListener("click",()=>{
    waudio.play();
    
})

a.addEventListener("click",()=>{
    aaudio.play();

})

s.addEventListener("click",()=>{
    saudio.play();

})

d.addEventListener("click",()=>{
    daudio.play();

})

j.addEventListener("click",()=>{
    jaudio.play();

})

k.addEventListener("click",()=>{
    kaudio.play();

})

l.addEventListener("click",()=>{
    laudio.play();

})


//using key press
document.addEventListener('keydown',function(event){
    if(event.key=='w'){
        waudio.play();
    }
})