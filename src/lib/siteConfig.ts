export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'self-dev-blog',
  name: 'practicelog',
  origin: 'https://self-dev-blog.oriz.in',
  tagline: 'Small reps beat motivation',
  description:
    'A working log of habits, focus, and follow-through — the practices that hold when motivation is gone.',
}
