export type Tour = {
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: string;
  location: string;
  duration: string;
  category: string;
  highlights: string[];
};

export const tourCategories = [
  "All",
  "Family",
  "Pilgrimage",
  "Heritage",
  "Hill Station",
  "Beach",
  "Wildlife",
  "City",
  "Group",
];

export const tours: Tour[] = [
  {
    name: "Kerala Family Tour",
    slug: "kerala-family-tour",
    shortDescription:
      "A relaxed family journey through Kerala's beautiful landscapes and destinations.",
    description:
      "Explore Kerala with a thoughtfully arranged family journey covering beautiful destinations, sightseeing and comfortable travel.",
    image: "/images/tours/kerala.jpg",
    location: "Kerala",
    duration: "5 Days / 4 Nights",
    category: "Family",
    highlights: [
      "Family-friendly travel",
      "Sightseeing arrangements",
      "Comfortable accommodation",
      "Vehicle arrangements",
      "Flexible planning",
    ],
  },

  {
    name: "Munnar & Thekkady Tour",
    slug: "munnar-thekkady-tour",
    shortDescription:
      "Enjoy the misty hills of Munnar and the natural beauty of Thekkady.",
    description:
      "Experience Kerala's famous hill destinations with tea plantations, scenic landscapes and wildlife experiences.",
    image: "/images/tours/munnar.jpg",
    location: "Munnar & Thekkady",
    duration: "4 Days / 3 Nights",
    category: "Hill Station",
    highlights: [
      "Munnar sightseeing",
      "Tea plantations",
      "Thekkady visit",
      "Family travel",
      "Accommodation support",
    ],
  },

  {
    name: "Alleppey Houseboat Tour",
    slug: "alleppey-houseboat-tour",
    shortDescription:
      "Experience Kerala's backwaters with a memorable Alleppey houseboat journey.",
    description:
      "Relax through the beautiful backwaters of Alleppey with houseboat arrangements and comfortable travel support.",
    image: "/images/tours/alleppey.jpg",
    location: "Alleppey",
    duration: "2 Days / 1 Night",
    category: "Family",
    highlights: [
      "Backwater experience",
      "Houseboat arrangements",
      "Scenic travel",
      "Family-friendly journey",
      "Stay arrangements",
    ],
  },

  {
    name: "Kanyakumari Tour",
    slug: "kanyakumari-tour",
    shortDescription:
      "Experience the beauty, culture and spiritual attractions of Kanyakumari.",
    description:
      "Visit Kanyakumari and surrounding attractions with comfortable transportation and organised travel support.",
    image: "/images/tours/kanyakumari.jpg",
    location: "Kanyakumari",
    duration: "3 Days / 2 Nights",
    category: "Beach",
    highlights: [
      "Kanyakumari sightseeing",
      "Temple visits",
      "Sunrise experience",
      "Accommodation support",
      "Local transportation",
    ],
  },

  {
    name: "Madurai Temple Tour",
    slug: "madurai-temple-tour",
    shortDescription:
      "Discover Madurai and its famous spiritual and cultural attractions.",
    description:
      "Explore Madurai with visits to important temples, cultural attractions and historic places.",
    image: "/images/tours/madurai.jpg",
    location: "Madurai",
    duration: "2 Days / 1 Night",
    category: "Pilgrimage",
    highlights: [
      "Meenakshi Temple",
      "Temple sightseeing",
      "Cultural attractions",
      "Local transportation",
      "Accommodation",
    ],
  },

  {
    name: "Rameswaram Pilgrimage Tour",
    slug: "rameswaram-pilgrimage-tour",
    shortDescription:
      "A spiritual journey to Rameswaram and its important religious destinations.",
    description:
      "Travel to Rameswaram with organised pilgrimage arrangements covering important temples and spiritual attractions.",
    image: "/images/tours/rameswaram.jpg",
    location: "Rameswaram",
    duration: "2 Days / 1 Night",
    category: "Pilgrimage",
    highlights: [
      "Ramanathaswamy Temple",
      "Pilgrimage travel",
      "Temple visits",
      "Group arrangements",
      "Accommodation support",
    ],
  },

  {
    name: "Madurai Rameswaram Tour",
    slug: "madurai-rameswaram-tour",
    shortDescription:
      "Combine two important Tamil Nadu destinations in one spiritual journey.",
    description:
      "Explore Madurai and Rameswaram with organised transportation, sightseeing and accommodation arrangements.",
    image: "/images/tours/madurai-rameswaram.jpg",
    location: "Madurai & Rameswaram",
    duration: "3 Days / 2 Nights",
    category: "Pilgrimage",
    highlights: [
      "Madurai Temple",
      "Rameswaram Temple",
      "Pilgrimage travel",
      "Vehicle arrangements",
      "Stay coordination",
    ],
  },

  {
    name: "Thanjavur Heritage Tour",
    slug: "thanjavur-heritage-tour",
    shortDescription:
      "Explore the historic architecture and cultural heritage of Thanjavur.",
    description:
      "Discover Thanjavur's heritage, architecture and important cultural attractions through an organised journey.",
    image: "/images/tours/thanjavur.jpg",
    location: "Thanjavur",
    duration: "2 Days / 1 Night",
    category: "Heritage",
    highlights: [
      "Brihadeeswarar Temple",
      "Heritage sightseeing",
      "Cultural attractions",
      "Local travel",
      "Accommodation",
    ],
  },

  {
    name: "Trichy Temple Tour",
    slug: "trichy-temple-tour",
    shortDescription:
      "Explore the temples and historic attractions of Tiruchirappalli.",
    description:
      "Visit important temples and heritage attractions around Trichy with comfortable travel arrangements.",
    image: "/images/tours/trichy.jpg",
    location: "Trichy",
    duration: "2 Days / 1 Night",
    category: "Pilgrimage",
    highlights: [
      "Srirangam Temple",
      "Rockfort Temple",
      "Temple visits",
      "Sightseeing",
      "Travel support",
    ],
  },

  {
    name: "Chennai City Tour",
    slug: "chennai-city-tour",
    shortDescription:
      "Discover Chennai's popular attractions with convenient city travel.",
    description:
      "Explore Chennai through a comfortable city tour covering popular attractions and places of interest.",
    image: "/images/tours/chennai.jpg",
    location: "Chennai",
    duration: "2 Days / 1 Night",
    category: "City",
    highlights: [
      "City sightseeing",
      "Marina Beach",
      "Temple visits",
      "Local transportation",
      "Flexible arrangements",
    ],
  },

  {
    name: "Mahabalipuram Heritage Tour",
    slug: "mahabalipuram-heritage-tour",
    shortDescription:
      "Explore the ancient monuments and coastal heritage of Mahabalipuram.",
    description:
      "Discover the famous stone temples, monuments and coastal attractions of Mahabalipuram.",
    image: "/images/tours/mahabalipuram.jpg",
    location: "Mahabalipuram",
    duration: "2 Days / 1 Night",
    category: "Heritage",
    highlights: [
      "Shore Temple",
      "Heritage monuments",
      "Coastal sightseeing",
      "Cultural travel",
      "Local transportation",
    ],
  },

  {
    name: "Ooty Family Tour",
    slug: "ooty-family-tour",
    shortDescription:
      "Enjoy the cool climate and scenic beauty of the Nilgiri hills.",
    description:
      "Explore Ooty with a comfortable family journey through scenic viewpoints, gardens and hill destinations.",
    image: "/images/tours/ooty.jpg",
    location: "Ooty",
    duration: "3 Days / 2 Nights",
    category: "Hill Station",
    highlights: [
      "Ooty sightseeing",
      "Nilgiri landscapes",
      "Family travel",
      "Scenic viewpoints",
      "Accommodation",
    ],
  },

  {
    name: "Kodaikanal Tour",
    slug: "kodaikanal-tour",
    shortDescription:
      "Discover the peaceful hills, lakes and scenic beauty of Kodaikanal.",
    description:
      "Enjoy a relaxing journey through Kodaikanal's beautiful landscapes, viewpoints and popular attractions.",
    image: "/images/tours/kodaikanal.jpg",
    location: "Kodaikanal",
    duration: "3 Days / 2 Nights",
    category: "Hill Station",
    highlights: [
      "Kodaikanal Lake",
      "Scenic viewpoints",
      "Family travel",
      "Hill sightseeing",
      "Stay arrangements",
    ],
  },

  {
    name: "Coorg Nature Tour",
    slug: "coorg-nature-tour",
    shortDescription:
      "Experience the green landscapes and peaceful surroundings of Coorg.",
    description:
      "Explore Coorg's natural beauty, plantations and scenic attractions with organised travel support.",
    image: "/images/tours/coorg.jpg",
    location: "Coorg",
    duration: "3 Days / 2 Nights",
    category: "Wildlife",
    highlights: [
      "Nature sightseeing",
      "Coffee plantations",
      "Scenic destinations",
      "Family travel",
      "Accommodation",
    ],
  },

  {
    name: "Mysore Heritage Tour",
    slug: "mysore-heritage-tour",
    shortDescription:
      "Discover Mysore's royal heritage, architecture and cultural attractions.",
    description:
      "Explore Mysore through its famous palace, heritage sites and cultural destinations.",
    image: "/images/tours/mysore.jpg",
    location: "Mysore",
    duration: "2 Days / 1 Night",
    category: "Heritage",
    highlights: [
      "Mysore Palace",
      "Heritage sightseeing",
      "Cultural attractions",
      "Family travel",
      "Local transportation",
    ],
  },

  {
    name: "Bangalore City Tour",
    slug: "bangalore-city-tour",
    shortDescription:
      "Explore Bangalore's popular attractions, parks and city highlights.",
    description:
      "Enjoy a convenient city tour covering Bangalore's popular attractions and places of interest.",
    image: "/images/tours/bangalore.jpg",
    location: "Bangalore",
    duration: "2 Days / 1 Night",
    category: "City",
    highlights: [
      "City sightseeing",
      "Popular attractions",
      "Local transportation",
      "Family travel",
      "Flexible planning",
    ],
  },

  {
    name: "Wayanad Nature Tour",
    slug: "wayanad-nature-tour",
    shortDescription:
      "Discover Wayanad's forests, hills, waterfalls and natural beauty.",
    description:
      "Experience the peaceful landscapes of Wayanad with nature sightseeing and comfortable travel arrangements.",
    image: "/images/tours/wayanad.jpg",
    location: "Wayanad",
    duration: "3 Days / 2 Nights",
    category: "Wildlife",
    highlights: [
      "Nature sightseeing",
      "Waterfalls",
      "Forest destinations",
      "Scenic travel",
      "Accommodation",
    ],
  },

  {
    name: "Palani Temple Tour",
    slug: "palani-temple-tour",
    shortDescription:
      "A spiritual journey to the famous Palani Murugan Temple.",
    description:
      "Visit Palani and experience one of Tamil Nadu's important pilgrimage destinations with organised travel support.",
    image: "/images/tours/palani.jpg",
    location: "Palani",
    duration: "2 Days / 1 Night",
    category: "Pilgrimage",
    highlights: [
      "Palani Temple",
      "Pilgrimage arrangements",
      "Family travel",
      "Vehicle support",
      "Accommodation",
    ],
  },

  {
    name: "South India Temple Circuit",
    slug: "south-india-temple-circuit",
    shortDescription:
      "A multi-destination pilgrimage journey covering important South Indian temples.",
    description:
      "Travel through multiple important pilgrimage destinations across South India with transportation, accommodation and group arrangements.",
    image: "/images/tours/south-india-temple.jpg",
    location: "South India",
    duration: "7 Days / 6 Nights",
    category: "Pilgrimage",
    highlights: [
      "Multiple temples",
      "Group pilgrimage",
      "Vehicle arrangements",
      "Accommodation",
      "Complete travel coordination",
    ],
  },

  {
    name: "South India Family Holiday",
    slug: "south-india-family-holiday",
    shortDescription:
      "A flexible family holiday combining popular destinations across South India.",
    description:
      "Enjoy a multi-destination family journey through South India with travel, sightseeing and accommodation arranged around your requirements.",
    image: "/images/tours/south-india-family.jpg",
    location: "South India",
    duration: "7 Days / 6 Nights",
    category: "Family",
    highlights: [
      "Multiple destinations",
      "Family-friendly travel",
      "Sightseeing",
      "Accommodation",
      "Vehicle arrangements",
    ],
  },

  {
    name: "South India Group Tour",
    slug: "south-india-group-tour",
    shortDescription:
      "A flexible South India journey designed for larger families and groups.",
    description:
      "Organise a group journey across South India with coordinated transportation, accommodation and sightseeing arrangements.",
    image: "/images/tours/south-india-group.jpg",
    location: "South India",
    duration: "Custom",
    category: "Group",
    highlights: [
      "Large group support",
      "Vehicle arrangements",
      "Accommodation",
      "Sightseeing coordination",
      "Custom itinerary",
    ],
  },
];

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}