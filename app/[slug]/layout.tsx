import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getBusinessBySlug } from "../../lib/business";
import type { BusinessSiteData } from "../../types/business";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const business = await getBusinessBySlug(slug);

  if (!business) {
    return {
      title: "Business Not Found",
      description: "The requested business page could not be found.",
    };
  }

  const data = business.data as unknown as BusinessSiteData;

  return {
    title: data.herosection?.title || business.name,
    description:
      data.herosection?.description ||
      data.aboutUsData?.description ||
      `${business.name} website`,
  };
}

export default async function SlugLayout({ children, params }: LayoutProps) {
  const { slug } = await params;
  const business = await getBusinessBySlug(slug);

  if (!business) {
    notFound();
  }

  const data = business.data as unknown as BusinessSiteData;

  return (
    <>
      <Navbar slug={slug} {...data.navbarData} />
      <main>{children}</main>
      {/* <Footer slug={slug} {...data.footerData} /> */}
      <Footer/>
    </>
  );
}