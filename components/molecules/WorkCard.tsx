import { useEffect, useRef } from 'react'
import Link from 'next/link'

import SanityWork from '../../interfaces/SanityWork'
import { SanityImage } from '../../sanity/components'

export default function WorkCard({ work }: { work: SanityWork }) {
  return (
    <Link href={'/works/' + work.slug.current}>
      <div>
        <div style={{ paddingTop: 30300 / 484 + '%' }} className={'relative mb-4'}>
          <SanityImage
            className={'absolute top-0 h-full  object-center'}
            image={work.featured_image}
          />
        </div>
        <div>{work.title}</div>
        <div className={'text-grey'}>{work.disciplines.join(', ')}</div>
      </div>
    </Link>
  )
}
