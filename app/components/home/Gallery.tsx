"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  Camera,
  ChevronRight,
  Images,
} from "lucide-react";

type GalleryItem = {
  src: string;
  title: string;
  size: "large" | "normal";
};

const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery/vehicle-1.jpg",
    title: "Premium Travel",
    size: "normal",
  },
  {
    src: "/images/gallery/vehicle-2.jpg",
    title: "Comfortable Journey",
    size: "normal",
  },
  {
    src: "/images/gallery/vehicle-3.jpg",
    title: "Group Travel",
    size: "normal",
  },
  {
    src: "/images/gallery/vehicle-4.jpg",
    title: "Spacious Seating",
    size: "normal",
  },
  {
    src: "/images/gallery/tour-1.jpg",
    title: "South India Tours",
    size: "normal",
  },
  {
    src: "/images/gallery/tour-2.jpg",
    title: "Pilgrimage Journey",
    size: "normal",
  },
  {
    src: "/images/gallery/room-1.jpg",
    title: "Comfortable Stay",
    size: "normal",
  },
  {
    src: "/images/gallery/hall-1.jpg",
    title: "Event Hall",
    size: "normal",
  },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.985,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ctaVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function Gallery() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F7F5EF]

        -mt-5
        py-5

        sm:-mt-9
        sm:py-9

        lg:-mt-10
        lg:py-11

        xl:-mt-12
        xl:py-13
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.05, 1],
                opacity: [0.45, 0.7, 0.45],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-80
          w-80
          rounded-full
          bg-[#D99A18]/5
          blur-3xl

          sm:h-96
          sm:w-96
        "
      />

      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.04, 1],
                opacity: [0.35, 0.6, 0.35],
              }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-80
          w-80
          rounded-full
          bg-[#0B1F4D]/5
          blur-3xl

          sm:h-96
          sm:w-96
        "
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1400px]
          px-3.5

          sm:px-6

          lg:px-8

          xl:px-10
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : "hidden"
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : "visible"
          }
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={headerVariants}
          className="
            flex
            flex-col
            gap-3

            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-8
          "
        >
          {/* LEFT */}

          <div
            className="
              max-w-[680px]
              text-center

              lg:text-left
            "
          >
            {/* Eyebrow */}

            <motion.div
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -2,
                    }
              }
              className="
                mb-2.5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#D99A18]/20
                bg-[#D99A18]/[0.06]
                px-3
                py-1.5

                sm:mb-3.5
                sm:px-4
                sm:py-2
              "
            >
              <Camera
                size={13}
                strokeWidth={1.9}
                className="text-[#D99A18]"
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#D99A18]

                  sm:text-[10px]
                "
              >
                Our Gallery
              </span>
            </motion.div>

            {/* Heading */}

            <h2
              className="
                text-[27px]
                font-extrabold
                leading-[1.05]
                tracking-[-0.04em]
                text-[#071635]

                sm:text-[36px]

                md:text-[42px]

                lg:text-[46px]

                xl:text-[50px]
              "
            >
              See The Journey

              <span
                className="
                  block
                  text-[#D99A18]
                "
              >
                Before You Travel
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-2.5
                max-w-[600px]
                text-[10.5px]
                leading-5
                text-[#071635]/50

                sm:mt-3.5
                sm:text-xs
                sm:leading-6

                lg:mx-0
                lg:text-[13px]
              "
            >
              Explore our vehicles, tours, accommodation,
              pilgrimage journeys and religious event
              arrangements.
            </p>
          </div>

          {/* VIEW GALLERY */}

          <Link
            href="/gallery"
            className="
              group
              mx-auto
              inline-flex
              min-h-10
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-[#0B1F4D]/10
              bg-white
              px-5
              py-2.5
              text-[11px]
              font-bold
              text-[#0B1F4D]
              shadow-[0_4px_16px_rgba(7,22,53,0.05)]
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-[#D99A18]/30
              hover:text-[#D99A18]

              sm:min-h-11
              sm:px-5
              sm:text-sm

              lg:mx-0
            "
          >
            <span className="whitespace-nowrap">
              View Full Gallery
            </span>

            <ArrowRight
              size={15}
              strokeWidth={2}
              className="
                shrink-0
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.div>

        {/* =====================================================
            GALLERY GRID
        ====================================================== */}

        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion
                  ? 0
                  : 0.055,
              },
            },
          }}
          initial={
            shouldReduceMotion
              ? false
              : "hidden"
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : "visible"
          }
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="
            mt-4
            grid
            grid-cols-2
            gap-2

            sm:mt-6
            sm:grid-cols-3
            sm:gap-3

            md:gap-3.5

            lg:mt-7
            lg:grid-cols-4
            lg:gap-4
          "
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.src}
              variants={
                shouldReduceMotion
                  ? undefined
                  : itemVariants
              }
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -3,
                    }
              }
              className="
                group
                relative
                aspect-[1.18/1]
                w-full
                overflow-hidden
                rounded-[10px]
                bg-[#071635]
                shadow-[0_5px_18px_rgba(7,22,53,0.08)]
                transition-shadow
                duration-300

                hover:shadow-[0_10px_28px_rgba(7,22,53,0.14)]

                sm:aspect-[1.35/1]
                sm:rounded-xl
              "
            >
              {/* Image */}

              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="
                  (max-width: 639px) 50vw,
                  (max-width: 1023px) 33vw,
                  25vw
                "
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.06]
                "
              />

              {/* Dark overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#071635]/90
                  via-[#071635]/10
                  to-transparent
                  opacity-75
                  transition-opacity
                  duration-500
                  group-hover:opacity-95
                "
              />

              {/* Subtle top highlight */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-16
                  bg-gradient-to-b
                  from-white/10
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Content */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  p-2

                  sm:p-3

                  lg:p-3.5
                "
              >
                <div
                  className="
                    flex
                    items-end
                    justify-between
                    gap-2
                  "
                >
                  {/* Text */}

                  <div className="min-w-0">
                    <h3
                      className="
                        truncate
                        text-[9.5px]
                        font-bold
                        leading-4
                        text-white

                        sm:text-xs

                        lg:text-sm
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-0.5
                        truncate
                        text-[7.5px]
                        leading-3
                        text-white/45

                        sm:text-[9px]
                      "
                    >
                      South India Travel
                    </p>
                  </div>

                  {/* Arrow */}

                  <motion.span
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: 1.08,
                          }
                    }
                    className="
                      flex
                      h-[22px]
                      w-[22px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-white/10
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-300

                      group-hover:bg-[#D99A18]

                      sm:h-7
                      sm:w-7

                      lg:h-8
                      lg:w-8
                    "
                  >
                    <ChevronRight
                      size={13}
                      strokeWidth={2}
                    />
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : "hidden"
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : "visible"
          }
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={ctaVariants}
          className="
            relative
            mt-5
            flex
            flex-col
            gap-3
            overflow-hidden
            rounded-[16px]
            bg-[#0B1F4D]
            px-3.5
            py-3.5
            shadow-[0_10px_30px_rgba(7,22,53,0.10)]

            sm:mt-6
            sm:rounded-[18px]
            sm:px-6
            sm:py-5

            lg:mt-7
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:px-8
            lg:py-5
          "
        >
          {/* Decorative glow */}

          <motion.div
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    scale: [1, 1.06, 1],
                  }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -right-20
              -top-24
              h-52
              w-52
              rounded-full
              bg-[#D99A18]/10
              blur-3xl
            "
          />

          {/* Left */}

          <div
            className="
              relative
              z-10
              flex
              items-center
              gap-2.5
            "
          >
            {/* Icon */}

            <div
              className="
                hidden
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/10

                sm:flex
              "
            >
              <Images
                size={17}
                strokeWidth={1.8}
                className="text-[#F0C45C]"
              />
            </div>

            {/* Text */}

            <div>
              <p
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#F0C45C]

                  sm:text-[9px]
                "
              >
                Plan Your Trip
              </p>

              <h3
                className="
                  mt-0.5
                  text-[15px]
                  font-bold
                  leading-5
                  text-white

                  sm:text-lg
                "
              >
                Like what you see?
              </h3>

              <p
                className="
                  mt-0.5
                  text-[8.5px]
                  leading-4
                  text-white/40

                  sm:text-[10px]
                  sm:leading-5
                "
              >
                Let us arrange your next South India journey.
              </p>
            </div>
          </div>

          {/* CTA */}

          <Link
            href="/contact"
            className="
              group
              relative
              z-10
              inline-flex
              min-h-10
              w-full
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#D99A18]
              px-5
              py-2.5
              text-[11px]
              font-bold
              text-white
              shadow-[0_5px_18px_rgba(0,0,0,0.12)]
              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-[#F0C45C]
              hover:text-[#071635]

              active:translate-y-0

              sm:w-auto
              sm:min-h-11
              sm:px-6
              sm:text-sm
            "
          >
            <span className="whitespace-nowrap">
              Start Planning
            </span>

            <ArrowRight
              size={15}
              strokeWidth={2}
              className="
                shrink-0
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}