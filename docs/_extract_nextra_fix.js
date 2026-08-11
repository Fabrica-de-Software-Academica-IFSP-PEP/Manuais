const fs = require('fs');
const path = require('path');

function processDirectory(dir, outBase) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDirectory(fullPath, outBase);
        } else if (file.endsWith('.txt')) {
            const relPath = path.relative('c:\\Users\\franc\\Documents\\Manuais-ifsp\\old_format\\2024-2-ConselhoDeliberativo', fullPath);
            const content = fs.readFileSync(fullPath, 'utf8');
            
            let startIdx = content.indexOf('---');
            if (startIdx === -1) continue;
            
            let endIdx = content.lastIndexOf('0:{"P":null');
            if (endIdx === -1) {
                endIdx = content.length;
            }
            
            let md = content.substring(startIdx, endIdx);
            
            // Cleanup
            md = md.replace(/\*[a-zA-Z0-9]*:\{"P":null.*$/, ''); 
            md = md.replace(/\\n/g, '\n');
            md = md.replace(/\\"/g, '"');
            
            // Format tags as Docusaurus array
            md = md.replace(/^tags: (.*)$/m, (match, tagsStr) => {
                const tags = tagsStr.split(',').map(s => s.trim());
                return `tags: [${tags.join(', ')}]`;
            });
            
            let destRel = relPath.replace('.txt', '.md');
            if (destRel === 'index.md') continue; // Skip root index
            
            let destPath = path.join(outBase, destRel);
            const destDir = path.dirname(destPath);
            if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
            
            fs.writeFileSync(destPath, md, 'utf8');
            console.log(`Converted: ${destRel}`);
        }
    }
}

const inputDir = 'c:\\Users\\franc\\Documents\\Manuais-ifsp\\old_format\\2024-2-ConselhoDeliberativo';
const outputDir = 'c:\\Users\\franc\\Documents\\Manuais-ifsp\\docs\\2024-2-ConselhoDeliberativo';
processDirectory(inputDir, outputDir);
