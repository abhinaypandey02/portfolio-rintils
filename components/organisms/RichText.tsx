import SanityFeaturedText from '../../interfaces/SanityFeaturedText'
import SanityRichText from '../../interfaces/SanityRichText'
import Container from '../atoms/Container'
import Wrapper from '../atoms/Wrapper'

export default function RichText(props: SanityRichText) {
  return (
    <Wrapper>
      <Container>Rich Text</Container>
    </Wrapper>
  )
}
