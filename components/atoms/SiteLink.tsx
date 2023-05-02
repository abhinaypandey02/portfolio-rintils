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
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        {title} →
      </Link>
    )
  }
  return <a href={href}>{title} ↗</a>
}
