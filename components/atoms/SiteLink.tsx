import Link from 'next/link'
export default function SiteLink({
  href,
  title,
  className,
}: {
  href: string
  title: string
  className?: string
}) {
  const BASE =
    'transition-transform hover:scale-105 ease-in-out duration-200 origin-left inline-block '
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={BASE + className}>
        {title} →
      </Link>
    )
  }
  return (
    <a href={href} className={BASE + className}>
      {title} ↗
    </a>
  )
}
