import ContactSection from '@/components/sections/ContactSection'
import HeaderSection from '@/components/sections/HeaderSection'
import MenuSection from '@/components/sections/MenuSection'
import StartSection from '@/components/sections/StartSection'
import WorkSection from '@/components/sections/WorkSection'
import Layout from '@/layout/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      {/* Header Section */}
      <HeaderSection main />

      {/* Start Section */}
      <StartSection />

      {/* Menu Section */}
      <MenuSection />

      {/* Work Section */}
      <WorkSection />

      {/* Contact Section */}
      <ContactSection />
    </Layout>
  )
}
