"use client";

import Image from "next/image";
import Link from "next/link";
import { mediaUrl } from "@/lib/media";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  BedDouble,
  Building2,
  ChefHat,
  Check,
  Users,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

/* =========================================================
   ACCOMMODATION DATA
========================================================= */

const accommodationItems = [
  {
    title: "Comfortable Rooms",
    description:
      "Arrange comfortable rooms for individuals, families and pilgrimage groups during your journey.",
    image: mediaUrl("/images/accommodation/room.png"),
    icon: BedDouble,
    features: [
      "Family & group rooms",
      "Comfortable stay",
      "Suitable for pilgrimage groups",
    ],
  },
  {
    title: "Halls",
    description:
      "Spacious halls for religious programmes, group gatherings, functions and special occasions.",
    image: mediaUrl("/images/accommodation/hall.png"),
    icon: Building2,
    features: [
      "Group gatherings",
      "Religious programmes",
      "Event arrangements",
    ],
  },
  {
    title: "Kitchen Arrangements",
    description:
      "Kitchen and food preparation arrangements for groups, events and spiritual programmes.",
    image: mediaUrl("/images/accommodation/kitchen.png"),
    icon: ChefHat,
    features: [
      "Group food arrangements",
      "Event kitchens",
      "Suitable for large groups",
    ],
  },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
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

const eyebrowVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.94,
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

const cardsContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const bannerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.15,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   FALLBACK IMAGE
========================================================= */

function SafeImage({
  src,
  alt,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        aria-label={alt}
        role="img"
        className={`
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-gradient-to-br
          from-[#0B1F4D]
          via-[#182D57]
          to-[#D99A18]/30
          ${className ?? ""}
        `}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-[#F0C45C]
              backdrop-blur-sm
            "
          >
            <Sparkles size={20} />
          </div>

          <span
            className="
              mt-2
              text-[9px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-white/70
            "
          >
            {alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      unoptimized
      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}

/* =========================================================
   ACCOMMODATION
========================================================= */

export default function Accommodation() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FBF8F1]

        pb-7
        pt-3

        sm:pb-9
        sm:pt-4

        md:pb-10
        md:pt-5

        lg:pb-11
        lg:pt-5

        xl:pb-12
        xl:pt-6
      "
    >
      {/* =====================================================
          LEFT BACKGROUND RING
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                scale: 0.8,
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
          -left-32
          -top-24
          h-56
          w-56
          rounded-full
          border-[28px]
          border-[#D99A18]/[0.045]

          sm:-left-28
          sm:-top-28
          sm:h-72
          sm:w-72
          sm:border-[36px]

          lg:-left-24
          lg:-top-32
          lg:h-80
          lg:w-80
        "
      />

      {/* =====================================================
          LEFT INNER RING
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-16
          top-0
          h-32
          w-32
          rounded-full
          border
          border-[#D99A18]/[0.07]

          sm:-left-12
          sm:top-2
          sm:h-40
          sm:w-40
        "
      />

      {/* =====================================================
          RIGHT BACKGROUND RING
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                scale: 0.8,
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
          delay: 0.12,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-28
          -top-24
          h-56
          w-56
          rounded-full
          border-[28px]
          border-[#D99A18]/[0.045]

          sm:-right-28
          sm:-top-28
          sm:h-72
          sm:w-72
          sm:border-[36px]

          lg:-right-24
          lg:-top-32
          lg:h-80
          lg:w-80
        "
      />

      {/* =====================================================
          RIGHT DOTS
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
              }
        }
        whileInView={
          shouldReduceMotion
            ? undefined
            : {
                opacity: 0.25,
              }
        }
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.35,
        }}
        className="
          pointer-events-none
          absolute
          right-[6%]
          top-[125px]
          hidden
          h-14
          w-20

          lg:block
        "
      >
        <div
          className="
            h-full
            w-full
            bg-[radial-gradient(circle,#D99A18_1px,transparent_1px)]
            [background-size:10px_10px]
          "
        />
      </motion.div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1280px]
          px-4

          sm:px-6

          lg:px-8
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={headerVariants}
          className="
            mx-auto
            max-w-[680px]
            text-center
          "
        >
          {/* Eyebrow */}

          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{
              once: true,
            }}
            variants={eyebrowVariants}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#D99A18]/25
              bg-white/80
              px-3.5
              py-1

              sm:px-4
              sm:py-1.5
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
                duration: 2.8,
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
              Comfort & Facilities
            </span>
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
              duration: 0.6,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="
              mt-2.5
              text-[32px]
              font-extrabold
              leading-[0.96]
              tracking-[-0.055em]
              text-[#071635]

              sm:mt-3
              sm:text-[43px]

              md:text-[48px]

              lg:text-[52px]

              xl:text-[55px]
            "
          >
            Everything

            <span className="block text-[#D99A18]">
              Well Arranged
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
              duration: 0.55,
              delay: 0.18,
              ease: "easeOut",
            }}
            className="
              mt-2.5
              flex
              items-center
              justify-center
              gap-2.5

              sm:mt-3
            "
          >
            <span
              className="
                h-px
                w-7
                bg-[#D99A18]/50

                sm:w-9
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

                sm:h-2
                sm:w-2
              "
            />

            <span
              className="
                h-px
                w-7
                bg-[#D99A18]/50

                sm:w-9
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
              delay: 0.24,
              ease: "easeOut",
            }}
            className="
              mx-auto
              mt-2.5
              max-w-[570px]
              text-[10px]
              leading-[1.55]
              text-[#071635]/55

              sm:mt-3
              sm:text-xs
              sm:leading-5

              lg:text-[13px]
            "
          >
            We provide complete arrangements to make your
            spiritual journey comfortable, convenient and
            memorable.
          </motion.p>
        </motion.div>

        {/* =====================================================
            ACCOMMODATION CARDS
        ====================================================== */}

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{
            once: true,
            amount: 0.05,
          }}
          variants={cardsContainerVariants}
          className="
            mx-auto
            mt-5
            grid
            w-full
            max-w-[430px]
            grid-cols-1
            gap-3.5

            sm:mt-6
            sm:max-w-none
            sm:grid-cols-2
            sm:gap-5

            lg:mt-7
            lg:grid-cols-3
            lg:gap-5
          "
        >
          {accommodationItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={
                  shouldReduceMotion
                    ? undefined
                    : cardVariants
                }
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
                      }
                }
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[16px]
                  border
                  border-[#071635]/[0.07]
                  bg-white
                  shadow-[0_6px_18px_rgba(7,22,53,0.045)]
                  transition-all
                  duration-500

                  hover:border-[#D99A18]/25
                  hover:shadow-[0_15px_32px_rgba(7,22,53,0.09)]

                  sm:rounded-[18px]
                "
              >
                {/* =================================================
                    IMAGE
                ================================================== */}

                <div
                  className="
                    relative
                    h-[145px]
                    overflow-hidden

                    sm:h-[185px]

                    lg:h-[180px]

                    xl:h-[190px]
                  "
                >
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    priority={
                      item.title === "Comfortable Rooms"
                    }
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Image overlay */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#071635]/55
                      via-[#071635]/5
                      to-transparent
                    "
                  />

                  {/* Gold curve */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -bottom-[25px]
                      left-[-5%]
                      z-10
                      h-[52px]
                      w-[110%]
                      rounded-[50%]
                      border-t-[2px]
                      border-[#D99A18]
                      bg-white
                    "
                  />

                  {/* Floating icon */}

                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: 1.1,
                            rotate: -4,
                          }
                    }
                    className="
                      absolute
                      bottom-[-19px]
                      left-1/2
                      z-20
                      flex
                      h-[50px]
                      w-[50px]
                      -translate-x-1/2
                      items-center
                      justify-center
                      rounded-full
                      border-[4px]
                      border-[#FBF8F1]
                      bg-[#0B1F4D]
                      text-[#F0C45C]
                      shadow-[0_5px_15px_rgba(7,22,53,0.16)]

                      sm:bottom-[-21px]
                      sm:h-[58px]
                      sm:w-[58px]
                    "
                  >
                    <motion.span
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              y: [0, -2, 0],
                            }
                      }
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex"
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.7}
                      />
                    </motion.span>
                  </motion.div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div
                  className="
                    px-4
                    pb-2.5
                    pt-5.5

                    sm:px-5
                    sm:pb-4
                    sm:pt-7
                  "
                >
                  {/* Title */}

                  <h3
                    className="
                      text-center
                      text-[16px]
                      font-extrabold
                      leading-tight
                      tracking-[-0.03em]
                      text-[#071635]
                      transition-colors
                      duration-300
                      group-hover:text-[#D99A18]

                      sm:text-[18px]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Underline */}

                  <div
                    className="
                      mx-auto
                      mt-1.5
                      h-[2px]
                      w-7
                      rounded-full
                      bg-[#D99A18]
                    "
                  />

                  {/* Description */}

                  <p
                    className="
                      mx-auto
                      mt-2.5
                      max-w-[360px]
                      text-center
                      text-[10px]
                      leading-[1.55]
                      text-[#071635]/55

                      sm:text-[11px]
                      sm:leading-5
                    "
                  >
                    {item.description}
                  </p>

                  {/* Features */}

                  <div className="mt-2">
                    {item.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={
                          shouldReduceMotion
                            ? false
                            : {
                                opacity: 0,
                                x: -8,
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
                          delay:
                            0.2 + index * 0.07,
                          ease: "easeOut",
                        }}
                        className={`
                          flex
                          items-center
                          gap-2
                          py-1
                          text-[10px]
                          font-medium
                          text-[#071635]/60

                          sm:text-[11px]

                          ${
                            index !==
                            item.features.length - 1
                              ? "border-b border-[#071635]/[0.06]"
                              : ""
                          }
                        `}
                      >
                        <span
                          className="
                            flex
                            h-[17px]
                            w-[17px]
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-[#D99A18]/10
                          "
                        >
                          <Check
                            size={9}
                            strokeWidth={2.6}
                            className="text-[#D99A18]"
                          />
                        </span>

                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </motion.article>
            );
          })}
        </motion.div>

        {/* =====================================================
            SHARED ACCOMMODATION BUTTON
        ====================================================== */}

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-4 flex justify-center sm:mt-5"
        >
          <Link
            href="/accommodation"
            className="
              group
              inline-flex
              min-h-[38px]
              items-center
              justify-center
              gap-1.5
              rounded-full
              bg-[#0B1F4D]
              px-5
              text-[10px]
              font-bold
              text-white
              shadow-[0_6px_16px_rgba(7,22,53,0.16)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#D99A18]
              hover:shadow-[0_8px_20px_rgba(217,154,24,0.22)]

              sm:min-h-[42px]
              sm:px-6
              sm:text-[11px]

              lg:min-h-[44px]
              lg:px-7
              lg:text-[12px]
            "
          >
            <span className="whitespace-nowrap text-white">
              View All Arrangements
            </span>

            <ArrowRight
              size={13}
              strokeWidth={2}
              className="text-[#D99A18] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* =====================================================
            GROUP PILGRIMAGE ENQUIRY BANNER
        ====================================================== */}

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{
            once: true,
            amount: 0.05,
          }}
          variants={bannerVariants}
          className="
            relative
            z-20
            mt-4
            overflow-hidden
            rounded-[15px]
            border
            border-[#071635]/[0.07]
            bg-white
            opacity-100
            shadow-[0_6px_18px_rgba(7,22,53,0.05)]

            sm:mt-5
            sm:rounded-[17px]

            lg:mt-5
          "
        >
          {/* =================================================
              DECORATIVE CIRCLE
          ================================================== */}

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
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -right-12
              -top-16
              h-32
              w-32
              rounded-full
              border-[15px]
              border-[#D99A18]/[0.045]

              sm:-right-16
              sm:-top-20
              sm:h-40
              sm:w-40
            "
          />

          {/* =================================================
              DOTS
          ================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-2
              right-3
              h-9
              w-14
              opacity-25
            "
          >
            <div
              className="
                h-full
                w-full
                bg-[radial-gradient(circle,#D99A18_1px,transparent_1px)]
                [background-size:9px_9px]
              "
            />
          </div>

          {/* =================================================
              BANNER CONTENT
          ================================================== */}

          <div
            className="
              relative
              z-20
              flex
              flex-col
              gap-3
              px-4
              py-3

              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:gap-5
              sm:px-6
              sm:py-4

              lg:px-7
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div
              className="
                relative
                z-20
                flex
                min-w-0
                items-center
                gap-3
              "
            >
              {/* Users icon */}

              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.08,
                      }
                }
                className="
                  relative
                  z-20
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D99A18]/10

                  sm:h-11
                  sm:w-11
                "
              >
                <Users
                  size={19}
                  strokeWidth={1.8}
                  className="text-[#0B1F4D]"
                />
              </motion.div>

              {/* Text */}

              <div className="relative z-20 min-w-0">
                <h3
                  className="
                    text-[13px]
                    font-extrabold
                    tracking-[-0.02em]
                    text-[#071635]

                    sm:text-[15px]

                    lg:text-[16px]
                  "
                >
                  Planning a Group Pilgrimage?
                </h3>

                <p
                  className="
                    mt-0.5
                    max-w-[700px]
                    text-[9px]
                    leading-4
                    text-[#071635]/55

                    sm:text-[10px]
                    sm:leading-5

                    lg:text-[11px]
                  "
                >
                  We will take care of rooms, halls,
                  food, transport and all other
                  arrangements.
                </p>
              </div>
            </div>

            {/* =================================================
                MAKE ENQUIRY — ALWAYS VISIBLE
            ================================================== */}

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
                relative
                z-30
                shrink-0
                opacity-100
                visible
              "
            >
              <Link
                href="/contact"
                aria-label="Make an enquiry"
                className="
                  group/enquiry
                  relative
                  z-30
                  inline-flex
                  min-h-[40px]
                  w-full
                  items-center
                  justify-center
                  gap-1.5
                  rounded-full
                  bg-[#143A5E]
                  px-5
                  text-[10px]
                  font-bold
                  !text-white
                  opacity-100
                  shadow-[0_6px_16px_rgba(7,22,53,0.18)]
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#D99A18]
                  hover:!text-white
                  hover:shadow-[0_8px_20px_rgba(217,154,24,0.25)]

                  active:translate-y-0

                  sm:min-h-[42px]
                  sm:w-auto
                  sm:px-5
                  sm:text-[11px]

                  lg:min-h-[44px]
                  lg:px-6
                "
              >
                <span className="relative z-10 whitespace-nowrap">
                  Make an Enquiry
                </span>

                <ArrowRight
                  size={13}
                  strokeWidth={2}
                  className="
                    relative
                    z-10
                    shrink-0
                    text-white
                    transition-transform
                    duration-300
                    group-hover/enquiry:translate-x-1
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