"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  BusFront,
  MapPinned,
  Sparkles,
  Users,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

/* =========================================================
   DATA
========================================================= */

const highlights = [
  {
    title: "Spiritual",
    titleAccent: "Destinations",
    description:
      "Visit divine places and experience meaningful journeys.",
    icon: MapPinned,
  },
  {
    title: "Comfortable",
    titleAccent: "Travel",
    description:
      "Safe, clean and well-maintained vehicles for your journey.",
    icon: BusFront,
  },
  {
    title: "Quality",
    titleAccent: "Stay",
    description:
      "Comfortable rooms and carefully selected accommodation.",
    icon: Building2,
  },
  {
    title: "Expert",
    titleAccent: "Support",
    description:
      "Reliable assistance for a smooth and memorable journey.",
    icon: Users,
  },
];

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -14,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const highlightContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function VideoShowcase() {
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",

        viewport: {
          once: true,
          amount: 0.05,
        },
      };

  return (
    // NOTE: 88px below is the approx height of the fixed nav bar in the
    // screenshot — adjust this one number if your header's real height differs.
    <section
      className="
        relative
        flex
        h-[calc(100dvh-88px)]
        flex-col
        justify-center
        overflow-hidden
        bg-[#F8F4EA]
        py-[1dvh]
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
          -right-28
          -top-32
          h-[220px]
          w-[220px]
          rounded-full
          border-[25px]
          border-[#D99A18]/[0.035]

          sm:h-[290px]
          sm:w-[290px]
          sm:border-[32px]

          lg:h-[350px]
          lg:w-[350px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-20
          -left-20
          h-36
          w-36
          rounded-full
          border-[14px]
          border-[#071635]/[0.025]

          sm:h-48
          sm:w-48
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
          flex
          w-full
          max-w-[1120px]
          flex-1
          flex-col
          justify-center
          gap-[0.8dvh]
          px-3

          sm:px-5

          lg:px-6

          xl:px-8
        "
      >
        {/* ===================================================
            HEADER
        ==================================================== */}

        <motion.div
          {...animationProps}
          variants={fadeUpVariants}
          className="
            mx-auto
            max-w-[620px]
            shrink-0
            text-center
          "
        >
          {/* EYEBROW */}

          <div
            className="
              inline-flex
              items-center
              gap-1
              rounded-full
              border
              border-[#D99A18]/25
              bg-white/50
              px-2
              py-0.5
              text-[6px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#D99A18]

              sm:px-2.5
              sm:py-0.5
              sm:text-[7px]
            "
          >
            <Sparkles
              size={8}
              strokeWidth={1.8}
            />

            Journeys That Inspire
          </div>

          {/* HEADING */}

          <h2
            className="
              mt-[0.4dvh]
              text-[min(23px,3.2dvh)]
              font-extrabold
              leading-[0.9]
              tracking-[-0.05em]
              text-[#071635]

              sm:text-[min(31px,3.6dvh)]

              md:text-[min(36px,4dvh)]

              lg:text-[min(40px,4.4dvh)]
            "
          >
            Your Journey{" "}
            <span className="text-[#D99A18]">
              Begins Here
            </span>
          </h2>

          {/* DIVIDER */}

          <div
            className="
              mt-[0.4dvh]
              flex
              items-center
              justify-center
              gap-1.5

              sm:gap-2
            "
          >
            <span
              className="
                h-px
                w-5
                bg-[#D99A18]/60

                sm:w-8
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
                h-1.5
                w-1.5
                rotate-45
                border
                border-[#D99A18]/70

                sm:h-2
                sm:w-2
              "
            />

            <span
              className="
                h-px
                w-5
                bg-[#D99A18]/60

                sm:w-8
              "
            />
          </div>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-[0.4dvh]
              hidden
              max-w-[480px]
              text-[6.8px]
              leading-[1.4]
              text-[#071635]/55

              sm:block
              sm:text-[8px]
              sm:leading-4

              lg:text-[9.5px]
            "
          >
            Experience the spiritual charm, timeless traditions
            and breathtaking destinations of South India with
            Baiya Tours &amp; Travels.
          </p>
        </motion.div>

        {/* =====================================================
            SMALL VIDEO CARD
        ====================================================== */}

        <motion.div
          {...animationProps}
          variants={fadeUpVariants}
          className="
            group
            relative
            mx-auto
            h-[24dvh]
            w-full
            max-w-[760px]
            shrink
            overflow-hidden
            rounded-[9px]
            bg-[#020A19]
            shadow-[0_5px_15px_rgba(7,22,53,0.12)]

            sm:rounded-[11px]

            lg:rounded-[14px]
          "
        >
          {/* =================================================
              AUTO PLAY VIDEO
          ================================================== */}

          <video
            src="/videos/baiya-travel.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            aria-label="Baiya Tours and Travels journey video"
            className="
              pointer-events-none
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              select-none
            "
          />

          {/* =================================================
              DARK OVERLAY
          ================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-r
              from-[#020B20]/[0.96]
              via-[#071635]/[0.52]
              to-transparent
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/45
              via-transparent
              to-transparent
            "
          />

          {/* =================================================
              VIDEO CONTENT
          ================================================== */}

          <div
            className="
              absolute
              inset-0
              z-10
              flex
              items-center
              px-3

              sm:px-5

              lg:px-7

              xl:px-8
            "
          >
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
              variants={fadeLeftVariants}
              className="
                max-w-[180px]

                sm:max-w-[270px]

                lg:max-w-[330px]
              "
            >
              {/* LABEL */}

              <div
                className="
                  flex
                  items-center
                  gap-1
                "
              >
                <span
                  className="
                    h-px
                    w-3
                    bg-[#F0C45C]

                    sm:w-4
                  "
                />

                <span
                  className="
                    text-[4px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#F0C45C]

                    sm:text-[5.5px]
                  "
                >
                  Experience The Journey
                </span>
              </div>

              {/* TITLE */}

              <h3
                className="
                  mt-0.5
                  text-[min(12px,2.6dvh)]
                  font-extrabold
                  leading-[0.94]
                  tracking-[-0.04em]
                  text-white

                  sm:text-[min(18px,3dvh)]

                  lg:text-[min(24px,3.4dvh)]
                "
              >
                Travel With{" "}
                <span className="text-[#D99A18]">
                  Purpose
                </span>
              </h3>

              {/* DIVIDER */}

              <div
                className="
                  mt-0.5
                  flex
                  items-center
                  gap-1
                "
              >
                <span
                  className="
                    h-[2px]
                    w-3.5
                    bg-[#D99A18]

                    sm:w-5
                  "
                />

                <span
                  className="
                    h-1
                    w-1
                    rotate-45
                    bg-[#D99A18]

                    sm:h-1.5
                    sm:w-1.5
                  "
                />
              </div>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-0.5
                  hidden
                  max-w-[230px]
                  text-[4.8px]
                  leading-[1.35]
                  text-white/60

                  sm:block
                  sm:text-[6px]
                  sm:leading-[1.4]

                  lg:text-[7.5px]
                "
              >
                Discover sacred temples, cultural heritage,
                scenic destinations and meaningful journeys
                across South India.
              </p>

              {/* CTA */}

              <div className="mt-0.5 sm:mt-1">
                <Link
                  href="/contact"
                  className="
                    group/cta
                    inline-flex
                    min-h-4
                    items-center
                    justify-center
                    gap-1
                    rounded-full
                    bg-[#D99A18]
                    px-2
                    text-[4.5px]
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#F0C45C]
                    hover:text-[#071635]

                    sm:min-h-5
                    sm:px-2.5
                    sm:text-[5.5px]
                  "
                >
                  Plan Your Journey

                  <ArrowRight
                    size={6}
                    className="
                      transition-transform
                      duration-300
                      group-hover/cta:translate-x-1

                      sm:h-2
                      sm:w-2
                    "
                  />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              GOLD CORNER
          ================================================== */}

          <motion.div
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.3, 0.65, 0.3],
                  }
            }
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              h-7
              w-7
              rounded-bl-[100%]
              border-b
              border-l
              border-[#D99A18]/50

              sm:h-11
              sm:w-11

              lg:h-14
              lg:w-14
            "
          />
        </motion.div>

        {/* =====================================================
            HIGHLIGHTS
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
            amount: 0.03,
          }}
          variants={highlightContainerVariants}
          className="
            grid
            shrink-0
            grid-cols-2
            overflow-hidden
            rounded-[8px]
            bg-[#071635]

            sm:rounded-[10px]

            lg:grid-cols-4
            lg:rounded-[12px]
          "
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={
                  shouldReduceMotion
                    ? undefined
                    : fadeUpVariants
                }
                className={`
                  group
                  relative
                  flex
                  min-h-[4.5dvh]
                  items-center
                  gap-1
                  px-1.5
                  py-0.5

                  sm:gap-1.5
                  sm:px-2.5

                  lg:px-3

                  ${
                    index === 1
                      ? "border-l border-white/10"
                      : ""
                  }

                  ${
                    index >= 2
                      ? "border-t border-white/10"
                      : ""
                  }

                  lg:border-t-0

                  ${
                    index > 0
                      ? "lg:border-l lg:border-white/10"
                      : ""
                  }
                `}
              >
                {/* ICON */}

                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 1.08,
                          rotate: 3,
                        }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                  }}
                  className="
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D99A18]/30
                    bg-[#D99A18]/[0.06]
                    text-[#F0C45C]
                    transition-all
                    duration-300
                    group-hover:border-[#D99A18]/60

                    sm:h-6
                    sm:w-6

                    lg:h-7
                    lg:w-7
                  "
                >
                  <Icon
                    size={9}
                    strokeWidth={1.5}
                    className="
                      sm:h-2.5
                      sm:w-2.5

                      lg:h-3
                      lg:w-3
                    "
                  />
                </motion.div>

                {/* CONTENT */}

                <div className="min-w-0">
                  <h4
                    className="
                      text-[6px]
                      font-bold
                      leading-[1.05]
                      text-white

                      sm:text-[7.5px]

                      lg:text-[9px]
                    "
                  >
                    {item.title}{" "}
                    <span className="text-[#F0C45C]">
                      {item.titleAccent}
                    </span>
                  </h4>

                  <p
                    className="
                      mt-0.5
                      line-clamp-2
                      hidden
                      max-w-[115px]
                      text-[4.7px]
                      leading-[1.3]
                      text-white/40

                      sm:block
                      sm:text-[5.5px]

                      lg:text-[6.5px]
                    "
                  >
                    {item.description}
                  </p>
                </div>

                {/* HOVER LINE */}

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
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
      </div>
    </section>
  );
}