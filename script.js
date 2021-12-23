
var incFnt = document.getElementById('increaseFont');
var decFnt = document.getElementById('decreaseFont');

const textarea = document.getElementsByTagName('textarea')[0];

incFnt.addEventListener('click', function(){
    if (textarea.style.fontSize.length){
    const number = textarea.style.fontSize.substring(0, textarea.style.fontSize.length - 2)
    textarea.style.fontSize = Number(number) +1 + 'px'
}else{
        textarea.style.fontSize = '15px'
    }
})
decFnt.addEventListener('click', function(){
    if(textarea.style.fontSize.length){
    let number = textarea.style.fontSize.substring(0,textarea.style.fontSize.length -2)
textarea.style.fontSize = Number(number) -1 +'px'
}else {
    textarea.style.fontSize = '13px'}


}
)

var incBr = document.getElementById('increaseBord');
var decBr = document.getElementById('decreaseBord');

const borderer = document.getElementsByTagName('textarea')[0];

incBr.addEventListener('click', function(){
    if (borderer.style.borderRadius.length){
    const number = borderer.style.borderRadius.substring(0, borderer.style.borderRadius.length - 2)
    borderer.style.borderRadius = Number(number) +1 + 'px'
}else{
        borderer.style.borderRadius = '2px'
    }
})
decBr.addEventListener('click', function(){
    if (borderer.style.borderRadius.length){
        const number = borderer.style.borderRadius.substring(0, borderer.style.borderRadius.length - 2)
        borderer.style.borderRadius = Number(number) -1 + 'px'
    }else{
            borderer.style.borderRadius = '1px'}
})





function green(elem)
{
let element = document.getElementById(elem);
element.style.background = "#00FF00";
}

function blue(elem)
{
let element = document.getElementById(elem);
element.style.background = "#0000FF";
}
function yellow(elem)
{
let element = document.getElementById(elem);
element.style.background = "#FFFF00";
}
function gray(elem)
{
let element = document.getElementById(elem);
element.style.background = "#BEBEBE";
}
function pink(elem)
{
let element = document.getElementById(elem);
element.style.background = "#FFC0CB";
}
function aqua(elem)
{
let element = document.getElementById(elem);
element.style.background = "#7FFFD4";
}
function orange(elem)
{
let element = document.getElementById(elem);
element.style.background = "#FFA500";
}
function red(elem)
{
let element = document.getElementById(elem);
element.style.background = "#FF0000";
}
function white(elem)
{
let element = document.getElementById(elem);
element.style.background = "#F8F8FF";
}




function ggreen(elem)
{
let element = document.getElementById(elem);
element.style.color = "#00FF00";
}

function bblue(elem)
{
let element = document.getElementById(elem);
element.style.color = "#0000FF";
}
function yyellow(elem)
{
let element = document.getElementById(elem);
element.style.color = "#FFFF00";
}
function ggray(elem)
{
let element = document.getElementById(elem);
element.style.color = "#BEBEBE";
}
function ppink(elem)
{
let element = document.getElementById(elem);
element.style.color = "#FFC0CB";
}
function aaqua(elem)
{
let element = document.getElementById(elem);
element.style.color = "#7FFFD4";
}
function oorange(elem)
{
let element = document.getElementById(elem);
element.style.color = "#FFA500";
}
function rred(elem)
{
let element = document.getElementById(elem);
element.style.color = "#FF0000";
}
function wwhite(elem)
{
let element = document.getElementById(elem);
element.style.color = "#F8F8FF";
}
