"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
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
  Church,
  Users,
} from "lucide-react";

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
  },

  "pilgrimage-travel": {
    title: "Pilgrimage Travel",
    subtitle: "Organised travel for meaningful spiritual journeys.",
    description:
      "Travel support for pilgrimage journeys, spiritual visits and religious groups with organised arrangements designed to make the journey more comfortable and manageable.",
    image: "/images/services/pilgrimage.jpg",
    icon: Church,
    points: [
      "Pilgrimage trips",
      "Group travel",
      "Travel coordination",
      "Programme support",
      "Temple visits",
      "Spiritual travel planning",
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
  },
};

export default function ServiceDetailPage() {
  const params = useParams();

  const slug = Array.isArray(params.slug)
    ? params.slug[0]
    : params.slug;

  const service =
    serviceDetails[slug as keyof typeof serviceDetails];

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F7F3E8] px-5">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-medium text-[#071635]">
            Service Not Found
          </h1>

          <p className="mt-3 text-sm text-[#071635]/55">
            The service you are looking for could not be found.
          </p>

          <Link
            href="/services"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#D99A18]
              px-5
              py-3
              text-xs
              font-bold
              text-[#071635]
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
    <main className="min-h-screen overflow-hidden bg-[#F7F3E8] text-[#071635]">

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#031222]">

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            border-[50px]
            border-[#D99A18]/10
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-40
            -left-40
            h-[500px]
            w-[500px]
            rounded-full
            border-[45px]
            border-[#D99A18]/10
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
            gap-10
            px-5
            py-10
            sm:px-8
            sm:py-14
            lg:grid-cols-2
            lg:px-10
            lg:py-20
          "
        >

          {/* CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <Link
              href="/services"
              className="
                inline-flex
                items-center
                gap-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#D99A18]
                transition-colors
                hover:text-[#F0C45C]
              "
            >
              <ArrowLeft size={13} />
              All Services
            </Link>

            <div
              className="
                mt-8
                flex
                items-center
                gap-2
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#D99A18]
              "
            >
              <span className="h-px w-8 bg-[#D99A18]" />

              Service Details

              <Sparkles size={11} />
            </div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="
                mt-4
                max-w-2xl
                font-serif
                text-4xl
                font-medium
                leading-tight
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
                mt-4
                max-w-xl
                text-sm
                leading-7
                text-white/60
              "
            >
              {service.subtitle}
            </p>

            <Link
              href="/contact"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#D99A18]
                px-5
                py-3
                text-xs
                font-bold
                text-[#071635]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#F0C45C]
                hover:shadow-[0_12px_30px_rgba(217,154,24,0.25)]
              "
            >
              Enquire Now

              <span
                className="
                  flex
                  h-7
                  w-7
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
                <ArrowRight size={13} />
              </span>
            </Link>

          </motion.div>

          {/* IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-[#D99A18]/30
              shadow-[0_25px_70px_rgba(0,0,0,0.25)]
            "
          >

            <motion.img
              src={service.image}
              alt={service.title}
              className="
                h-[300px]
                w-full
                object-cover
                sm:h-[400px]
                lg:h-[470px]
              "
              animate={{
                scale: [1, 1.025, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#031222]/70 via-transparent to-transparent" />

            <div
              className="
                absolute
                bottom-5
                left-5
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border-2
                border-[#D99A18]
                bg-[#071635]
                text-[#F0C45C]
              "
            >
              <Icon size={20} />
            </div>

          </motion.div>

        </div>
      </section>

      {/* DETAILS */}

      <section className="bg-[#F7F3E8]">

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1240px]
            gap-8
            px-5
            py-12
            sm:px-8
            sm:py-16
            lg:grid-cols-[1.1fr_0.9fr]
            lg:px-10
            lg:py-20
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <div
              className="
                flex
                items-center
                gap-2
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#D99A18]
              "
            >
              <span className="h-px w-7 bg-[#D99A18]" />

              About This Service
            </div>

            <h2
              className="
                mt-3
                font-serif
                text-3xl
                font-medium
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
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-[#071635]/60
              "
            >
              {service.description}
            </p>

          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              rounded-[20px]
              border
              border-[#071635]/10
              bg-white
              p-6
              shadow-[0_10px_35px_rgba(7,22,53,0.06)]
            "
          >

            <h3 className="text-sm font-extrabold text-[#071635]">
              What We Provide
            </h3>

            <div className="mt-5 space-y-3">

              {service.points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.06,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    text-xs
                    text-[#071635]/65
                  "
                >
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
                      text-[#D99A18]
                    "
                  >
                    <Check size={12} />
                  </span>

                  {point}
                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>
      </section>

      {/* CTA */}

      <section className="bg-[#031222]">

        <div
          className="
            mx-auto
            w-full
            max-w-[1240px]
            px-5
            py-12
            text-center
            sm:px-8
            sm:py-16
            lg:px-10
            lg:py-20
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#D99A18]
              "
            >
              Ready To Plan?
            </p>

            <h2
              className="
                mx-auto
                mt-3
                max-w-2xl
                font-serif
                text-3xl
                font-medium
                text-white
                sm:text-4xl
              "
            >
              Let&apos;s arrange your
              <span className="text-[#D99A18]">
                {" "}journey.
              </span>
            </h2>

            <Link
              href="/contact"
              className="
                group
                mt-6
                inline-flex
                items-center
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