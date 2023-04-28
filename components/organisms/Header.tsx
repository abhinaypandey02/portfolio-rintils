import { useState } from 'react'
import { useRouter } from 'next/router'

import Container from '../atoms/Container'
import Wrapper from '../atoms/Wrapper'
import Sidebar from '../molecules/Sidebar'
export default function Header() {
  const router = useRouter()
  const currentPath = router.pathname
  const [loading, setLoading] = useState(false)
  const ROUTES = [
    {
      title: 'Home',
      slug: '/',
    },
  ]
  return (
    <Wrapper className={'bg-p2 sticky top-0 z-40 shadow-md'}>
      <Container className={'relative flex w-full items-center gap-6 py-5 px-2'}>
        <Sidebar currentPath={currentPath} ROUTES={ROUTES} />
        HEADER
      </Container>
    </Wrapper>
  )
}
