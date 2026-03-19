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