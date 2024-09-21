// generate.js
const axios = require('axios');
const fs = require('fs');
const OpenAI = require('openai');
const openai = new OpenAI();
const Groq = require('groq-sdk');
const groq = new Groq();
const { imagePrompts } = require('./imagePrompt');  // Import des prompts

// Fonction pour générer une image
async function generateImage(subject) {
  try {
    const prompt = imagePrompts[subject];
    if (!prompt) throw new Error(`No prompt found for the subject: ${subject}`);

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1792x1024",
    });

    const imageUrl = response.data[0]?.url;
    if (!imageUrl) throw new Error("No image URL returned by the OpenAI API.");

    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const fileName = `build/image_${subject}_${new Date().toISOString().split('T')[0]}.webp`;
    fs.writeFileSync(fileName, imageResponse.data);

    return fileName;
  } catch (error) {
    console.error("Error generating or saving the image:", error);
    return null;
  }
}

// Fonction pour générer la documentation
async function generateDocumentation(subject) {
  try {
    const completion = await groq.chat.completions.create({
      messages: [{ role: "assistant", content: `Generating a How-To guide for ${subject}...` }],
      model: "gemma2-9b-it",
      temperature: 0.5,
      max_tokens: 4096,
    });

    const mdContent = completion.choices[0]?.message?.content;
    const fileName = `build/how-to_${subject}_${new Date().toISOString().replace(/[-:TZ]/g, "")}.md`;
    fs.writeFileSync(fileName, mdContent);
    
    return mdContent;
  } catch (error) {
    console.error("Error generating documentation:", error);
    return null;
  }
}

// Export des fonctions pour les utiliser dans d'autres modules
module.exports = { generateImage, generateDocumentation };
