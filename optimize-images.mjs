import sharp from 'sharp'
import { mkdir } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const imagesDir = join(__dirname, 'images')

const images = [
  { name: 'LOGO_ASCAD10.png', maxWidth: 200 },
]

// Íconos del manifest.json (PWA). El logo fuente (1024x879) no es cuadrado,
// así que se rellena a un canvas cuadrado con el color de marca en vez de
// estirarlo — si no, el navegador rechaza el ícono ("Download error or
// resource isn't a valid image") al no coincidir con el tamaño declarado.
const manifestIconSizes = [192, 512]
const manifestIconBackground = '#0a2540'

async function generateManifestIcons() {
  const publicDir = join(__dirname, 'public')
  const inputPath = join(imagesDir, 'LOGO_ASCAD10.png')

  for (const size of manifestIconSizes) {
    const outputPath = join(publicDir, `icon-${size}.png`)
    const logo = await sharp(inputPath)
      .resize({ width: Math.round(size * 0.7), withoutEnlargement: true })
      .toBuffer()

    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: manifestIconBackground
      }
    })
      .composite([{ input: logo, gravity: 'center' }])
      .png()
      .toFile(outputPath)

    console.log(`✓ icon-${size}.png generado en public/`)
  }
}

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

  await generateManifestIcons()

  console.log('\nOptimización completa. Carpeta: images/optimized/')
}

optimizeImages().catch(console.error)