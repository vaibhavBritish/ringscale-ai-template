import { notFound } from "next/navigation"
import HeroSection, { HeroSectionProps } from "../components/Herosection"
import HerosectionFeatures from "../components/HerosectionFeatures"
import Gallery from "../components/Gallery"
import Testimonials from "../components/Testimonials"
import Counter from "../components/Counter"
import { siteData } from "../../data"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function BusinessPage({ params }: PageProps) {
  const { slug } = await params
  const data = siteData[slug as keyof typeof siteData]

  if (!data) {
    notFound()
  }

  return (
    <>
      <HeroSection {...(data.herosection as HeroSectionProps)} />
      <HerosectionFeatures {...data.hersosectionFeaturesData} />
      <Gallery {...data.gallery} />
      <Testimonials {...data.testimonialsData} />
      <Counter {...data.counterData} />
    </>
  )
}