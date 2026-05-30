function generateDesign(){

let verse =
document.getElementById("verse").value;

let font =
document.getElementById("font").value;

document.getElementById("designText").innerHTML =
verse;

document.getElementById("designText").style.fontFamily =
font;

}
