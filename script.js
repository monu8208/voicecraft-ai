async function generate() {
  let text = document.getElementById("text").value;

  let response = await fetch("https://api.elevenlabs.io/v1/text-to-speech/Sxk6njaoa7XLsAFT7WcN", {
    method: "POST",
    headers: {
      "xi-api-key": "YOUR_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: text,
      model_id: "eleven_multilingual_v2"
    })
  });

  let audioBlob = await response.blob();
  let url = URL.createObjectURL(audioBlob);

  document.getElementById("audio").src = url;
}
