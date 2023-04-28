import { GetStaticProps } from 'next'

import SEO from '../../components/atoms/Seo'
import WorkCard from '../../components/molecules/WorkCard'
import Layout from '../../components/organisms/Layout'
import SanityPage from '../../interfaces/SanityPage'
import SanityWork from '../../interfaces/SanityWork'
import client from '../../sanity/client'

interface PageProps {
  works: SanityWork[]
}
export default function Works(props: PageProps) {
  return (
    <Layout>
      <SEO title={'Works'} />
      <div>Works</div>
      <div className={'grid grid-cols-3'}>
        {props.works.map((work) => (
          <WorkCard key={work.slug.current} work={work} />
        ))}
      </div>
    </Layout>
  )
}
export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const works: SanityWork[] = await client.fetch(`*[_type == "work"]`)
  return {
    props: { works },
  }
}
