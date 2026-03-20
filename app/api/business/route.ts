import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function normalize(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let { name, slug, subdomain, data } = body;

    if (!name || !slug || !subdomain || !data) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    slug = normalize(slug);
    subdomain = normalize(subdomain);

    if (slug !== subdomain) {
      return NextResponse.json(
        {
          success: false,
          message: "For now, keep slug and subdomain the same value",
        },
        { status: 400 }
      );
    }

    const existing = await prisma.business.findFirst({
      where: {
        OR: [{ slug }, { subdomain }],
      },
    });

    if (existing) {
      return NextResponse.json(
        { success: false, message: "Slug or subdomain already exists" },
        { status: 400 }
      );
    }

    const business = await prisma.business.create({
      data: {
        name,
        slug,
        subdomain,
        data,
      },
    });

    return NextResponse.json({
      success: true,
      business,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const businesses = await prisma.business.findMany();
    return NextResponse.json({ success: true, businesses });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}


export async function PUT(req: Request) {
  try {
    const body = await req.json();

    let { slug, subdomain, data, name } = body;

    if (!slug && !subdomain) {
      return NextResponse.json(
        { success: false, message: "slug or subdomain is required" },
        { status: 400 }
      );
    }

    if (slug) slug = normalize(slug);
    if (subdomain) subdomain = normalize(subdomain);

    const existing = await prisma.business.findFirst({
      where: {
        OR: [
          slug ? { slug } : undefined,
          subdomain ? { subdomain } : undefined,
        ].filter(Boolean) as any,
      },
    });

    if (!existing) {
      return NextResponse.json(
        { success: false, message: "Business not found" },
        { status: 404 }
      );
    }

    const updated = await prisma.business.update({
      where: { id: existing.id },
      data: {
        name: name ?? existing.name,
        data: data ?? existing.data,
      },
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