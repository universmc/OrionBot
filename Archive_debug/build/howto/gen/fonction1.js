const OpenAI = require("openai");
const Groq = require("groq-sdk");
const axios = require("axios");
const fs = require("fs");

const openai = new OpenAI();
const groq = new Groq();

const imagePrompts = {
  'constellation_analysis': "A detailed map of zodiac constellations, with stars and cosmic elements, focusing on astrology and the analysis of constellations.",
  // Ajoute d'autres prompts selon les besoins
};

// Fonction pour générer une image basée sur le sujet
async function generateImage(subject) {
  try {
    const prompt = imagePrompts[subject];
    if (!prompt) {
      console.error("No prompt found for the subject: ", subject);
      return;
    }

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1792x1024",
    });

    const imageUrl = response.data[0].url;
    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const date = new Date().toISOString().split('T')[0];
    const fileName = `build/image_${subject}_${date}.webp`;
    fs.writeFileSync(fileName, imageResponse.data);

    console.log(`Image for ${subject} saved as ${fileName}`);
    return fileName;
  } catch (error) {
    console.error("Error generating or saving the image:", error);
    return null;
  }
}

// Fonction pour générer la documentation
async function generateDocumentation(subject) {
  const completion = await groq.chat.completions.create({
    messages: [
      { role: "assistant", content: `Generating a How-To guide for analyzing the constellation ${subject}...` },
    ],
    model: "gemma2-9b-it",
    temperature: 0.5,
    max_tokens: 4096,
  });

  const mdContent = completion.choices[0]?.message?.content;
  const outputFilePath = `build/how-to_${subject}_${new Date().toISOString().replace(/[-:TZ]/g, "")}.md`;
  fs.writeFileSync(outputFilePath, mdContent);

  console.log(`How-To documentation for ${subject} saved as ${outputFilePath}`);
  return mdContent;
}

// Fonction pour générer le fichier HTML avec l'image et la documentation
async function generateHTML(subject) {
  const imageFileName = await generateImage(subject);
  const documentation = await generateDocumentation(subject);

  if (!imageFileName || !documentation) {
    console.error("Failed to generate HTML due to missing image or documentation.");
    return;
  }

  const title = `How-To Guide and Image for ${subject}`;
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
      body { font-family: Arial, sans-serif; }
      .container { max-width: 800px; margin: 0 auto; padding: 20px; }
      .title { font-size: 24px; font-weight: bold; margin-bottom: 20px; }
      .image-container { text-align: center; margin-bottom: 20px; }
      img { max-width: 100%; height: auto; }
      .description { font-size: 16px; line-height: 1.5; }
      .how-to { background-color: #f0f0f0; padding: 20px; border-radius: 8px; }
    </style>
</head>
<body>
  <div class="container">
    <div class="title">${title}</div>
    <div class="image-container">
      <img src="${imageFileName}" alt="${subject}">
    </div>
    <div class="description">
      <p><strong>Description:</strong> ${imagePrompts[subject]}</p>
    </div>
    <div class="how-to">
      <h2>How-To Guide</h2>
      <pre>${documentation}</pre>
    </div>
  </div>
</body>
</html>
  `;

  const htmlFileName = `build/${subject}_howto_${new Date().toISOString().replace(/[-:TZ]/g, "")}.html`;
  fs.writeFileSync(htmlFileName, htmlContent);
  console.log(`HTML file for ${subject} saved as ${htmlFileName}`);
}

// Fonction principale
async function main() {
  const subject = process.argv[2] || 'constellation_analysis';
  await generateHTML(subject);
}

main();
