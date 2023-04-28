import Image from 'next/image'
import Link from 'next/link'

import Container from '../atoms/Container'
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
export default function Footer() {
  return (
    <Wrapper className={'bg-black'}>
      <Container className={'grid grid-cols-1 gap-8 py-10  px-2 text-white md:grid-cols-3'}>
        FOOTER
      </Container>
    </Wrapper>
  )
}
