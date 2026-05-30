function generateDesign(){
let verse = document.getElementById("verse").value;
let font = document.getElementById("font").value;
let effect = document.getElementById("effect").value;

let text = document.getElementById("designText");

text.innerHTML = verse;
text.style.fontFamily = font;

text.className = "";

if(effect === "Glow") text.classList.add("glow");
if(effect === "Gold") text.classList.add("gold");
if(effect === "Shadow") text.classList.add("shadow");
}

function clearDesign(){
document.getElementById("verse").value = "";
document.getElementById("designText").innerHTML = "Your Verse Appears Here";
document.getElementById("designText").className = "";
}

function setBackground(type){

let bg = "";

if(type==="nature") bg="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200";
if(type==="mountain") bg="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200";
if(type==="sunset") bg="https://images.unsplash.com/photo-1501973801540-537f08ccae7b?w=1200";
if(type==="divine") bg="https://images.unsplash.com/photo-1520975922284-9f6f0b4b6f8d?w=1200";

document.getElementById("designArea").style.backgroundImage = "url("+bg+")";
}

function downloadImage(){
html2canvas(document.getElementById("designArea")).then(canvas=>{
let a=document.createElement("a");
a.download="divine-lettering.png";
a.href=canvas.toDataURL();
a.click();
});
}

// 🧠 SIMPLE “AI STYLE” VERSES (OFFLINE)
function generateVerse(){
let verses=[
"Jeremiah 29:11 - I know the plans I have for you",
"Philippians 4:13 - I can do all things through Christ",
"Isaiah 41:10 - Do not fear, I am with you",
"Psalm 23:1 - The Lord is my shepherd",
"Romans 8:28 - All things work together for good"
];

let random = verses[Math.floor(Math.random()*verses.length)];

document.getElementById("verse").value = random;
}

// 🎨 TEMPLATES
function template(type){

if(type==="revival"){
document.getElementById("verse").value="REVIVAL IS HERE 🔥";
setBackground("divine");
}

if(type==="worship"){
document.getElementById("verse").value="WORSHIP HIM IN SPIRIT AND TRUTH 🙏";
setBackground("sunset");
}

if(type==="hope"){
document.getElementById("verse").value="HOPE IN THE LORD 🌿";
setBackground("nature");
}

if(type==="youth"){
document.getElementById("verse").value="YOUTH ON FIRE FOR GOD ⚡";
setBackground("mountain");
}
}
