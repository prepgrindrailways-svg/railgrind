const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // We are looking for: style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', ... }}
      // and we want to remove display and gridTemplateColumns and add className="responsive-grid-12"
      
      const regex1 = /<div\s+style=\{\{\s*display:\s*['"]grid['"]\s*,\s*gridTemplateColumns:\s*['"]repeat\(12,\s*1fr\)['"]\s*,\s*(.*?)\}\}\s*>/g;
      
      let changed = false;
      const newContent = content.replace(regex1, (match, remainingStyles) => {
        changed = true;
        return `<div className="responsive-grid-12" style={{ ${remainingStyles} }}>`;
      });

      // Special case: where it already has a className, like <div className="explorer-sidebar" style={{...}}>
      // Not typically applied to the parent 12 grid, but just in case.
      
      if (changed) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'src/app'));
console.log('Done.');
