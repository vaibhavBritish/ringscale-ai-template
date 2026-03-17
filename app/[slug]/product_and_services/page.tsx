import { notFound } from "next/navigation";
import Product_and_services from "../../components/product_and_services/Product";
import Product_and_servicesFeatures from "../../components/product_and_services/ProductServicesFeatures";
import { getBusinessBySlug } from "../../../lib/business";
import type { BusinessSiteData } from "../../../types/business";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductAndServicesPage({ params }: PageProps) {
  const { slug } = await params;
  const business = await getBusinessBySlug(slug);

  if (!business) {
    notFound();
  }

  const data = business.data as unknown as BusinessSiteData;

  return (
    <>
      <Product_and_services {...data.productandservices} />
      <Product_and_servicesFeatures {...data.productServicesFeature} />
    </>
  );
}