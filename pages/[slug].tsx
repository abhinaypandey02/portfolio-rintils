import { GetStaticPaths, GetStaticProps } from 'next'

import SEO from '../components/atoms/Seo'
import FeaturedText from '../components/organisms/FeaturedText'
import FeaturedWorks from '../components/organisms/FeaturedWorks'
import Form from '../components/organisms/Form'
import Layout from '../components/organisms/Layout'
import RichText from '../components/organisms/RichText'
import SanityPage from '../interfaces/SanityPage'
import client from '../sanity/client'
import Slicer from '../sanity/slicer'
interface PageProps {
  page: SanityPage
}
const COMPONENTS = {
  featured_works: FeaturedWorks,
  featured_text: FeaturedText,
  form: Form,
  rich_text: RichText,
}
export default function DynamicPage({ page }: PageProps) {
  return (
    <Layout>
      <SEO title={page.meta_title} description={page.meta_description} />
      <Slicer sections={page.sections} components={COMPONENTS} />
    </Layout>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const pages: SanityPage[] = await client.fetch(`*[_type == "page"]`)
  return {
    paths: pages.map((page) => ({
      params: { slug: page.slug.current },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ params, locale }) => {
  const pages = await client.fetch(
    `*[_type == "page" && slug.current == "${params?.slug || 'index'}"]{
  ...,
  sections[]{
    ...,
    "works":works[]->{...}
  }
}`
  )
  return {
    props: {
      page: pages && pages.length > 0 && pages[0],
    },
  }
}
