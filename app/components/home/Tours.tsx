"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Sparkles,
  Clock3,
} from "lucide-react";

const tours = [
  {
    title: "Coorg",
    subtitle: "Nature & Coffee",
    description:
      "Explore lush coffee plantations, waterfalls, misty hills and peaceful countryside in Coorg.",
    image: "/images/tours/coorg.png",
    duration: "2–3 Days",
    href: "/tours/coorg-nature-tour",
  },
  {
    title: "Munnar",
    subtitle: "Tea Hills & Nature",
    description:
      "Enjoy beautiful tea gardens, valleys, waterfalls and cool mountain views in Munnar.",
    image: "/images/tours/munnar.png",
    duration: "2–3 Days",
    href: "/tours/munnar-thekkady-tour",
  },
  {
    title: "Alleppey",
    subtitle: "Backwaters & Relaxation",
    description:
      "Cruise through serene backwaters, palm-lined canals and peaceful village landscapes.",
    image: "/images/tours/alleppey.png",
    duration: "2–3 Days",
    href: "/tours/alleppey-houseboat-tour",
  },
];

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Tours() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        mt-1
        overflow-hidden
        bg-[#F8F4EA]
        pt-3
        pb-7
        sm:mt-1
        sm:pt-4
        sm:pb-8
        lg:mt-0
        lg:pt-5
        lg:pb-9
        xl:mt-0
        xl:pt-6
        xl:pb-10
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND DECORATION
      ====================================================== */}

      {/* Top-right ring */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-28
          -top-32
          h-[320px]
          w-[320px]
          rounded-full
          border-[40px]
          border-[#D99A18]/[0.04]
          sm:h-[420px]
          sm:w-[420px]
          sm:border-[48px]
        "
      />

      {/* Bottom-left ring */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-24
          h-44
          w-44
          rounded-full
          border-[18px]
          border-[#D99A18]/[0.07]
          sm:h-52
          sm:w-52
        "
      />

      {/* Small dot decoration */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-16
          left-3
          hidden
          h-20
          w-20
          opacity-30
          lg:block
        "
        style={{
          backgroundImage:
            "radial-gradient(#D99A18 1.1px, transparent 1.1px)",
          backgroundSize: "11px 11px",
        }}
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1240px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

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
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            max-w-[760px]
            text-center
          "
        >
          {/* =================================================
              EYEBROW
          ================================================== */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#D99A18]/30
              bg-white/50
              px-3.5
              py-1.5
              text-[8px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#D99A18]
              sm:px-4
              sm:py-2
              sm:text-[9px]
            "
          >
            <Sparkles size={12} />

            Discover South India
          </div>

          {/* =================================================
              HEADING
          ================================================== */}

          <h2
            className="
              mt-2.5
              text-[34px]
              font-extrabold
              leading-[0.94]
              tracking-[-0.045em]
              text-[#071635]
              sm:mt-4
              sm:text-5xl
              md:text-6xl
              lg:text-[58px]
            "
          >
            Journeys Worth

            <span className="block text-[#D99A18]">
              Remembering
            </span>
          </h2>

          {/* =================================================
              DECORATIVE DIVIDER
          ================================================== */}

          <div
            className="
              mt-3
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-10
                bg-[#D99A18]
                sm:w-12
              "
            />

            <span
              className="
                flex
                h-4
                w-4
                rotate-45
                items-center
                justify-center
                border
                border-[#D99A18]/60
              "
            >
              <span className="h-1 w-1 bg-[#D99A18]" />
            </span>

            <span
              className="
                h-px
                w-10
                bg-[#D99A18]
                sm:w-12
              "
            />
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              mx-auto
              mt-2.5
              max-w-[650px]
              text-[10px]
              leading-5
              text-[#071635]/65
              sm:mt-4
              sm:text-xs
              sm:leading-6
              lg:text-sm
              lg:leading-6
            "
          >
            Explore some of the most beautiful spiritual,
            cultural and heritage destinations across South
            India.
          </p>
        </motion.div>

        {/* =====================================================
            TOUR CARDS
        ====================================================== */}

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
                staggerChildren: shouldReduceMotion ? 0 : 0.08,
              },
            },
          }}
          className="
            mt-5
            grid
            grid-cols-1
            gap-3
            sm:mt-7
            sm:grid-cols-2
            sm:gap-5
            lg:mt-8
            lg:grid-cols-3
            lg:gap-5
          "
        >
          {tours.map((tour) => (
            <motion.article
              key={tour.title}
              variants={cardVariants}
              className="h-full"
            >
              <Link
                href={tour.href}
                className="
                  group
                  relative
                  block
                  h-full
                  overflow-hidden
                  rounded-[18px]
                  bg-[#14345E]
                  shadow-[0_7px_22px_rgba(7,22,53,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_16px_35px_rgba(7,22,53,0.14)]
                "
              >
                {/* =================================================
                    IMAGE AREA
                ================================================== */}

                <div
                  className="
                    relative
                    h-[200px]
                    overflow-hidden
                    bg-[#0B1F4D]
                    sm:h-[230px]
                    lg:h-[240px]
                  "
                >
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? false
                        : { scale: 1.06, opacity: 0.85 }
                    }
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={tour.image}
                      alt={`${tour.title} tour`}
                      fill
                    sizes="
                      (max-width: 639px) 100vw,
                      (max-width: 1023px) 50vw,
                      33vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                    />
                  </motion.div>

                  {/* Dark gradient */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#14345E]
                      via-[#14345E]/20
                      to-transparent
                    "
                  />

                  {/* =================================================
                      DURATION
                  ================================================== */}

                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-white/15
                      bg-[#14345E]/75
                      px-3
                      py-1.5
                      text-[9px]
                      font-bold
                      text-white
                      backdrop-blur-md
                      sm:text-[10px]
                    "
                  >
                    <Clock3
                      size={12}
                      strokeWidth={1.8}
                      className="text-[#F0C45C]"
                    />

                    {tour.duration}
                  </div>

                  {/* =================================================
                      LOCATION
                  ================================================== */}

                  <div
                    className="
                      absolute
                      right-4
                      top-4
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-[#14345E]/70
                      backdrop-blur-md
                      transition-all
                      duration-300
                      group-hover:bg-white
                    "
                  >
                    <MapPin
                      size={15}
                      strokeWidth={2}
                      className="
                        text-[#F0C45C]
                        transition-colors
                        duration-300
                        group-hover:text-[#D99A18]
                      "
                    />
                  </div>

                  {/* =================================================
                      IMAGE TITLE
                  ================================================== */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      px-5
                      pb-5
                      text-center
                    "
                  >
                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-[#F0C45C]
                        sm:text-[10px]
                      "
                    >
                      {tour.subtitle}
                    </p>

                    <h3
                      className="
                        mt-1
                        text-[24px]
                        font-extrabold
                        leading-tight
                        tracking-[-0.025em]
                        text-white
                        sm:text-[26px]
                      "
                    >
                      {tour.title}
                    </h3>
                  </div>
                </div>

                {/* =================================================
                    CARD CONTENT
                ================================================== */}

                <div
                  className="
                    bg-[#14345E]
                    px-5
                    pb-5
                    pt-3.5
                    text-center
                    sm:px-6
                    sm:pb-5
                  "
                >
                  {/* Description */}

                  <p
                    className="
                      mx-auto
                      max-w-[340px]
                      text-[11px]
                      leading-[1.6]
                      text-white/100
                      sm:text-[12px]
                      sm:leading-5
                    "
                  >
                    {tour.description}
                  </p>

                  {/* Divider */}

                  <div
                    className="
                      mx-auto
                      mt-3
                      h-px
                      w-full
                      bg-white/10
                    "
                  />

                  {/* Footer */}

                  <div
                    className="
                      mt-3
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        font-semibold
                        text-white/100
                        sm:text-[10px]
                      "
                    >
                      South India Tour
                    </span>

                    <span
                      className="
                        flex
                        items-center
                        gap-1.5
                        text-[10px]
                        font-bold
                        text-[#F0C45C]
                        sm:text-[11px]
                      "
                    >
                      Explore

                      <ArrowRight
                        size={13}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </span>
                  </div>
                </div>

                {/* =================================================
                    GOLD HOVER LINE
                ================================================== */}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-0
                    bg-[#D99A18]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* =====================================================
            BOTTOM NAVIGATION
        ====================================================== */}

        <div
          className="
            relative
            mt-5
            flex
            flex-col
            items-center
            justify-center
            gap-4
            sm:mt-6
            lg:flex-row
            lg:justify-between
          "
        >
          {/* =================================================
              LEFT SPACER
              Keeps desktop layout balanced
          ================================================== */}

          <div
            className="
              hidden
              w-[150px]
              lg:block
            "
          />

          {/* =================================================
              CAROUSEL INDICATORS
          ================================================== */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-2
            "
            aria-hidden="true"
          >
            <span
              className="
                h-1.5
                w-6
                rounded-full
                bg-[#D8D4CA]
              "
            />

            <span
              className="
                h-1.5
                w-8
                rounded-full
                bg-[#D99A18]
              "
            />

            <span
              className="
                h-1.5
                w-6
                rounded-full
                bg-[#D8D4CA]
              "
            />
          </div>

          {/* =================================================
              VIEW ALL TOURS
          ================================================== */}

          <div className="flex w-[150px] justify-center lg:justify-end">
            <Link
              href="/tours"
              className="
                group
                inline-flex
                min-h-10
                items-center
                gap-2
                rounded-full
                border-2
                border-[#0B1F4D]
                bg-white/50
                px-5
                py-2.5
                text-[10px]
                font-bold
                text-[#0B1F4D]
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#0B1F4D]
                hover:text-white
                sm:text-[11px]
              "
            >
              View All Tours

              <ArrowRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}