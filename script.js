//your JS code here. If required.
let statusElem = document.getElementById("status");
let btnElem = document.getElementById("enterBtn");

btnElem.addEventListener("click", ()=>{
	statusElem.outerHTML = "<h1>Entered Metaverse</h1>"
})