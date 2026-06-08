export interface RouteLocationNormalized {
  path: string
  params: Record<string, string>
  query: Record<string, string>
  name: string
}

export interface MetaTags {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
}