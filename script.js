var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var css =document.querySelector("h3");
var body = document.getElementById("grad")


console.log(css);
console.log(color1)
console.log(color2)

color1.addEventListener("input",function(){
    console.log(color1.value)
    body.style.background ="linear-gradient(to right,"+color1.value+","+color2.value+")";


})

color2.addEventListener("input",function(){
    console.log(color2.value)
    body.style.background ="linear-gradient(to right,"+color1.value+","+color2.value+")";
    
})