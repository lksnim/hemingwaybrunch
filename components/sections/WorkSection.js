import Image from 'next/image'

import burrito from '../../public/img/burrito.png'

const WorkSection = () => {
  return (
    <div className="bg-primary-100">
      <div className="container py-12">
        <div className="flex flex-col lg:w-full lg:flex-row">
          <div className="relative w-full h-48 px-10 lg:w-1/2 md:h-64 lg:h-80">
            <Image
              src={burrito}
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              alt="Burito 2"
              className="object-cover"
            />

            <p className="absolute inset-x-0 text-4xl font-bold text-center xl:ml-6 md:text-left text-secondary-100 top-20 md:text-5xl lg:left-0 md:top-24 lg:top-36 md:left-56">
              Working Hours
            </p>
          </div>

          <div className="flex justify-center w-full mt-8 uppercase md:mt-0 lg:w-1/2 bg-primary-100 md:bg-primary-200">
            <div className="flex flex-col items-center justify-center -space-y-24 text-center md:-space-y-0 md:space-x-10 md:flex-row">
              <div className="flex flex-col space-y-4 text-white">
                <p className="text-xl font-normal leading-6 tracking-widest font-karla">
                  Monday to Sunday
                </p>
                <p className="text-xl font-bold md:text-2xl">07:00 AM</p>
                <p className="text-xl font-bold md:text-2xl">02:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkSection
