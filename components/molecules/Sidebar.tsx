import React, { useEffect } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Button from '../atoms/Button'
export default function Sidebar({ ROUTES, currentPath }: { ROUTES: any; currentPath: string }) {
  const [loading, setLoading] = useState(false)

  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (isOpen) {
      setScrollY(window.scrollY)
      setTimeout(() => {
        document.body.style.position = 'fixed'
        document.body.style.top = `-${window.scrollY}px`
      }, 300)
    } else {
      document.body.style.position = ''
      document.body.style.top = ''
      window.scrollTo(0, scrollY)
    }
  }, [isOpen])
  return (
    <>
      {!isOpen ? (
        <button
          className="absolute right-3 top-5 z-10 flex cursor-pointer items-center md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={'1.5'}
            stroke="currentColor"
            className="h-10 w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      ) : null}

      <div
        onScroll={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
        className={`fixed top-0 right-0 z-10 min-h-full w-full bg-white ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } duration-300 ease-in-out`}
      >
        <div className={'z-20  mt-5 flex items-center justify-end pr-3 pl-4'}>
          <button className="z-20 text-xl text-black" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className={'mt-7 px-4'}></div>
      </div>
    </>
  )
}
