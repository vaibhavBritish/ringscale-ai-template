import { NextResponse } from "next/server";
import { getBusinessBySlug } from "../../../../lib/business";

type RouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_: Request, { params }: RouteProps) {
  const { slug } = await params;

  const business = await getBusinessBySlug(slug);

  if (!business) {
    return NextResponse.json(
      { success: false, message: "Business not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    id: business.id,
    name: business.name,
    slug: business.slug,
    subdomain: business.subdomain,
    data: business.data,
  });
}