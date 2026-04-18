async function generateAudio() {
  const text = document.getElementById("text").value;

  console.log("TEXT:", text); // debug

  if (!text) {
    alert("Text likho pehle");
    return;
  }

  try {
    const response = await fetch("/api/tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: text })
    });

    console.log("RESPONSE:", response);

    if (!response.ok) {
      alert("API error aa raha hai");
      return;
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const audio = document.getElementById("audio");
    audio.src = url;
    audio.play();

  } catch (error) {
    console.log("ERROR:", error);
    alert("Kuch galat hai, console check karo");
  }
}
