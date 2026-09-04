"use client";

import Image from "next/image";
import Link from "next/link";
import { mediaUrl } from "@/lib/media";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/* =========================================================
   TRUST ITEMS
========================================================= */

const trustItems = [
  {
    title: "Safe &",
    subtitle: "Reliable",
    icon: "shield",
  },
  {
    title: "Expert",
    subtitle: "Guides",
    icon: "people",
  },
  {
    title: "Well Maintained",
    subtitle: "Vehicles",
    icon: "car",
  },
  {
    title: "24/7 Travel",
    subtitle: "Support",
    icon: "24",
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const smoothEase = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    initial: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 30 },

    animate: {
      opacity: 1,
      y: 0,
    },

    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  };

  const fadeImage = {
    initial: shouldReduceMotion
      ? { opacity: 1, scale: 1 }
      : { opacity: 0, scale: 1.04 },

    animate: {
      opacity: 1,
      scale: 1,
    },

    transition: {
      duration: 1.1,
      ease: smoothEase,
    },
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#143A5E]">
      {/* =========================================================
          MAIN HERO
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          min-h-[calc(100svh-76px)]
          w-full
          max-w-[1800px]
          overflow-hidden
          bg-[#173A67]
        "
      >
        {/* =======================================================
            DESKTOP IMAGE
        ======================================================= */}

        <motion.div
          initial={fadeImage.initial}
          animate={fadeImage.animate}
          transition={fadeImage.transition}
          className="
            absolute
            inset-y-0
            right-0
            hidden
            w-[61%]
            lg:block
          "
        >
          <Image
            src={mediaUrl("images/hero.png")}
            alt="South India temple and travel destination"
            fill
            priority
            quality={75}
            sizes="61vw"
            className="
              object-cover
              object-[58%_center]
            "
          />

          {/* =====================================================
              SOFT DARK BLEND
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#173A67]
              via-[#173A67]/78
              via-[8%]
              via-[#173A67]/45
              via-[20%]
              via-[#173A67]/12
              via-[34%]
              to-transparent
              to-[58%]
            "
          />

          {/* Additional soft middle shade */}

          <div
            aria-hidden="true"
            className="
              absolute
              inset-y-0
              left-0
              w-[35%]
              bg-gradient-to-r
              from-[#173A67]/18
              via-[#173A67]/7
              to-transparent
            "
          />

          {/* Bottom cinematic shade */}

          <div
            aria-hidden="true"
            className="
              absolute
              inset-x-0
              bottom-0
              h-[38%]
              bg-gradient-to-t
              from-[#173A67]/58
              via-[#173A67]/15
              to-transparent
            "
          />

          {/* Very subtle overall image shade */}

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-[#173A67]/[0.025]
            "
          />

          {/* Soft gold atmospheric glow */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-[12%]
              top-[18%]
              h-64
              w-64
              rounded-full
              bg-[#D99A18]/10
              blur-[100px]
            "
          />
        </motion.div>

        {/* =======================================================
            MOBILE IMAGE
        ======================================================= */}

        <motion.div
          initial={fadeImage.initial}
          animate={fadeImage.animate}
          transition={{
            duration: 0.9,
            ease: smoothEase,
          }}
          className="
            relative
            h-[32svh]
            min-h-[230px]
            max-h-[300px]
            w-full
            overflow-hidden
            lg:hidden
          "
        >
          <Image
            src={mediaUrl("images/hero.png")}
            alt="South India temple and travel destination"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="
              object-cover
              object-center
            "
          />

          {/* =====================================================
              LIGHTER MOBILE BOTTOM BLEND
              More image remains visible
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              absolute
              inset-x-0
              bottom-0
              h-32
              bg-gradient-to-t
              from-[#173A67]/90
              via-[#173A67]/28
              to-transparent
            "
          />

          {/* =====================================================
              LIGHT MOBILE TOP SHADE
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              absolute
              inset-x-0
              top-0
              h-20
              bg-gradient-to-b
              from-[#173A67]/18
              to-transparent
            "
          />

          {/* =====================================================
              VERY LIGHT MOBILE IMAGE SHADE
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-[#173A67]/[0.02]
            "
          />

          {/* Mobile location label */}

          <div
            className="
              absolute
              bottom-4
              left-5
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-[#173A67]/65
              px-3.5
              py-2
              backdrop-blur-md
              sm:left-8
            "
          >
            <MapPin
              size={14}
              className="text-[#F0C45C]"
            />

            <span className="text-[10px] font-semibold text-white/85">
              South India
            </span>
          </div>
        </motion.div>

        {/* =======================================================
            LEFT CONTENT
        ======================================================= */}

        <div
          className="
            relative
            z-10
            flex
            min-h-0
            w-full
            items-start
            lg:min-h-[calc(100svh-76px)]
            lg:items-center
          "
        >
          <div
            className="
              w-full
              lg:w-[58%]
              lg:self-stretch
            "
          >
            <div
              className="
                flex
                h-full
                items-center
                px-4
                py-6
                sm:px-8
                sm:py-16
                md:px-12
                lg:px-14
                lg:py-20
                xl:px-20
                2xl:px-24
              "
            >
              <div className="w-full max-w-[760px]">

                {/* =================================================
    EYEBROW
================================================= */}

<motion.div
  {...fadeUp}
  transition={{
    duration: 0.55,
    delay: 0.1,
    ease: smoothEase,
  }}
  className="
    relative
    mb-5
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-[#D99A18]/50
    bg-[#0B1F4D]/50
    px-4
    py-1.5
    backdrop-blur-md

    sm:translate-y-0
    sm:mb-7
    sm:py-2.5
  "
>
  <Sparkles
    size={15}
    strokeWidth={2}
    className="text-[#F0C45C]"
  />

  <span
    className="
      text-[10px]
      font-bold
      uppercase
      tracking-[0.2em]
      text-[#F0C45C]

      sm:text-xs
    "
  >
    Your Journey, Our Care
  </span>
</motion.div>

                {/* =================================================
                    HEADING
                ================================================== */}

                <motion.h1
                  {...fadeUp}
                  transition={{
                    duration: 0.75,
                    delay: 0.2,
                    ease: smoothEase,
                  }}
                  className="
                    max-w-[850px]
                    text-[clamp(2.15rem,5.8vw,5rem)] sm:text-[clamp(2.5rem,5.8vw,5rem)]
                    font-black
                    leading-[0.92]
                    tracking-[-0.055em]
                    text-white
                  "
                >
                  Explore

                  <span className="block text-[#F0C45C]">
                    South India
                  </span>

                  <span className="block">
                    With Us
                  </span>
                </motion.h1>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <motion.p
                  {...fadeUp}
                  transition={{
                    duration: 0.65,
                    delay: 0.34,
                    ease: smoothEase,
                  }}
                  className="
                    mt-5
                    max-w-[650px]
                    text-sm
                    leading-6
                    text-white/70
                    sm:text-base
                    sm:leading-7
                    lg:text-lg
                  "
                >
                  Discover unforgettable journeys across South India
                  with comfortable vehicles, pilgrimage tours and
                  complete travel arrangements.
                </motion.p>

                {/* =================================================
    BUTTONS
================================================= */}

<motion.div
  {...fadeUp}
  transition={{
    duration: 0.65,
    delay: 0.48,
    ease: smoothEase,
  }}
  className="
    mt-5
    grid
    w-full
    grid-cols-2
    gap-2
    sm:flex
    sm:w-auto
    sm:flex-row
  "
>
  {/* EXPLORE TOURS */}

  <Link
    href="/tours"
    className="
      group
      relative
      z-20
      inline-flex
      min-h-[40px]
      w-full
      items-center
      justify-center
      gap-2.5
      rounded-xl
      bg-[#D99A18]
      px-4
      py-2.5
      text-[13px]
      font-bold
      text-[#071635]
      shadow-[0_8px_24px_rgba(0,0,0,0.16)]
      transition-all
      duration-300

      hover:-translate-y-1
      hover:bg-[#F0C45C]
      hover:shadow-[0_14px_30px_rgba(217,154,24,0.22)]

      active:translate-y-0
      active:scale-[0.98]

      sm:min-h-[54px]
      sm:w-auto
      sm:rounded-full
      sm:px-7
      sm:py-3.5
    "
  >
    <span>
      Explore Tours
    </span>

    <ArrowRight
      size={18}
      strokeWidth={2}
      className="
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    />
  </Link>

  {/* VIEW VEHICLES */}

  <Link
    href="/vehicles"
    className="
      relative
      z-20
      inline-flex
      min-h-[46px]
      w-full
      items-center
      justify-center
      rounded-xl
      border
      border-white/30
      bg-[#173A67]/80
      px-4
      py-2.5
      text-[13px]
      font-bold
      text-white
      shadow-[0_8px_24px_rgba(0,0,0,0.18)]
      backdrop-blur-md
      transition-all
      duration-300

      hover:-translate-y-1
      hover:border-[#F0C45C]
      hover:bg-[#D99A18]
      hover:text-white

      active:translate-y-0
      active:scale-[0.98]

      sm:min-h-[54px]
      sm:w-auto
      sm:rounded-full
      sm:px-7
      sm:py-3.5
    "
  >
    <span className="text-white">
      View Vehicles
    </span>
  </Link>
</motion.div>
                {/* =================================================
                    DESKTOP TRUST ITEMS
                ================================================== */}

                <motion.div
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 25 }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.65,
                    ease: smoothEase,
                  }}
                  className="
                    mt-10
                    hidden
                    border-t
                    border-white/10
                    pt-6
                    md:grid
                    md:grid-cols-4
                  "
                >
                  {trustItems.map((item, index) => (
                    <div
                      key={item.title}
                      className={`
                        flex
                        items-center
                        gap-3
                        ${
                          index !== trustItems.length - 1
                            ? "border-r border-white/10"
                            : ""
                        }
                        ${
                          index === 0
                            ? "pr-5"
                            : index === trustItems.length - 1
                              ? "pl-5"
                              : "px-5"
                        }
                      `}
                    >
                      {/* ICON */}

                      <div
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#D99A18]/50
                          bg-[#173A67]/40
                        "
                      >
                        {/* SHIELD */}

                        {item.icon === "shield" && (
                          <ShieldCheck
                            size={20}
                            className="text-[#F0C45C]"
                          />
                        )}

                        {/* PEOPLE */}

                        {item.icon === "people" && (
                          <svg
                            width="21"
                            height="21"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="text-[#F0C45C]"
                          >
                            <circle
                              cx="9"
                              cy="7"
                              r="4"
                            />

                            <path d="M3 21c0-4 2.5-6 6-6s6 2 6 6" />

                            <circle
                              cx="17"
                              cy="9"
                              r="3"
                            />

                            <path d="M15 15c3 .2 5 2 5 6" />
                          </svg>
                        )}

                        {/* VEHICLE */}

                        {item.icon === "car" && (
                          <svg
                            width="21"
                            height="21"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="text-[#F0C45C]"
                          >
                            <path d="M5 17h14" />

                            <path d="M6 17l1.5-6h9L18 17" />

                            <path d="M8 11l1-3h6l1 3" />

                            <circle
                              cx="8"
                              cy="18"
                              r="1.5"
                            />

                            <circle
                              cx="16"
                              cy="18"
                              r="1.5"
                            />
                          </svg>
                        )}

                        {/* 24/7 */}

                        {item.icon === "24" && (
                          <span
                            className="
                              text-[10px]
                              font-black
                              tracking-tight
                              text-[#F0C45C]
                            "
                          >
                            24
                          </span>
                        )}
                      </div>

                      {/* TEXT */}

                      <div className="min-w-0">
                        <p className="text-xs font-bold text-white sm:text-sm">
                          {item.title}
                        </p>

                        <p className="text-xs font-bold text-white sm:text-sm">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* =================================================
                    MOBILE TRUST — ALWAYS VISIBLE
                    4 ITEMS IN ONE LINE
                ================================================== */}

                <motion.div
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 12 }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.72,
                    ease: smoothEase,
                  }}
                  className="
                    mt-5
                    grid
                    grid-cols-4
                    gap-0
                    border-t
                    border-white/10
                    pt-4
                    md:hidden
                  "
                >
                  {trustItems.map((item) => (
                    <div
                      key={item.title}
                      className="
                        flex
                        min-w-0
                        flex-col
                        items-center
                        justify-center
                        px-0.5
                        text-center
                      "
                    >
                      {/* ICON */}

                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#D99A18]/40
                          bg-[#173A67]/50
                        "
                      >
                        {/* SHIELD */}

                        {item.icon === "shield" && (
                          <ShieldCheck
                            size={15}
                            strokeWidth={2}
                            className="text-[#F0C45C]"
                          />
                        )}

                        {/* PEOPLE */}

                        {item.icon === "people" && (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="text-[#F0C45C]"
                          >
                            <circle
                              cx="9"
                              cy="7"
                              r="4"
                            />

                            <path d="M3 21c0-4 2.5-6 6-6s6 2 6 6" />

                            <circle
                              cx="17"
                              cy="9"
                              r="3"
                            />

                            <path d="M15 15c3 .2 5 2 5 6" />
                          </svg>
                        )}

                        {/* VEHICLE */}

                        {item.icon === "car" && (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="text-[#F0C45C]"
                          >
                            <path d="M5 17h14" />

                            <path d="M6 17l1.5-6h9L18 17" />

                            <path d="M8 11l1-3h6l1 3" />

                            <circle
                              cx="8"
                              cy="18"
                              r="1.5"
                            />

                            <circle
                              cx="16"
                              cy="18"
                              r="1.5"
                            />
                          </svg>
                        )}

                        {/* 24/7 */}

                        {item.icon === "24" && (
                          <span
                            className="
                              text-[8px]
                              font-black
                              tracking-tight
                              text-[#F0C45C]
                            "
                          >
                            24
                          </span>
                        )}
                      </div>

                      {/* TEXT */}

                      <div className="mt-2 min-w-0 w-full">
                        <p
                          className="
                            truncate
                            text-[8px]
                            font-bold
                            leading-3
                            text-white
                            sm:text-[9px]
                          "
                        >
                          {item.title}
                        </p>

                        <p
                          className="
                            truncate
                            text-[8px]
                            font-bold
                            leading-3
                            text-white/75
                            sm:text-[9px]
                          "
                        >
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            DESKTOP SCROLL
            CENTERED
        ======================================================= */}

        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0 }
          }
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 1.2,
            ease: smoothEase,
          }}
          className="
            absolute
            bottom-6
            left-1/2
            z-30
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-1
            lg:flex
          "
        >
          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-white/40
            "
          >
            Scroll
          </span>

          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, 5, 0],
                  }
            }
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown
              size={17}
              className="text-white/50"
            />
          </motion.div>
        </motion.div>

        {/* =======================================================
            GOLD DECORATIVE LINE
        ======================================================= */}

        <div
          aria-hidden="true"
          className="
            absolute
            bottom-0
            left-0
            z-30
            h-[2px]
            w-[28%]
            bg-gradient-to-r
            from-[#D99A18]
            to-transparent
          "
        />

        {/* =======================================================
            SUBTLE GOLD CIRCLE
        ======================================================= */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-32
            z-0
            h-72
            w-72
            rounded-full
            border
            border-[#D99A18]/10
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-24
            -left-24
            z-0
            h-56
            w-56
            rounded-full
            border
            border-[#D99A18]/10
          "
        />
      </div>
    </section>
  );
}