let currentUtterance = null;
let selectedVoice = null;

function loadBestVoice() {
  const voices = window.speechSynthesis.getVoices();

  if (!voices || voices.length === 0) return null;

  const preferredNames = [
    "Daniel",
    "David",
    "Alex",
    "Google čeština",
    "Google Czech",
    "Microsoft David",
    "Microsoft Jakub",
    "Martin"
  ];

  for (const name of preferredNames) {
    const match = voices.find(v => v.name.includes(name));
    if (match) {
      selectedVoice = match;
      return match;
    }
  }

  const czechVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith("cs"));
  if (czechVoice) {
    selectedVoice = czechVoice;
    return czechVoice;
  }

  selectedVoice = voices[0];
  return voices[0];
}

function speakText(text) {
  stopVoice();

  currentUtterance = new SpeechSynthesisUtterance(text);
  currentUtterance.lang = "cs-CZ";
  currentUtterance.rate = 0.95;
  currentUtterance.pitch = 1.0;

  const voice = loadBestVoice();
  if (voice) {
    currentUtterance.voice = voice;
  }

  window.speechSynthesis.speak(currentUtterance);
}

function stopVoice() {
  window.speechSynthesis.cancel();
}

window.speechSynthesis.onvoiceschanged = () => {
  loadBestVoice();
};
