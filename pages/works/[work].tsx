import { GetStaticPaths, GetStaticProps } from 'next'

import SEO from '../../components/atoms/Seo'
import Layout from '../../components/organisms/Layout'
import SanityWork from '../../interfaces/SanityWork'
import client from '../../sanity/client'
import { SanityImage } from '../../sanity/components'
interface PageProps {
  work?: SanityWork
}
export default function SingleWork(props: PageProps) {
  if (!props.work) return
  return (
    <Layout>
      <SEO title={props.work.title} />
      <div>
        <SanityImage image={props.work.featured_image} />
      </div>
    </Layout>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const works: SanityWork[] = await client.fetch(`*[_type == "work"]`)
  return {
    paths: works.map((work) => ({
      params: {
        work: work.slug.current,
      },
    })),
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  if (params?.slug) {
    const work = await client.fetch(`*[_type == "work" && slug.current == ${params.slug}]`)
    return {
      props: {
        work,
      },
    }
  }
  return { props: {} }
}
