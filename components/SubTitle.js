import SVG from 'react-inlinesvg'

export default function SubTitle({ children, className, large }) {
  return (
    <div className="flex items-center justify-center">
      <p className={`mr-4 font-bold text-3xl text-center text-white md:text-5xl ${className}`}>
        {children}
      </p>
      <SVG
        src="/svg/flower1.svg"
        className={`fill-current text-secondary-200 ${large ? 'w-24 h-12' : 'w-14 h-7'}`}
      />
    </div>
  )
}
