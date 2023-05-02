import { PropsWithChildren } from 'react'

import SanitySiteSettings from '../../interfaces/SanitySiteSettings'

import Footer from './Footer'
import Header from './Header'

export default function Layout({
  children,
  className,
  site_settings,
}: PropsWithChildren<{ className?: string; site_settings: SanitySiteSettings }>) {
  return (
    <main className={className}>
      <Header links={site_settings.header_links} />
      <div>{children}</div>
      <Footer links={site_settings.footer_links} />
    </main>
  )
}
