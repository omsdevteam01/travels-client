"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Bus,
  Hotel,
  Building2,
  UtensilsCrossed,
  BookOpen,
  Sparkles,
  Map,
  ArrowRight,
  Users,
} from "lucide-react";

/* =========================================================
   SERVICES DATA
========================================================= */

const services = [
  {
    slug: "south-india-tours",
    title: "South India Tours",
    description:
      "Thoughtfully arranged tours across South India for families and groups.",
    icon: Map,
  },
  {
    slug: "vehicle-booking",
    title: "Vehicle Booking",
    description:
      "Cars, vans and buses for local travel, long trips and group transportation.",
    icon: Bus,
  },
  {
    slug: "accommodation",
    title: "Accommodation",
    description:
      "Comfortable rooms and stays for individuals, families and groups.",
    icon: Hotel,
  },
  {
    slug: "hall-arrangements",
    title: "Hall Arrangements",
    description:
      "Spacious halls and spaces for meetings, events and gatherings.",
    icon: Building2,
  },
  {
    slug: "kitchen-arrangements",
    title: "Kitchen Arrangements",
    description:
      "Hygienic and delicious food arrangements for groups.",
    icon: UtensilsCrossed,
  },
  {
    slug: "bhagwat-katha",
    title: "Bhagwat Katha",
    description:
      "Organised support for spiritual programmes and religious events.",
    icon: BookOpen,
  },
  {
    slug: "pilgrimage-travel",
    title: "Pilgrimage Travel",
    description:
      "Safe and comfortable travel support for pilgrimages and holy visits.",
    icon: Sparkles,
  },
  {
    slug: "special-gatherings",
    title: "Special Gatherings",
    description:
      "Complete arrangements for family functions and special occasions.",
    icon: Users,
  },
];

/* =========================================================
   CARD ANIMATION
========================================================= */

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FBF7EE]

        /* MOBILE ONLY */
        py-6

        /* TABLET + DESKTOP — KEPT SAME */
        sm:py-10
        lg:py-12
        xl:py-14
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-52
          w-52
          rounded-full
          bg-[#D99A18]/5
          blur-3xl

          sm:top-16
          sm:h-80
          sm:w-80
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-28
          bottom-0
          h-52
          w-52
          rounded-full
          bg-[#071635]/5
          blur-3xl

          sm:bottom-5
          sm:h-80
          sm:w-80
        "
      />

      {/* =====================================================
          DECORATIVE DOTS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[7%]
          top-[12%]
          hidden
          h-20
          w-20
          opacity-25
          lg:block
        "
        style={{
          backgroundImage:
            "radial-gradient(#D99A18 1.2px, transparent 1.2px)",
          backgroundSize: "12px 12px",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[7%]
          top-[45%]
          hidden
          h-20
          w-20
          opacity-20
          lg:block
        "
        style={{
          backgroundImage:
            "radial-gradient(#D99A18 1.2px, transparent 1.2px)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1320px]

          /* MOBILE */
          px-3.5

          /* TABLET + DESKTOP — SAME */
          sm:px-6
          lg:px-8
          xl:px-10
        "
      >
        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <motion.div
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          {/* TOP LABEL */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-1.5
              text-[8px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#C48712]

              sm:gap-2
              sm:text-[10px]
              sm:tracking-[0.2em]
            "
          >
            <span
              className="
                h-px
                w-5
                bg-[#D99A18]

                sm:w-7
              "
            />

            <Sparkles
              size={10}
              strokeWidth={1.8}
              className="shrink-0"
            />

            <span>Our Services</span>

            <Sparkles
              size={10}
              strokeWidth={1.8}
              className="shrink-0"
            />

            <span
              className="
                h-px
                w-5
                bg-[#D99A18]

                sm:w-7
              "
            />
          </div>

          {/* MAIN TITLE */}

          <h2
            className="
              mt-2.5
              font-serif
              text-[27px]
              font-medium
              leading-[0.98]
              tracking-[-0.045em]
              text-[#071635]

              sm:mt-3
              sm:text-[38px]

              md:text-[46px]

              lg:text-[52px]

              xl:text-[56px]
            "
          >
            Everything You Need,

            <span className="block text-[#C48712]">
              We Arrange
            </span>
          </h2>

          {/* GOLD DIVIDER */}

          <div
            className="
              mx-auto
              mt-2.5
              flex
              items-center
              justify-center
              gap-1

              sm:mt-3
              sm:gap-1.5
            "
          >
            <span
              className="
                h-px
                w-5
                bg-[#D99A18]/60

                sm:w-6
              "
            />

            <span className="text-[9px] text-[#D99A18] sm:text-[11px]">
              ◇
            </span>

            <span
              className="
                h-px
                w-5
                bg-[#D99A18]/60

                sm:w-6
              "
            />
          </div>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-2.5
              max-w-[330px]
              text-[10px]
              leading-[1.55]
              text-[#071635]/60

              sm:mt-3
              sm:max-w-xl
              sm:text-xs
              sm:leading-6
            "
          >
            End-to-end arrangements for your journeys,
            events and spiritual occasions with care and
            professionalism.
          </p>
        </motion.div>

        {/* ===================================================
            SERVICE GRID — FIRST 4 SERVICES
        ==================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.05,
          }}
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: shouldReduceMotion
                  ? 0
                  : 0.07,
              },
            },
          }}
          className="
            mx-auto
            mt-5
            grid
            max-w-[1240px]
            grid-cols-2
            gap-2

            sm:mt-8
            sm:grid-cols-2
            sm:gap-4

            lg:grid-cols-4
            lg:gap-4
          "
        >
          {services.slice(0, 4).map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="
                    group
                    relative
                    flex
                    h-full
                    min-h-[205px]
                    flex-col
                    items-center
                    overflow-hidden
                    rounded-[13px]
                    border
                    border-[#071635]/[0.07]
                    bg-[#FFFDF8]
                    px-2.5
                    py-3.5
                    text-center
                    shadow-[0_5px_16px_rgba(7,22,53,0.04)]
                    transition-all
                    duration-500

                    hover:-translate-y-1.5
                    hover:border-[#D99A18]/30
                    hover:shadow-[0_16px_35px_rgba(7,22,53,0.10)]

                    sm:min-h-[240px]
                    sm:rounded-[16px]
                    sm:px-5
                    sm:py-5

                    lg:min-h-[235px]

                    xl:min-h-[245px]
                  "
                >
                  {/* =================================================
                      TOP NUMBER
                  ================================================== */}

                  <span
                    className="
                      absolute
                      right-2.5
                      top-2
                      text-[7px]
                      font-bold
                      tracking-[0.1em]
                      text-[#071635]/10
                      transition-all
                      duration-300

                      group-hover:text-[#D99A18]/45

                      sm:right-4
                      sm:top-3
                      sm:text-[8px]
                      sm:tracking-[0.12em]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* =================================================
                      ICON CIRCLE
                  ================================================== */}

                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            rotate: 5,
                            scale: 1.05,
                          }
                    }
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      relative
                      flex
                      h-[55px]
                      w-[55px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      border-[#D99A18]
                      bg-[#071635]
                      text-[#D99A18]
                      shadow-[0_5px_15px_rgba(7,22,53,0.10)]
                      transition-all
                      duration-500

                      group-hover:bg-[#D99A18]
                      group-hover:text-white
                      group-hover:shadow-[0_8px_22px_rgba(217,154,24,0.22)]

                      sm:h-[72px]
                      sm:w-[72px]
                      sm:shadow-[0_6px_18px_rgba(7,22,53,0.12)]
                    "
                  >
                    {/* INNER RING */}

                    <span
                      className="
                        absolute
                        inset-[4px]
                        rounded-full
                        border
                        border-[#D99A18]/30
                        transition-all
                        duration-500

                        group-hover:border-white/30

                        sm:inset-[5px]
                      "
                    />

                    <Icon
                      size={24}
                      strokeWidth={1.8}
                      className="
                        relative
                        z-10
                        transition-transform
                        duration-500
                        group-hover:scale-110

                        sm:h-[29px]
                        sm:w-[29px]
                      "
                    />
                  </motion.div>

                  {/* =================================================
                      TITLE
                  ================================================== */}

                  <h3
                    className="
                      mt-3
                      font-serif
                      text-[14px]
                      font-semibold
                      leading-[1.15]
                      tracking-[-0.02em]
                      text-[#071635]
                      transition-colors
                      duration-300

                      group-hover:text-[#B67A0B]

                      sm:mt-4
                      sm:text-[18px]
                      sm:leading-tight
                    "
                  >
                    {service.title}
                  </h3>

                  {/* =================================================
                      DESCRIPTION
                  ================================================== */}

                  <p
                    className="
                      mx-auto
                      mt-1.5
                      max-w-[145px]
                      text-[9px]
                      leading-[1.45]
                      text-[#071635]/60

                      sm:mt-2
                      sm:max-w-[250px]
                      sm:text-[11px]
                      sm:leading-[1.6]
                    "
                  >
                    {service.description}
                  </p>

                  {/* =================================================
                      GOLD DIVIDER
                  ================================================== */}

                  <div
                    className="
                      mt-auto
                      flex
                      w-full
                      items-center
                      justify-center
                      pt-2

                      sm:pt-3
                    "
                  >
                    <span
                      className="
                        h-px
                        w-8
                        bg-[#D99A18]/70
                        transition-all
                        duration-500

                        group-hover:w-20

                        sm:w-12
                      "
                    />
                  </div>

                  {/* =================================================
                      LEARN MORE
                  ================================================== */}

                  <div
                    className="
                      mt-1.5
                      flex
                      items-center
                      justify-center
                      gap-1
                      text-[8px]
                      font-bold
                      text-[#071635]
                      transition-colors
                      duration-300

                      group-hover:text-[#B67A0B]

                      sm:mt-2
                      sm:gap-2
                      sm:text-[11px]
                    "
                  >
                    <span>Learn More</span>

                    <span
                      className="
                        flex
                        items-center
                        justify-center
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      <ArrowRight
                        size={13}
                        strokeWidth={1.7}
                        className="sm:h-4 sm:w-4"
                      />
                    </span>
                  </div>

                  {/* =================================================
                      BOTTOM HOVER ACCENT
                  ================================================== */}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      bg-[#D99A18]
                      transition-all
                      duration-500

                      group-hover:w-16

                      sm:h-[3px]
                      sm:group-hover:w-20
                    "
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ===================================================
            EXPLORE ALL SERVICES
        ==================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-5
            flex
            flex-col
            items-center
            justify-center

            sm:mt-8
          "
        >
          {/* =================================================
              DECORATIVE LEFT FLOURISH
          ================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[16%]
              top-1/2
              hidden
              -translate-y-1/2
              items-center
              lg:flex
            "
          >
            <div
              className="
                h-8
                w-20
                rounded-[50%]
                border-t
                border-[#D99A18]/40
                rotate-[-8deg]
              "
            />

            <div
              className="
                absolute
                right-0
                top-1/2
                h-1.5
                w-1.5
                -translate-y-1/2
                rounded-full
                border
                border-[#D99A18]/50
              "
            />
          </div>

          {/* =================================================
              DECORATIVE RIGHT FLOURISH
          ================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-[16%]
              top-1/2
              hidden
              -translate-y-1/2
              items-center
              lg:flex
            "
          >
            <div
              className="
                h-8
                w-20
                rounded-[50%]
                border-t
                border-[#D99A18]/40
                rotate-[8deg]
              "
            />

            <div
              className="
                absolute
                left-0
                top-1/2
                h-1.5
                w-1.5
                -translate-y-1/2
                rounded-full
                border
                border-[#D99A18]/50
              "
            />
          </div>

          {/* =================================================
              CTA TEXT
          ================================================== */}

          <div
            className="
              flex
              items-center
              gap-1.5
              text-[9px]
              font-medium
              text-[#071635]

              sm:gap-2
              sm:text-xs
            "
          >
            <Sparkles
              size={10}
              className="text-[#D99A18] sm:h-3 sm:w-3"
            />

            <span className="whitespace-nowrap">
              Ready to plan your next journey?
            </span>

            <Sparkles
              size={10}
              className="text-[#D99A18] sm:h-3 sm:w-3"
            />
          </div>

          {/* =================================================
              EXPLORE BUTTON
          ================================================= */}

          <Link
            href="/services"
            className="
              group
              mt-2.5
              inline-flex
              min-h-[39px]
              items-center
              justify-center
              gap-2.5
              rounded-full
              bg-[#143A5E]
              px-5
              py-2
              text-[10px]
              font-bold
              text-white
              shadow-[0_7px_20px_rgba(7,22,53,0.12)]
              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#0B1F4D]
              hover:text-white
              hover:shadow-[0_12px_28px_rgba(7,22,53,0.18)]

              active:translate-y-0

              sm:mt-3
              sm:min-h-[46px]
              sm:gap-3
              sm:px-7
              sm:py-2.5
              sm:text-xs
            "
          >
            <span className="whitespace-nowrap text-white">
              Explore All Services
            </span>

            <span
              className="
                flex
                h-5
                w-5
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                text-white
                transition-all
                duration-300

                group-hover:translate-x-1
                group-hover:border-[#D99A18]
                group-hover:bg-[#D99A18]
                group-hover:text-white

                sm:h-6
                sm:w-6
              "
            >
              <ArrowRight
                size={11}
                strokeWidth={1.8}

                className="
                  sm:h-[13px]
                  sm:w-[13px]
                "
              />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}