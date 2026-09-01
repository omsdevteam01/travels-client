"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  BusFront,
  Check,
  Headphones,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const reasons = [
  {
    icon: BusFront,
    title: "Wide Range of Vehicles",
    description:
      "Cars, vans and larger vehicles available for family trips, tours, pilgrimages and group travel.",
  },
  {
    icon: MapPinned,
    title: "South India Travel",
    description:
      "Travel arrangements across destinations throughout South India with flexible trip planning.",
  },
  {
    icon: Users,
    title: "Group Travel Support",
    description:
      "Practical arrangements for families, friends, pilgrimage groups and larger travelling groups.",
  },
  {
    icon: ShieldCheck,
    title: "Comfort & Convenience",
    description:
      "We coordinate the important details so your journey can be more comfortable and organised.",
  },
];

const highlights = [
  "Cars & vans",
  "Tour arrangements",
  "Pilgrimage travel",
  "Rooms & halls",
  "Kitchen arrangements",
  "Religious programmes",
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -25,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 25,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const cardsContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function WhyChooseUs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white

        -mt-4
        pb-7
        pt-5

        sm:-mt-6
        sm:pb-11
        sm:pt-7

        md:-mt-7
        md:pb-[52px]
        md:pt-8

        lg:-mt-8
        lg:pb-[60px]
        lg:pt-9
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-64
          w-64
          rounded-full
          bg-[#D99A18]/[0.035]
          blur-3xl

          lg:-left-40
          lg:h-80
          lg:w-80
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-10
          h-72
          w-72
          rounded-full
          bg-[#0B1F4D]/[0.035]
          blur-3xl

          lg:-right-40
          lg:h-96
          lg:w-96
        "
      />

      {/* =====================================================
          DECORATIVE GOLD LINE
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        initial={
          shouldReduceMotion
            ? false
            : {
                scaleX: 0,
                opacity: 0,
              }
        }
        whileInView={
          shouldReduceMotion
            ? undefined
            : {
                scaleX: 1,
                opacity: 1,
              }
        }
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[2px]
          w-20
          -translate-x-1/2
          origin-center
          bg-[#D99A18]/60
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
          max-w-[1320px]
          px-3.5

          sm:px-6

          lg:px-8

          xl:px-10
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            grid
            gap-5

            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-end
            lg:gap-10
          "
        >
          {/* ===================================================
              LEFT HEADER
          ==================================================== */}

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
              amount: 0.15,
            }}
            variants={fadeLeft}
          >
            {/* Eyebrow */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: -8,
                      scale: 0.95,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }
              }
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              className="
                mb-3
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-[#D99A18]/20
                bg-[#F7F5EF]
                px-3
                py-1.5
              "
            >
              <motion.span
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotate: [0, 8, -8, 0],
                      }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                className="flex"
              >
                <Sparkles
                  size={12}
                  strokeWidth={1.8}
                  className="text-[#D99A18]"
                />
              </motion.span>

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#C1840C]

                  sm:text-[9px]
                "
              >
                Why Choose Us
              </span>
            </motion.div>

            {/* Heading */}

            <h2
              className="
                max-w-[570px]
                text-[28px]
                font-extrabold
                leading-[1]
                tracking-[-0.05em]
                text-[#071635]

                sm:text-[38px]

                md:text-[42px]

                lg:text-[45px]

                xl:text-[48px]
              "
            >
              One Travel Partner

              <span className="block text-[#D99A18]">
                For The Whole Journey
              </span>
            </h2>

            {/* Gold accent */}

            <div className="mt-3 flex items-center gap-2">
              <span className="h-px w-8 bg-[#D99A18]/50" />

              <motion.span
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotate: [45, 135, 45],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  h-1.5
                  w-1.5
                  rotate-45
                  border
                  border-[#D99A18]
                "
              />

              <span className="h-px w-8 bg-[#D99A18]/50" />
            </div>
          </motion.div>

          {/* ===================================================
              RIGHT DESCRIPTION
          ==================================================== */}

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
              amount: 0.15,
            }}
            variants={fadeRight}
            className="lg:pb-1"
          >
            <p
              className="
                max-w-[650px]
                text-[10.5px]
                leading-[1.7]
                text-[#071635]/55

                sm:text-xs
                sm:leading-6

                lg:ml-auto
                lg:text-[13px]
                lg:leading-6
              "
            >
              From choosing the right vehicle to arranging
              accommodation and group facilities, we bring the
              important parts of your journey together in one
              place.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            REASONS
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
            amount: 0.06,
          }}
          variants={cardsContainer}
          className="
            mt-5
            grid
            grid-cols-1
            gap-2

            sm:grid-cols-2
            sm:gap-3

            lg:mt-7
            lg:grid-cols-4
            lg:gap-3.5
          "
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                variants={
                  shouldReduceMotion
                    ? undefined
                    : cardVariants
                }
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -5,
                      }
                }
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[13px]
                  border
                  border-[#0B1F4D]/[0.07]
                  bg-[#F9F8F4]
                  p-3.5
                  transition-all
                  duration-300

                  hover:border-[#D99A18]/25
                  hover:bg-white
                  hover:shadow-[0_12px_30px_rgba(7,22,53,0.07)]

                  sm:p-[18px]

                  lg:p-[18px]
                "
              >
                {/* Top accent */}

                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-0
                    h-[2px]
                    origin-left
                    scale-x-0
                    bg-[#D99A18]
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />

                {/* Icon */}

                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 1.08,
                          rotate: -3,
                        }
                  }
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-[9px]
                    bg-[#0B1F4D]
                    text-[#F0C45C]
                    transition-all
                    duration-300

                    group-hover:bg-[#D99A18]
                    group-hover:text-white

                    sm:h-10
                    sm:w-10
                  "
                >
                  <Icon
                    size={18}
                    strokeWidth={1.7}
                  />
                </motion.div>

                {/* Title */}

                <h3
                  className="
                    mt-3.5
                    text-[13px]
                    font-bold
                    leading-5
                    text-[#071635]
                    transition-colors
                    duration-300
                    group-hover:text-[#D99A18]

                    sm:text-sm
                  "
                >
                  {reason.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-1.5
                    text-[10px]
                    leading-[1.6]
                    text-[#071635]/50

                    sm:text-[11px]
                    sm:leading-5
                  "
                >
                  {reason.description}
                </p>

                {/* Bottom accent */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[#D99A18]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* =====================================================
            LOWER CONTENT
        ====================================================== */}

        <div
          className="
            mt-5
            grid
            items-start
            gap-2.5

            lg:mt-7
            lg:grid-cols-[1.18fr_0.82fr]
            lg:gap-3.5
          "
        >
          {/* ===================================================
              LEFT SIDE
          ==================================================== */}

          <div className="flex flex-col gap-3">
            {/* =================================================
                MAIN CTA CARD
            ================================================== */}

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
              variants={fadeUp}
              className="
                group
                relative
                flex
                min-h-[255px]
                items-center
                justify-center
                overflow-hidden
                rounded-[15px]
                bg-[#0B1F4D]
                px-4
                py-6

                sm:min-h-[300px]
                sm:px-8
                sm:py-8

                lg:min-h-[390px]
                lg:px-10
              "
            >
              {/* =================================================
                  BACKGROUND CIRCLES
              ================================================== */}

              <motion.div
                aria-hidden="true"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.05, 1],
                        rotate: [0, 4, 0],
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
                  -right-24
                  -top-28
                  h-48
                  w-48

                  sm:-right-20
                  sm:-top-24
                  sm:h-56
                  sm:w-56
                  rounded-full
                  border-[28px]
                  border-[#D99A18]/[0.08]
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-20
                  -left-24
                  h-40
                  w-40

                  sm:-bottom-24
                  sm:-left-20
                  sm:h-48
                  sm:w-48
                  rounded-full
                  border-[22px]
                  border-white/[0.035]
                "
              />

              {/* =================================================
                  DOT PATTERN
              ================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-5
                  right-6
                  h-12
                  w-16
                  opacity-20
                "
              >
                <div
                  className="
                    h-full
                    w-full
                    bg-[radial-gradient(circle,#F0C45C_1px,transparent_1px)]
                    [background-size:9px_9px]
                  "
                />
              </div>

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div className="relative z-10 w-full max-w-[700px] text-center">
                {/* Eyebrow */}

                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [0, -2, 0],
                        }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-1.5
                  "
                >
                  <Headphones
                    size={13}
                    strokeWidth={1.8}
                    className="text-[#F0C45C]"
                  />

                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#F0C45C]

                      sm:text-[9px]
                    "
                  >
                    Complete Travel Support
                  </span>
                </motion.div>

                {/* Heading */}

                <h3
                  className="
                    mt-3
                    text-[21px]
                    font-extrabold
                    leading-[1.15]
                    tracking-[-0.035em]
                    text-white

                    sm:text-[28px]

                    lg:text-[31px]
                  "
                >
                  Tell us what you need.

                  <span className="mt-1 block text-[#D99A18]">
                    We help arrange the rest.
                  </span>
                </h3>

                {/* Description */}

                <p
                  className="
                    mx-auto
                    mt-2.5
                    max-w-[620px]
                    text-[9.5px]
                    leading-[1.55]
                    text-white/45

                    sm:text-xs
                    sm:leading-6
                  "
                >
                  Whether it is a simple family trip or a large
                  spiritual gathering, we can help coordinate the
                  travel and facilities required for your journey.
                </p>

                {/* CTA */}

                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 1.03,
                        }
                  }
                  whileTap={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 0.98,
                        }
                  }
                  className="inline-flex"
                >
                  <Link
                    href="/contact"
                    className="
                      group
                      mt-4
                      inline-flex
                      min-h-10
                      items-center
                      gap-2
                      rounded-full
                      bg-[#D99A18]
                      px-5
                      py-2.5
                      text-[10px]
                      font-bold
                      text-white
                      shadow-[0_6px_20px_rgba(0,0,0,0.14)]
                      transition-all
                      duration-300

                      hover:bg-[#F0C45C]
                      hover:text-[#071635]

                      sm:text-xs
                    "
                  >
                    Plan My Journey

                    <ArrowRight
                      size={14}
                      strokeWidth={2}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* =================================================
                TRUST STRIP
            ================================================== */}

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
                amount: 0.15,
              }}
              variants={fadeUp}
              className="
                flex
                min-h-[52px]
                items-center
                justify-between
                gap-2
                rounded-[13px]
                border
                border-[#0B1F4D]/[0.07]
                bg-white
                px-3
                py-2.5
                shadow-[0_4px_16px_rgba(7,22,53,0.025)]

                sm:px-4
              "
            >
              {/* Left */}

              <div className="flex min-w-0 items-center gap-2.5">
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 1.08,
                        }
                  }
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B1F4D]
                  "
                >
                  <ShieldCheck
                    size={15}
                    strokeWidth={1.8}
                    className="text-[#F0C45C]"
                  />
                </motion.div>

                <p
                  className="
                    text-[8.5px]
                    font-semibold
                    leading-4
                    text-[#071635]/55

                    sm:text-[10px]

                    lg:text-[11px]
                  "
                >
                  Travel arrangements made simple and organised.
                </p>
              </div>

              {/* About */}

              <Link
                href="/about"
                className="
                  group
                  inline-flex
                  shrink-0
                  items-center
                  gap-1
                  text-[9px]
                  font-bold
                  text-[#0B1F4D]
                  transition-colors
                  hover:text-[#D99A18]

                  sm:text-[10px]
                "
              >
                About Us

                <ArrowRight
                  size={12}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>
          </div>

          {/* ===================================================
              RIGHT ARRANGEMENTS CARD
          ==================================================== */}

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
            variants={fadeRight}
            className="
              relative
              h-fit
              overflow-hidden
              rounded-[15px]
              border
              border-[#0B1F4D]/[0.07]
              bg-[#F7F5EF]
              p-3.5

              sm:p-5

              lg:p-6
            "
          >
            {/* Top accent */}

            <div
              aria-hidden="true"
              className="
                absolute
                left-0
                top-0
                h-[2px]
                w-20
                bg-[#D99A18]
              "
            />

            {/* Header */}

            <div>
              <p
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#D99A18]

                  sm:text-[9px]
                "
              >
                What We Can Arrange
              </p>

              <h3
                className="
                  mt-1.5
                  text-[18px]
                  font-extrabold
                  tracking-[-0.025em]
                  text-[#071635]

                  sm:text-xl
                "
              >
                Your journey, organised.
              </h3>
            </div>

            {/* Divider */}

            <div className="mt-3 h-px w-full bg-[#0B1F4D]/[0.07]" />

            {/* Highlights */}

            <div className="mt-2.5 space-y-1.5">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: 10,
                        }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          x: 0,
                        }
                  }
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: shouldReduceMotion
                      ? 0
                      : index * 0.06,
                    ease: "easeOut",
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          x: 4,
                        }
                  }
                  className="
                    group
                    flex
                    items-center
                    gap-2.5
                    rounded-[9px]
                    bg-white
                    px-2.5
                    py-1.5
                    transition-all
                    duration-300
                    hover:shadow-sm

                    sm:py-2.5
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
                      bg-[#D99A18]/10
                      transition-colors
                      duration-300
                      group-hover:bg-[#D99A18]
                    "
                  >
                    <Check
                      size={11}
                      strokeWidth={2.7}
                      className="
                        text-[#D99A18]
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    />
                  </span>

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      text-[#071635]/65

                      sm:text-[11px]

                      lg:text-xs
                    "
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom message */}

            <div
              className="
                mt-2.5
                rounded-[9px]
                border
                border-[#D99A18]/15
                bg-[#D99A18]/[0.045]
                px-3
                py-2.5
              "
            >
              <p
                className="
                  text-[9px]
                  leading-4
                  text-[#071635]/50

                  sm:text-[10px]
                "
              >
                One place for your travel, stay and group
                arrangements.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}