import { GetStaticPaths, GetStaticProps } from 'next'

import Container from '../../components/atoms/Container'
import SEO from '../../components/atoms/Seo'
import Wrapper from '../../components/atoms/Wrapper'
import Layout from '../../components/organisms/Layout'
import RichText from '../../components/organisms/RichText'
import SanitySiteSettings from '../../interfaces/SanitySiteSettings'
import SanityWork from '../../interfaces/SanityWork'
import client from '../../sanity/client'
import { SanityImage } from '../../sanity/components'
interface PageProps {
  work?: SanityWork
  site_settings?: SanitySiteSettings
}
export default function SingleWork(props: PageProps) {
  if (!props.work || !props.site_settings) return
  const workDate = new Date(props.work.date)
  const workYear = workDate.getFullYear()
  return (
    <Layout site_settings={props.site_settings}>
      <SEO title={props.work.title} />
      <Wrapper className={'mt-16 mb-24'}>
        <Container>
          <h1 className={'mb-8 text-h1'}>{props.work.title}</h1>
          <div className={'my-8'}>
            <SanityImage image={props.work.featured_image} />
          </div>
          <div className={'mt-8 mb-12 grid grid-cols-3 gap-4 md:grid-cols-6 '}>
            {props.work.client && (
              <div>
                <div>Client</div>
                <div className={'text-grey'}>{props.work.client}</div>
              </div>
            )}
            {props.work.agency && (
              <div>
                <div>Agency</div>
                <div className={'text-grey'}>{props.work.agency}</div>
              </div>
            )}
            {props.work.disciplines && (
              <div>
                <div>Disciplines</div>
                {props.work.disciplines.map((discipline) => (
                  <div className={'text-grey'} key={discipline}>
                    {discipline}
                  </div>
                ))}
              </div>
            )}
            {props.work.tools && (
              <div>
                <div>Tools</div>
                {props.work.tools.map((tool) => (
                  <div className={'text-grey'} key={tool}>
                    {tool}
                  </div>
                ))}
              </div>
            )}
            {!isNaN(workYear) && (
              <div>
                <div>Year</div>
                <div className={'text-grey'}>{workYear}</div>
              </div>
            )}
            {props.work.link && (
              <div>
                <div>Live Link</div>
                <a href={props.work.link} className={'text-grey'}>
                  Open
                </a>
              </div>
            )}
          </div>
          <div className={'my-12'}>
            <RichText rich_text={props.work.body} />
          </div>
        </Container>
      </Wrapper>
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
  if (params?.work) {
    const works: SanityWork[] = await client.fetch(
      `*[_type == "work" && slug.current == "${params.work}"]`
    )
    const site_settings = await client.fetch('*[_id == "site_settings"]')

    return {
      props: {
        work: works?.length === 1 ? works[0] : undefined,
        site_settings: site_settings && site_settings.length > 0 && site_settings[0],
      },
    }
  }
  return { props: {} }
}
