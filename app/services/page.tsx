"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BusFront,
  Building2,
  CalendarCheck,
  Check,
  ChefHat,
  Church,
  Compass,
  Hotel,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Users,
  Headphones,
  Award,
} from "lucide-react";

const services = [
  {
    slug: "south-india-tours",
    title: "South India Tours",
    description:
      "Explore South India with thoughtfully arranged travel plans designed for families, individuals and groups.",
    icon: Compass,
    image: "/images/services/tour.jpg",
    features: [
      "Family tours",
      "Group tours",
      "Sightseeing arrangements",
      "Travel coordination",
    ],
  },
  {
    slug: "vehicle-booking",
    title: "Vehicle Booking",
    description:
      "Arrange suitable vehicles for local travel, long-distance journeys, family trips and group transportation.",
    icon: BusFront,
    image: "/images/services/vehicle.jpg",
    features: [
      "Cars & vans",
      "Group transportation",
      "Local travel",
      "Trip-based arrangements",
    ],
  },
  {
    slug: "accommodation",
    title: "Accommodation",
    description:
      "Help arrange comfortable accommodation for individuals, families and larger groups during their journey.",
    icon: Hotel,
    image: "/images/services/accommodation.jpg",
    features: [
      "Room arrangements",
      "Group accommodation",
      "Stay coordination",
      "Location-based support",
    ],
  },
  {
    slug: "hall-arrangements",
    title: "Hall Arrangements",
    description:
      "Coordinate suitable halls and spaces for gatherings, religious programmes, meetings and group events.",
    icon: Building2,
    image: "/images/services/hall.jpg",
    features: [
      "Hall booking support",
      "Group gatherings",
      "Programme arrangements",
      "Event coordination",
    ],
  },
  {
    slug: "kitchen-arrangements",
    title: "Kitchen Arrangements",
    description:
      "Support for organised food and kitchen requirements during group stays, gatherings and programmes.",
    icon: ChefHat,
    image: "/images/services/kitchen.jpg",
    features: [
      "Kitchen arrangements",
      "Group requirements",
      "Programme support",
      "Facility coordination",
    ],
  },
  {
    slug: "religious-programmes",
    title: "Religious Programmes",
    description:
      "Travel and facility coordination for religious gatherings, spiritual programmes and community events.",
    icon: Sparkles,
    image: "/images/services/religious.jpg",
    features: [
      "Religious gatherings",
      "Travel arrangements",
      "Venue coordination",
      "Group support",
    ],
  },
  {
    slug: "pilgrimage-travel",
    title: "Pilgrimage Travel",
    description:
      "Travel support for pilgrimage journeys, spiritual visits and religious groups with organised arrangements.",
    icon: Church,
    image: "/images/services/pilgrimage.jpg",
    features: [
      "Pilgrimage trips",
      "Group travel",
      "Travel coordination",
      "Programme support",
    ],
  },
  {
    slug: "special-gatherings",
    title: "Special Gatherings",
    description:
      "Complete arrangements for family functions, celebrations, community events and special gatherings.",
    icon: Users,
    image: "/images/services/special.jpg",
    features: [
      "Family functions",
      "Event arrangements",
      "Venue coordination",
      "Group support",
    ],
  },
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Trusted & Reliable",
    text: "Years of experience in serving happy travellers",
  },
  {
    icon: Users,
    title: "Complete Solutions",
    text: "All your travel needs under one roof",
  },
  {
    icon: Award,
    title: "Quality Assured",
    text: "Comfort, safety and satisfaction guaranteed",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    text: "We're always here to help you",
  },
];

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Happy Customers",
  },
  {
    icon: MapPinned,
    value: "500+",
    label: "Destinations",
  },
  {
    icon: BusFront,
    value: "250+",
    label: "Vehicles",
  },
  {
    icon: CalendarCheck,
    value: "15+",
    label: "Years of Experience",
  },
];

export default function ServicesPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F3E8] text-[#071635]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#031222]">

        {/* Decorative curves */}

        <motion.div
          aria-hidden="true"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  rotate: [0, 4, 0],
                  scale: [1, 1.02, 1],
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
            -right-32
            -top-32
            h-[420px]
            w-[420px]
            rounded-full
            border-[45px]
            border-[#D99A18]/10
            sm:h-[600px]
            sm:w-[600px]
            sm:border-[65px]
          "
        />

        <motion.div
          aria-hidden="true"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 15, 0],
                  y: [0, -10, 0],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -bottom-52
            left-[16%]
            h-[420px]
            w-[420px]
            rounded-full
            border-[35px]
            border-[#D99A18]/10
          "
        />

        {/* Gold dots */}

        <motion.div
          aria-hidden="true"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.25, 0.55, 0.25],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            right-[7%]
            top-20
            hidden
            h-32
            w-32
            sm:block
          "
          style={{
            backgroundImage:
              "radial-gradient(#D99A18 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
          }}
        />

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1380px]
            px-5
            pb-12
            pt-9
            sm:px-8
            sm:pb-16
            sm:pt-12
            lg:px-10
            lg:pb-20
            lg:pt-14
            xl:px-12
          "
        >

          <div
            className="
              grid
              items-center
              gap-9
              lg:grid-cols-[0.9fr_1.1fr]
              lg:gap-10
            "
          >

            {/* HERO CONTENT */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -45,
                    }
              }
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10"
            >

              <motion.div
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 15,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#D99A18]
                  sm:text-[10px]
                "
              >
                <span className="h-px w-8 bg-[#D99A18]" />

                What We Offer

                <Sparkles size={12} />
              </motion.div>

              <motion.h1
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 25,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-4
                  max-w-xl
                  font-serif
                  text-[43px]
                  font-medium
                  leading-[0.96]
                  tracking-[-0.04em]
                  text-white
                  sm:text-6xl
                  lg:text-[68px]
                "
              >
                Services
                <br />

                Designed for

                <span className="block text-[#D99A18]">
                  Memorable
                </span>

                <span className="block text-[#D99A18]">
                  Journeys
                </span>
              </motion.h1>

              <motion.p
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 20,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                }}
                className="
                  mt-5
                  max-w-lg
                  text-xs
                  leading-6
                  text-white/60
                  sm:text-sm
                  sm:leading-7
                "
              >
                From comfortable travel and peaceful stays
                to spiritual journeys and special gatherings —
                we take care of every detail.
              </motion.p>

              <motion.div
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 20,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.5,
                }}
              >
                <Link
                  href="#services"
                  className="
                    group
                    mt-6
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
                  Explore Services

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

            </motion.div>

            {/* HERO IMAGE COLLAGE */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 35,
                      scale: 0.96,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                mx-auto
                w-full
                max-w-[690px]
              "
            >

              <div
                className="
                  grid
                  grid-cols-[1.05fr_0.8fr_0.9fr]
                  gap-2
                  sm:gap-3
                "
              >

                {/* BIG IMAGE */}

                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [0, -5, 0],
                        }
                  }
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    h-[320px]
                    overflow-hidden
                    rounded-[20px]
                    border
                    border-[#D99A18]/30
                    sm:h-[430px]
                    lg:h-[490px]
                  "
                >
                  <img
                    src="/images/services/tour.jpg"
                    alt="South India travel"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-1000
                      hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#031222]/75
                      via-transparent
                      to-transparent
                    "
                  />

                  <div className="absolute bottom-4 left-4 right-4">
                    <p
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-[#F0C45C]
                      "
                    >
                      South India
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      Travel & Tours
                    </p>
                  </div>
                </motion.div>

                {/* MIDDLE */}

                <div className="flex flex-col gap-2 sm:gap-3">

                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: [0, 5, 0],
                          }
                    }
                    transition={{
                      duration: 6.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      relative
                      h-[155px]
                      overflow-hidden
                      rounded-[18px]
                      border
                      border-[#D99A18]/30
                      sm:h-[210px]
                    "
                  >
                    <img
                      src="/images/services/pilgrimage.jpg"
                      alt="Pilgrimage travel"
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-105
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#031222]/70 to-transparent" />

                    <Church
                      size={20}
                      className="
                        absolute
                        bottom-3
                        left-3
                        text-[#F0C45C]
                      "
                    />
                  </motion.div>

                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: [0, -4, 0],
                          }
                    }
                    transition={{
                      duration: 5.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      relative
                      h-[155px]
                      overflow-hidden
                      rounded-[18px]
                      border
                      border-[#D99A18]/30
                      sm:h-[210px]
                    "
                  >
                    <img
                      src="/images/services/accommodation.jpg"
                      alt="Accommodation"
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-105
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#031222]/70 to-transparent" />

                    <Hotel
                      size={20}
                      className="
                        absolute
                        bottom-3
                        left-3
                        text-[#F0C45C]
                      "
                    />
                  </motion.div>

                </div>

                {/* RIGHT */}

                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [0, -7, 0],
                        }
                  }
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    mt-7
                    h-[275px]
                    overflow-hidden
                    rounded-[20px]
                    border
                    border-[#D99A18]/30
                    sm:mt-10
                    sm:h-[370px]
                    lg:h-[420px]
                  "
                >
                  <img
                    src="/images/services/religious.jpg"
                    alt="Religious programme"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-1000
                      hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#031222]/80 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4">
                    <Sparkles
                      size={20}
                      className="text-[#F0C45C]"
                    />

                    <p className="mt-2 text-sm font-bold text-white">
                      Special Journeys
                    </p>
                  </div>
                </motion.div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          TRUST STRIP
      ====================================================== */}

      <section className="relative z-20 bg-[#F7F3E8]">

        <div
          className="
            mx-auto
            -mt-1
            w-full
            max-w-[1240px]
            px-4
            sm:px-6
            lg:px-8
          "
        >

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 25,
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
              duration: 0.7,
            }}
            className="
              grid
              overflow-hidden
              rounded-[20px]
              border
              border-[#071635]/10
              bg-white
              shadow-[0_15px_45px_rgba(7,22,53,0.08)]
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: -15,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    border-b
                    border-[#071635]/8
                    px-4
                    py-5
                    transition-colors
                    duration-300
                    hover:bg-[#F7F3E8]
                    sm:px-5
                    lg:border-b-0
                    lg:border-r
                    lg:last:border-r-0
                  "
                >

                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            rotate: 8,
                            scale: 1.08,
                          }
                    }
                    transition={{
                      duration: 0.25,
                    }}
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
                      transition-all
                      duration-300
                      group-hover:bg-[#D99A18]
                      group-hover:text-white
                    "
                  >
                    <Icon size={18} />
                  </motion.div>

                  <div>
                    <h3 className="text-xs font-bold text-[#071635]">
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[9px]
                        leading-4
                        text-[#071635]/50
                      "
                    >
                      {item.text}
                    </p>
                  </div>

                </motion.div>
              );
            })}

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          SERVICES INTRO
      ====================================================== */}

      <section
        id="services"
        className="bg-[#F7F3E8]"
      >

        <div
          className="
            mx-auto
            w-full
            max-w-[1240px]
            px-4
            pb-12
            pt-14
            sm:px-6
            sm:pb-16
            sm:pt-18
            lg:px-8
            lg:pb-20
            lg:pt-20
          "
        >

          <div
            className="
              grid
              items-end
              gap-6
              lg:grid-cols-[1fr_0.75fr]
            "
          >

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -25,
                    }
              }
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
                ease: [0.22, 1, 0.36, 1],
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

                Our Services

                <Sparkles size={11} />
              </div>

              <h2
                className="
                  mt-3
                  max-w-2xl
                  font-serif
                  text-3xl
                  font-medium
                  leading-tight
                  tracking-[-0.03em]
                  text-[#071635]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Everything You Need,
                <span className="block text-[#B67A0B]">
                  We Arrange
                </span>
              </h2>

            </motion.div>

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 25,
                    }
              }
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
                delay: 0.1,
              }}
            >

              <p
                className="
                  max-w-md
                  text-xs
                  leading-6
                  text-[#071635]/55
                  lg:ml-auto
                  sm:text-sm
                  sm:leading-7
                "
              >
                We provide end-to-end arrangements for your
                journeys, events and spiritual occasions with
                care and professionalism.
              </p>

              <div className="mt-4 h-px w-16 bg-[#D99A18]" />

            </motion.div>

          </div>

          {/* =================================================
              SERVICE GRID
          ================================================== */}

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
                  staggerChildren: shouldReduceMotion ? 0 : 0.09,
                },
              },
            }}
            className="
              mt-8
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.slug}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 45,
                      scale: 0.96,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    },
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -8,
                          scale: 1.015,
                        }
                  }
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[18px]
                    border
                    border-[#071635]/10
                    bg-white
                    shadow-[0_6px_20px_rgba(7,22,53,0.04)]
                    transition-shadow
                    duration-500
                    hover:shadow-[0_20px_45px_rgba(7,22,53,0.14)]
                  "
                >

                  {/* ANIMATED SHINE */}

                  <motion.div
                    aria-hidden="true"
                    initial={{
                      x: "-120%",
                    }}
                    whileInView={{
                      x: "120%",
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: index * 0.09 + 0.25,
                      ease: "easeInOut",
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      z-20
                      w-1/3
                      -skew-x-12
                      bg-gradient-to-r
                      from-transparent
                      via-white/20
                      to-transparent
                    "
                  />

                  {/* IMAGE */}

                  <div className="relative h-[185px] overflow-hidden bg-[#F7F3E8] sm:h-[195px]">

                    <motion.img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              scale: 1.08,
                            }
                      }
                      whileInView={{
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.25,
                      }}
                      transition={{
                        duration: 1,
                        delay: index * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        h-full
                        w-full
                        object-contain
                        p-2
                        transition-transform
                        duration-700
                        group-hover:scale-[1.05]
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#071635]/65
                        via-transparent
                        to-transparent
                      "
                    />

                    {/* ICON */}

                    <motion.div
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              opacity: 0,
                              scale: 0.6,
                              y: 15,
                            }
                      }
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.25,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08 + 0.25,
                        type: "spring",
                        stiffness: 180,
                        damping: 14,
                      }}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              rotate: 8,
                              scale: 1.08,
                            }
                      }
                      className="
                        absolute
                        bottom-3
                        left-4
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        border-[#D99A18]
                        bg-[#071635]
                        text-[#F0C45C]
                        shadow-lg
                        transition-colors
                        duration-300
                        group-hover:bg-[#D99A18]
                        group-hover:text-white
                      "
                    >
                      <Icon size={18} />
                    </motion.div>

                  </div>

                  {/* CARD CONTENT */}

                  <div className="p-4 pt-5">

                    <motion.h3
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 8,
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
                        duration: 0.45,
                        delay: index * 0.07 + 0.15,
                      }}
                      className="
                        text-[17px]
                        font-extrabold
                        leading-tight
                        tracking-[-0.025em]
                        text-[#071635]
                      "
                    >
                      {service.title}
                    </motion.h3>

                    <p
                      className="
                        mt-2
                        min-h-[60px]
                        text-[10px]
                        leading-5
                        text-[#071635]/55
                        sm:text-[11px]
                      "
                    >
                      {service.description}
                    </p>

                    <div
                      className="
                        mt-3
                        space-y-1.5
                        border-t
                        border-[#071635]/8
                        pt-3
                      "
                    >

                      {service.features.slice(0, 3).map((feature, featureIndex) => (
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
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                            amount: 0.2,
                          }}
                          transition={{
                            duration: 0.35,
                            delay:
                              index * 0.06 +
                              featureIndex * 0.06 +
                              0.25,
                          }}
                          className="
                            flex
                            items-center
                            gap-2
                            text-[9px]
                            font-medium
                            text-[#071635]/60
                          "
                        >
                          <Check
                            size={11}
                            className="shrink-0 text-[#D99A18]"
                          />

                          {feature}
                        </motion.div>
                      ))}

                    </div>

                    {/* UPDATED LEARN MORE */}

                    <Link
                      href={`/services/${service.slug}`}
                      className="
                        group/link
                        mt-4
                        inline-flex
                        items-center
                        gap-1.5
                        text-[10px]
                        font-bold
                        text-[#071635]
                        transition-colors
                        duration-300
                        hover:text-[#D99A18]
                      "
                    >
                      Learn More

                      <ArrowRight
                        size={12}
                        className="
                          transition-transform
                          duration-300
                          group-hover/link:translate-x-1
                        "
                      />
                    </Link>

                  </div>

                  {/* GOLD ACCENT */}

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: "100%",
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.08 + 0.4,
                      ease: "easeOut",
                    }}
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-1
                      bg-[#D99A18]
                    "
                  />

                </motion.article>
              );
            })}

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          HOW WE ARRANGE
      ====================================================== */}

      <section className="bg-white">

        <div
          className="
            mx-auto
            w-full
            max-w-[1240px]
            px-4
            py-12
            sm:px-6
            sm:py-16
            lg:px-8
            lg:py-18
          "
        >

          <div
            className="
              grid
              gap-8
              lg:grid-cols-[0.8fr_1.2fr]
              lg:items-center
            "
          >

            {/* LEFT */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -30,
                    }
              }
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

                Simple Process
              </div>

              <h2
                className="
                  mt-3
                  max-w-md
                  font-serif
                  text-3xl
                  font-medium
                  leading-tight
                  tracking-[-0.03em]
                  text-[#071635]
                  sm:text-4xl
                "
              >
                One Partner.
                <span className="block text-[#B67A0B]">
                  Every Arrangement.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-md
                  text-xs
                  leading-6
                  text-[#071635]/55
                  sm:text-sm
                  sm:leading-7
                "
              >
                Tell us what you need and we help coordinate
                the important details, so you can focus on
                enjoying your journey.
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
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

            </motion.div>

            {/* STEPS */}

            <div className="grid gap-3 sm:grid-cols-3">

              {[
                {
                  number: "01",
                  title: "Tell Us",
                  text: "Share your travel or group requirements.",
                },
                {
                  number: "02",
                  title: "We Arrange",
                  text: "We coordinate the services you need.",
                },
                {
                  number: "03",
                  title: "Travel",
                  text: "Enjoy a more organised journey.",
                },
              ].map((step, index) => (

                <motion.div
                  key={step.number}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 25,
                          scale: 0.96,
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
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -5,
                        }
                  }
                  className="
                    group
                    rounded-[16px]
                    border
                    border-[#071635]/8
                    bg-[#F7F3E8]
                    p-4
                    transition-all
                    duration-300
                    hover:border-[#D99A18]/30
                    hover:bg-white
                    hover:shadow-lg
                  "
                >

                  <span
                    className="
                      text-[9px]
                      font-extrabold
                      tracking-[0.15em]
                      text-[#D99A18]
                    "
                  >
                    {step.number}
                  </span>

                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            rotate: 8,
                            scale: 1.08,
                          }
                    }
                    className="
                      mt-4
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-[#071635]
                      text-[#F0C45C]
                    "
                  >
                    <Check size={15} />
                  </motion.div>

                  <h3
                    className="
                      mt-4
                      text-sm
                      font-extrabold
                      text-[#071635]
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-1.5
                      text-[10px]
                      leading-5
                      text-[#071635]/50
                    "
                  >
                    {step.text}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          STATISTICS
      ====================================================== */}

      <section className="bg-[#031222]">

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1240px]
            overflow-hidden
            px-4
            py-8
            sm:px-6
            sm:py-10
            lg:px-8
            lg:py-11
          "
        >

          <motion.div
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    rotate: [0, 5, 0],
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
              -left-20
              -top-32
              h-72
              w-72
              rounded-full
              border-[30px]
              border-[#D99A18]/10
            "
          />

          <motion.div
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    rotate: [0, -5, 0],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -bottom-32
              -right-20
              h-72
              w-72
              rounded-full
              border-[30px]
              border-white/5
            "
          />

          <div
            className="
              relative
              grid
              grid-cols-2
              lg:grid-cols-4
            "
          >

            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    border-b
                    border-white/10
                    px-3
                    py-4
                    sm:px-5
                    lg:border-b-0
                    lg:border-r
                    lg:last:border-r-0
                  "
                >

                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: 1.1,
                            rotate: 5,
                          }
                    }
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#D99A18]/10
                      text-[#D99A18]
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <Icon size={17} />
                  </motion.div>

                  <div>

                    <div
                      className="
                        font-serif
                        text-2xl
                        font-medium
                        leading-none
                        text-[#D99A18]
                        sm:text-3xl
                      "
                    >
                      {stat.value}
                    </div>

                    <p
                      className="
                        mt-1
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.08em]
                        text-white/55
                        sm:text-[9px]
                      "
                    >
                      {stat.label}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-[#F7F3E8]">

        <div
          className="
            mx-auto
            w-full
            max-w-[1240px]
            px-4
            py-10
            sm:px-6
            sm:py-14
            lg:px-8
            lg:py-16
          "
        >

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 30,
                    scale: 0.98,
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
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              overflow-hidden
              rounded-[22px]
              bg-[#071635]
              px-5
              py-9
              text-center
              sm:px-10
              sm:py-11
            "
          >

            <motion.div
              aria-hidden="true"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      rotate: [0, 8, 0],
                    }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                border-[30px]
                border-white/5
              "
            />

            <motion.div
              aria-hidden="true"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      rotate: [0, -8, 0],
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
                -bottom-28
                -left-20
                h-64
                w-64
                rounded-full
                border-[25px]
                border-[#D99A18]/10
              "
            />

            <div className="relative">

              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#F0C45C]
                "
              >
                Ready To Travel?
              </p>

              <h2
                className="
                  mx-auto
                  mt-3
                  max-w-2xl
                  font-serif
                  text-3xl
                  font-medium
                  tracking-[-0.03em]
                  text-white
                  sm:text-4xl
                "
              >
                Let&apos;s arrange your
                <span className="text-[#D99A18]">
                  {" "}journey.
                </span>
              </h2>

              <p
                className="
                  mx-auto
                  mt-3
                  max-w-xl
                  text-xs
                  leading-6
                  text-white/50
                  sm:text-sm
                "
              >
                Tell us what you need and we&apos;ll help
                coordinate the arrangements.
              </p>

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
                  hover:shadow-xl
                "
              >
                Book Now

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

            </div>

          </motion.div>

        </div>
      </section>

    </main>
  );
}