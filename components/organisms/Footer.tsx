import Image from 'next/image'
import Link from 'next/link'

import SanityLink from '../../interfaces/SanityLink'
import Container from '../atoms/Container'
import SiteLink from '../atoms/SiteLink'
import Wrapper from '../atoms/Wrapper'
const ROUTES = [
  {
    title: 'Home',
    slug: '/',
  },
  {
    title: 'Listings',
    slug: '/listings',
  },
]
export default function Footer({ links }: { links: SanityLink[] }) {
  return (
    <Wrapper className={''}>
      <Container className={'grid grid-cols-1 gap-8 px-2  pb-10 md:grid-cols-4'}>
        <span
          className={'cursor-pointer'}
          onClick={() => {
            window.scroll(0, 0)
          }}
        >
          ↑ Top
        </span>
        {links.map((link) =>
          link.url ? (
            <SiteLink key={link.url} href={link.url} title={link.text} />
          ) : (
            <span key={link.url} className={'text-grey'}>
              {link.text}
            </span>
          )
        )}
      </Container>
    </Wrapper>
  )
}
