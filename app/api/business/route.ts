import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, slug, subdomain, data } = body;

    if (!name || !slug || !subdomain || !data) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
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