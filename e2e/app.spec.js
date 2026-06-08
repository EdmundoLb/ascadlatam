import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/ASCAD/)
    await expect(page.locator('.navbar')).toBeVisible()
    await expect(page.locator('.hero')).toBeVisible()
  })

  test('mobile menu opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const hamburger = page.locator('.hamburger')
    await expect(hamburger).toBeVisible()

    await hamburger.click()
    const mobileMenu = page.locator('.mobile-menu.open')
    await expect(mobileMenu).toBeVisible()

    await page.locator('.mobile-menu a').first().click()
    await expect(page.locator('.mobile-menu.open')).not.toBeVisible()
  })

  test('navigation links work', async ({ page }) => {
    await page.goto('/')

    await page.click('text=Certificaciones')
    await expect(page).toHaveURL(/\/certificaciones/)

    await page.click('text=Directorio')
    await expect(page).toHaveURL(/\/directorio/)
  })
})

test.describe('Responsive Design', () => {
  test('works on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    await expect(page.locator('.navbar')).toBeVisible()
    await expect(page.locator('.hero')).toBeVisible()
    await expect(page.locator('.hamburger')).toBeVisible()
  })

  test('works on tablet viewport', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/')

    await expect(page.locator('.navbar')).toBeVisible()
    await expect(page.locator('.hero')).toBeVisible()
  })

  test('no horizontal scroll on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const bodyWidth = await page.evaluate(() => document.body.scrollWidth)
    const viewportWidth = await page.evaluate(() => window.innerWidth)
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth)
  })
})

test.describe('Certificaciones Page', () => {
  test('displays all certification levels', async ({ page }) => {
    await page.goto('/certificaciones')

    await expect(page.locator('.cert-card').first()).toBeVisible()
    const cards = page.locator('.cert-card')
    await expect(cards).toHaveCount(6)
  })

  test('certification cards expand on click', async ({ page }) => {
    await page.goto('/certificaciones')

    const firstCard = page.locator('.cert-card').first()
    await firstCard.locator('.cert-header').click()

    await expect(firstCard.locator('.cert-body')).toHaveClass(/is-open/)
  })
})

test.describe('Accessibility', () => {
  test('skip link is present', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('.skip-link')).toBeAttached()
  })

  test('navbar has proper ARIA labels', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('nav[aria-label="Navegación principal"]')).toBeVisible()
  })

  test('images have alt text', async ({ page }) => {
    await page.goto('/')
    const images = page.locator('img')
    const count = await images.count()
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt')
      expect(alt).toBeTruthy()
    }
  })
})