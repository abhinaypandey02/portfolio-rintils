import SanityFeaturedText from '../../interfaces/SanityFeaturedText'
import Container from '../atoms/Container'
import Wrapper from '../atoms/Wrapper'

export default function FeaturedText(props: SanityFeaturedText) {
  return (
    <Wrapper className={'mt-48 mb-60'}>
      <Container>
        <h1 className={'text-h1'}>{props.text}</h1>
      </Container>
    </Wrapper>
  )
}
