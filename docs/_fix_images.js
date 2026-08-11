const fs = require('fs');
const path = require('path');

function fixFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            fixFiles(fullPath);
        } else if (fullPath.endsWith('.md')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Replace <p align="center"> ... <img ... /> ... </p> blocks (allowing various indentations)
            // with just the <img ... /> tag or markdown ![]() equivalent
            
            // We can match the <p> tag with any whitespace, then <img>, then </p>
            const regex = /^[ \t]*<p[^>]*>\s*(<img[^>]*>)\s*<\/p>[ \t]*$/gm;
            
            const newContent = content.replace(regex, (match, imgTag) => {
                return `\n${imgTag}\n`;
            });
            
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log('Fixed:', fullPath);
            }
        }
    }
}

fixFiles('c:\\Users\\franc\\Documents\\Manuais-ifsp\\docs');
