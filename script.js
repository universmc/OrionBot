const OpenAI = require("openai");
const openai = new OpenAI();
const Groq = require("groq-sdk");
const groq = new Groq();
const axios = require("axios");
const fs = require("fs");

// imagePrompt.js
const imagePrompts = {
  'Aries': "An interactive, multidimensional, high-definition rendering of the Aries constellation, displaying each star with cosmic details, layered in a way to emphasize its historical significance in both astronomy and astrology. The image should have programmable nodes for star tracing.",
  
  'Taurus': "A dynamic, multidimensional, high-definition image of the Taurus constellation, emphasizing its bull shape with astral elements, including nebulae and cosmic clouds. The image is designed to be interactive, with points that represent each star’s importance and behavior, ready for coding and programming integration.",
  
  'Gemini': "A multidimensional, programmable, high-definition image of the Gemini constellation, showing its twin stars with enhanced details and interactive paths for exploring their cosmic alignment. This blueprint will serve as a template for AI-based analysis.",
  
  'Cancer': "A highly detailed, multidimensional rendering of the Cancer constellation, focusing on the interaction between its stars and cosmic background. The image should be high-definition and fully programmable, with adjustable layers for further development and exploration.",
  
  'Leo': "A multidimensional, high-definition rendering of the Leo constellation, showcasing the lion-shaped alignment of stars. The image should emphasize cosmic interactivity, with nodes for programmable interactions, allowing developers to trace and analyze the constellation’s historical and astrological importance.",
  
  'Virgo': "A detailed, multidimensional image of the Virgo constellation, highlighting its stars in high-definition for interactive analysis. The constellation's layout is programmable, with deep cosmic layers for AI and user exploration.",
  
  'Libra': "An interactive, multidimensional, high-definition rendering of the Libra constellation, focusing on the balance between its stars and their cosmic surroundings. The image should be designed for programming purposes, allowing users to modify and interact with each element of the constellation.",
  
  'Scorpio': "A detailed, multidimensional rendering of the Scorpio constellation, showcasing its celestial scorpion shape in high definition. The image should have interactive features for tracing each star’s movement and behavior, and be ready for integration into a programmable environment.",
  
  'Sagittarius': "A multidimensional, high-definition image of the Sagittarius constellation, focusing on the cosmic archer's form. Each star should be interactive and programmable, allowing for dynamic changes and exploration in the constellation’s structure and history.",
  
  'Capricorn': "A detailed, high-definition, multidimensional image of the Capricorn constellation, designed for interactive programming. The constellation’s structure should allow for tracing the stars and understanding their positions in relation to cosmic forces.",
  
  'Aquarius': "A multidimensional, high-definition rendering of the Aquarius constellation, focusing on the water bearer’s cosmic form. The stars and cosmic background should be programmable and interactive, ready for deep exploration and manipulation in a dynamic environment.",
  
  'Pisces': "A high-definition, multidimensional image of the Pisces constellation, showcasing its twin fish form with cosmic and astral details. The stars should be programmable and interactive, designed for dynamic tracing and analysis in an AI-driven application."
};
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

async function generateDocumentation(subject) {
  const completion = await groq.chat.completions.create({
    messages: [
      { role: "assistant", content: `Generating a How-To guide for ${subject}...` },
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
    <meta name="description" content="Guide et illustration pour ${subject}">
    <title>${title}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
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

async function main() {
  const subject = process.argv[2] || 'AI';
  await generateHTML(subject);
}

main();
