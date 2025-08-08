import Link from 'next/link'
import SVG from 'react-inlinesvg'

export default function Button({ children, href, className }) {
  return (
    <Link href={href ? href : '/'} passHref>
      <div className={`relative group ${className}`}>
        <div
          className={`relative font-karla w-auto inline-flex items-center px-4 py-3 bg-primary-100 text-white uppercase duration-300 ease-out border-2 cursor-pointer border-secondary-100 shadow-lg
          `}
          style={{ zIndex: 2 }}
        >
          {children}
          <SVG src={`/svg/arrow.svg`} className="ml-3 text-white fill-current" />
        </div>

        <div
          className="absolute w-full h-4 bg-gradient-to-l from-primary-100 "
          style={{ zIndex: 1 }}
        ></div>

        <div
          style={{ zIndex: 0 }}
          className="absolute bottom-[-6px] left-[-6px] border-2 h-11 w-full cursor-pointer border-secondary-100 group-hover:bg-secondary-100 duration-300 ease-in-out ="
        ></div>
      </div>
    </Link>
  )
}
