 "use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Compass,
  BusFront,
  Hotel,
  Building2,
  ChefHat,
  Sparkles,
  Users,
} from "lucide-react";

/* =========================================================
   TEMPLE ICON
   Custom temple/pagoda-style icon matching the requested
   reference instead of using the Church icon.
========================================================= */

function TempleIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 4V9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 9H28L30.5 13H17.5L20 9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M16 13H32L35 18H13L16 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 18H36L39 23H9L12 18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M15 23V36M21 23V36M27 23V36M33 23V36"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 36H40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 40H43"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3 44H45"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M19 36V31C19 28.2 20.8 26 24 26C27.2 26 29 28.2 29 31V36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const serviceDetails = {
  "south-india-tours": {
    title: "South India Tours",
    subtitle: "Thoughtfully arranged journeys across South India.",
    description:
      "Explore South India with thoughtfully arranged travel plans designed for families, individuals and groups. We help coordinate transportation, sightseeing and the important details that make your journey comfortable and organised.",
    image: "/images/services/tour.jpg",
    icon: Compass,
    points: [
      "Family tours",
      "Group tours",
      "Sightseeing arrangements",
      "Travel coordination",
      "Flexible travel planning",
      "Journey support",
    ],
    programs: [
      {
        title: "Family Tours",
        text: "Travel arrangements planned around comfortable family journeys and practical requirements.",
      },
      {
        title: "Group Tours",
        text: "Coordinated travel support for groups travelling together.",
      },
      {
        title: "Sightseeing Arrangements",
        text: "Support with organising sightseeing as part of your travel plan.",
      },
      {
        title: "Travel Coordination",
        text: "Help coordinate the important travel details for a smoother journey.",
      },
      {
        title: "Flexible Travel Planning",
        text: "Travel planning that can be arranged around your journey requirements.",
      },
      {
        title: "Journey Support",
        text: "Practical support throughout the planned journey.",
      },
    ],
  },

  "vehicle-booking": {
    title: "Vehicle Booking",
    subtitle: "Comfortable transportation for every kind of journey.",
    description:
      "Arrange suitable vehicles for local travel, long-distance journeys, family trips and group transportation. Choose practical travel options based on your group size and journey requirements.",
    image: "/images/services/vehicle.jpg",
    icon: BusFront,
    points: [
      "Cars and vans",
      "Group transportation",
      "Local travel",
      "Long-distance journeys",
      "Trip-based arrangements",
      "Group travel support",
    ],
    programs: [
      {
        title: "Cars and Vans",
        text: "Vehicle options for individual, family and smaller group travel.",
      },
      {
        title: "Group Transportation",
        text: "Transportation support for groups travelling together.",
      },
      {
        title: "Local Travel",
        text: "Vehicle arrangements for local journeys and nearby travel.",
      },
      {
        title: "Long-Distance Journeys",
        text: "Travel support for longer routes and extended journeys.",
      },
      {
        title: "Trip-Based Arrangements",
        text: "Vehicles arranged according to the requirements of your trip.",
      },
      {
        title: "Group Travel Support",
        text: "Practical coordination for comfortable group transportation.",
      },
    ],
  },

  accommodation: {
    title: "Accommodation",
    subtitle: "Comfortable stays for individuals, families and groups.",
    description:
      "We help arrange suitable accommodation during your journey, whether you are travelling individually, with family or as part of a larger group.",
    image: "/images/services/accommodation.jpg",
    icon: Hotel,
    points: [
      "Room arrangements",
      "Group accommodation",
      "Stay coordination",
      "Location-based support",
      "Family stays",
      "Group stay planning",
    ],
    programs: [
      {
        title: "Room Arrangements",
        text: "Support with arranging suitable rooms for your stay.",
      },
      {
        title: "Group Accommodation",
        text: "Accommodation coordination for larger travelling groups.",
      },
      {
        title: "Stay Coordination",
        text: "Help coordinate accommodation as part of the overall journey.",
      },
      {
        title: "Location-Based Support",
        text: "Accommodation support based on the location of your travel.",
      },
      {
        title: "Family Stays",
        text: "Stay arrangements suited to family travel requirements.",
      },
      {
        title: "Group Stay Planning",
        text: "Planning support for organised group stays.",
      },
    ],
  },

  "hall-arrangements": {
    title: "Hall Arrangements",
    subtitle: "Suitable spaces for gatherings and programmes.",
    description:
      "Coordinate suitable halls and spaces for gatherings, religious programmes, meetings and group events with practical arrangements based on your requirements.",
    image: "/images/services/hall.jpg",
    icon: Building2,
    points: [
      "Hall booking support",
      "Group gatherings",
      "Programme arrangements",
      "Event coordination",
      "Meeting spaces",
      "Special occasions",
    ],
    programs: [
      {
        title: "Hall Booking Support",
        text: "Support in arranging suitable halls for your planned programme.",
      },
      {
        title: "Group Gatherings",
        text: "Space arrangements for organised group gatherings.",
      },
      {
        title: "Programme Arrangements",
        text: "Venue coordination around your planned programme requirements.",
      },
      {
        title: "Event Coordination",
        text: "Practical support for coordinating event spaces and arrangements.",
      },
      {
        title: "Meeting Spaces",
        text: "Suitable space arrangements for meetings and organised sessions.",
      },
      {
        title: "Special Occasions",
        text: "Venue support for special occasions and gatherings.",
      },
    ],
  },

  "kitchen-arrangements": {
    title: "Kitchen Arrangements",
    subtitle: "Organised food and kitchen support for groups.",
    description:
      "Support for organised food and kitchen requirements during group stays, gatherings and programmes, helping make larger events easier to coordinate.",
    image: "/images/services/kitchen.jpg",
    icon: ChefHat,
    points: [
      "Kitchen arrangements",
      "Group requirements",
      "Programme support",
      "Food arrangements",
      "Facility coordination",
      "Event support",
    ],
    programs: [
      {
        title: "Kitchen Arrangements",
        text: "Support for organised kitchen requirements during group stays and programmes.",
      },
      {
        title: "Group Requirements",
        text: "Coordination around the practical needs of travelling groups.",
      },
      {
        title: "Programme Support",
        text: "Kitchen and food-related support for organised programmes.",
      },
      {
        title: "Food Arrangements",
        text: "Support for planned food arrangements during gatherings and group stays.",
      },
      {
        title: "Facility Coordination",
        text: "Coordination of required facilities for organised group needs.",
      },
      {
        title: "Event Support",
        text: "Practical food and kitchen support for larger events.",
      },
    ],
  },

  "religious-programmes": {
    title: "Religious Programmes",
    subtitle: "Travel and arrangements for spiritual occasions.",
    description:
      "Travel and facility coordination for religious gatherings, spiritual programmes and community events, with support for groups and organised programmes.",
    image: "/images/services/religious.jpg",
    icon: Sparkles,
    points: [
      "Religious gatherings",
      "Travel arrangements",
      "Venue coordination",
      "Group support",
      "Programme coordination",
      "Spiritual journeys",
    ],
    programs: [
      {
        title: "Bhagavatha Katha",
        text: "Traditional Bhagavatha Katha programmes arranged with suitable travel, venue and group support.",
      },
      {
        title: "Ram Katha",
        text: "Travel and programme arrangements for Ram Katha gatherings and devotional occasions.",
      },
      {
        title: "Shiva Puranam",
        text: "Organised support for Shiva Puranam programmes, including travel and venue coordination.",
      },
      {
        title: "Vishnu Puranam",
        text: "Practical arrangements for Vishnu Puranam programmes and spiritual gatherings.",
      },
      {
        title: "Bhajans & Devotional Programmes",
        text: "Travel and facility support for bhajans, devotional sessions and community programmes.",
      },
      {
        title: "Satsang & Spiritual Discourses",
        text: "Coordinated arrangements for satsang, spiritual discourses and religious gatherings.",
      },
    ],
  },

  "pilgrimage-travel": {
    title: "Pilgrimage Travel",
    subtitle: "Organised travel for meaningful spiritual journeys.",
    description:
      "Travel support for pilgrimage journeys, spiritual visits and religious groups with organised arrangements designed to make the journey more comfortable and manageable.",
    image: "/images/services/pilgrimage.jpg",
    icon: TempleIcon,
    points: [
      "Pilgrimage trips",
      "Group travel",
      "Travel coordination",
      "Programme support",
      "Temple visits",
      "Spiritual travel planning",
    ],
    programs: [
      {
        title: "Temple Pilgrimage",
        text: "Organised journeys to important temples and sacred destinations with comfortable travel support.",
      },
      {
        title: "Kshetra Yatra",
        text: "Planned spiritual journeys to sacred kshetras with route, transport and group coordination.",
      },
      {
        title: "Temple Visit Programmes",
        text: "Travel arrangements for temple visits, darshan and organised devotional programmes.",
      },
      {
        title: "Group Pilgrimage",
        text: "Comfortable transportation and practical coordination for families and larger pilgrimage groups.",
      },
      {
        title: "Multi-Temple Yatra",
        text: "Coordinated travel plans covering multiple temples and spiritual destinations in one journey.",
      },
      {
        title: "Spiritual Journey Support",
        text: "End-to-end assistance with transportation, stays, facilities and important journey requirements.",
      },
    ],
  },

  "special-gatherings": {
    title: "Special Gatherings",
    subtitle: "Complete arrangements for memorable occasions.",
    description:
      "Complete arrangements for family functions, celebrations, community events and special gatherings, bringing together the services needed for a well-organised occasion.",
    image: "/images/services/special.jpg",
    icon: Users,
    points: [
      "Family functions",
      "Event arrangements",
      "Venue coordination",
      "Group support",
      "Celebration planning",
      "Community events",
    ],
    programs: [
      {
        title: "Family Functions",
        text: "Arrangement support for family functions and organised occasions.",
      },
      {
        title: "Event Arrangements",
        text: "Practical coordination for planned events and gatherings.",
      },
      {
        title: "Venue Coordination",
        text: "Support with suitable venue arrangements for your occasion.",
      },
      {
        title: "Group Support",
        text: "Coordination for groups attending or participating in the event.",
      },
      {
        title: "Celebration Planning",
        text: "Planning support for celebrations and memorable occasions.",
      },
      {
        title: "Community Events",
        text: "Arrangement support for organised community gatherings.",
      },
    ],
  },
} as const;

export default function ServiceDetailPage() {
  const params = useParams();
  const shouldReduceMotion = useReducedMotion();

  const slug = Array.isArray(params.slug)
    ? params.slug[0]
    : params.slug;

  const service =
    serviceDetails[slug as keyof typeof serviceDetails];

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F3E8] px-5">
        <div className="w-full max-w-md text-center">
          <h1 className="font-serif text-3xl font-medium text-[#071635] sm:text-4xl">
            Service Not Found
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#071635]/55">
            The service you are looking for could not be found.
          </p>

          <Link
            href="/services"
            className="
              mt-6
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#D99A18]
              px-5
              py-3
              text-xs
              font-bold
              text-[#071635]
              transition-all
              hover:bg-[#F0C45C]
            "
          >
            <ArrowLeft size={14} />
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F3E8] text-[#071635]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#173A67]">
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-40
            -top-40
            h-[420px]
            w-[420px]
            rounded-full
            border-[42px]
            border-[#D99A18]/10
            sm:h-[500px]
            sm:w-[500px]
            sm:border-[50px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-40
            -left-40
            h-[420px]
            w-[420px]
            rounded-full
            border-[38px]
            border-[#D99A18]/10
            sm:h-[500px]
            sm:w-[500px]
            sm:border-[45px]
          "
        />

        <div
          className="
            relative
            mx-auto
            grid
            w-full
            max-w-[1240px]
            items-center
            gap-4
            px-4
            py-5
            sm:gap-8
            sm:px-8
            sm:py-10
            lg:grid-cols-2
            lg:px-10
            lg:py-12
            xl:py-18
          "
        >
          {/* CONTENT */}

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 min-w-0"
          >
            <Link
              href="/services"
              className="
                inline-flex
                items-center
                gap-2
                text-[9px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#D99A18]
                transition-colors
                hover:text-[#F0C45C]
                sm:text-[10px]
              "
            >
              <ArrowLeft size={13} />
              All Services
            </Link>

            <div
              className="
                mt-4
                flex
                items-center
                gap-2
                text-[8px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#D99A18]
                sm:mt-8
                sm:text-[9px]
              "
            >
              <span className="h-px w-7 bg-[#D99A18]" />
              Service Details
              <Sparkles size={10} />
            </div>

            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.1,
              }}
              className="
                mt-3
                max-w-2xl
                break-words
                font-serif
                text-[32px]
                font-medium
                leading-[1.02]
                tracking-[-0.04em]
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              {service.title}
            </motion.h1>

            <p
              className="
                mt-3
                max-w-xl
                text-xs
                leading-6
                text-white/60
                sm:text-sm
                sm:leading-7
              "
            >
              {service.subtitle}
            </p>

            <Link
              href="/contact"
              className="
                group
                mt-4
                inline-flex
                w-auto
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#D99A18]
                px-4
                py-2
                text-[10px]
                font-bold
                text-[#071635]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#F0C45C]
                hover:shadow-[0_12px_30px_rgba(217,154,24,0.25)]
                sm:mt-7
                sm:w-auto
                sm:gap-3
                sm:px-5
                sm:py-3
                sm:text-xs
              "
            >
              Enquire Now

              <span
                className="
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#071635]
                  text-white
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  sm:h-7
                  sm:w-7
                "
              >
                <ArrowRight size={12} className="sm:hidden" />
                <ArrowRight size={13} className="hidden sm:block" />
              </span>
            </Link>
          </motion.div>

          {/* IMAGE */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 30,
                    scale: 0.97,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              min-w-0
              overflow-hidden
              rounded-[18px]
              border
              border-[#D99A18]/30
              shadow-[0_20px_55px_rgba(0,0,0,0.25)]
              sm:rounded-[24px]
            "
          >
            <motion.img
              src={service.image}
              alt={service.title}
              className="
                h-[180px]
                w-full
                object-cover
                sm:h-[330px]
                lg:h-[400px]
              "
              animate={
                shouldReduceMotion
                  ? undefined
                  : { scale: [1, 1.02, 1] }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#031222]/75 via-transparent to-transparent" />

            <div
              className="
                absolute
                bottom-4
                left-4
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border-2
                border-[#D99A18]
                bg-[#071635]
                text-[#F0C45C]
                shadow-lg
                sm:bottom-5
                sm:left-5
                sm:h-12
                sm:w-12
              "
            >
              <Icon size={18} className="sm:hidden" />
              <Icon size={20} className="hidden sm:block" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SERVICE OVERVIEW
      ====================================================== */}

      <section className="bg-[#F7F3E8]">
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1240px]
            gap-3
            px-4
            py-6
            sm:gap-8
            sm:px-8
            sm:py-10
            lg:grid-cols-[1fr_0.9fr]
            lg:px-10
            lg:py-12
          "
        >
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
            className="min-w-0"
          >
            <div
              className="
                flex
                items-center
                gap-2
                text-[8px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#D99A18]
                sm:text-[9px]
              "
            >
              <span className="h-px w-7 bg-[#D99A18]" />
              About This Service
            </div>

            <h2
              className="
                mt-3
                font-serif
                text-[26px]
                font-medium
                leading-tight
                tracking-[-0.03em]
                text-[#071635]
                sm:text-4xl
              "
            >
              Everything arranged
              <span className="block text-[#B67A0B]">
                with care.
              </span>
            </h2>

            <p
              className="
                mt-3
                max-w-2xl
                text-xs
                leading-6
                text-[#071635]/60
                sm:text-sm
                sm:leading-7
              "
            >
              {service.description}
            </p>

            {/* QUICK CHECKLIST */}

            <div className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {service.points.map((point) => (
                <div
                  key={point}
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-[#071635]/8
                    bg-white/70
                    px-2.5
                    py-2
                    text-[9px]
                    font-medium
                    text-[#071635]/70
                    sm:text-xs
                  "
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#071635]
                      text-[#D99A18]
                    "
                  >
                    <Check size={10} />
                  </span>
                  <span className="min-w-0">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* PROVIDE CARD */}

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
            className="
              min-w-0
              rounded-[18px]
              border
              border-[#071635]/10
              bg-white
              p-3.5
              shadow-[0_10px_30px_rgba(7,22,53,0.05)]
              sm:rounded-[20px]
              sm:p-5
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#071635]
                  text-[#F0C45C]
                "
              >
                <Icon size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#D99A18]">
                  Service Support
                </p>
                <h3 className="mt-1 text-sm font-extrabold text-[#071635] sm:text-base">
                  What We Provide
                </h3>
              </div>
            </div>

            <div className="mt-3 space-y-1.5">
              {service.points.map((point) => (
                <div
                  key={point}
                  className="
                    flex
                    items-center
                    gap-2
                    border-b
                    border-[#071635]/7
                    pb-1.5
                    text-[9px]
                    text-[#071635]/65
                    last:border-0
                    last:pb-0
                    sm:text-xs
                  "
                >
                  <Check
                    size={13}
                    className="shrink-0 text-[#D99A18]"
                  />
                  <span className="min-w-0">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SERVICES & PROGRAMS
      ====================================================== */}

      <section className="bg-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1240px]
            px-4
            py-6
            sm:px-8
            sm:py-10
            lg:px-10
            lg:py-12
          "
        >
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
            className="max-w-2xl"
          >
            <div
              className="
                flex
                items-center
                gap-2
                text-[8px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#D99A18]
                sm:text-[9px]
              "
            >
              <span className="h-px w-7 bg-[#D99A18]" />
              Services &amp; Programs
              {service.title === "Pilgrimage Travel" ? (
                <TempleIcon size={12} />
              ) : (
                <Sparkles size={11} />
              )}
            </div>

            <h2
              className="
                mt-3
                font-serif
                text-[26px]
                font-medium
                leading-tight
                tracking-[-0.03em]
                text-[#071635]
                sm:text-4xl
              "
            >
              Explore what this service
              <span className="block text-[#B67A0B]">
                includes.
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-xs leading-6 text-[#071635]/55 sm:text-sm sm:leading-7">
              Select the arrangement that matches your requirement and contact us
              to plan the details.
            </p>
          </motion.div>

          <div
            className="
              mt-4
              grid
              grid-cols-1
              gap-2
              sm:grid-cols-2
              lg:grid-cols-3
              lg:gap-3
            "
          >
            {service.programs.map((program, index) => (
              <motion.article
                key={program.title}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 20,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -4,
                      }
                }
                className="
                  group
                  min-w-0
                  rounded-[13px]
                  border
                  border-[#071635]/9
                  bg-[#F7F3E8]
                  p-3
                  transition-all
                  duration-300
                  hover:border-[#D99A18]/35
                  hover:bg-white
                  hover:shadow-[0_12px_30px_rgba(7,22,53,0.07)]
                  sm:p-5
                "
              >
                <div className="flex items-start gap-2.5">
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#071635]
                      text-[#D99A18]
                      transition-colors
                      duration-300
                      group-hover:bg-[#D99A18]
                      group-hover:text-[#071635]
                    "
                  >
                    <Check size={12} />
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-[11px] font-extrabold leading-4 text-[#071635] sm:text-sm">
                      {program.title}
                    </h3>

                    <p className="mt-1 text-[9px] leading-4 text-[#071635]/55 sm:text-xs sm:leading-6">
                      {program.text}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SPIRITUAL SERVICE DETAILS
          Shown only for the two spiritual services.
          All other services keep the existing layout unchanged.
      ====================================================== */}

      {(service.title === "Religious Programmes" ||
        service.title === "Pilgrimage Travel") && (
        <section className="bg-white">
          <div
            className="
              mx-auto
              w-full
              max-w-[1240px]
              px-4
              py-9
              sm:px-8
              sm:py-10
              lg:px-10
              lg:py-12
            "
          >
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[#D99A18] sm:text-[9px]">
                <span className="h-px w-7 bg-[#D99A18]" />
                {service.title === "Pilgrimage Travel"
                  ? "Pilgrimage Support"
                  : "Spiritual Programme Support"}
                {service.title === "Pilgrimage Travel" ? (
                  <TempleIcon size={12} />
                ) : (
                  <Sparkles size={11} />
                )}
              </div>

              <h2 className="mt-3 font-serif text-[26px] font-medium leading-tight tracking-[-0.03em] text-[#071635] sm:text-4xl">
                Thoughtful arrangements
                <span className="block text-[#B67A0B]">
                  for every important detail.
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-xs leading-6 text-[#071635]/55 sm:text-sm sm:leading-7">
                {service.title === "Pilgrimage Travel"
                  ? "From group transportation and temple visits to programme coordination, we help organise the practical details of a meaningful pilgrimage journey."
                  : "From religious gatherings and spiritual programmes to venue, travel and group coordination, we help organise the practical details with care and respect."}
              </p>
            </motion.div>

            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
              {(service.title === "Pilgrimage Travel"
                ? [
                    {
                      title: "Pilgrimage Planning",
                      text: "Plan the route, timing and practical requirements of the journey.",
                    },
                    {
                      title: "Temple Visit Coordination",
                      text: "Coordinate travel arrangements around planned temple and spiritual visits.",
                    },
                    {
                      title: "Group Transportation",
                      text: "Arrange comfortable transportation for families and organised groups.",
                    },
                    {
                      title: "Programme Support",
                      text: "Coordinate travel and facility requirements connected with spiritual programmes.",
                    },
                    {
                      title: "Stay & Facility Support",
                      text: "Help coordinate suitable accommodation and facilities where required.",
                    },
                    {
                      title: "Journey Assistance",
                      text: "Provide practical support to help keep the planned journey organised.",
                    },
                  ]
                : [
                    {
                      title: "Bhagavatha Katha",
                      text: "Support travel, venue and group arrangements for Bhagavatha Katha programmes.",
                    },
                    {
                      title: "Ram Katha",
                      text: "Coordinate transportation, venues and practical requirements for Ram Katha gatherings.",
                    },
                    {
                      title: "Shiva Puranam",
                      text: "Arrange travel and facility support for Shiva Puranam programmes and spiritual occasions.",
                    },
                    {
                      title: "Bhajans & Devotional Programmes",
                      text: "Organise practical arrangements for bhajans and devotional community programmes.",
                    },
                    {
                      title: "Satsang & Spiritual Discourses",
                      text: "Provide coordinated travel and venue support for satsang and spiritual discourses.",
                    },
                    {
                      title: "Religious Group Support",
                      text: "Thoughtful assistance for groups attending religious programmes and gatherings.",
                    },
                  ]
              ).map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 16,
                        }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -3,
                        }
                  }
                  className="
                    group
                    min-w-0
                    rounded-[14px]
                    border
                    border-[#071635]/9
                    bg-[#F7F3E8]
                    p-4
                    transition-all
                    duration-300
                    hover:border-[#D99A18]/35
                    hover:bg-white
                    hover:shadow-[0_12px_30px_rgba(7,22,53,0.07)]
                    sm:p-5
                  "
                >
                  <div className="flex items-start gap-2.5">
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#071635]
                        text-[#D99A18]
                        transition-colors
                        duration-300
                        group-hover:bg-[#D99A18]
                        group-hover:text-[#071635]
                      "
                    >
                      <Check size={12} />
                    </span>

                    <div className="min-w-0">
                      <h3 className="text-[11px] font-extrabold leading-4 text-[#071635] sm:text-sm">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[9px] leading-4 text-[#071635]/55 sm:text-xs sm:leading-6">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          HOW WE ARRANGE
      ====================================================== */}

      <section className="bg-[#F7F3E8]">
        <div
          className="
            mx-auto
            w-full
            max-w-[1240px]
            px-4
            py-6
            sm:px-8
            sm:py-10
            lg:px-10
            lg:py-12
          "
        >
          <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-8">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[#D99A18] sm:text-[9px]">
                <span className="h-px w-7 bg-[#D99A18]" />
                Simple Process
              </div>

              <h2 className="mt-3 font-serif text-[26px] font-medium leading-tight tracking-[-0.03em] text-[#071635] sm:text-4xl">
                One Partner.
                <span className="block text-[#B67A0B]">
                  Every Arrangement.
                </span>
              </h2>

              <p className="mt-3 max-w-md text-xs leading-6 text-[#071635]/55 sm:text-sm sm:leading-7">
                Tell us what you need and we help coordinate the important
                details, so you can focus on enjoying your journey.
              </p>

              <Link
                href="/contact"
                className="
                  group
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-bold
                  text-[#071635]
                  transition-colors
                  hover:text-[#D99A18]
                "
              >
                Start Planning
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {[
                {
                  title: "Tell Us",
                  text: "Share your travel or group requirements.",
                },
                {
                  title: "We Arrange",
                  text: "We coordinate the services you need.",
                },
                {
                  title: "Travel",
                  text: "Enjoy a more organised journey.",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 20,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="
                    rounded-[13px]
                    border
                    border-[#071635]/8
                    bg-white
                    p-3
                    shadow-[0_5px_20px_rgba(7,22,53,0.035)]
                    sm:p-5
                  "
                >
                  <h3 className="text-xs font-extrabold text-[#071635] sm:text-sm">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-[9px] leading-4 text-[#071635]/50">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-[#173A67]">
        <div
          className="
            mx-auto
            w-full
            max-w-[1240px]
            px-4
            py-6
            text-center
            sm:px-8
            sm:py-10
            lg:px-10
            lg:py-12
          "
        >
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#D99A18] sm:text-[9px]">
              Ready To Plan?
            </p>

            <h2 className="mx-auto mt-2 max-w-2xl font-serif text-[26px] font-medium leading-tight tracking-[-0.03em] text-white sm:text-4xl">
              Let&apos;s arrange your
              <span className="text-[#D99A18]"> journey.</span>
            </h2>

            <p className="mx-auto mt-2 max-w-lg text-[11px] leading-5 text-white/50 sm:text-sm sm:leading-7">
              Contact us and share your requirements. We&apos;ll help coordinate
              the arrangements for your journey or programme.
            </p>

            <Link
              href="/contact"
              className="
                group
                mt-4
                inline-flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#D99A18]
                px-6
                py-3
                text-xs
                font-bold
                text-[#071635]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#F0C45C]
                sm:w-auto
              "
            >
              Contact Us

              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-[#071635]
                  text-white
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <ArrowRight size={12} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
