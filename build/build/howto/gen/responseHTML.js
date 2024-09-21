// responseHTML.js
const fs = require('fs');
const { imagePrompts } = require('./imagePrompt');  // Import des prompts

async function generateHTML(subject, imageFileName, documentation) {
  if (!imageFileName || !documentation) {
    console.error("Missing image or documentation. Cannot generate HTML.");
    return;
  }

  const title = `How-To Guide for ${subject}`;
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Guide et illustration pour ${subject}">
    <title>${title}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="src/css/style.css">
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
  
  return htmlFileName;
}

// Export de la fonction pour utilisation
module.exports = { generateHTML };
