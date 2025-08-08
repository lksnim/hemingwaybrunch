/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SVG from 'react-inlinesvg'

import logo from '../../public/img/logo.png'

const NavItem = ({ children, href }) => {
  const router = useRouter()

  return (
    <li className="w-full text-center flex flex-col items-center md:w-auto uppercase md:mr-6 border-b-[2px] border-secondary-100 md:border-0 md:border-transparent">
      <Link href={href} className="block py-4 text-2xl md:text-base md:pt-2 md:pb-0">
        {children}
      </Link>
      {router.asPath == href && (
        <div className="w-2 h-2 rounded-full md:block bg-secondary-100 mt-[2px]" />
      )}
    </li>
  )
}

export default function Navigation() {
  const [menu, setMenu] = useState(false)

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="flex items-center shadow-lg bg-primary-100">
      <div className="container">
        <div className="justify-between py-6 row md:justify-center">
          <div className="col-6 md:col-2">
            <Link href="/" passHref aria-label="Logo" className="flex-shrink-0">
              <Image src={logo} alt="Picture of the author" />
            </Link>
          </div>
          <div className="block mr-2 col-2 md:hidden">
            <SVG
              src={`../svg/${menu ? 'menu-closed.svg' : 'menu.svg'}`}
              className="w-6 h-6 fill-current text-secondary-100"
              onClick={() => setMenu(!menu)}
            />
          </div>

          <div
            className={`md:col-10 md:flex justify-center md:justify-center ${
              menu ? ' flex' : ' hidden'
            }`}
            onClick={() => setMenu(false)}
            role="menu"
            tabIndex={0}
            aria-hidden={!menu}
          >
            <ul className="flex flex-col items-start w-full p-5 mt-6 text-white border-t border-secondary-600 md:border-0 md:mt-0 md:w-auto md:p-0 md:flex-row">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/#about">About</NavItem>
              <NavItem href="/menu">Menu</NavItem>
              <NavItem href="/#contact">Contact</NavItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
