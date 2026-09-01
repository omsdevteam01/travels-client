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
  CalendarDays,
  Sparkles,
  Users,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const pilgrimagePlaces = [
  {
    title: "Rameswaram",
    subtitle: "Sacred Temple Journey",
    description:
      "Plan a comfortable pilgrimage to the sacred island of Rameswaram with complete travel arrangements.",
    image: "/images/pilgrimage/rameswaram.jpg",
  },
  {
    title: "Madurai",
    subtitle: "Meenakshi Temple",
    description:
      "Experience the spiritual and cultural heritage of one of South India's most celebrated temple cities.",
    image: "/images/pilgrimage/madurai.jpg",
  },
  {
    title: "Kanyakumari",
    subtitle: "Spiritual & Coastal",
    description:
      "Combine spiritual experiences with the beauty of India's southernmost coastal destination.",
    image: "/images/pilgrimage/kanyakumari.jpg",
  },
];

const eventServices = [
  {
    title: "Bhagwat Katha",
    description:
      "Complete travel, accommodation and venue arrangements.",
  },
  {
    title: "Ram Katha",
    description:
      "Organised support for Ram Katha events and group arrangements.",
  },
  {
    title: "Shiv Puranam",
    description:
      "Travel and event arrangements for spiritual gatherings.",
  },
];

/* =========================================================
   ANIMATIONS
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
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const destinationContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const destinationItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const serviceContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const serviceItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    x: 0,
  },

  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
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
   MAIN COMPONENT
========================================================= */

export default function Pilgrimage() {
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: {
          once: true,
          amount: 0.1,
        },
      };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F8F5EE]

        -mt-7
        pt-8
        pb-8

        sm:-mt-8
        sm:pt-9
        sm:pb-10

        lg:-mt-9
        lg:pt-10
        lg:pb-12

        xl:-mt-10
        xl:pt-11
        xl:pb-14
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                scale: 0.9,
              }
        }
        whileInView={
          shouldReduceMotion
            ? undefined
            : {
                opacity: 1,
                scale: 1,
              }
        }
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-32
          -top-28
          h-72
          w-72
          rounded-full
          border-[34px]
          border-[#D99A18]/[0.035]

          sm:h-96
          sm:w-96
          sm:border-[46px]
        "
      />

      <motion.div
        aria-hidden="true"
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                scale: 0.85,
              }
        }
        whileInView={
          shouldReduceMotion
            ? undefined
            : {
                opacity: 1,
                scale: 1,
              }
        }
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.1,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-24
          h-64
          w-64
          rounded-full
          border-[30px]
          border-[#0B1F4D]/[0.025]
        "
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
          max-w-[1320px]
          px-4

          sm:px-6

          lg:px-8
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          {...animationProps}
          variants={headerVariants}
          className="
            mx-auto
            max-w-[850px]
            text-center
          "
        >
          {/* Eyebrow */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 10,
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
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              inline-flex
              items-center
              justify-center
              gap-2.5
              text-[#D99A18]
            "
          >
            <motion.span
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      width: 0,
                      opacity: 0,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : {
                      width: 40,
                      opacity: 1,
                    }
              }
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="
                hidden
                h-px
                bg-[#D99A18]/45

                sm:block
                sm:w-10
              "
            />

            <motion.span
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      rotate: [45, 135, 45],
                      scale: [1, 1.12, 1],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                flex
                h-3
                w-3
                items-center
                justify-center
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rotate-45
                  border
                  border-[#D99A18]
                "
              />
            </motion.span>

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#D99A18]

                sm:text-[10px]
              "
            >
              Pilgrimage Destinations
            </span>

            <motion.span
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      width: 0,
                      opacity: 0,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : {
                      width: 40,
                      opacity: 1,
                    }
              }
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="
                hidden
                h-px
                bg-[#D99A18]/45

                sm:block
                sm:w-10
              "
            />
          </motion.div>

          {/* Heading */}

          <motion.h2
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
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
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-3.5
              text-[38px]
              font-extrabold
              leading-[0.96]
              tracking-[-0.055em]
              text-[#071635]

              sm:mt-4
              sm:text-5xl

              md:text-6xl

              lg:text-[58px]
            "
          >
            Travel With{" "}
            <span className="text-[#D99A18]">
              Purpose
            </span>
          </motion.h2>

          {/* Divider */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    scaleX: 0.5,
                  }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 1,
                    scaleX: 1,
                  }
            }
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-4
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-8
                bg-[#D99A18]/55

                sm:w-12
              "
            />

            <motion.span
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      rotate: [45, 225, 45],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-2.5
                w-2.5
                rotate-45
                border
                border-[#D99A18]
              "
            />

            <span
              className="
                h-px
                w-8
                bg-[#D99A18]/55

                sm:w-12
              "
            />
          </motion.div>

          {/* Description */}

          <motion.p
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
              duration: 0.55,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="
              mx-auto
              mt-3
              max-w-[680px]
              text-[12px]
              leading-5
              text-[#071635]/55

              sm:mt-4
              sm:text-sm
              sm:leading-6

              md:text-[15px]
            "
          >
            Make your pilgrimage comfortable and well organised
            with transportation, accommodation and group
            arrangements handled by us.
          </motion.p>
        </motion.div>

        {/* =====================================================
            DESTINATIONS
            DESKTOP = EXACTLY ONE ROW
        ====================================================== */}

        <motion.div
          {...animationProps}
          variants={destinationContainerVariants}
          className="
            mt-7
            grid
            grid-cols-1

            sm:mt-8
            sm:grid-cols-2

            lg:mt-9
            lg:grid-cols-3
          "
        >
          {pilgrimagePlaces.map((place, index) => (
            <motion.article
              key={place.title}
              variants={
                shouldReduceMotion
                  ? undefined
                  : destinationItemVariants
              }
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -4,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 0.99,
                    }
              }
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
              }}
              className={`
                group
                relative
                min-w-0

                ${
                  index > 0
                    ? "border-t border-[#D99A18]/15 sm:border-t-0 sm:border-l"
                    : ""
                }

                ${
                  index < 2
                    ? "pb-7 sm:pb-0"
                    : ""
                }

                ${
                  index > 0
                    ? "pt-7 sm:pt-0"
                    : ""
                }

                border-[#D99A18]/15

                lg:px-5
                xl:px-7

                ${
                  index === 0
                    ? "lg:pl-0"
                    : ""
                }

                ${
                  index === pilgrimagePlaces.length - 1
                    ? "lg:pr-0"
                    : ""
                }
              `}
            >
              <div
                className="
                  flex
                  flex-col
                  items-center
                  gap-4

                  sm:px-3

                  lg:flex-row
                  lg:items-center
                  lg:gap-4
                  lg:px-0
                "
              >
                {/* =================================================
                    IMAGE
                ================================================== */}

                <motion.div
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 0.9,
                        }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          scale: 1,
                        }
                  }
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: shouldReduceMotion
                      ? 0
                      : 0.08 + index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    shrink-0
                  "
                >
                  <Link
                    href="/pilgrimage"
                    aria-label={`Explore ${place.title}`}
                    className="
                      relative
                      block
                      h-[145px]
                      w-[145px]
                      shrink-0

                      sm:h-[155px]
                      sm:w-[155px]

                      lg:h-[145px]
                      lg:w-[145px]

                      xl:h-[155px]
                      xl:w-[155px]
                    "
                  >
                    {/* Gold outer ring */}

                    <motion.span
                      aria-hidden="true"
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              opacity: [0.55, 0.9, 0.55],
                            }
                      }
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.25,
                      }}
                      className="
                        pointer-events-none
                        absolute
                        -inset-2
                        rounded-full
                        border
                        border-[#D99A18]/55
                        transition-all
                        duration-500

                        group-hover:-inset-2.5
                        group-hover:border-[#D99A18]
                      "
                    />

                    {/* Image container */}

                    <span
                      className="
                        absolute
                        inset-0
                        overflow-hidden
                        rounded-full
                        bg-[#EDE8DE]
                      "
                    >
                      <Image
  src={place.image}
  alt={`${place.title} pilgrimage`}
  fill
  sizes="(max-width: 639px) 145px, (max-width: 1023px) 155px, 155px"
  className="
    object-cover
    object-center
    transition-transform
    duration-700
    ease-out
    group-hover:scale-105
  "
/>

                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          rounded-full
                          bg-gradient-to-t
                          from-[#071635]/15
                          via-transparent
                          to-white/5
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover:opacity-100
                        "
                      />
                    </span>
                  </Link>
                </motion.div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <motion.div
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: 14,
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: shouldReduceMotion
                      ? 0
                      : 0.16 + index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    min-w-0
                    flex-1
                    text-center

                    lg:text-left
                  "
                >
                  {/* Title */}

                  <h3
                    className="
                      mt-0
                      text-[23px]
                      font-extrabold
                      leading-[1.05]
                      tracking-[-0.04em]
                      text-[#071635]
                      transition-colors
                      duration-300
                      group-hover:text-[#D99A18]

                      sm:text-[25px]

                      xl:text-[27px]
                    "
                  >
                    {place.title}
                  </h3>

                  {/* Subtitle */}

                  <p
                    className="
                      mt-1.5
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#C3880F]

                      sm:text-[10px]
                    "
                  >
                    {place.subtitle}
                  </p>

                  {/* Divider */}

                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scaleX: 0.4,
                          }
                    }
                    whileInView={
                      shouldReduceMotion
                        ? undefined
                        : {
                            opacity: 1,
                            scaleX: 1,
                          }
                    }
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: shouldReduceMotion
                        ? 0
                        : 0.22 + index * 0.05,
                    }}
                    className="
                      mt-2
                      flex
                      items-center
                      justify-center
                      gap-2

                      lg:justify-start
                    "
                  >
                    <span
                      className="
                        h-px
                        w-7
                        bg-[#D99A18]/45
                      "
                    />

                    <span
                      className="
                        h-1.5
                        w-1.5
                        rotate-45
                        bg-[#D99A18]
                      "
                    />
                  </motion.div>

                  {/* Description */}

                  <p
                    className="
                      mt-2
                      max-w-[235px]
                      text-[10.5px]
                      leading-[1.65]
                      text-[#071635]/60

                      sm:text-[11px]
                      sm:leading-[1.7]

                      lg:max-w-[220px]
                    "
                  >
                    {place.description}
                  </p>

                  {/* Explore Destination */}

                  <Link
                    href="/tour"
                    className="
                      group/link
                      mt-2.5
                      inline-flex
                      items-center
                      gap-2
                      border-b
                      border-[#D99A18]/35
                      pb-1
                      text-[10px]
                      font-bold
                      text-[#071635]
                      transition-all
                      duration-300
                      hover:border-[#D99A18]
                      hover:text-[#D99A18]

                      sm:text-[11px]
                    "
                  >
                    Explore Destination

                    <ArrowRight
                      size={14}
                      className="
                        text-[#D99A18]
                        transition-transform
                        duration-300
                        group-hover/link:translate-x-1
                      "
                    />
                  </Link>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* =====================================================
            RELIGIOUS EVENT ARRANGEMENTS
        ====================================================== */}

        <motion.div
          {...animationProps}
          variants={fadeUpVariants}
          className="
            relative
            mt-7
            overflow-hidden
            rounded-[20px]
            bg-[#071635]
            shadow-[0_14px_35px_rgba(7,22,53,0.10)]

            sm:mt-8
            sm:rounded-[22px]

            lg:mt-9
          "
        >
          {/* Decorative ring */}

          {!shouldReduceMotion && (
            <motion.div
              aria-hidden="true"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                -right-20
                -top-24
                h-48
                w-48
                rounded-full
                border-[25px]
                border-[#D99A18]/[0.055]

                sm:h-64
                sm:w-64
                sm:border-[32px]
              "
            />
          )}

          <div
            className="
              relative
              z-10
              px-5
              py-6

              sm:px-7
              sm:py-7

              lg:px-9
              lg:py-8
            "
          >
            {/* =================================================
                TOP CONTENT
            ================================================== */}

            <div
              className="
                grid
                grid-cols-1
                gap-6

                lg:grid-cols-[1.05fr_1.7fr]
                lg:gap-8
              "
            >
              {/* LEFT */}

              <div>
                <motion.div
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: -15,
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
                    duration: 0.5,
                  }}
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <motion.span
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.08, 1],
                          }
                    }
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles
                      size={13}
                      className="text-[#F0C45C]"
                    />
                  </motion.span>

                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#F0C45C]

                      sm:text-[9px]
                    "
                  >
                    Spiritual Experiences
                  </span>
                </motion.div>

                <motion.h3
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
                    duration: 0.55,
                    delay: 0.08,
                  }}
                  className="
                    mt-2
                    text-[24px]
                    font-extrabold
                    leading-[1.05]
                    tracking-[-0.04em]
                    text-white

                    sm:text-[28px]

                    lg:text-[32px]
                  "
                >
                  Religious Event{" "}
                  <span className="text-[#D99A18]">
                    Arrangements
                  </span>
                </motion.h3>

                <motion.p
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
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.14,
                  }}
                  className="
                    mt-2.5
                    max-w-[500px]
                    text-[10.5px]
                    leading-[1.65]
                    text-white/55

                    sm:text-[11px]
                    sm:leading-5
                  "
                >
                  Organising a spiritual programme for your
                  family or a large group? We can help arrange
                  the travel, stay and all event-related needs.
                </motion.p>
              </div>

              {/* =================================================
                  SERVICES
                  MOBILE = LEFT / RIGHT / LEFT
                  DESKTOP = 3 COLUMNS
              ================================================== */}

              <motion.div
                {...animationProps}
                variants={serviceContainerVariants}
                className="
                  flex
                  flex-col
                  border-t
                  border-white/10
                  pt-1

                  sm:grid
                  sm:grid-cols-3
                  sm:border-t-0
                  sm:pt-0
                "
              >
                {eventServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    variants={
                      shouldReduceMotion
                        ? undefined
                        : serviceItemVariants
                    }
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: -2,
                          }
                    }
                    className={`
                      group/service
                      relative
                      w-[88%]
                      py-4

                      ${
                        index % 2 === 0
                          ? "self-start"
                          : "self-end"
                      }

                      ${
                        index > 0
                          ? "border-t border-white/10"
                          : ""
                      }

                      sm:w-auto
                      sm:self-auto
                      sm:border-t-0
                      sm:border-r
                      sm:px-4
                      sm:py-0

                      lg:px-5

                      sm:last:border-r-0
                    `}
                  >
                    {/* Gold animated accent */}

                    <motion.span
                      aria-hidden="true"
                      initial={{
                        scaleX: 0,
                      }}
                      whileInView={{
                        scaleX: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        absolute
                        left-0
                        top-0
                        h-px
                        w-12
                        origin-left
                        bg-[#D99A18]/70

                        sm:hidden
                      "
                    />

                    {/* Small gold dot */}

                    <motion.span
                      aria-hidden="true"
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              scale: [1, 1.25, 1],
                              opacity: [0.6, 1, 0.6],
                            }
                      }
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                      className="
                        absolute
                        right-1
                        top-5
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#D99A18]

                        sm:hidden
                      "
                    />

                    <h4
                      className="
                        text-[13px]
                        font-bold
                        text-white
                        transition-colors
                        duration-300
                        group-hover/service:text-[#F0C45C]

                        sm:text-[14px]

                        lg:text-[15px]
                      "
                    >
                      {service.title}
                    </h4>

                    <p
                      className="
                        mt-1.5
                        max-w-[210px]
                        text-[9.5px]
                        leading-[1.65]
                        text-white/40

                        sm:max-w-[190px]
                        sm:text-[10px]
                        sm:leading-5
                      "
                    >
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* =================================================
                GROUP ENQUIRY
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
                delay: 0.12,
              }}
              className="
                mt-5
                flex
                flex-col
                gap-3
                border-t
                border-white/10
                pt-4

                sm:mt-6
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              {/* Group information */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 1.08,
                          rotate: 4,
                        }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                  }}
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
                  <Users
                    size={15}
                    className="text-[#F0C45C]"
                  />
                </motion.div>

                <div>
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <CalendarDays
                      size={10}
                      className="text-[#D99A18]"
                    />

                    <span
                      className="
                        text-[7.5px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-[#F0C45C]
                      "
                    >
                      Group Pilgrimage
                    </span>
                  </div>

                  <p
                    className="
                      mt-0.5
                      text-[11px]
                      font-semibold
                      text-white

                      sm:text-xs
                    "
                  >
                    Planning a pilgrimage with a group?
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[9px]
                      text-white/35
                    "
                  >
                    Vehicles, rooms, halls and other arrangements.
                  </p>
                </div>
              </div>

              {/* Enquiry button */}

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  min-h-9
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#D99A18]
                  px-5
                  py-2
                  text-[9px]
                  font-bold
                  text-white
                  shadow-[0_5px_18px_rgba(217,154,24,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#F0C45C]
                  hover:text-[#071635]

                  sm:w-auto
                "
              >
                Make an Enquiry

                <ArrowRight
                  size={13}
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
      </div>
    </section>
  );
}