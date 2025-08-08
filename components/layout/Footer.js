import SVG from 'react-inlinesvg'

import { social } from '../../content/social'

export default function Footer() {
  return (
    <div className="bg-primary-100">
      <div className="container pt-16 pb-12 md:pt-20">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="mb-8 md:col-4">
            <SVG
              src="/svg/findus.svg"
              className="h-24 fill-current w-52 md:w-96 lg:w-[400px] text-secondary-100"
            />
          </div>

          {/* Socials */}
          <div className="md:col-4 md:offset-2">
            <div className="flex items-center justify-center space-x-3">
              {social
                .filter((item) => item.enabled === true)
                .map((item, index) => (
                  <div key={index} className="flex items-center cursor-pointer group">
                    <a
                      aria-label={item.icon}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="p-2.5 rounded-xl bg-primary-300 group-hover:bg-secondary-100 duration-300 ease-in-out"
                    >
                      <SVG
                        src={`../svg/${item.icon}.svg`}
                        className="w-6 h-6 duration-300 ease-in-out fill-current text-secondary-100 group-hover:text-primary-100"
                      />
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="container">
        <div className="hidden md:block">
          <SVG
            src="../svg/divider-10.svg"
            className="w-full h-auto fill-current shrink-0 md:h-auto text-secondary-100"
          />
        </div>
        <div className="md:hidden">
          <SVG
            src="../svg/divider-4.svg"
            className="shrink-0 w-full h-[10px] fill-current md:h-auto text-secondary-100"
          />
        </div>
        <div className="flex justify-center my-7">
          <p className="text-base text-center text-white md:text-left">
            © {new Date().getFullYear()} All rights reserved. Hemingway Brunch. Made with
            <span className="text-red-600">♥</span>
            <a
              aria-label="reference"
              rel="noreferrer noopener"
              href="https://wooleemarketing.com/?ref=hemingway"
              className="ml-1 hover:text-secondary-100 hover:border-b hover:border-secondary-100"
            >
              WooLee Marketing.
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
