const by = document.getElementById("No");
const tp = by.offsetTop;
const lft = by.offsetLeft;

const abc=["+","-"];

by.addEventListener("mouseover", ()=>{
    var x1 = Math.ceil((Math.random()*30)+10);
    var x2 = Math.ceil((Math.random()*30)+10);
    console.log(x1+" "+x2);
    var y = Math.ceil((Math.random()*2));
    var z = Math.ceil((Math.random()*2));
    by.style.top = abc[y-1]+x1+"vh";
    by.style.left = abc[z-1]+x2+"vw";
})