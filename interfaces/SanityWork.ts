import SanityPhoto from './SanityPhoto'
import SanityRichText from './SanityRichText'

export default interface SanityWork {
  title: string
  slug: { current: string }
  featured_image: SanityPhoto
  client: string
  agency: string
  tools: string[]
  disciplines: string[]
  date: string
  link: string
  body: SanityRichText
}
