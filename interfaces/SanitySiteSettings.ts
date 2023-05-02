import SanityLink from './SanityLink'
import SanityPhoto from './SanityPhoto'

export default interface SanitySiteSettings {
  header_links: SanityLink[]
  footer_links: SanityLink[]
  works_seo: {
    meta_title: string
    meta_description: string
    meta_image: SanityPhoto
  }
}
