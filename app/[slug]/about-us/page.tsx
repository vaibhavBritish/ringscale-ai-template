import { notFound } from "next/navigation";
import AboutUs from "../../components/about-us/aboutus";
import Gallery from "../../components/Gallery";
import Counter from "../../components/Counter";
import { getBusinessBySlug } from "../../../lib/business";
import type { BusinessSiteData } from "../../../types/business";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function AboutPage({ params }: PageProps) {
  const { slug } = await params;
  const business = await getBusinessBySlug(slug);

  if (!business) {
    notFound();
  }

  const data = business.data as unknown as BusinessSiteData;

  return (
    <>
      <AboutUs {...data.aboutUsData} />
      <Gallery {...data.gallery} />
      <Counter {...data.counterData} />
    </>
  );
}