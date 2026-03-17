import React, { JSX } from "react";
import data from "../../data/british-english.json"
import { Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

type SocialIcon = "instagram" | "facebook" | "twitter";

const Footer = () => {
  const { about, quickLinks, contact, social, mapEmbed } = data.footerData;

  const icons: Record<SocialIcon, JSX.Element> = {
    instagram: <Instagram size={18} />,
    facebook: <Facebook size={18} />,
    twitter: <Twitter size={18} />,
  };

  return (
    <div
      className="py-20 text-white"
      style={{
        backgroundImage: "url('/bg-image-2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="max-w-6xl mx-auto bg-[#1e53b0] rounded-2xl mb-16">
        <div className="py-10 px-10">
          <h1 className="font-bold text-3xl">Get in Touch</h1>
          <p className="py-4">
            Contact us today for more information about our services
          </p>
          <Link href={"/contact"}><button className="bg-white cursor-pointer text-black px-4 py-2 rounded-xl font-bold text-md">
            Contact Us
          </button></Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <img src={about.logo} className="w-16 mb-4" />
          <p className="text-gray-300">{about.description}</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Quick links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a href={link.url} className="hover:text-blue-400">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Contact us</h3>
          <p className="text-gray-300">{contact.name}</p>
          <p className="text-gray-300 mt-2">{contact.address}</p>
          <p className="text-gray-300 mt-2">{contact.phone}</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Follow on</h3>

          <div className="flex gap-4 mb-4">
            {social.map((s, i) => (
              <a
                key={i}
                href={s.url}
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-500"
              >
                {icons[s.icon as SocialIcon]}
              </a>
            ))}
          </div>

          <iframe
            src={mapEmbed}
            className="w-full h-40 rounded-lg"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Footer;