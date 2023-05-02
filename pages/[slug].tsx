import { GetStaticPaths, GetStaticProps } from 'next'

import SEO from '../components/atoms/Seo'
import FeaturedText from '../components/organisms/FeaturedText'
import FeaturedWorks from '../components/organisms/FeaturedWorks'
import Form from '../components/organisms/Form'
import Layout from '../components/organisms/Layout'
import RichText from '../components/organisms/RichText'
import SanityPage from '../interfaces/SanityPage'
import SanitySiteSettings from '../interfaces/SanitySiteSettings'
import client from '../sanity/client'
import Slicer from '../sanity/slicer'
interface PageProps {
  page: SanityPage
  site_settings: SanitySiteSettings
}
const COMPONENTS = {
  featured_works: FeaturedWorks,
  featured_text: FeaturedText,
  form: Form,
  rich_text: RichText,
}
export default function DynamicPage({ page, site_settings }: PageProps) {
  return (
    <Layout site_settings={site_settings}>
      <SEO title={page.meta_title} description={page.meta_description} />
      <div className={'mt-48 mb-32'}>
        <Slicer sections={page.sections} components={COMPONENTS} />
      </div>
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
  const site_settings = await client.fetch('*[_id == "site_settings"]')
  return {
    props: {
      page: pages && pages.length > 0 && pages[0],
      site_settings: site_settings && site_settings.length > 0 && site_settings[0],
    },
  }
}
