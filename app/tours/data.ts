
import { mediaUrl } from "@/lib/media";
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
    image: mediaUrl("images/tours/kerala.png"),
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
    name: "Munnar",
    slug: "munnar-tour",
    shortDescription:
      "Enjoy the misty hills of Munnar and the natural beauty of Thekkady.",
    description:
      "Experience Kerala's famous hill destinations with tea plantations, scenic landscapes and wildlife experiences.",
    image: mediaUrl("images/tours/munnar.png"),
    location: "Munnar & Thekkady",
    duration: "4 Days / 3 Nights",
    category: "Hill Station",
    highlights: [
      "Munnar sightseeing",
      "Jeep Safari",
      "Tea plantations",
      "Family travel",
      "Accommodation support",
      "Sunrise & Sunset",
    ],
  },

  {
    name: "Alleppey Houseboat Tour",
    slug: "alleppey-houseboat-tour",
    shortDescription:
      "Experience Kerala's backwaters with a memorable Alleppey houseboat journey.",
    description:
      "Relax through the beautiful backwaters of Alleppey with houseboat arrangements and comfortable travel support.",
    image: mediaUrl("images/tours/alleppey.png"),
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
    image: mediaUrl("images/tours/kanyakumari.png"),
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
    image: mediaUrl("images/tours/madurai.png"),
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
    image: mediaUrl("images/tours/rameswaram.png"),
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
    image: mediaUrl("images/tours/madurair.png"),
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
    image: mediaUrl("images/tours/thanjavur.png"),
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
    image: mediaUrl("images/tours/trichy.png"),
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
    image: mediaUrl("images/tours/chennai.png"),
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
    image: mediaUrl("images/tours/mamallapuram.png"),
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
    image: mediaUrl("images/tours/ooty.png"),
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
    image: mediaUrl("images/tours/kodaikanal.png"),
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
    image: mediaUrl("images/tours/coorg.png"),
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
    image: mediaUrl("images/tours/mysore.png"),
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
    image: mediaUrl("images/tours/bengaluru.png"),
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
    image: mediaUrl("images/tours/wayanad.png"),
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
    image: mediaUrl("images/tours/palani.png"),
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
    image: mediaUrl("images/tours/south.png"),
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
    image: mediaUrl("images/tours/family.png"),
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
    image: mediaUrl("images/tours/group.png"),
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

  {
    name: "Tirupati Temple Tour",
    slug: "tirupati-temple-tour",
    shortDescription: "A spiritual journey to Tirupati and its important pilgrimage attractions.",
    description: "Visit Tirupati with organised transportation and pilgrimage travel support.",
    image: mediaUrl("images/tours/tirupati.png"),
    location: "Tirupati",
    duration: "Custom",
    category: "Pilgrimage",
    highlights: ["Tirupati Temple", "Temple visits", "Pilgrimage travel", "Vehicle arrangements", "Travel support"],
  },

  

  {
    name: "Kanchipuram Temple Tour",
    slug: "kanchipuram-temple-tour",
    shortDescription: "Discover the temples and spiritual heritage of Kanchipuram.",
    description: "Explore Kanchipuram through its important temples and cultural attractions with organised travel support.",
    image: mediaUrl("images/tours/kanchipuram.jpg"),
    location: "Kanchipuram",
    duration: "Custom",
    category: "Pilgrimage",
    highlights: ["Kanchipuram temples", "Temple sightseeing", "Spiritual journey", "Heritage attractions", "Travel support"],
  },

  {
    name: "Chidambaram Temple Tour",
    slug: "chidambaram-temple-tour",
    shortDescription: "Experience the spiritual and cultural heritage of Chidambaram.",
    description: "Visit Chidambaram and its important temple attractions with comfortable transportation and pilgrimage arrangements.",
    image: mediaUrl("images/tours/chidambaram.png"),
    location: "Chidambaram",
    duration: "Custom",
    category: "Pilgrimage",
    highlights: ["Chidambaram Temple", "Temple visits", "Pilgrimage travel", "Cultural attractions", "Vehicle arrangements"],
  },

  {
    name: "Pondicherry Tour",
    slug: "pondicherry-tour",
    shortDescription: "Enjoy the coastal charm, culture and attractions of Pondicherry.",
    description: "Explore Pondicherry with comfortable transportation and organised sightseeing arrangements.",
    image: mediaUrl("images/tours/pondicherry.png"),
    location: "Pondicherry",
    duration: "Custom",
    category: "Beach",
    highlights: ["Pondicherry sightseeing", "Coastal attractions", "Cultural experiences", "Local travel", "Flexible planning"],
  },

  {
    name: "Thiruchendur Temple Tour",
    slug: "thiruchendur-temple-tour",
    shortDescription: "A spiritual journey to Thiruchendur and its famous temple destination.",
    description: "Travel to Thiruchendur for a comfortable pilgrimage experience with organised transportation and sightseeing support.",
    image: mediaUrl("images/tours/thiruchendur.png"),
    location: "Thiruchendur",
    duration: "Custom",
    category: "Pilgrimage",
    highlights: ["Thiruchendur Temple", "Temple visits", "Pilgrimage travel", "Coastal destination", "Vehicle arrangements"],
  },

  {
    name: "Tiruvannamalai Temple Tour",
    slug: "tiruvannamalai-temple-tour",
    shortDescription: "Explore the spiritual atmosphere and temple heritage of Tiruvannamalai.",
    description: "Enjoy a pilgrimage journey to Tiruvannamalai with organised transportation and temple sightseeing support.",
    image: mediaUrl("images/tours/tiruvannamalai.png"),
    location: "Tiruvannamalai",
    duration: "Custom",
    category: "Pilgrimage",
    highlights: ["Tiruvannamalai Temple", "Temple visits", "Pilgrimage travel", "Spiritual attractions", "Travel support"],
  },

  {
    name: "Srirangam Temple Tour",
    slug: "srirangam-temple-tour",
    shortDescription: "Discover the spiritual and architectural heritage of Srirangam.",
    description: "Visit Srirangam with comfortable transportation and organised pilgrimage travel arrangements.",
    image: mediaUrl("images/tours/srirangam.png"),
    location: "Srirangam",
    duration: "Custom",
    category: "Pilgrimage",
    highlights: ["Srirangam Temple", "Temple sightseeing", "Pilgrimage journey", "Heritage attractions", "Vehicle arrangements"],
  },

  {
    name: "Thiruvananthapuram Temple Tour",
    slug: "thiruvananthapuram-temple-tour",
    shortDescription: "Experience the spiritual heritage and attractions of Thiruvananthapuram.",
    description: "Explore Thiruvananthapuram with temple visits, sightseeing and comfortable travel arrangements.",
    image: mediaUrl("images/tours/thiruvananthapuram.png"),
    location: "Thiruvananthapuram",
    duration: "Custom",
    category: "Pilgrimage",
    highlights: ["Thiruvananthapuram Temple", "Temple visits", "Pilgrimage travel", "City sightseeing", "Travel support"],
  },

  {
    name: "Ram Setu Point Tour",
    slug: "ram-setu-point-tour",
    shortDescription: "Visit the scenic and spiritual Ram Setu Point near Dhanushkodi.",
    description: "Experience a memorable journey to Ram Setu Point with organised transportation and sightseeing support.",
    image: mediaUrl("images/tours/ram-setu.png"),
    location: "Ram Setu Point",
    duration: "Custom",
    category: "Pilgrimage",
    highlights: ["Ram Setu Point", "Spiritual attractions", "Coastal sightseeing", "Scenic journey", "Vehicle arrangements"],
  },

  {
    name: "Dhanushkodi Tour",
    slug: "dhanushkodi-tour",
    shortDescription: "Explore the unique coastal landscape and attractions of Dhanushkodi.",
    description: "Enjoy a comfortable journey to Dhanushkodi with organised transportation and coastal sightseeing support.",
    image: mediaUrl("images/tours/dhanushkodi.png"),
    location: "Dhanushkodi",
    duration: "Custom",
    category: "Beach",
    highlights: ["Dhanushkodi sightseeing", "Coastal attractions", "Scenic travel", "Spiritual destinations", "Vehicle support"],
  },

  

  {
    name: "Adiyogi Tour",
    slug: "adiyogi-tour",
    shortDescription: "Experience the spiritual atmosphere and iconic Adiyogi destination.",
    description: "Enjoy a spiritual journey to Adiyogi with organised transportation and sightseeing arrangements.",
    image: mediaUrl("images/tours/adiyogi.png"),
    location: "Adiyogi",
    duration: "Custom",
    category: "Pilgrimage",
    highlights: ["Adiyogi", "Spiritual attractions", "Cultural visits", "Scenic travel", "Vehicle arrangements"],
  },


  {
    name: "Thekkady Tour",
    slug: "thekkady-tour",
    shortDescription:
      "Explore the natural beauty, wildlife and peaceful surroundings of Thekkady.",
    description:
      "Experience Thekkady with scenic landscapes, wildlife attractions and comfortable travel arrangements.",
    image: mediaUrl("images/tours/thekkady.jpg"),
    location: "Thekkady",
    duration: "2 Days / 1 Night",
    category: "Wildlife",
    highlights: [
      "Thekkady sightseeing",
      "Wildlife experience",
      "Scenic destinations",
      "Nature travel",
      "Accommodation support",
    ],
  },

];

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}