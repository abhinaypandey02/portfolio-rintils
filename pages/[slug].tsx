import { useCallback } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Container, Engine } from 'tsparticles-engine'

import SEO from '../components/atoms/Seo'
import FeaturedText from '../components/organisms/FeaturedText'
import FeaturedWorks from '../components/organisms/FeaturedWorks'
import Form from '../components/organisms/Form'
import Layout from '../components/organisms/Layout'
import RichText from '../components/organisms/RichText'
import SanityPage from '../interfaces/SanityPage'
import SanitySiteSettings from '../interfaces/SanitySiteSettings'
import client, { urlFor } from '../sanity/client'
import Slicer from '../sanity/slicer'

import { useTheme } from './_app'
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
  const { theme } = useTheme()
  const particlesInit = useCallback(loadFull, [])
  const imageURL = urlFor(page.meta_image)
  return (
    <Layout site_settings={site_settings}>
      <SEO
        image={page.meta_image && imageURL}
        title={page.meta_title}
        description={page.meta_description}
      />
      <div className={'relative z-10 mt-48 mb-32'}>
        <Slicer sections={page.sections} components={COMPONENTS} />
      </div>
      {page.slug.current === 'index' && (
        <Particles
          height={'800px'}
          canvasClassName={'absolute top-0'}
          init={particlesInit}
          options={{
            fullScreen: false,
            background: {
              color: {
                value: 'transparent',
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: theme === 'dark' ? '#000000' : '#ffffff',
              },
              links: {
                color: theme === 'dark' ? '#000000' : '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
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
