import { useState } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import Container from '../../components/atoms/Container'
import SEO from '../../components/atoms/Seo'
import Wrapper from '../../components/atoms/Wrapper'
import WorkCard from '../../components/molecules/WorkCard'
import Layout from '../../components/organisms/Layout'
import SanityPage from '../../interfaces/SanityPage'
import SanityWork from '../../interfaces/SanityWork'
import client from '../../sanity/client'

interface PageProps {
  works: SanityWork[]
}
export default function Works(props: PageProps) {
  const [toShow, setToShow] = useState(9)
  return (
    <Layout>
      <SEO title={'Works'} />
      <Wrapper className={'mt-48 mb-32'}>
        <Container>
          <h1 className={'mb-8 text-h1'}>Works</h1>
          <div className={'grid grid-cols-3 gap-x-6 gap-y-10'}>
            {props.works.slice(0, toShow).map((work) => (
              <WorkCard key={work.slug.current} work={work} />
            ))}
          </div>
          {toShow < props.works && (
            <div className={'mt-12 text-center'}>
              <span className={'cursor-pointer'} onClick={() => setToShow((o) => o + 6)}>
                Load More +
              </span>
            </div>
          )}
        </Container>
      </Wrapper>
    </Layout>
  )
}
export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const works: SanityWork[] = await client.fetch(`*[_type == "work"]`)
  return {
    props: { works },
  }
}
