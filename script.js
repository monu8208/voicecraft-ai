async function generateAudio() {
  const text = document.getElementById("text").value;

  if (!text) {
    alert("Text likho pehle");
    return;
  }

  const response = await fetch("/api/tts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  if (!response.ok) {
    alert("Error aa raha hai");
    return;
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  const audio = document.getElementById("audio");
  audio.src = url;
  audio.play();
}
