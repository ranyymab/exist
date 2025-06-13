/*console.log("hello")
console.log("i like pizza");
window.alert("this is an alert");
window.alert("i like pizza");
//this is a comment
/* this is a cmnt*/
/*document.getElementById("my h1").textContent="hello"
document.getElementById("my p").textContent="hello world"
/*let age=100;
console.log("you are",age,"years old");
console.log(typeof age);
let firstname="bro";
console.log(typeof firstname);
console.log("your name is",firstname);
let email="bro@gmail.com";
console.log(typeof email)*/
let online=true;
console.log(typeof online)
document.getElementById("but").addEventListener("click",function(){
    let Audio=document.getElementById("ms");
    if(Audio.paused){
        Audio.play();
    this.textContent = "Pause Music";
} else {
    Audio.pause();
    this.textContent = "Play Music";
}});
