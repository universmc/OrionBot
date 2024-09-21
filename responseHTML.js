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
    <style>
      body { font-family: Arial, sans-serif; background-color: #f7f7f7; }
      .container { max-width: 800px; margin: 50px auto; padding: 20px; background-color: #fff; box-shadow: 0px 0px 10px rgba(0,0,0,0.1); }
      .title { font-size: 28px; font-weight: bold; text-align: center; margin-bottom: 20px; }
      .image-container { text-align: center; margin-bottom: 20px; }
      img { max-width: 100%; height: auto; }
      .description { font-size: 16px; line-height: 1.6; margin-bottom: 20px; }
      .how-to { background-color: #f9f9f9; padding: 20px; border-left: 4px solid #007BFF; }
      .how-to h2 { margin-top: 0; }
      .how-to pre { white-space: pre-wrap; word-wrap: break-word; font-size: 14px; }
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
  
  return htmlFileName;
}

// Export de la fonction pour utilisation
module.exports = { generateHTML };
