

function volume(radius){
    if (radius<0){alert('RADIUS CAN\'T BE NEGATIVE >~~< !!!!');return;}
    var volume=(4/3) *Math.PI*radius*radius*radius;
    return volume;}

let button=document.querySelector("button");
button.addEventListener("click",()=>{
    let radius=document.getElementById("radius").value;
    document.getElementById("volume").value=volume(radius);
});


let radius=document.getElementById("radius").value;

