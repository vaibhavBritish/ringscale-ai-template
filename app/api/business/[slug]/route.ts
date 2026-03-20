import { NextResponse } from "next/server";
import { getBusinessBySlug, updateBusinessBySlug } from "../../../../lib/business";

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

export async function PUT(req: Request, { params }: RouteProps) {
  try {
    const { slug } = await params;
    const body = await req.json();
    const { name, data } = body;

    const existing = await getBusinessBySlug(slug);

    if (!existing) {
      return NextResponse.json(
        { success: false, message: "Business not found" },
        { status: 404 }
      );
    }

    const updated = await updateBusinessBySlug(slug, {
      name: name ?? existing.name,
      data: data ?? existing.data,
    });

    return NextResponse.json({
      success: true,
      business: updated,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}