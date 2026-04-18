export default async function handler(req, res) {
  const { text, voiceId } = req.body;

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xi-api-key": process.env.ELEVENLABS_API_KEY
      },
      body: JSON.stringify({
        text: text,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75
        }
      })
    }
  );

  const audio = await response.arrayBuffer();

  res.setHeader("Content-Type", "audio/mpeg");
  res.send(Buffer.from(audio));
}
