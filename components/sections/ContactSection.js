import dynamic from 'next/dynamic'
import Image from 'next/image'
import SVG from 'react-inlinesvg'

import map from '../../public/img/map.jpg'
import Button from '../Button'
import SubTitle from '../SubTitle'

const YelpFrame = dynamic(() => import('@/components/YelpFrame'), { ssr: false })

const ContactSection = () => {
  return (
    <div id="contact" className="py-12 bg-primary-100">
      <SubTitle large>Find us</SubTitle>
      <div className="relative overflow-hidden">
        <div className="absolute left-28 md:-left-44 lg:left-0">
          <SVG src="/svg/hexagon4.svg" className="fill-current text-secondary-200 z-0" />
        </div>

        <div className="flex flex-col justify-center px-4 mt-12 md:px-0 md:space-x-8 md:flex-row">
          <a
            className="inline-block z-50"
            href="https://www.google.com/maps/place/Hemingway+Brunch/@32.9704009,-96.998337,17z/data=!4m9!1m2!2m1!1sHemingway+Brunch+140+West+Sandy+Lake+Rd,+Suite+140,+Coppell+TX+75019!3m5!1s0x864c29a5fe5587eb:0xffe00a7f4fdc92bf!8m2!3d32.9703741!4d-96.9962462!15sCkRIZW1pbmd3YXkgQnJ1bmNoIDE0MCBXZXN0IFNhbmR5IExha2UgUmQsIFN1aXRlIDE0MCwgQ29wcGVsbCBUWCA3NTAxOZIBEWJydW5jaF9yZXN0YXVyYW50"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image className="object-cover object-fit" src={map} alt="Map" />
          </a>

          <div className="mt-8 space-y-8 font-normal text-center md:max-w-min lg:pr-[50px] xl:pr-[100px] 2xl:pr-[420px] md:mt-0 md:text-left">
            <YelpFrame />

            <p className="text-2xl text-secondary-100">Contact:</p>
            <a className="text-lg text-white hover:underline" href="tel:(972)-304-8871">
              (972) - 304 - 88 71
            </a>
            <p className="text-2xl text-secondary-100">Address:</p>
            <a
              target="_blank"
              className="text-lg text-white hover:underline"
              href="https://www.google.com/maps/place/Hemingway+Brunch/@32.9704009,-96.998337,17z/data=!4m9!1m2!2m1!1sHemingway+Brunch+140+West+Sandy+Lake+Rd,+Suite+140,+Coppell+TX+75019!3m5!1s0x864c29a5fe5587eb:0xffe00a7f4fdc92bf!8m2!3d32.9703741!4d-96.9962462!15sCkRIZW1pbmd3YXkgQnJ1bmNoIDE0MCBXZXN0IFNhbmR5IExha2UgUmQsIFN1aXRlIDE0MCwgQ29wcGVsbCBUWCA3NTAxOZIBEWJydW5jaF9yZXN0YXVyYW50"
              rel="noreferrer"
            >
              Hemingway Brunch 140 West Sandy Lake Rd, Suite 140, Coppell TX 75019
            </a>
            <p className="text-2xl text-secondary-100">Write Us:</p>
            <a
              className="text-lg text-white hover:underline"
              href="mailto:info@hemingwaybrunch.com"
            >
              hemingwaybrunch@gmail.com
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-20 mb-4">
          <Button href="https://www.google.com/maps/place/Hemingway+Brunch/@32.9704009,-96.998337,17z/data=!4m9!1m2!2m1!1sHemingway+Brunch+140+West+Sandy+Lake+Rd,+Suite+140,+Coppell+TX+75019!3m5!1s0x864c29a5fe5587eb:0xffe00a7f4fdc92bf!8m2!3d32.9703741!4d-96.9962462!15sCkRIZW1pbmd3YXkgQnJ1bmNoIDE0MCBXZXN0IFNhbmR5IExha2UgUmQsIFN1aXRlIDE0MCwgQ29wcGVsbCBUWCA3NTAxOZIBEWJydW5jaF9yZXN0YXVyYW50">
            Get directions
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
