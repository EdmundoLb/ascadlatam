import sharp from 'sharp'
import { mkdir } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const imagesDir = join(__dirname, 'images')

const images = [
  { name: 'LOGO_ASCAD10.png', maxWidth: 200 },
]

async function optimizeImages() {
  await mkdir(join(imagesDir, 'optimized'), { recursive: true })

  for (const img of images) {
    const inputPath = join(imagesDir, img.name)
    const outputPath = join(imagesDir, 'optimized', img.name.replace('.png', '.webp'))

    await sharp(inputPath)
      .resize({ width: img.maxWidth, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath)

    console.log(`✓ ${img.name} -> ${img.name.replace('.png', '.webp')}`)
  }

  console.log('\nOptimización completa. Carpeta: images/optimized/')
}

optimizeImages().catch(console.error)