export const siteConfig = {
  name: "EssResinArt",
  legalName: "EssResinArt",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://essresinart.co.uk",
  locale: "en_GB",
  description:
    "EssResinArt installs resin driveways, epoxy resin flooring, and microcement finishes for homes and commercial spaces across Bristol.",
  title:
    "Resin Driveways, Microcement & Epoxy Flooring in Bristol | EssResinArt",
  ogImage: "/images/epoxy-warehouse-floor-paint-Bristol.jpg",
  serviceArea: "Bristol and the surrounding area",
  email: "essresinart@gmail.com",
  phone: "+44 7516 825235",
  whatsapp: "447516825235",
  addressLine: "19 Sidford Rd, Bristol BS3 5DN, United Kingdom",
  openingHours: "Mon-Fri 09:00-17:30",
} as const;

export const navigationLinks = [
  { href: "/", label: "Home", matchPath: "/" },
  { href: "/services", label: "Services", matchPath: "/services" },
  { href: "/our-work", label: "Our Work", matchPath: "/our-work" },
  { href: "/#about", label: "About Us" },
  { href: "/contact", label: "Contact", matchPath: "/contact" },
] as const;

export const socialLinks = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${siteConfig.whatsapp}`,
    handle: "Chat on WhatsApp",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/essresinart",
    handle: "@essresinart",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/essresinart",
    handle: "EssResinArt",
  },
] as const;

export const contactDetails = [
  {
    title: "Phone",
    value: siteConfig.phone,
    description: "Call for project advice and site visit planning.",
    href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
  },
  {
    title: "Email",
    value: siteConfig.email,
    description: "Send drawings, photos, or your project brief.",
    href: `mailto:${siteConfig.email}`,
  },
  {
    title: "Service Area",
    value: siteConfig.addressLine,
    description: "Residential and commercial installations across Bristol and nearby areas.",
    href: "https://www.openstreetmap.org/?mlat=51.4545&mlon=-2.5879#map=12/51.4545/-2.5879",
  },
  {
    title: "Opening Hours",
    value: siteConfig.openingHours,
    description: "Consultations by appointment.",
    href: `mailto:${siteConfig.email}`,
  },
] as const;

export const contactSteps = [
  {
    title: "Review",
    description:
      "We review your photos, dimensions, and surface requirements.",
  },
  {
    title: "Contact",
    description:
      "We get back to discuss the technical feasibility and finish options.",
  },
  {
    title: "Consultation",
    description:
      "A site visit is arranged where needed to confirm measurements and substrate condition.",
  },
  {
    title: "Quote",
    description:
      "You receive a clear proposal with scope, finish system, and estimated timing.",
  },
] as const;

export const serviceCards = [
  {
    title: "Epoxy Resin Flooring",
    description:
      "Hard-wearing seamless flooring for garages, workshops, studios, and commercial interiors.",
    image: "/images/epoxy-resin-floor-Bristol.jpg",
    alt: "Epoxy Resin Flooring installed in a bathroom in Bristol",
    href: "/services/epoxy-resin-flooring",
  },
  {
    title: "Resin Bound Driveways",
    description:
      "UV-stable, permeable resin bound surfaces designed for kerb appeal and everyday durability.",
    image: "/images/Resin-Bound-Driveway-Bristol.jpg",
    alt: "Resin bound driveway installed in a residential home in Bristol",
    href: "/services/resin-bound-bristol",
  },
  {
    title: "Venetian Plaster",
    description:
      "Hand-applied decorative plaster finishes for feature walls, refined interiors.",
    image: "/images/stiuk-wall-Bristol.JPG",
    alt: "Venetian plaster wall finish with polished decorative texture",
    href: "/services/venetian-plaster",
  },
] as const;

export const benefits = [
  {
    title: "Seamless Finish",
    description:
      "Smooth, joint-free surfaces help rooms feel larger and make cleaning quick and straightforward.",
  },
  {
    title: "Built to Last",
    description:
      "Our resin and microcement systems are selected for impact resistance, wear, and daily performance.",
  },
  {
    title: "Low Maintenance",
    description:
      "Durable sealed finishes resist staining and are easy to keep looking sharp with minimal upkeep.",
  },
  {
    title: "Design Flexibility",
    description:
      "From warm stone-inspired tones to sleek industrial finishes, we tailor each system to the space.",
  },
] as const;

export const processSteps = [
  {
    title: "Consultation",
    description:
      "We assess the space, discuss finishes, and recommend the right system for usage, style, and budget.",
  },
  {
    title: "Surface Prep",
    description:
      "Every project starts with proper substrate preparation to give the finish strength, adhesion, and longevity.",
  },
  {
    title: "Installation",
    description:
      "We install each layer carefully, keeping lines clean and delivering a finish that feels premium in person.",
  },
  {
    title: "Aftercare",
    description:
      "You receive practical maintenance guidance so your new surface stays looking its best for years.",
  },
] as const;

export const projectHighlights = [
  {
    title: "Epoxy Flake Resin System in Bristol",
    image: "/images/epoxy-quartz-garage-floor.jpg",
    alt: "Epoxy flake resin garage floor installation in Bristol",
  },
  {
    title: "Epoxy Kitchen Floor",
    image: "/images/epoxy-flooring-kitchen-floor.jpg",
    alt: "Epoxy kitchen floor installation with a seamless contemporary finish",
  },
  {
    title: "Outdoor resin patios and paths",
    image: "/images/resin-patio-pathway-Bristol.jpeg",
    alt: "Resin patio pathway installed in a residential outdoor setting",
  },
] as const;

export const detailedServices = [
  {
    title: "Epoxy Resin Flooring",
    category: "Interior / Exterior",
    image: "/images/epoxy-resin-floor-Bristol.jpg",
    alt: "Smooth epoxy resin floor finish installed in Bristol",
    description:
      "Seamless, durable, and distinctly modern. Our epoxy resin flooring provides an ultra-hard-wearing surface for garages, studios, commercial units, and design-led interiors.",
    bullets: [
      "High resistance to impact and chemicals",
      "Seamless finish for effortless maintenance",
    ],
    idealFor: "Garages, modern homes, showrooms",
    href: "/services/epoxy-resin-flooring",
  },
  {
    title: "Resin Bound Driveways",
    category: "Exterior",
    image: "/images/Resin-Bound-Driveway-Bristol.jpg",
    alt: "Resin bound driveway and entrance surface outside a property",
    description:
      "Permeable, attractive, and built for kerb appeal. We install resin bound systems that improve approachways, patios, and paths with a clean, high-end finish.",
    bullets: [
      "Fully permeable surfacing aligned with SUDS principles",
      "Weed and frost resistant finish",
    ],
    idealFor: "Driveways, paths, patios",
    href: "/services/resin-bound-bristol",
  },
  {
    title: "Venetian Plaster",
    category: "Interior",
    image: "/images/stiuk-wall-Bristol.JPG",
    alt: "Venetian plaster wall finish with polished decorative texture",
    description:
      "Elegant hand-applied plaster finishes that bring depth, softness, and a premium decorative character to interior walls and feature spaces.",
    bullets: [
      "Polished artisan finish with rich visual movement",
      "Tailored texture and tone to suit the space",
    ],
    idealFor: "Feature walls, reception spaces, luxury interiors",
    href: "/services/venetian-plaster",
  },
  {
    title: "Microcement",
    category: "Interior",
    image: "/images/microcement-bathroom-Bristol.jpg",
    alt: "Refined microcement finish in a modern Bristol bathroom",
    description:
      "A highly versatile, continuous decorative coating. Microcement creates an elegant, industrial-luxe aesthetic without the joints or heavy build-up of traditional tiling and concrete.",
    bullets: [
      "Waterproof and suitable for wet rooms",
      "Can be applied over existing surfaces",
    ],
    idealFor: "Bathrooms, kitchens, floors, walls",
  },
  {
    title: "Industrial Resin Flooring",
    category: "Industrial",
    image: "/images/epoxy-resin-floor-Bristol.jpg",
    alt: "Industrial resin flooring designed for heavy-duty environments",
    description:
      "Heavy-duty resin systems designed for warehouses, back-of-house spaces, and demanding operational environments where performance comes first.",
    bullets: [
      "Built for high-traffic and working environments",
      "Easy-clean finish with strong long-term durability",
    ],
    idealFor: "Studios, units, workshops, industrial spaces",
  },
  {
    title: "Decorative Wall Finishes",
    category: "Interior",
    image: "/images/concrete-stiuk-wall-Bristol.jpeg",
    alt: "Decorative textured concrete-style wall finish in Bristol",
    description:
      "Feature wall finishes with tactile depth and a bespoke look. We create decorative plaster-style surfaces for statement interiors, hospitality spaces, and reception areas.",
    bullets: [
      "Rich texture with a premium handcrafted character",
      "Durable sealed finish for long-term visual impact",
    ],
    idealFor: "Feature walls, reception areas, boutiques",
  },
] as const;

export const epoxyBenefits = [
  {
    title: "Seamless Finish",
    description:
      "A clean monolithic floor surface that is easy to maintain and visually sharp in contemporary spaces.",
  },
  {
    title: "Heavy-Duty Durability",
    description:
      "Resists abrasion, impact, and daily wear in garages, workshops, and commercial environments.",
  },
  {
    title: "Effortless Maintenance",
    description:
      "Non-porous sealed systems make routine cleaning simple and help spaces stay presentable for longer.",
  },
  {
    title: "Modern Aesthetic",
    description:
      "Available in clean neutrals and tailored finishes to suit industrial, domestic, and retail interiors.",
  },
] as const;

export const epoxyPreparationBenefits = [
  {
    title: "Substrate Assessment",
    description:
      "We meticulously evaluate the concrete for dust, weakness, contamination, dampness, or old coatings that could compromise the installation.",
  },
  {
    title: "Strong Bond",
    description:
      "Proper mechanical preparation ensures the new resin system bonds correctly, preventing peeling, bubbling, cracking, and delamination.",
  },
  {
    title: "Long-term Performance",
    description:
      "Correct preparation significantly improves adhesion, structural durability, and overall safety, guaranteeing a flawless finish for years to come.",
  },
] as const;

export const epoxySolutionsMatrix = [
  {
    issue: "Dusty or worn concrete",
    solution: "Dust-proof epoxy floor coating",
    idealFor: "Garages, workshops, storage areas",
  },
  {
    issue: "Heavy warehouse traffic",
    solution: "High-build warehouse resin flooring",
    idealFor: "Warehouses, factories, logistics units",
  },
  {
    issue: "Wet or hygienic areas",
    solution: "Polyurethane commercial kitchen flooring",
    idealFor: "Kitchens, breweries, food production",
  },
  {
    issue: "Slippery floors",
    solution: "Anti-slip resin flooring",
    idealFor: "Ramps, walkways, production areas",
  },
  {
    issue: "Limited downtime",
    solution: "MMA fast-cure resin flooring",
    idealFor: "Retail, commercial, operational sites",
  },
  {
    issue: "Better appearance needed",
    solution: "Decorative resin flooring",
    idealFor: "Garages, showrooms, retail spaces",
  },
  {
    issue: "Damaged concrete",
    solution: "Concrete repair and resin coating",
    idealFor: "Old, cracked or uneven floors",
  },
] as const;

export const epoxyEnvironments = [
  {
    title: "Commercial Resin Flooring",
    image: "/images/commercial-resin-flooring.jpg",
    alt: "Commercial resin flooring installed in a working interior in Bristol",
    description:
      "Upgrade commercial unit with heavy-duty epoxy flooring. Our floors are engineered to withstand traffic, chemicals, and daily use while maintaining a flawless appearance.",
  },
  {
    title: "Residential Resin Flooring",
    image: "/images/residential-resin-floor-Bristol.jpg",
    alt: "Residential resin flooring with a seamless modern finish in Bristol",
    description:
      "Add a touch of luxury to your home with our seamless resin floors. Perfectly smooth and waterproof, they provide a stunning modern look that is easy to maintain and resistant.",
  },
  {
    title: "Industrial Resin Flooring",
    image: "/images/industrial-resin-flooring-bristol.jpg",
    alt: "Industrial resin flooring designed for heavy-duty use in Bristol",
    description:
      "Strength, safety, and durability. Our industrial epoxy floors are built to handle the toughest conditions and are ideal for warehouses, workshops, and production areas.",
  },
] as const;

export const epoxyRecentJobs = [
  {
    title: "Bespoke Residential Garage Floor",
    image: "/images/resin-floor-garage.jpg",
    alt: "Residential garage fitted with a bespoke epoxy resin floor",
    description:
      "A premium garage floor system designed to deliver durability, chemical resistance, and a high-end finish.",
    location: "Bristol",
  },
  {
    title: "Commercial Unit Floor Upgrade",
    image: "/images/commercial-resin-flooring.jpg",
    alt: "Commercial unit upgraded with seamless resin flooring",
    description:
      "A seamless commercial flooring installation tailored for a brighter, cleaner, and easier-to-maintain workspace.",
    location: "Bath",
  },
  {
    title: "Modern Kitchen Floor Finish",
    image: "/images/moder-resin-floor-kitchen.jpeg",
    alt: "Modern kitchen interior with a sleek resin floor finish",
    description:
      "A modern, resilient floor finish chosen for its minimalist aesthetic and practical everyday upkeep.",
    location: "Bristol",
  },
] as const;

export const epoxyFaqs = [
  {
    question:
      "Is resin flooring suitable for homes (kitchens, living rooms, bathrooms)?",
    answer:
      "Yes. Resin flooring is popular in kitchens and open-plan areas because it is seamless, hygienic, and waterproof. For bathrooms, the key is using the right system and finish for the environment.",
  },
  {
    question: "What areas do you cover for resin floors?",
    answer:
      "We are based near Bristol and typically cover Bristol and surrounding areas, including BS postcodes, as well as Bath and BA postcodes. We also regularly take on projects in nearby towns such as Keynsham, Portishead, Weston-super-Mare, Clevedon, Nailsea, Yate, and Chippenham. If you are unsure, send your postcode and we will confirm availability.",
  },
  {
    question:
      "Do you need to remove the existing flooring before installing a resin floor?",
    answer:
      "Not always. Existing flooring may be left in place if the substrate is stable and suitable, such as sound concrete. If it is loose, contaminated, or unstable, for example old paint, weak screed, or hollow tiles, removal and proper surface preparation are the safer option.",
  },
] as const;

export const workCategories = [
  { label: "All", href: "/our-work" },
  { label: "Epoxy Flooring", href: "/our-work#epoxy-flooring" },
  { label: "Resin Bound Driveways", href: "/our-work#resin-bound-driveways" },
  { label: "Microcement", href: "/our-work#microcement" },
  { label: "Decorative Finishes", href: "/our-work#decorative-finishes" },
] as const;

export const workProjects = [
  {
    id: "bathroom-renovation",
    title: "Bathroom Renovation",
    category: "Microcement",
    categoryId: "microcement",
    href: "/services",
    location: "Bristol",
    image: "/images/microcement-bathroom.jpg",
    alt: "Microcement bathroom renovation with seamless walls and vanity",
    description:
      "A seamless microcement installation bringing a highly durable, waterproof finish to a refined residential bathroom.",
  },
  {
    id: "garage-floor",
    title: "Epoxy Flake Resin System in Bristol",
    category: "Epoxy Flooring",
    categoryId: "epoxy-flooring",
    href: "/services/epoxy-resin-flooring",
    location: "Bristol",
    image: "/images/epoxy-quartz-garage-floor.jpg",
    alt: "Epoxy flake resin garage floor installation in Bristol",
    description:
      "Our epoxy flake resin system is a practical and decorative flooring solution for garages, workshops, utility rooms, commercial units and high-traffic interiors across Bristol.",
  },
  {
    id: "driveway-installation",
    title: "Driveway Installation",
    category: "Resin Bound Driveways",
    categoryId: "resin-bound-driveways",
    href: "/services/resin-bound-bristol",
    location: "Manchester",
    image: "/images/resin-patio-pathway-Bristol.jpeg",
    alt: "Resin bound driveway installed in front of a modern home",
    description:
      "A fully permeable resin bound driveway designed to improve kerb appeal while standing up to daily use.",
  },
  {
    id: "feature-wall",
    title: "Venetian Plaster Bristol",
    category: "Decorative Finishes",
    categoryId: "decorative-finishes",
    href: "/services/venetian-plaster",
    location: "Birmingham",
    image: "/images/micrometal-wall-plaster.jpg",
    alt: "Decorative textured wall finish with rich metallic depth",
    description:
      "Our Venetian plaster service is ideal for creating elegant, decorative wall finishes in homes, apartments, restaurants, salons, offices and feature interiors across Bristol.",
  },
  {
    id: "commercial-resin-floor",
    title: "Commercial Resin Floor",
    category: "Epoxy Flooring",
    categoryId: "epoxy-flooring",
    href: "/services/epoxy-resin-flooring",
    location: "Leeds",
    image: "/images/epoxy-warehouse-floor-paint-Bristol.jpg",
    alt: "Large commercial epoxy resin floor in a bright industrial unit",
    description:
      "A heavy-duty seamless resin floor specified for a high-traffic commercial environment with low-maintenance upkeep.",
  },
  {
    id: "kitchen-floor",
    title: "Kitchen Floor",
    category: "Microcement",
    categoryId: "microcement",
    href: "/services",
    location: "Bristol",
    image: "/images/microcement-stairs.jpg",
    alt: "Contemporary microcement floor finish in a modern interior",
    description:
      "A continuous microcement surface delivering an understated, architectural finish tailored to the wider interior palette.",
  },
] as const;
