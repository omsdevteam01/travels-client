"use client";

import Link from "next/link";
import { mediaUrl } from "@/lib/media";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Headphones,
  Heart,
  MapPinned,
  ShieldCheck,
  Sparkles,
  TreePalm,
  UserRound,
  UsersRound,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

/* =========================================================
   DATA
========================================================= */

const features = [
  {
    icon: Compass,
    title: "Curated Experiences",
    description:
      "Carefully designed tours and stays that reflect the culture and beauty of South India.",
  },
  {
    icon: UsersRound,
    title: "Reliable & Trusted",
    description:
      "Years of experience and happy travelers who trust us for their important journeys.",
  },
  {
    icon: ShieldCheck,
    title: "Comfort & Safety",
    description:
      "Your safety and comfort are our top priorities at every step.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "We're always here to support you before, during and after your trip.",
  },
];

const journeyPoints = [
  "Personalized travel planning",
  "Experienced local guidance",
  "Comfortable travel arrangements",
  "Reliable support throughout your trip",
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/* =========================================================
   ABOUT PAGE
========================================================= */

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#fbf8f0] text-[#09264d]">

      {/* =====================================================
          HERO
          SHORT + SPACE OPTIMIZED
          FULL IMAGE
          CREAM LEFT SIDE
          NO VERTICAL SEPARATOR
      ====================================================== */}

      <section className="relative min-h-[390px] overflow-hidden bg-[#fbf8f0] sm:min-h-[415px] lg:min-h-[435px]">

        {/* ===================================================
            FULL HERO IMAGE

            The image is shown in its full composition.
            No heavy blur is applied to the photograph.
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 1.02,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.15,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="absolute inset-0"
        >
          <img
            src={mediaUrl("images/about/hero.png")}
            alt="Beautiful tropical beach with coconut trees"
            className="h-full w-full object-cover object-[62%_72%] transition-transform duration-[1400ms] ease-out sm:object-[62%_center]"
          />

          {/* =================================================
              1/2 — CREAM + GLASS TEXT AREA

              Only the left half receives the cream treatment.
              The right half remains the original sharp image.
          ================================================== */}

          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-[#fbf8f0]/[0.98] from-[0%]
              via-[#fbf8f0]/[0.92] via-[20%]
              via-[#fbf8f0]/[0.68] via-[30%]
              via-[#fbf8f0]/[0.28] via-[38%]
              via-transparent via-[46%]
              to-transparent
              sm:from-[#fbf8f0]/[0.98] sm:from-[0%]
              sm:via-[#fbf8f0]/[0.90] sm:via-[18%]
              sm:via-[#fbf8f0]/[0.62] sm:via-[28%]
              sm:via-[#fbf8f0]/[0.24] sm:via-[37%]
              sm:via-transparent sm:via-[45%]
              sm:to-transparent
            "
          />

          {/* =================================================
              GLASS BLUR — WORDING AREA ONLY

              This is deliberately narrow.
              The photograph outside this zone stays completely
              sharp and visible.
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute inset-y-0
              left-[7%]
              w-[19%]
              backdrop-blur-[1.5px] sm:left-[7%] sm:w-[18%]
            "
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 24%, black 58%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 24%, black 58%, transparent 100%)",
            }}
          />

          {/* =================================================
              VERY LIGHT GLASS HIGHLIGHT
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute inset-y-0 left-[12%] w-[15%]
              bg-white/[0.018]
              blur-[1px]
            "
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 35%, black 65%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 35%, black 65%, transparent)",
            }}
          />

          {/* =================================================
              IMAGE-SIDE SOFT LIGHT
              No blur on the main image.
          ================================================== */}

          <motion.div
            animate={{
              opacity: [0.03, 0.07, 0.03],
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute right-[16%] top-[12%] h-36 w-36 rounded-full bg-white/20 blur-3xl"
          />

          {/* =================================================
              SMALL BOTTOM CREAM FADE
          ================================================== */}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#fbf8f0]/65 to-transparent" />
        </motion.div>


        {/* Mobile readability layer — soft, no hard panel */}
        <div
          className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-[#fbf8f0]/[0.96] from-[0%] via-[#fbf8f0]/[0.78] via-[28%] via-[#fbf8f0]/[0.30] via-[43%] via-transparent via-[57%] to-transparent sm:hidden"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-8 bg-gradient-to-t from-[#09264d]/[0.025] to-transparent sm:hidden"
        />

        {/* ===================================================
            DECORATIVE LINES
        ==================================================== */}

        <div className="pointer-events-none absolute right-7 top-8 z-10 hidden lg:block xl:right-14">

          <motion.span
            animate={{
              opacity: [0.12, 0.55, 0.12],
              x: [0, 4, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="block h-[3px] w-11 rotate-[15deg] rounded-full bg-white/70"
          />

          <motion.span
            animate={{
              opacity: [0.08, 0.45, 0.08],
              x: [0, -3, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="ml-3 mt-3 block h-[3px] w-7 -rotate-12 rounded-full bg-white/60"
          />

          <motion.span
            animate={{
              opacity: [0.06, 0.35, 0.06],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="ml-6 mt-3 block h-[2px] w-4 rotate-6 rounded-full bg-white/50"
          />
        </div>

        {/* ===================================================
            HERO CONTENT
        ==================================================== */}

        <div className="relative z-10 mx-auto flex min-h-[390px] w-full max-w-[1500px] items-center px-5 py-4 sm:min-h-[415px] sm:px-8 sm:py-5 lg:min-h-[435px] lg:px-14 lg:py-4 xl:px-16">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[560px] lg:max-w-[560px]"
          >

            {/* LABEL */}

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d99213]/60 bg-[#fbf8f0]/75 shadow-[0_4px_14px_rgba(9,38,77,0.06)] backdrop-blur-md sm:h-8 sm:w-8">
                <Sparkles
                  size={17}
                  strokeWidth={1.7}
                  className="text-[#d99213]"
                />
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#c98508] sm:text-xs sm:tracking-[0.19em]">
                About Baiya Tours & Travels
              </span>
            </motion.div>

            {/* HEADING */}

            <motion.h1
              variants={itemVariants}
              className="mt-2 max-w-[620px] font-serif text-[29px] font-bold leading-[0.98] tracking-[-0.045em] text-[#09264d] drop-shadow-[0_2px_8px_rgba(251,248,240,0.65)] sm:mt-3 sm:text-[42px] sm:leading-[0.98] lg:text-[51px]"
            >
              Journeys that

              <span className="block font-[cursive] text-[35px] font-medium italic leading-[0.94] text-[#d89415] sm:text-[46px] lg:text-[56px]">
                inspire,
              </span>

              <span className="block">
                memories that last.
              </span>
            </motion.h1>

            {/* GOLD LINE */}

            <motion.div
              variants={itemVariants}
              className="mt-2.5 h-[2px] w-[50px] bg-[#d89415] shadow-[0_2px_8px_rgba(216,148,21,0.22)] sm:mt-3 sm:w-[62px]"
            />

            {/* DESCRIPTION */}

            <motion.p
              variants={itemVariants}
              className="mt-2 max-w-[535px] text-[10.5px] leading-[1.4] text-[#263b58]/78 sm:mt-2.5 sm:text-[12px] sm:leading-[1.45] lg:text-[13px]"
            >
              At Baiya Tours & Travels, we craft meaningful travel
              experiences across South India. Whether it&apos;s a peaceful
              family getaway, a spiritual journey, or a group tour —
              we take care of every detail so you can enjoy the journey.
            </motion.p>

            {/* BUTTON */}

            <motion.div
              variants={itemVariants}
              className="mt-3 sm:mt-4"
            >
              <Link
  href="/contact"
  className="group inline-flex h-9 items-center overflow-hidden rounded-full bg-[#09264d] pl-4 pr-1 text-[10px] font-bold text-white shadow-[0_8px_22px_rgba(9,38,77,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(9,38,77,0.22)] sm:h-10 sm:pl-5 sm:text-[11px]"
>
  <span className="mr-4 whitespace-nowrap text-white sm:mr-5">
    Discover Our Story
  </span>

  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#e0a129] bg-[#e0a129] text-[#09264d] transition-all duration-300 group-hover:bg-white sm:h-8 sm:w-8">
    <ArrowRight
      size={16}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </span>
</Link>
            </motion.div>

          </motion.div>
        </div>

        {/* ===================================================
            CLEAN END — NO WHITE WAVE / NO SEPARATOR
        ==================================================== */}



      </section>

      {/* =====================================================
          WHO WE ARE
      ====================================================== */}

      <section className="relative overflow-hidden bg-white">

        <div className="mx-auto w-full max-w-[1400px] px-5 py-6 sm:px-8 sm:py-8 lg:px-16 lg:py-10 xl:px-20">

          <div className="grid items-center gap-7 lg:grid-cols-[0.9fr_1fr_0.85fr] lg:gap-7 xl:gap-10">

            {/* =================================================
                LEFT
            ================================================== */}

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >

              <div className="flex items-center gap-2">

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d99213]">
                  Who We Are
                </span>

                <span className="flex gap-1">
                  <span className="h-[2px] w-3 bg-[#d99213]" />
                  <span className="h-[2px] w-3 bg-[#d99213]" />
                  <span className="h-[2px] w-3 bg-[#d99213]" />
                </span>

              </div>

              <h2 className="mt-3 font-serif text-[31px] font-bold leading-[1.03] tracking-[-0.03em] text-[#09264d] sm:text-[38px]">

                Your Journey,

                <span className="block font-[cursive] text-[37px] font-medium italic text-[#d89415] sm:text-[44px]">
                  Our Passion.
                </span>

              </h2>

              <p className="mt-3 max-w-[380px] text-[12px] leading-5 text-[#263b58]/70 sm:text-[13px] sm:leading-6">
                We are a team of passionate travel experts dedicated to
                making your trips smooth, comfortable and unforgettable.
                With local knowledge and personal care, we turn your
                travel plans into lifelong memories.
              </p>

              <p className="mt-2 max-w-[380px] text-[12px] leading-5 text-[#263b58]/65 sm:text-[13px] sm:leading-6">
                From peaceful coastal escapes to spiritual journeys and
                group adventures, every experience is carefully planned
                around your comfort and interests.
              </p>

              {/* PERSONAL CARE */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                }}
                whileHover={{
                  y: -3,
                }}
                className="mt-4 flex max-w-[365px] items-center gap-3 rounded-[20px] bg-[#fbf8f0] p-3.5 shadow-[0_8px_22px_rgba(9,38,77,0.04)]"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#09264d]">
                  <UserRound
                    size={19}
                    strokeWidth={1.7}
                    className="text-[#e0a129]"
                  />
                </div>

                <div>

                  <h3 className="text-[11px] font-bold text-[#09264d]">
                    Personal Care
                  </h3>

                  <p className="mt-1 text-[9px] leading-4 text-[#263b58]/65">
                    We treat every traveler like family and ensure a
                    truly personalized experience.
                  </p>

                </div>

              </motion.div>

            </motion.div>

            {/* =================================================
                IMAGE COLLAGE
            ================================================== */}

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="relative mx-auto h-[285px] w-full max-w-[450px] sm:h-[385px]"
            >

              {/* BACK IMAGE */}

              <motion.div
                animate={{
                  y: [0, -4, 0],
                  rotate: [-1, 0, -1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[5%] top-0 h-[275px] w-[67%] overflow-hidden rounded-[20px] border-[5px] border-white bg-white shadow-[0_16px_35px_rgba(9,38,77,0.12)] sm:h-[315px]"
              >

                <motion.img
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.65,
                  }}
                  src={mediaUrl("/images/about/img1.png")}
                  alt="Tropical coastal landscape"
                  className="h-full w-full object-cover"
                />

              </motion.div>

              {/* FRONT IMAGE */}

              <motion.div
                animate={{
                  y: [0, 5, 0],
                  rotate: [1, 0, 1],
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 right-[3%] z-10 h-[250px] w-[54%] overflow-hidden rounded-[20px] border-[5px] border-white bg-white shadow-[0_20px_40px_rgba(9,38,77,0.15)] sm:h-[285px]"
              >

                <motion.img
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.65,
                  }}
                  src={mediaUrl("/images/about/img2.png")}
                  alt="Peaceful beach sunset"
                  className="h-full w-full object-cover"
                />

              </motion.div>

              {/* FLOATING PALM */}

              <motion.div
                animate={{
                  y: [0, -4, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-0 top-7 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#e0a129] shadow-lg"
              >
                <TreePalm
                  size={20}
                  strokeWidth={1.7}
                  className="text-[#09264d]"
                />
              </motion.div>

            </motion.div>

            {/* =================================================
                RIGHT FEATURES
            ================================================== */}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="space-y-5"
            >

              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    whileHover={{
                      x: 4,
                    }}
                    className="flex items-start gap-3.5"
                  >

                    <motion.div
                      whileHover={{
                        rotate: 5,
                        scale: 1.05,
                      }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#09264d]"
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.6}
                        className="text-[#e0a129]"
                      />
                    </motion.div>

                    <div>

                      <h3 className="text-[12px] font-bold text-[#09264d] sm:text-[13px]">
                        {feature.title}
                      </h3>

                      <p className="mt-1 max-w-[270px] text-[10px] leading-[1.55] text-[#263b58]/65 sm:text-[11px]">
                        {feature.description}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          OUR APPROACH
      ====================================================== */}

      <section className="bg-[#fbf8f0]">

        <div className="mx-auto max-w-[1250px] px-4 py-6 sm:px-8 sm:py-10 lg:px-16 lg:py-13">

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
            }}
            className="mx-auto max-w-[700px] text-center"
          >

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d99213]">
              Our Approach
            </span>

            <h2 className="mt-1.5 font-serif text-[28px] font-bold leading-[1.02] text-[#09264d] sm:mt-2 sm:text-[41px]">

              Thoughtful planning.

              <span className="block font-[cursive] font-medium italic text-[#d89415]">
                Beautiful journeys.
              </span>

            </h2>

            <p className="mx-auto mt-2 max-w-[340px] text-[10.5px] leading-[1.45] text-[#263b58]/65 sm:mt-3 sm:text-[13px] sm:leading-6">
              Every journey is designed around what matters to you —
              comfort, discovery, flexibility and unforgettable
              experiences.
            </p>

          </motion.div>

          {/* =================================================
              CARDS
          ================================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="mt-4 grid gap-2 sm:mt-6 sm:gap-3 md:grid-cols-3"
          >

            {/* DISCOVER */}

            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -5,
              }}
              className="group rounded-[14px] bg-white p-3 shadow-[0_5px_16px_rgba(9,38,77,0.045)] sm:rounded-[20px] sm:p-5 sm:shadow-[0_8px_25px_rgba(9,38,77,0.05)]"
            >

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#09264d] sm:h-11 sm:w-11">
                <MapPinned
                  size={19}
                  className="text-[#e0a129]"
                />
              </div>

              <h3 className="mt-2 text-[13px] font-bold leading-tight text-[#09264d] sm:mt-3 sm:text-base">
                Discover
              </h3>

              <p className="mt-1.5 text-[10px] leading-[1.45] text-[#263b58]/65 sm:mt-2 sm:text-[11px] sm:leading-5">
                Explore beautiful destinations, hidden gems and cultural
                experiences across South India.
              </p>

              <div className="mt-2.5 h-[2px] w-5 bg-[#e0a129] transition-all duration-300 group-hover:w-9 sm:mt-4 sm:w-7 sm:group-hover:w-12" />

            </motion.div>

            {/* EXPERIENCE */}

            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -5,
              }}
              className="group rounded-[14px] bg-white p-3 shadow-[0_5px_16px_rgba(9,38,77,0.045)] sm:rounded-[20px] sm:p-5 sm:shadow-[0_8px_25px_rgba(9,38,77,0.05)]"
            >

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#09264d] sm:h-11 sm:w-11">
                <Heart
                  size={19}
                  className="text-[#e0a129]"
                />
              </div>

              <h3 className="mt-2 text-[13px] font-bold leading-tight text-[#09264d] sm:mt-3 sm:text-base">
                Experience
              </h3>

              <p className="mt-1.5 text-[10px] leading-[1.45] text-[#263b58]/65 sm:mt-2 sm:text-[11px] sm:leading-5">
                Enjoy every moment with carefully planned journeys built
                around comfort and personal preferences.
              </p>

              <div className="mt-2.5 h-[2px] w-5 bg-[#e0a129] transition-all duration-300 group-hover:w-9 sm:mt-4 sm:w-7 sm:group-hover:w-12" />

            </motion.div>

            {/* REMEMBER */}

            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -5,
              }}
              className="group rounded-[14px] bg-white p-3 shadow-[0_5px_16px_rgba(9,38,77,0.045)] sm:rounded-[20px] sm:p-5 sm:shadow-[0_8px_25px_rgba(9,38,77,0.05)]"
            >

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#09264d] sm:h-11 sm:w-11">
                <UsersRound
                  size={19}
                  className="text-[#e0a129]"
                />
              </div>

              <h3 className="mt-2 text-[13px] font-bold leading-tight text-[#09264d] sm:mt-3 sm:text-base">
                Remember
              </h3>

              <p className="mt-1.5 text-[10px] leading-[1.45] text-[#263b58]/65 sm:mt-2 sm:text-[11px] sm:leading-5">
                Return home with stories, connections and memories that
                stay with you long after the journey ends.
              </p>

              <div className="mt-2.5 h-[2px] w-5 bg-[#e0a129] transition-all duration-300 group-hover:w-9 sm:mt-4 sm:w-7 sm:group-hover:w-12" />

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          YOUR JOURNEY
      ====================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1250px] px-5 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-13">

          <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">

            {/* LEFT */}

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d99213]">
                Made Around You
              </span>

              <h2 className="mt-2 font-serif text-[34px] font-bold leading-[1.04] text-[#09264d] sm:text-[42px]">

                Your trip,

                <span className="block font-[cursive] font-medium italic text-[#d89415]">
                  your way.
                </span>

              </h2>

              <p className="mt-3 max-w-[510px] text-[12px] leading-6 text-[#263b58]/70 sm:text-[13px] sm:leading-6">
                No two travelers are the same. That&apos;s why we listen
                first, understand what you want and then shape the journey
                around your pace, interests and preferences.
              </p>

              {/* POINTS */}

              <div className="mt-4 space-y-2">

                {journeyPoints.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{
                      opacity: 0,
                      x: -12,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                    }}
                    className="flex items-center gap-2.5"
                  >

                    <CheckCircle2
                      size={16}
                      strokeWidth={1.8}
                      className="shrink-0 text-[#d89415]"
                    />

                    <span className="text-[12px] text-[#263b58]/75">
                      {point}
                    </span>

                  </motion.div>
                ))}

              </div>

              <Link
                href="/contact"
                className="group mt-5 inline-flex items-center gap-2.5 text-[12px] font-bold text-[#09264d]"
              >
                Plan your journey

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#09264d] text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={14} />
                </span>
              </Link>

            </motion.div>

            {/* =================================================
                IMAGE
            ================================================== */}

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="relative"
            >

              <motion.div
                whileHover={{
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="overflow-hidden rounded-[26px] shadow-[0_20px_45px_rgba(9,38,77,0.11)]"
              >

                <img
                  src={mediaUrl("/images/about/img3.png")}
                  alt="South Indian coastal journey"
                  className="h-[265px] w-full object-cover sm:h-[315px]"
                />

              </motion.div>

              {/* FLOATING CARD */}

              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 left-4 max-w-[250px] rounded-[18px] bg-[#09264d] p-4 shadow-[0_16px_35px_rgba(9,38,77,0.2)] sm:left-7"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e0a129]/50">
                    <Heart
                      size={16}
                      className="text-[#e0a129]"
                    />
                  </div>

                  <div>

                    <p className="text-[10px] font-bold text-white">
                      Travel with confidence
                    </p>

                    <p className="mt-1 text-[8px] leading-3.5 text-white/60">
                      We&apos;ll take care of the details.
                    </p>

                  </div>

                </div>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL QUOTE / CTA
          REAL PALM TREE ICON
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#fbf8f0]">

        <div className="relative min-h-[165px] sm:min-h-[180px]">

          {/* =================================================
              NAVY BACKGROUND
          ================================================== */}

          <svg
            viewBox="0 0 1600 180"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >

            <path
              fill="#09264d"
              d="
                M0 68
                C110 49 205 76 315 61
                C425 45 525 76 640 59
                C755 43 850 73 965 56
                C1085 40 1180 73 1295 56
                C1410 40 1515 64 1600 50
                L1600 200
                L0 200
                Z
              "
            />

            <path
              fill="#09264d"
              d="
                M0 87
                C120 66 225 92 340 74
                C460 54 565 90 685 72
                C810 53 905 89 1030 69
                C1150 50 1260 89 1380 68
                C1490 50 1550 67 1600 59
                L1600 91
                C1490 105 1385 87 1270 102
                C1150 117 1045 90 925 106
                C800 122 690 92 570 108
                C450 124 350 95 230 112
                C130 126 60 107 0 119
                Z
              "
            />

          </svg>

          {/* =================================================
              QUOTE
          ================================================== */}

          <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
            <div className="translate-y-6 sm:translate-y-8 lg:translate-y-9">

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.75,
              }}
              className="relative z-20 max-w-[850px] text-center"
            >

              <motion.p
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="font-[cursive] text-[25px] font-medium italic leading-tight text-white sm:text-[32px] lg:text-[38px]"
              >
                Travel more, worry less. We&apos;ll handle the rest.
              </motion.p>

              <motion.div
                animate={{
                  width: [25, 55, 25],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto mt-3 h-[2px] bg-[#e0a129]"
              />

            </motion.div>
            </div>

          </div>

          {/* =================================================
              REAL COCONUT / PALM TREE ICON
          ================================================== */}

          <motion.div
            animate={{
              y: [0, -4, 0],
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute bottom-4 right-[8%] z-20 hidden sm:block"
          >

            <div className="relative">

              {/* Tree glow */}

              <div className="absolute inset-0 rounded-full bg-[#e0a129]/10 blur-xl" />

              <TreePalm
                size={70}
                strokeWidth={1.15}
                className="relative text-[#d9a12c]"
              />

              {/* Tiny birds */}

              <motion.div
                animate={{
                  x: [0, 4, 0],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-9 top-1 text-[#d9a12c]"
              >
                <span className="text-[12px]">⌁</span>
              </motion.div>

            </div>

          </motion.div>

          {/* SECOND SMALL PALM */}

          <motion.div
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute bottom-2 right-[3%] z-10 hidden opacity-45 lg:block"
          >

            <TreePalm
              size={42}
              strokeWidth={1}
              className="text-[#d9a12c]"
            />

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          FINAL FOOTER LINE
      ====================================================== */}

      <div className="h-2 bg-[#09264d]" />

    </main>
  );
}