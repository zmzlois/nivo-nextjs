import React from 'react'
import Link from 'next/link'
import homeStyles from '../styles/Home.module.css'

function Navbar({ page }: any) {
  const currentPage: string = page
  const [currentPosition, setCurrentPosition] = React.useState(currentPage)
  return (
    <div className="flex pt-4 pb-10 justify-between sm:flex-row flex-col">
      <Link
        href="/"
        className="flex font-bold text-4xl scale-100 hover:scale-110 ease-in duration-100"
      >
        Haushaltsbuch
      </Link>
      <div className="flex">
        <div className="flex gap-4 border-2 border-gray-300 p-2 pr-3 rounded-lg shadow-lg">
          <Link
            href="/dashboard"
            className={
              '' +
              (currentPosition === 'dashboard' ? ' font-bold  ' : ' ') +
              homeStyles.link +
              ' ' +
              homeStyles.linkUnderline +
              ' ' +
              homeStyles.linkUnderlineBlack
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
                : '') +
              homeStyles.link +
              ' ' +
              homeStyles.linkUnderline +
              ' ' +
              homeStyles.linkUnderlineBlack
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
                : '') +
              homeStyles.link +
              ' ' +
              homeStyles.linkUnderline +
              ' ' +
              homeStyles.linkUnderlineBlack
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
