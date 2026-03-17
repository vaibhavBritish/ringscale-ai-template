import React from "react";
import { MapPin, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import { getBusinessBySlug } from "../../../lib/business";
import type { BusinessSiteData } from "../../../types/business";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ContactCard = {
  type: string;
  title: string;
  description: string;
  phone?: string;
};

type ContactProps = {
  title: string;
  cards: ContactCard[];
  mapEmbedUrl: string;
};

const iconMap = {
  address: <MapPin className="text-blue-600" />,
  phone: <Phone className="text-blue-600" />,
};

export default async function ContactPage({ params }: PageProps) {
  const { slug } = await params;
  const business = await getBusinessBySlug(slug);

  if (!business) {
    notFound();
  }

  const data = business.data as unknown as BusinessSiteData;

  return <ContactUs {...data.contactData} />;
}

const ContactUs = ({ title, cards, mapEmbedUrl }: ContactProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14 text-black">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border rounded-xl p-8 bg-white shadow-sm"
            >
              <div className="mb-4">
                {card.type in iconMap
                  ? iconMap[card.type as keyof typeof iconMap]
                  : <MapPin className="text-blue-600" />}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-black">
                {card.title}
              </h3>

              <p className="text-gray-600 mb-2">{card.description}</p>

              {card.phone && (
                <a
                  href={`tel:${card.phone}`}
                  className="text-blue-600 underline"
                >
                  {card.phone}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="w-full h-112.5 rounded-xl overflow-hidden border">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};