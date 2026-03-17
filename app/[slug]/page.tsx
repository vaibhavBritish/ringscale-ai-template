import { notFound } from "next/navigation";
import HeroSection, { HeroSectionProps } from "../components/Herosection";
import HerosectionFeatures from "../components/HerosectionFeatures";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Counter from "../components/Counter";
import { getBusinessBySlug } from "../../lib/business";
import type { BusinessSiteData } from "../../types/business";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BusinessPage({ params }: PageProps) {
  const { slug } = await params;
  const business = await getBusinessBySlug(slug);

  if (!business) {
    notFound();
  }

  const data = business.data as unknown as BusinessSiteData;

  return (
    <>
      <HeroSection {...(data.herosection as HeroSectionProps)} />
      <HerosectionFeatures {...data.hersosectionFeaturesData} />
      <Gallery {...data.gallery} />
      <Testimonials {...data.testimonialsData} />
      <Counter {...data.counterData} />
    </>
  );
}