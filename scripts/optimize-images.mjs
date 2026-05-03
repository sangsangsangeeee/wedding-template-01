import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, basename } from 'path';

const INPUT_DIR = './assets';
const OUTPUT_DIR = './assets';
const MAX_WIDTH = 1200;
const QUALITY = 80;

const files = (await readdir(INPUT_DIR)).filter(f => /\.(jpe?g|png)$/i.test(f));

for (const file of files) {
  const inputPath = join(INPUT_DIR, file);
  const outputName = basename(file, file.match(/\.[^.]+$/)[0]) + '.webp';
  const outputPath = join(OUTPUT_DIR, outputName);

  const info = await sharp(inputPath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outputPath);

  console.log(`${file} → ${outputName} (${(info.size / 1024).toFixed(0)}KB)`);
}
