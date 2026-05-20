import sharp from 'sharp'
import { mkdirSync, existsSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const imagesDir = join(__dirname, 'public', 'images')
const originalDir = join(__dirname, 'images')

if (!existsSync(imagesDir)) mkdirSync(imagesDir, { recursive: true })
if (!existsSync(originalDir)) mkdirSync(originalDir, { recursive: true })

const webpPath = join(imagesDir, 'LOGO.webp')
const pngPath = join(originalDir, 'LOGO.png')

const pngOptimizedPath = join(imagesDir, 'LOGO.png')

console.log('Creating PNG fallback...')

await sharp(webpPath)
  .png({ compressionLevel: 8, quality: 85 })
  .toFile(pngOptimizedPath)

console.log('✓ PNG fallback creado')

await sharp(webpPath)
  .png({ compressionLevel: 8, quality: 85 })
  .toFile(pngPath)

console.log('✓ PNG original recreado')