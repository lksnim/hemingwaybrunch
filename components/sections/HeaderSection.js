import Image from 'next/image'
import SVG from 'react-inlinesvg'

import pan1 from '../../public/img/pan1.png'
import pan2 from '../../public/img/pan2.png'
export default function HeaderSection({ main, children }) {
  return (
    <div className="bg-primary-100">
      <div className="relative pt-12 overflow-hidden md:pt-0">
        {main ? (
          <>
            <div className="container md:py-48 lg:py-72 xl:py-64 2xl:py-48">
              <h1 className="w-full mb-4 text-3xl text-center text-white md:-mt-2 md:text-left xl:py-44 lg:pb-12 md:text-6xl xl:text-8xl md:col-5">
                But first, Brunch!
              </h1>
            </div>
            <div className="right-0 -mr-32 md:absolute lg:-top-8 top-15 xl:-right-28 2xl:-mr-72 md:-mr-52 md:-top-4 md:col-8 ">
              <Image src={pan1} alt="pancake" priority />
            </div>
          </>
        ) : (
          <>
            <div className="container md:py-52 lg:py-72 xl:py-64">
              <div className="flex items-center justify-center mb-8 md:justify-start">
                <h1 className="mr-4 text-3xl text-center text-white md:text-left md:text-5xl md:mb-0 xl:text-6xl">
                  {children}
                </h1>
                <SVG
                  src="/svg/flower1.svg"
                  className="w-[60px] h-[28px] fill-current text-secondary-200"
                />
              </div>
            </div>

            <div className="right-0 -mr-32 md:absolute top-15 md:-mr-36 lg:-mr-40 md:-top-4 xl:-right-52 2xl:-mr-48 md:col-8">
              <div className="md:hidden">
                <Image src={pan2} alt="pancake 2" priority />
              </div>
              <div className="hidden md:block">
                <Image src={pan2} alt="pancake 2" priority />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
