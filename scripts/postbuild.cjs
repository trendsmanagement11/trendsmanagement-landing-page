const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '../dist/index.html');
const dest = path.join(__dirname, '../dist/404.html');

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log('✓ Successfully duplicated index.html to 404.html for GitHub Pages SPA routing.');
} else {
  console.error('Error: index.html not found in dist folder. Run build first.');
  process.exit(1);
}
