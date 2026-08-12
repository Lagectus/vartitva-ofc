const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir);

async function check() {
  const lucide = await import('lucide-react');
  let missingCount = 0;

  for (const file of files) {
    if (!file.endsWith('.tsx')) continue;
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    const matches = content.matchAll(/import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"]/g);
    for (const match of matches) {
      const names = match[1].split(',').map(s => s.trim().split(/\s+as\s+/)[0]).filter(Boolean);
      for (const name of names) {
        if (!lucide[name]) {
          console.error(`UNDEFINED ICON in ${file}: "${name}"`);
          missingCount++;
        }
      }
    }
  }

  console.log(`Audit finished. Missing icons: ${missingCount}`);
}

check();
