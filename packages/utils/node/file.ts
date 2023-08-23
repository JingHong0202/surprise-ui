import path from 'node:path';
import fs from 'node:fs';

export function copyDirectory(sourceDir: string, targetDir: string) {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }

  const files = fs.readdirSync(sourceDir);

  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    if (fs.statSync(sourcePath).isDirectory()) {
      copyDirectory(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}
