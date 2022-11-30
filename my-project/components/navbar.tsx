import React from 'react'
import Link from 'next/link'

function Navbar({ page }: any) {
  const currentPage: string = page
  const [currentPosition, setCurrentPosition] = React.useState(currentPage)
  return (
    <div className="flex pt-4 pb-10 justify-between">
      <Link
        href="/"
        className="flex font-bold text-4xl scale-100 hover:scale-110 ease-in duration-100"
      >
        Haushaltsbuch
      </Link>
      <div>
        <div className="flex gap-2 mt-3">
          <Link
            href="/dashboard"
            className={
              'hover:font-bold' +
              (currentPosition === 'dashboard'
                ? ' font-bold border-b-2 border-black'
                : '')
            }
            onClick={() => setCurrentPosition('dashboard')}
          >
            Dashboard
          </Link>
          <div>/</div>
          <Link
            href="/about"
            className={
              'hover:font-bold' +
              (currentPosition === 'about'
                ? ' font-bold border-b-2 border-black'
                : '')
            }
            onClick={() => setCurrentPosition('about')}
          >
            About
          </Link>
          <div>/</div>
          <Link
            href="/login"
            className={
              'hover:font-bold' +
              (currentPosition === 'login'
                ? ' font-bold border-b-2 border-black'
                : '')
            }
            onClick={() => setCurrentPosition('login')}
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
