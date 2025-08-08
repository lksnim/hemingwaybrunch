import Image from 'next/image'

import Button from '@/components/Button'

import errorImage from '../public/img/pan404.png'

const ErrorPage = () => {
  return (
    <div className="bg-primary-100 h-screen md:flex flex-col md:items-center lg:pt-0 pt-20 justify-center overflow-hidden">
      <div className="container space-y-6">
        <p className="md:text-4xl text-2xl font-bold text-white md:w-1/2">
          The page you were looking for doesn’t exist.
        </p>
        <p className="text-white font-karla font-normal">
          You may have mistyped the address or the page may have moved.
        </p>
        <div className="flex flex-1">
          <Button>Go Back</Button>
        </div>
      </div>
      <div className="lg:absolute right-0 top-[10%] md:-mr-48 xl:-mr-0">
        <Image src={errorImage} alt="pancake" priority />
      </div>
    </div>
  )
}

export default ErrorPage
