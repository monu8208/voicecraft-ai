async function generate() {

  let text = document.getElementById("text").value;

  let res = await fetch("/api/tts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  let blob = await res.blob();
  let url = URL.createObjectURL(blob);

  document.getElementById("audio").src = url;
}
