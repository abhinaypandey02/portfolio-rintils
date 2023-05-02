import { createContext, Dispatch, useContext, useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

import '../styles/globals.css'
const Theme = createContext<
  [
    'dark' | 'light' | undefined,
    Dispatch<(o: 'dark' | 'light' | undefined) => 'dark' | 'light' | undefined>
  ]
>([undefined, () => undefined])
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
export function useTheme() {
  const theme = useContext(Theme)
  return {
    theme: theme[0],
    switchTheme: () => theme[1]((o: any) => (o === 'dark' ? 'light' : 'dark')),
  }
}
function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>()
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme === 'dark' || localTheme === 'light') {
      setTheme(localTheme)
      return
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      window.localStorage.setItem('theme', 'light')

      setTheme('light')
    }
  }, [])
  if (!theme) return null
  return (
    <Theme.Provider value={[theme, setTheme]}>
      <main className={inter.className + ' ' + theme}>
        <div
          className={
            'bg-black text-white transition-colors duration-700 ease-in-out dark:bg-white dark:text-black'
          }
        >
          <Component {...pageProps} />
        </div>
      </main>
    </Theme.Provider>
  )
}

export default MyApp
