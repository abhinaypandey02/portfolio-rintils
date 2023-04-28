import Link from 'next/link'

import SanityWork from '../../interfaces/SanityWork'

export default function WorkCard({ work }: { work: SanityWork }) {
  return (
    <Link href={'/works/' + work.slug.current}>
      <div>{work.title}</div>
    </Link>
  )
}
