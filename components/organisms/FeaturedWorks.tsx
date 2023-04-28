import SanityFeaturedWorks from '../../interfaces/SanityFeaturedWorks'
import Container from '../atoms/Container'
import Wrapper from '../atoms/Wrapper'
import WorkCard from '../molecules/WorkCard'

export default function FeaturedWorks(props: SanityFeaturedWorks) {
  return (
    <Wrapper>
      <Container>
        <div className={'grid grid-cols-2'}>
          {props.works.slice(0, 2).map((work) => (
            <WorkCard key={work.slug.current} work={work} />
          ))}
        </div>

        <div className={'grid grid-cols-3'}>
          {props.works.slice(3).map((work) => (
            <WorkCard key={work.slug.current} work={work} />
          ))}
        </div>
      </Container>
    </Wrapper>
  )
}