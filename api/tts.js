export default async function handler(req, res) {

  try {
    const { text } = req.body;

    const response = await fetch(
      "https://api.elevenlabs.io/v1/text-to-speech/FmBhnvP58BK0vz65OOj7",
      {
        method: "POST",
        headers: {
          "xi-api-key": process.env.API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text: text,
          model_id: "eleven_multilingual_v2"
        })
      }
    );

    if (!response.ok) {
      return res.status(500).json({ error: "API error" });
    }

    const audio = await response.arrayBuffer();

    res.setHeader("Content-Type", "audio/mpeg");
    res.send(Buffer.from(audio));

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
      }
