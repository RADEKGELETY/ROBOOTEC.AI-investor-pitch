let slides = [
"slides/slide1.jpg",
"slides/slide2.jpg",
"slides/slide3.jpg",
"slides/slide4.jpg",
"slides/slide5.jpg",
"slides/slide6.jpg",
"slides/slide7.jpg",
"slides/slide8.jpg",
"slides/slide9.jpg",
"slides/slide10.jpg",
"slides/slide11.jpg",
"slides/slide12.jpg",
"slides/slide13.jpg"
];

let texts = [

"Dobrý den, jmenuji se Radek Gelety a jsem zakladatel projektu ROBOOTEC.AI. Budujeme prediktivní AI trading platformu, která využívá velká data a umělou inteligenci k automatizovanému řízení investic.",

"Technologické revoluce často vznikají spojením několika existujících technologií. Telefon, hudební přehrávač a internet existovaly dávno před iPhonem, ale jejich spojení vytvořilo úplně nový produkt.",

"Finanční trhy dnes generují obrovské množství dat. Pro člověka je prakticky nemožné tato data rychle zpracovat a správně interpretovat.",

"Naše řešení je autonomní AI trading platforma. Systém zpracovává velké množství dat a pomocí umělé inteligence vytváří predikce vývoje trhu.",

"ROBOOTEC není jeden trading bot. Je to komplexní AI platforma, která propojuje více strategií a finančních instrumentů.",

"Projekt rozvíjíme ve třech fázích. Proof of concept, MVP a následně plnohodnotný AI asset manager.",

"Na trhu existují různé přístupy k AI tradingu. ROBOOTEC buduje škálovatelnou platformu kombinující více strategií.",

"Náš byznys model má tři fáze. Testování, reálný trading a následně licencování technologie.",

"Tato roadmapa ukazuje plán rozvoje projektu a postupný růst platformy.",

"Zde vidíte první výsledky prototypu systému, který byl testován na trhu NASDAQ.",

"Pro další fázi projektu hledáme investici ve výši 9 milionů korun.",

"Projekt staví multidisciplinární tým expertů na technologie, finance a právo.",

"Naším cílem je vytvořit inteligentní AI systém pro správu kapitálu."
];

let currentSlide = 0;

function startPitch(){
showSlide();
}

function showSlide(){

document.getElementById("slide-image").src = slides[currentSlide];
document.getElementById("slide-text").innerText = texts[currentSlide];

speak(texts[currentSlide]);

currentSlide++;

if(currentSlide < slides.length){
setTimeout(showSlide, 10000);
}

}

function speak(text){

let speech = new SpeechSynthesisUtterance(text);

speech.lang = "cs-CZ";
speech.rate = 0.9;

speechSynthesis.speak(speech);

}
