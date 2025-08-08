import Image from 'next/image'
import SVG from 'react-inlinesvg'

import image1 from '../../public/img/image1.png'
import image2 from '../../public/img/image2.png'
import image3 from '../../public/img/image3.png'
import Button from '../Button'
import SubTitle from '../SubTitle'

const MenuSection = () => {
  return (
    <div className="bg-primary-100">
      <div className="relative py-12 overflow-hidden md:pt-20">
        <SubTitle>Our Popular Menu</SubTitle>

        <div className="absolute xl:offset-9 md:offset-9 offset-3 lg:offset-9 2xl:offset-8 mt-7">
          <SVG src="/svg/Hexagon.svg" className="fill-current text-secondary-200" />
        </div>

        <div className="container">
          <div className="justify-center xl:space-x-0 2xl:space-x-0 row">
            <MenuCard src={image1} className="mt-20 lg:mt-40 xl:mt-44 md:mt-28" alt="card1">
              French Benny
            </MenuCard>
            <MenuCard src={image2} className="mt-16 md:mt-12" alt="card2">
              Buddha Bowl
            </MenuCard>
            <MenuCard src={image3} className="mt-16 md:mt-16 lg:mt-20" alt="card3">
              White chocolate raspberry pancakes
            </MenuCard>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <Button href="/menu">See our menu</Button>
        </div>
      </div>
    </div>
  )
}

export default MenuSection

const MenuCard = ({ className, children, src, alt }) => {
  return (
    <div className={`${className} md:col-3 flex flex-col`}>
      <Image priority src={src} alt={alt} className="object-cover w-full h-auto" />
      <p className="mt-2 ml-5 text-2xl text-white">{children}</p>
    </div>
  )
}
