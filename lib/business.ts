import { prisma } from "./prisma";

export async function getBusinessBySlug(slug: string) {
  return prisma.business.findFirst({
    where: {
      slug,
      isActive: true,
    },
  });
}

export async function getBusinessBySubdomain(subdomain: string) {
  return prisma.business.findFirst({
    where: {
      subdomain,
      isActive: true,
    },
  });
}