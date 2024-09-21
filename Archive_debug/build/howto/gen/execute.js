// execute.js
const { generateImage, generateDocumentation } = require('./generate');
const { generateHTML } = require('./responseHTML');

async function main() {
  const subject = process.argv[2]; // On récupère le sujet depuis la ligne de commande
  if (!subject) {
    console.error("Please provide a subject.");
    return;
  }

  console.log(`Generating resources for: ${subject}`);

  // Génération de l'image
  const imageFileName = await generateImage(subject);
  
  // Génération de la documentation
  const documentation = await generateDocumentation(subject);
  
  // Génération du fichier HTML final
  const htmlFileName = await generateHTML(subject, imageFileName, documentation);

  if (htmlFileName) {
    console.log(`HTML file generated: ${htmlFileName}`);
  } else {
    console.error("Failed to generate HTML.");
  }
}

// Lancer la fonction principale
main();
