"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  CarFront,
  Check,
  Headphones,
  MapPin,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const options = [
  {
    icon: CarFront,
    title: "Vehicle Booking",
    description: "Cars, vans and group vehicles",
  },
  {
    icon: MapPin,
    title: "Tour Planning",
    description: "South India tour arrangements",
  },
  {
    icon: Users,
    title: "Group Travel",
    description: "Family and pilgrimage groups",
  },
  {
    icon: CalendarCheck,
    title: "Event Arrangements",
    description: "Rooms, halls and facilities",
  },
];

const benefits = [
  "Flexible travel arrangements",
  "Vehicle options for different group sizes",
  "Pilgrimage and tour planning",
  "Accommodation and event support",
];

/* =========================================================
   CONTACT DETAILS — FROM .env
========================================================= */

const phone1 = process.env.NEXT_PUBLIC_PHONE_1 || "";
const phone2 = process.env.NEXT_PUBLIC_PHONE_2 || "";
const phone3 = process.env.NEXT_PUBLIC_PHONE_3 || "";
const officePhone = process.env.NEXT_PUBLIC_OFFICE_PHONE || "";

const locations = [
  process.env.NEXT_PUBLIC_LOCATION_1,
  process.env.NEXT_PUBLIC_LOCATION_2,
  process.env.NEXT_PUBLIC_LOCATION_3,
  process.env.NEXT_PUBLIC_LOCATION_4,
].filter(Boolean).join(" • ");

const officeAddress =
  process.env.NEXT_PUBLIC_OFFICE_ADDRESS || "";

/* =========================================================
   ANIMATION
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
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -28,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 28,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const optionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function BookingCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F7F5EF]

        -mt-4
        pb-7
        pt-5

        sm:-mt-6
        sm:pb-12
        sm:pt-7

        md:-mt-7
        md:pb-14
        md:pt-8

        lg:-mt-8
        lg:pb-16
        lg:pt-9
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
                scale: [1, 1.04, 1],
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
          -top-28
          left-1/2
          h-80
          w-80
          -translate-x-1/2
          rounded-full
          bg-[#D99A18]/[0.035]
          blur-3xl

          sm:h-[420px]
          sm:w-[420px]

          lg:h-[500px]
          lg:w-[500px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-28
          hidden
          h-72
          w-72
          rounded-full
          border-[32px]
          border-[#0B1F4D]/[0.025]

          sm:block
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-28
          top-20
          hidden
          h-72
          w-72
          rounded-full
          border-[32px]
          border-[#D99A18]/[0.035]

          sm:block
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
            MAIN PREMIUM CARD
        ====================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 25,
                  scale: 0.985,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.08,
          }}
          transition={{
            duration: 0.75,
            ease: "easeOut",
          }}
          className="
            relative
            overflow-hidden
            rounded-[18px]
            bg-[#143A5E]
            shadow-[0_18px_50px_rgba(7,22,53,0.12)]

            sm:rounded-[24px]

            lg:rounded-[28px]
          "
        >
          {/* =================================================
              DECORATIVE RINGS
          ================================================== */}

          <motion.div
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    rotate: [0, 5, 0],
                    scale: [1, 1.03, 1],
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
              -right-28
              -top-28
              h-64
              w-64
              rounded-full
              border-[30px]
              border-[#D99A18]/[0.075]

              sm:-right-32
              sm:-top-32
              sm:h-80
              sm:w-80
              sm:border-[38px]

              lg:h-96
              lg:w-96
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-32
              -left-28
              h-56
              w-56
              rounded-full
              border-[24px]
              border-white/[0.025]

              sm:h-72
              sm:w-72
            "
          />

          {/* =================================================
              TOP GOLD LINE
          ================================================== */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    scaleX: 0,
                  }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : {
                    scaleX: 1,
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
              absolute
              left-0
              right-0
              top-0
              z-20
              h-[2px]
              origin-left
              bg-gradient-to-r
              from-transparent
              via-[#D99A18]
              to-transparent
            "
          />

          {/* =================================================
              CONTENT GRID
          ================================================== */}

          <div
            className="
              relative
              z-10
              grid

              lg:grid-cols-[1.08fr_0.92fr]
            "
          >
            {/* =================================================
                LEFT CONTENT
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
                amount: 0.12,
              }}
              variants={fadeLeft}
              className="
                relative
                z-10
                flex
                flex-col
                justify-center
                px-4
                py-7

                sm:px-8
                sm:py-10

                md:px-10
                md:py-11

                lg:px-12
                lg:py-14

                xl:px-14
                xl:py-16
              "
            >
              {/* =================================================
                  BADGE
              ================================================== */}

              <motion.div
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: -8,
                        scale: 0.94,
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
                  inline-flex
                  w-fit
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-[#D99A18]/20
                  bg-[#D99A18]/10
                  px-3
                  py-1.5

                  sm:gap-2
                  sm:px-4
                  sm:py-2
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
                    size={13}
                    strokeWidth={1.8}
                    className="text-[#F0C45C]"
                  />
                </motion.span>

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
                  Start Your Journey
                </span>
              </motion.div>

              {/* =================================================
                  HEADING
              ================================================== */}

              <h2
                className="
                  mt-4
                  max-w-[650px]
                  text-[28px]
                  font-extrabold
                  leading-[1.02]
                  tracking-[-0.05em]
                  text-white

                  sm:mt-5
                  sm:text-[40px]

                  md:text-[46px]

                  lg:mt-6
                  lg:text-[50px]

                  xl:text-[54px]
                "
              >
                Tell Us Where You Want

                <span
                  className="
                    mt-1.5
                    block
                    text-[#D99A18]

                    sm:mt-2
                  "
                >
                  To Go.
                </span>
              </h2>

              {/* =================================================
                  DIVIDER
              ================================================== */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  gap-2.5
                "
              >
                <span
                  className="
                    h-px
                    w-10
                    bg-[#D99A18]/50
                  "
                />

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

                <span
                  className="
                    h-px
                    w-10
                    bg-[#D99A18]/50
                  "
                />
              </div>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <p
                className="
                  mt-3.5
                  max-w-[620px]
                  text-[10.5px]
                  leading-[1.7]
                  text-white/70

                  sm:mt-5
                  sm:text-xs
                  sm:leading-6

                  lg:text-[13px]
                  lg:leading-6
                "
              >
                Whether you need a vehicle, a complete South
                India tour, a pilgrimage arrangement or support
                for a religious programme, we can help organise
                your journey.
              </p>

              {/* =================================================
                  BENEFITS
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
                }}
                variants={staggerContainer}
                className="
                  mt-4
                  grid
                  grid-cols-1
                  gap-1.5

                  sm:mt-6
                  sm:grid-cols-2
                  sm:gap-x-6
                  sm:gap-y-2.5
                "
              >
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit}
                    variants={
                      shouldReduceMotion
                        ? undefined
                        : fadeUp
                    }
                    className="
                      flex
                      items-center
                      gap-2
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
                        bg-[#D99A18]/10

                        sm:h-6
                        sm:w-6
                      "
                    >
                      <Check
                        size={11}
                        strokeWidth={2.5}
                        className="text-[#F0C45C]"
                      />
                    </span>

                    <span
                      className="
                        text-[9px]
                        font-medium
                        leading-4
                        text-white/70

                        sm:text-[10px]

                        lg:text-[11px]
                      "
                    >
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* =================================================
                  ACTION BUTTONS
              ================================================== */}

              <div
                className="
                  relative
                  z-30
                  mt-5
                  flex
                  w-full
                  flex-col
                  items-stretch
                  gap-2.5

                  sm:mt-7
                  sm:flex-row
                  sm:items-center
                  sm:flex-wrap
                "
              >
                {/* =================================================
                    MAKE AN ENQUIRY
                ================================================== */}

                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -2,
                        }
                  }
                  whileTap={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 0.98,
                        }
                  }
                  className="relative z-30 w-full sm:w-auto"
                >
                  <Link
                    href="/contact"
                    className="
                      group
                      relative
                      z-30
                      inline-flex
                      min-h-11
                      w-full
                      shrink-0
                      items-center
                      justify-center
                      gap-2
                      whitespace-nowrap
                      rounded-full
                      bg-[#D99A18]
                      px-5
                      py-3
                      text-[11px]
                      font-bold
                      leading-none
                      text-white
                      opacity-100
                      shadow-[0_7px_22px_rgba(0,0,0,0.18)]
                      transition-all
                      duration-300

                      hover:bg-[#F0C45C]
                      hover:text-[#071635]

                      sm:w-auto
                      sm:min-h-12
                      sm:px-7
                      sm:text-sm
                    "
                  >
                    <span className="relative z-10">
                      Make An Enquiry
                    </span>

                    <ArrowRight
                      size={15}
                      strokeWidth={2}
                      className="
                        relative
                        z-10
                        shrink-0
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </Link>
                </motion.div>

                {/* =================================================
                    CALL US
                ================================================== */}

                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -2,
                        }
                  }
                  whileTap={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 0.98,
                        }
                  }
                  className="
                    relative
                    z-30
                    w-full
                    sm:w-auto
                  "
                >
                  <a
                    href={`tel:${phone1}`}
                    aria-label={`Call Baiya Travels: ${phone1}, ${phone2}, ${officePhone}`}
                    className="
                      group
                      relative
                      z-30
                      inline-flex
                      min-h-11
                      w-full
                      shrink-0
                      items-center
                      justify-center
                      gap-2
                      whitespace-nowrap
                      rounded-full
                      border
                      border-white/70
                      bg-white/10
                      px-5
                      py-3
                      text-[11px]
                      font-bold
                      leading-none
                      text-white
                      opacity-100
                      shadow-[0_4px_15px_rgba(0,0,0,0.08)]
                      backdrop-blur-sm
                      transition-all
                      duration-300

                      hover:border-white
                      hover:bg-white
                      hover:text-[#0B1F4D]

                      sm:w-auto
                      sm:min-h-12
                      sm:px-6
                      sm:text-sm
                    "
                  >
                    <Phone
                      size={15}
                      strokeWidth={2.2}
                      className="
                        relative
                        z-10
                        shrink-0
                        text-[#F0C45C]
                        transition-colors
                        duration-300
                        group-hover:text-[#0B1F4D]
                      "
                    />

                    <span
                      className="
                        relative
                        z-10
                        block
                        whitespace-nowrap
                        text-white
                        opacity-100
                        transition-colors
                        duration-300
                        group-hover:text-[#0B1F4D]
                      "
                    >
                      {phone1}
                    </span>
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT OPTIONS PANEL
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
                amount: 0.12,
              }}
              variants={fadeRight}
              className="
                relative
                z-10
                flex
                items-center
                border-t
                border-white/10
                bg-white/[0.025]
                px-3.5
                py-[22px]

                sm:px-7
                sm:py-8

                md:px-9

                lg:border-l
                lg:border-t-0
                lg:px-8
                lg:py-10

                xl:px-10
              "
            >
              <div className="w-full">
                {/* =================================================
                    PANEL HEADING
                ================================================== */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
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
                  >
                    <Headphones
                      size={15}
                      strokeWidth={1.8}
                      className="text-[#F0C45C]"
                    />
                  </motion.div>

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
                    What Can We Arrange?
                  </span>
                </div>

                <h3
                  className="
                    mt-2
                    text-[20px]
                    font-extrabold
                    tracking-[-0.025em]
                    text-white

                    sm:text-[23px]
                  "
                >
                  Choose what you need.
                </h3>

                <p
                  className="
                    mt-1.5
                    max-w-[430px]
                    text-[9px]
                    leading-4
                    text-white/60

                    sm:text-[10px]
                    sm:leading-5
                  "
                >
                  Tell us what you are planning and we will
                  help coordinate the arrangements.
                </p>

                {/* =================================================
                    OPTIONS
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
                  }}
                  variants={staggerContainer}
                  className="
                    mt-3.5
                    space-y-1.5

                    sm:mt-5
                    sm:space-y-2.5
                  "
                >
                  {options.map((option) => {
                    const Icon = option.icon;

                    return (
                      <motion.div
                        key={option.title}
                        variants={
                          shouldReduceMotion
                            ? undefined
                            : optionVariants
                        }
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : {
                                x: 4,
                              }
                        }
                      >
                        <Link
                          href="/contact"
                          className="
                            group
                            flex
                            min-h-[54px]
                            items-center
                            gap-2
                            rounded-[11px]
                            border
                            border-white/[0.07]
                            bg-white/[0.025]
                            p-2
                            transition-all
                            duration-300

                            hover:border-[#D99A18]/25
                            hover:bg-white/[0.06]

                            sm:min-h-[64px]
                            sm:gap-3
                            sm:p-3
                          "
                        >
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
                              shrink-0
                              items-center
                              justify-center
                              rounded-[9px]
                              bg-[#D99A18]/10
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
                              size={17}
                              strokeWidth={1.8}
                            />
                          </motion.div>

                          {/* Text */}

                          <div className="min-w-0 flex-1">
                            <p
                              className="
                                text-[10.5px]
                                font-bold
                                leading-4
                                text-white

                                sm:text-xs
                              "
                            >
                              {option.title}
                            </p>

                            <p
                              className="
                                mt-0.5
                                truncate
                                text-[8.5px]
                                leading-4
                                text-white/60

                                sm:text-[10px]
                              "
                            >
                              {option.description}
                            </p>
                          </div>

                          {/* Arrow */}

                          <span
                            className="
                              flex
                              h-7
                              w-7
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-white/[0.04]
                              text-white/70
                              transition-all
                              duration-300

                              group-hover:bg-[#D99A18]
                              group-hover:text-white

                              sm:h-8
                              sm:w-8
                            "
                          >
                            <ArrowRight
                              size={13}
                              strokeWidth={2}
                              className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-0.5
                              "
                            />
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* =================================================
                    LOCATION
                ================================================== */}

                <motion.div
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 12,
                        }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease: "easeOut",
                  }}
                  className="
                    mt-2.5
                    flex
                    items-center
                    gap-2
                    rounded-[11px]
                    border
                    border-[#D99A18]/10
                    bg-[#D99A18]/[0.055]
                    px-2.5
                    py-2

                    sm:mt-4
                    sm:gap-3
                    sm:px-3.5
                    sm:py-3
                  "
                >
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#D99A18]/10
                    "
                  >
                    <MapPin
                      size={14}
                      strokeWidth={1.8}
                      className="text-[#F0C45C]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[10px]
                        font-bold
                        text-white

                        sm:text-[11px]
                      "
                    >
                      {locations}
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[8px]
                        leading-4
                        text-white/60

                        sm:text-[9px]
                        sm:leading-5
                      "
                    >
                      {officeAddress}
                    </p>
                  </div>
                </motion.div>

                <p
                  className="
                    mt-2
                    text-[13px]
                    font-bold
                    leading-4
                    text-white/100
                    sm:text-[13px]
                  "
                >
                  Mobile: {phone3} • Mobile: {phone2} • Office: {officePhone}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM MESSAGE
        ====================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 10,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.55,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="
            mt-3
            text-center

            sm:mt-5
          "
        >
          <p
            className="
              text-[9px]
              leading-4
              text-[#071635]/35

              sm:text-[10px]
              sm:leading-5

              lg:text-[11px]
            "
          >
            Planning a family trip, pilgrimage or group event?

            <Link
              href="/contact"
              className="
                ml-1
                font-bold
                text-[#D99A18]
                transition-colors
                hover:text-[#0B1F4D]
              "
            >
              Let&apos;s plan it together.
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}