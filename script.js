async function generateAudio() {
  const text = document.getElementById("text").value;
  const voiceId = document.getElementById("voice").value;

  if (!text) {
    alert("Text likho pehle");
    return;
  }

  const response = await fetch("/api/tts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text, voiceId })
  });

  if (!response.ok) {
    alert("API error ❌");
    return;
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  const audio = document.getElementById("audio");
  audio.src = url;
  audio.play();
}
