import { describe, it, expect } from 'vitest'
import { getBlogPosts, blogCategories, categoryLabelKeys } from '../blog'

describe('data/blog.js', () => {
  ;['es', 'pt'].forEach((locale) => {
    describe(`locale: ${locale}`, () => {
      const blogPosts = getBlogPosts(locale)

      it('has unique, non-empty ids and slugs', () => {
        const ids = blogPosts.map((p) => p.id)
        const slugs = blogPosts.map((p) => p.slug)
        expect(new Set(ids).size).toBe(blogPosts.length)
        expect(new Set(slugs).size).toBe(blogPosts.length)
        slugs.forEach((slug) => expect(slug).toMatch(/^[a-z0-9-]+$/))
      })

      it('every post has the fields the views rely on', () => {
        blogPosts.forEach((post) => {
          expect(post).toMatchObject({
            id: expect.any(Number),
            slug: expect.any(String),
            category: expect.any(String),
            title: expect.any(String),
            excerpt: expect.any(String),
            content: expect.any(String),
            featured: expect.any(Boolean)
          })
        })
      })

      it('every post category is one of the declared blogCategories', () => {
        blogPosts.forEach((post) => {
          expect(blogCategories).toContain(post.category)
        })
      })

      it('has at least one featured post', () => {
        expect(blogPosts.some((p) => p.featured)).toBe(true)
      })
    })
  })

  it('every blogCategory has a matching i18n label key', () => {
    blogCategories.forEach((cat) => {
      expect(categoryLabelKeys[cat]).toBeTruthy()
    })
  })

  it('falls back to es posts for an unknown locale', () => {
    expect(getBlogPosts('fr')).toEqual(getBlogPosts('es'))
  })
})
