import SanityFeaturedText from './SanityFeaturedText'
import SanityFeaturedWorks from './SanityFeaturedWorks'
import SanityForm from './SanityForm'
import SanityPhoto from './SanityPhoto'
import SanityRichText from './SanityRichText'

export default interface SanityPage {
  slug: { current: string }
  title: string
  meta_title: string
  meta_description: string
  meta_image: SanityPhoto
  sections: (SanityFeaturedText | SanityForm | SanityFeaturedWorks | SanityRichText)[]
}
