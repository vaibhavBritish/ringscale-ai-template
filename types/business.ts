export type BusinessSiteData = {
  navbarData: {
    logo: string;
    navLinks: { name: string; href: string }[];
    ctaText: string;
  };
  aboutUsData: {
    badge: string;
    title: string;
    description: string;
  };
  contactData: {
    title: string;
    cards: {
      type: string;
      title: string;
      description: string;
      phone?: string;
    }[];
    mapEmbedUrl: string;
  };
  counterData: {
    badge: string;
    title: string;
    counters: {
      value: string;
      label: string;
      icon?: string;
    }[];
  };
  footerData: {
    about: {
      logo: string;
      description: string;
    };
    quickLinks: {
      title: string;
      url: string;
    }[];
    contact: {
      name: string;
      address: string;
      phone: string;
    };
    social: {
      icon: string;
      url: string;
    }[];
    mapEmbed: string;
  };
  gallery: {
    title: string;
    images: {
      id: number;
      src: string;
      alt: string;
    }[];
  };
  herosection: {
    title: string;
    description: string;
    backgroundImage: string;
    overlayClass: string;
    buttons: {
      label: string;
      variant: "primary" | "secondary";
    }[];
  };
  hersosectionFeaturesData: {
    title: string;
    features: {
      id: string;
      name: string;
    }[];
  };
  productServicesFeature: {
    title: string;
    services: {
      id: string;
      name: string;
    }[];
  };
  productandservices: {
    title: string;
    description: string;
    buttonText: string;
  };
  testimonialsData: {
    title: string;
    ratingText: string;
    rating: string;
    reviews: {
      name: string;
      time: string;
      review: string;
      rating: number;
    }[];
  };
};