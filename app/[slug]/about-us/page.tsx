import { notFound } from "next/navigation"
import AboutUs from "../../components/about-us/aboutus"
import Gallery from "../../components/Gallery"
import Counter from "../../components/Counter"
import { siteData } from "../../../data"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function AboutPage({ params }: PageProps) {
  const { slug } = await params
  const data = siteData[slug as keyof typeof siteData]

  if (!data) {
    notFound()
  }

  return (
    <>
      <AboutUs {...data.aboutUsData} />
      <Gallery {...data.gallery} />
      <Counter {...data.counterData} />
    </>
  )
}