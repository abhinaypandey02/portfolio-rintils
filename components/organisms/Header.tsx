import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import SanityLink from '../../interfaces/SanityLink'
import { useTheme } from '../../pages/_app'
import Container from '../atoms/Container'
import SiteLink from '../atoms/SiteLink'
import Wrapper from '../atoms/Wrapper'
import Sidebar from '../molecules/Sidebar'
export default function Header({ links }: { links: SanityLink[] }) {
  const router = useRouter()
  const { switchTheme } = useTheme()
  const currentPath = router.pathname
  const [loading, setLoading] = useState(false)
  const ROUTES = [
    {
      title: 'Home',
      slug: '/',
    },
  ]
  return (
    <Wrapper className={' '}>
      <Container className={'relative flex w-full items-center gap-6 px-2 pt-5'}>
        <Sidebar currentPath={currentPath} ROUTES={ROUTES} />
        <div className={'mr-auto'}>
          <div className={'font-semibold'}>
            <Link href={'/'}>Alex Wastell</Link>
          </div>
          <Link className={'text-grey'} href={'/works'}>
            Selected Works
          </Link>
        </div>
        <div className={'grid w-1/2 grid-cols-3'}>
          <div className={'col-span-2 grid grid-cols-2'}>
            {links.map((link) => (
              <SiteLink key={link.url} href={link.url} title={link.text} />
            ))}
          </div>
          <div onClick={switchTheme} className={'cursor-pointer '}>
            <div className={'flex items-center gap-1.5'}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className={'transition-colors duration-300 ease-in-out dark:fill-black'}
                  d="M8 16C10.1217 16 12.1567 15.1572 13.6568 13.6568C15.1572 12.1566 16 10.1218 16 8C16 5.87819 15.1572 3.84331 13.6568 2.34316C12.1566 0.842796 10.1218 -5.13888e-07 8 -6.99382e-07C5.8782 -8.84876e-07 3.84331 0.842795 2.34316 2.34316C0.842797 3.8434 8.84876e-07 5.87819 6.99382e-07 8C5.13888e-07 10.1218 0.842797 12.1567 2.34316 13.6568C3.8434 15.1572 5.87819 16 8 16ZM8 0.747668C9.9234 0.747668 11.7681 1.51176 13.1281 2.87185C14.4882 4.23182 15.2523 6.07636 15.2523 7.99997C15.2523 9.92358 14.4882 11.7681 13.1281 13.1281C11.7681 14.4882 9.92361 15.2523 8 15.2523C6.07639 15.2523 4.23188 14.4882 2.87188 13.1281C1.51179 11.7681 0.7477 9.92358 0.7477 7.99997C0.749933 6.07726 1.51474 4.23395 2.87435 2.87425C4.23384 1.51465 6.07729 0.749893 8 0.747668Z"
                  fill="white"
                />
                <path
                  className={'transition-colors  duration-300 ease-in-out dark:fill-black'}
                  d="M13.6569 2.34144C15.1572 3.84058 16 5.87392 16 7.99425C16.002 9.39883 15.6338 10.7793 14.9321 11.9963C14.2304 13.2134 13.2203 14.2242 12.0033 14.927C10.7865 15.6299 9.40559 16 8 16L8 -6.99382e-07C10.1217 -5.13894e-07 12.1565 0.842191 13.6569 2.34144Z"
                  fill="white"
                />
              </svg>
              Light
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
