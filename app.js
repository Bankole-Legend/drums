/**
 * This is the drum kit project
 * You are provided with an images folder which contains drum images. 
 * You are required to attache each drum image to each alphabet in the html file (Watch the video to know which button has which image).
 * 
 * You are also provided with a sounds folder.
 * 
 * You are to attach each sound to the images and button in the html.
 * 
 * When you click on each button it should play the curresponding drum sound. 
 * 
 * Also When the curresponding key is pressed on the key board, the drum sound should be made. 
 * 
 * Key to each drum
 * button w = tom-1.mp3
 * button a = tom-2.mp3
 * button s = tom-3.mp3
 * button d = tom-4.mp3
 * button j = kick-bass.mp3
 * button k = snare.mp3
 * button l = crash.mp3
 * 
 * NOTE
 * Codes must be properly commented. 
 * Use of ES6 Syntax is important. 
 */
 

// All the id for the audio files are given variable name same with the id name
// the functions with attribute onclick are defined
const w = document.querySelector("#w");
function playAudio(){
// The currentTime makes it posssible for the sound to play as many times as possible
    w.currentTime = 0
// The play(), this function comes with javascript as it is invoked it plays which ever audio
    w.play();
}
const a = document.querySelector("#a");
function playAudio1(){
    a.currentTime = 0
    a.play();
}
const s = document.querySelector("#s");
function playAudio2(){
    s.currentTime = 0
    s.play();
}
const d = document.querySelector("#d");
function playAudio3(){
    d.currentTime = 0
    d.play();
}
const j = document.querySelector("#j");
function playAudio4(){
    j.currentTime = 0
    j.play();
}
const k = document.querySelector("#k");
function playAudio5(){
    k.currentTime = 0
    k.play();
}
const l = document.querySelector("#l");
function playAudio6(){
    l.currentTime = 0
    l.play();
}
//For the sound to play even when keyboard is pressed, an eevent listener is used
//to listen a the keyCode which can be found online for eeach keyboard key and a
//conditional statement is used to implement it. 
document.addEventListener("keydown", (e) =>{ //also use function(e)
    e.keyCode == 87?playAudio():e.keyCode == 65?playAudio1():
    e.keyCode == 83?playAudio2():e.keyCode == 68?playAudio3():
    e.keyCode == 74?playAudio4():e.keyCode == 75?playAudio5():
    e.keyCode == 76?playAudio6():donothing
})


