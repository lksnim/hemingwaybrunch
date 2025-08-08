import Link from 'next/link'

import MenuItem from '@/components/MenuItem'
import HeaderSection from '@/components/sections/HeaderSection'
import Layout from '@/layout/Layout'

import { menu } from '../content/menu'

export default function Menu() {
  return (
    <Layout title="Menu">
      {/* Menu Items */}
      <div className="bg-primary-100">
        <div className="relative overflow-hidden">
          <HeaderSection>Our Menu</HeaderSection>

          {/* For Mobile categories */}
          <div className="py-12 md:hidden">
            {menu.map((category, index) => {
              return (
                <ul key={index} className="border-b-[2px] border-secondary-100">
                  <li className="text-2xl text-center text-white" aria-hidden="true">
                    <Link href={`/menu/#${category.id}`}>
                      <p className="block py-6">{category.name}</p>
                    </Link>
                  </li>
                </ul>
              )
            })}
          </div>
        </div>

        <div className="container pb-20">
          <div className="row">
            {menu.map((category, index) => {
              return <MenuItem key={index} category={category} />
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}
