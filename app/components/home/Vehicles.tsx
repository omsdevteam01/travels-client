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
  CarFront,
  CalendarDays,
  ShieldCheck,
  Users,
} from "lucide-react";

const vehicles = [
  {
    title: "Cars",
    slug: "cars",
    description:
      "Comfortable cars for couples, families and small groups.",
    image: "/images/vehicles/cars.jpg",
    passengers: "1–4",
    icon: CarFront,
  },
  {
    title: "Vans",
    slug: "vans",
    description:
      "Spacious vans for family tours and comfortable group travel.",
    image: "/images/vehicles/vans.jpg",
    passengers: "5–12",
    icon: BusFront,
  },
  {
    title: "Tempo Travellers",
    slug: "tempo-travellers",
    description:
      "Ideal for pilgrimage trips, family tours and larger groups.",
    image: "/images/vehicles/tempo-traveller.jpg",
    passengers: "12–17",
    icon: BusFront,
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Clean & Comfortable",
    text: "Well-maintained vehicles",
  },
  {
    icon: Users,
    title: "Experienced Drivers",
    text: "Reliable travel support",
  },
  {
    icon: CalendarDays,
    title: "Flexible Arrangements",
    text: "Travel around your plans",
  },
];

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

export default function VehiclesPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F4EA] text-[#071635]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#F8F4EA]">

        {/* Decorative background */}

        <motion.div
          aria-hidden="true"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  rotate: [0, 4, 0, -4, 0],
                  scale: [1, 1.02, 1, 1.02, 1],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-[250px]
            w-[250px]
            rounded-full
            border-[30px]
            border-[#D99A18]/[0.06]

            sm:-right-32
            sm:-top-32
            sm:h-[480px]
            sm:w-[480px]
            sm:border-[55px]
          "
        />

        <motion.div
          aria-hidden="true"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 8, 0, -8, 0],
                  y: [0, -5, 0, 5, 0],
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
            -bottom-16
            -left-16
            h-36
            w-36
            rounded-full
            border-[16px]
            border-[#D99A18]/10

            sm:-bottom-20
            sm:-left-20
            sm:h-56
            sm:w-56
            sm:border-[22px]
          "
        />

        {/* Gold dots */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-24
            left-2
            hidden
            h-24
            w-24
            opacity-50
            lg:block
          "
          style={{
            backgroundImage:
              "radial-gradient(#D99A18 1.3px, transparent 1.3px)",
            backgroundSize: "12px 12px",
          }}
        />

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1240px]
            px-3
            pb-5
            pt-5

            sm:px-6
            sm:pb-9
            sm:pt-8

            lg:px-8
            lg:pb-10
            lg:pt-9
          "
        >

          {/* =================================================
              HERO CONTENT
          ================================================== */}

          <div
            className="
              grid
              items-center
              gap-4

              lg:grid-cols-[0.95fr_1.05fr]
              lg:gap-8
            "
          >

            {/* LEFT */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -35,
                    }
              }
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10"
            >

              {/* Label */}

              <motion.div
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 10,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                }}
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-[#D99A18]/30
                  bg-white/50
                  px-3
                  py-1.5
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#D99A18]

                  sm:gap-2
                  sm:px-4
                  sm:py-2
                  sm:text-[9px]
                  sm:tracking-[0.18em]
                "
              >
                <CarFront
                  size={11}
                  className="shrink-0 sm:h-3 sm:w-3"
                />

                Travel Comfortably
              </motion.div>

              {/* Heading */}

              <h1
                className="
                  mt-3
                  max-w-[570px]
                  font-serif
                  text-[32px]
                  font-medium
                  leading-[0.95]
                  tracking-[-0.045em]
                  text-[#071635]

                  sm:mt-4
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[58px]
                "
              >
                The Right Vehicle

                <span className="block text-[#D99A18]">
                  For Every Journey
                </span>
              </h1>

              {/* Divider */}

              <motion.div
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scaleX: 0,
                      }
                }
                animate={{
                  opacity: 1,
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-3
                  flex
                  origin-left
                  items-center
                  gap-2.5

                  sm:mt-4
                  sm:gap-3
                "
              >
                <span className="h-px w-9 bg-[#D99A18] sm:w-12" />

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
                    flex
                    h-3.5
                    w-3.5
                    rotate-45
                    items-center
                    justify-center
                    border
                    border-[#D99A18]/60

                    sm:h-4
                    sm:w-4
                  "
                >
                  <span className="h-1 w-1 bg-[#D99A18]" />
                </motion.span>

                <span className="h-px w-9 bg-[#D99A18] sm:w-12" />
              </motion.div>

            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 35,
                    }
              }
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10"
            >

              <p
                className="
                  max-w-xl
                  text-[10px]
                  leading-[1.55]
                  text-[#071635]/65

                  sm:text-xs
                  sm:leading-6

                  lg:text-sm
                  lg:leading-7
                "
              >
                From comfortable cars to spacious group vehicles,
                choose the right option for your family,
                pilgrimage or South India tour.
              </p>

              {/* Benefits */}

              <div
                className="
                  mt-3
                  grid
                  grid-cols-3
                  gap-1.5

                  sm:mt-5
                  sm:gap-3
                "
              >
                {benefits.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 18,
                            }
                      }
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.25 + index * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              y: -3,
                            }
                      }
                      className="text-center"
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
                        className="
                          mx-auto
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#D99A18]/20
                          bg-white
                          text-[#D99A18]
                          shadow-[0_3px_12px_rgba(7,22,53,0.05)]

                          sm:h-11
                          sm:w-11
                        "
                      >
                        <Icon
                          size={14}
                          strokeWidth={1.8}
                          className="sm:h-[18px] sm:w-[18px]"
                        />
                      </motion.div>

                      <h3
                        className="
                          mt-1
                          text-[7px]
                          font-bold
                          leading-[1.25]
                          text-[#071635]

                          sm:mt-2
                          sm:text-[10px]
                          sm:leading-4
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-0.5
                          hidden
                          text-[8px]
                          text-[#071635]/45

                          sm:block
                        "
                      >
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

            </motion.div>

          </div>

          {/* =================================================
              VEHICLE CARDS
              MOBILE = 1 CARD PER ROW
          ================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: shouldReduceMotion
                    ? 0
                    : 0.14,
                },
              },
            }}
            className="
              mt-5

              /* MOBILE */
              grid
              grid-cols-1
              gap-3

              /* TABLET */
              sm:mt-6
              sm:grid-cols-2
              sm:gap-4

              /* DESKTOP */
              lg:mt-6
              lg:grid-cols-3
              lg:gap-4
            "
          >

            {vehicles.map((vehicle, index) => {
              const Icon = vehicle.icon;

              return (
                <motion.article
                  key={vehicle.slug}
                  variants={cardVariants}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -6,
                          transition: {
                            duration: 0.25,
                            ease: "easeOut",
                          },
                        }
                  }
                  className="
                    group
                    overflow-hidden
                    rounded-[13px]
                    border
                    border-[#071635]/10
                    bg-white
                    shadow-[0_5px_16px_rgba(7,22,53,0.055)]
                    transition-shadow
                    duration-300

                    hover:shadow-[0_16px_38px_rgba(7,22,53,0.13)]

                    sm:rounded-[16px]
                  "
                >

                  {/* =================================================
                      IMAGE
                  ================================================== */}

                  <div
                    className="
                      relative
                      h-[155px]
                      overflow-hidden
                      bg-[#EDE9DF]

                      sm:h-[175px]
                    "
                  >

                    <motion.img
                      src={vehicle.image}
                      alt={vehicle.title}
                      loading="lazy"
                      initial={
                        shouldReduceMotion
                          ? undefined
                          : {
                              scale: 1.08,
                            }
                      }
                      whileInView={
                        shouldReduceMotion
                          ? undefined
                          : {
                              scale: 1,
                            }
                      }
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              scale: 1.07,
                            }
                      }
                      transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />

                    {/* Overlay */}

                    <motion.div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#071635]/50
                        via-transparent
                        to-transparent
                      "
                    />

                    {/* Passenger badge */}

                    <motion.div
                      initial={
                        shouldReduceMotion
                          ? undefined
                          : {
                              opacity: 0,
                              x: -10,
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
                        delay: 0.2,
                      }}
                      className="
                        absolute
                        left-3
                        top-3
                        flex
                        items-center
                        gap-1.5
                        rounded-[9px]
                        bg-[#071635]
                        px-2.5
                        py-1.5
                        text-white
                        shadow-lg

                        sm:px-3
                        sm:py-2
                      "
                    >
                      <Users
                        size={12}
                        className="text-[#D99A18]"
                      />

                      <div>
                        <span
                          className="
                            block
                            text-[6px]
                            leading-none
                            text-white/60

                            sm:text-[7px]
                          "
                        >
                          Passengers
                        </span>

                        <span
                          className="
                            text-[9px]
                            font-bold
                            text-white

                            sm:text-[11px]
                          "
                        >
                          {vehicle.passengers}
                        </span>
                      </div>
                    </motion.div>

                    {/* Floating vehicle icon */}

                    <motion.div
                      initial={
                        shouldReduceMotion
                          ? undefined
                          : {
                              opacity: 0,
                              y: 8,
                              scale: 0.7,
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
                        delay: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              scale: 1.12,
                              rotate: 8,
                            }
                      }
                      className="
                        absolute
                        bottom-[-15px]
                        left-1/2
                        flex
                        h-8
                        w-8
                        -translate-x-1/2
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        border-[#D99A18]/30
                        bg-[#FDFBF6]
                        text-[#D99A18]
                        shadow-md
                        transition-colors
                        duration-300

                        group-hover:border-[#D99A18]
                        group-hover:bg-[#D99A18]
                        group-hover:text-white

                        sm:bottom-[-19px]
                        sm:h-10
                        sm:w-10
                      "
                    >
                      <Icon
                        size={14}
                        className="sm:h-[17px] sm:w-[17px]"
                      />
                    </motion.div>

                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div
                    className="
                      px-2.5
                      pb-2.5
                      pt-5
                      text-center

                      sm:px-5
                      sm:pb-3.5
                      sm:pt-7
                    "
                  >

                    <motion.h2
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              letterSpacing: "0.01em",
                            }
                      }
                      transition={{
                        duration: 0.25,
                      }}
                      className={`
                        font-serif
                        text-[17px]
                        font-bold
                        leading-[1.1]
                        tracking-[-0.025em]

                        sm:text-[21px]
                        sm:leading-tight

                        ${
                          index === 2
                            ? "text-[#D99A18]"
                            : "text-[#071635]"
                        }
                      `}
                    >
                      {vehicle.title}
                    </motion.h2>

                    {/* Gold line */}

                    <motion.div
                      initial={
                        shouldReduceMotion
                          ? undefined
                          : {
                              width: 0,
                              opacity: 0,
                            }
                      }
                      whileInView={
                        shouldReduceMotion
                          ? undefined
                          : {
                              width: 28,
                              opacity: 1,
                            }
                      }
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15,
                      }}
                      className="
                        mx-auto
                        mt-2
                        h-[2px]
                        bg-[#D99A18]

                        sm:mt-2.5
                      "
                    />

                    <p
                      className="
                        mx-auto
                        mt-2
                        max-w-[145px]
                        text-[8px]
                        leading-[1.45]
                        text-[#071635]/55

                        sm:mt-2.5
                        sm:max-w-[280px]
                        sm:text-[10px]
                        sm:leading-5
                      "
                    >
                      {vehicle.description}
                    </p>

                  </div>

                  {/* =================================================
                      FOOTER
                  ================================================== */}

                  <div
                    className="
                      flex
                      min-h-[38px]
                      items-center
                      justify-between
                      border-t
                      border-[#071635]/7
                      bg-[#FCFAF4]
                      px-2.5
                      py-1.5

                      sm:min-h-[45px]
                      sm:px-5
                      sm:py-2.5
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        gap-1
                        text-[6.5px]
                        font-semibold
                        text-[#071635]

                        sm:gap-1.5
                        sm:text-[9px]
                      "
                    >
                      <ShieldCheck
                        size={11}
                        className="
                          shrink-0
                          text-[#D99A18]

                          sm:h-[14px]
                          sm:w-[14px]
                        "
                      />

                      <span className="whitespace-nowrap">
                        Comfortable Travel
                      </span>
                    </div>

                    <Link
                      href={`/vehicles/${vehicle.slug}`}
                      className="
                        group/details
                        flex
                        items-center
                        gap-0.5
                        text-[7px]
                        font-bold
                        text-[#071635]
                        transition-colors
                        duration-300

                        hover:text-[#D99A18]

                        sm:gap-1
                        sm:text-[10px]
                      "
                    >
                      Details

                      <ArrowRight
                        size={10}
                        className="
                          transition-transform
                          duration-300
                          group-hover/details:translate-x-1

                          sm:h-3
                          sm:w-3
                        "
                      />
                    </Link>

                  </div>

                </motion.article>
              );
            })}

          </motion.div>

          {/* =================================================
              HELP CTA
          ================================================== */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                    scale: 0.97,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
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
              mt-4
              flex
              items-center
              justify-center

              sm:mt-6
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
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  min-h-[37px]
                  items-center
                  justify-center
                  gap-1.5
                  rounded-full
                  bg-[#071635]
                  px-4
                  py-2
                  text-[8px]
                  font-bold
                  text-white
                  shadow-[0_7px_18px_rgba(7,22,53,0.14)]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#0B2048]
                  hover:shadow-[0_12px_26px_rgba(7,22,53,0.2)]

                  active:scale-[0.98]

                  sm:min-h-[39px]
                  sm:gap-2
                  sm:px-6
                  sm:py-2.5
                  sm:text-[10px]
                "
              >
                <span className="whitespace-nowrap text-white">
                  Need Help Choosing?
                </span>

                <ArrowRight
                  size={11}
                  className="
                    shrink-0
                    text-[#D99A18]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1

                    sm:h-3
                    sm:w-3
                  "
                />
              </Link>
            </motion.div>

          </motion.div>

        </div>
      </section>
    </main>
  );
}