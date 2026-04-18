function generateAudio() {
  const text = document.getElementById("text").value;

  if (!text) {
    alert("Text likho pehle");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.lang = "en-US";

  speechSynthesis.speak(utterance);
}
