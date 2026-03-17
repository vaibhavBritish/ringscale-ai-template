import { notFound } from "next/navigation"
import Product_and_services from "../../components/product_and_services/Product"
import Product_and_servicesFeatures from "../../components/product_and_services/ProductServicesFeatures"
import { siteData } from "../../../data"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProductAndServicesPage({ params }: PageProps) {
  const { slug } = await params
  const data = siteData[slug as keyof typeof siteData]

  if (!data) {
    notFound()
  }

  return (
    <>
      <Product_and_services {...data.productandservices} />
      <Product_and_servicesFeatures {...data.productServicesFeature} />
    </>
  )
}