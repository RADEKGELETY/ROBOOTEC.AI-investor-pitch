const slides = 13

let current = 1

function startPitch(){

document.getElementById("landing").style.display="none"
document.getElementById("pitch").style.display="block"

showSlide()

}

function showSlide(){

document.getElementById("slideImage").src="slides/slide"+current+".jpg"

document.getElementById("progress").innerText =
current + " / " + slides

if(current > slides){

document.getElementById("pitch").style.display="none"

document.getElementById("invest").style.display="block"

}

}

function nextSlide(){

current++

showSlide()

}

function prevSlide(){

if(current>1){

current--

}

showSlide()

}
