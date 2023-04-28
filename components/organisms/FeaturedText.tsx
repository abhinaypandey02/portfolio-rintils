import SanityFeaturedText from '../../interfaces/SanityFeaturedText'
import Container from '../atoms/Container'
import Wrapper from '../atoms/Wrapper'

export default function FeaturedText(props: SanityFeaturedText) {
  return (
    <Wrapper>
      <Container>{props.text}</Container>
    </Wrapper>
  )
}
