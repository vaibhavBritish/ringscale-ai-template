import { notFound } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { siteData } from "../../data";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
};

export default async function SlugLayout({ children, params }: LayoutProps) {
  const { slug } = await params;
  const data = siteData[slug as keyof typeof siteData];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Navbar slug={slug} {...data.navbarData} />
      <main>{children}</main>
      <Footer  />
    </>
  );
}