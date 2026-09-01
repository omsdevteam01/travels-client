"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
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

const fadeLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -18,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 18,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function VideoShowcase() {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);

  /* =======================================================
     VIDEO AUTOPLAY
  ======================================================== */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const playVideo = async () => {
      try {
        video.muted = true;
        video.playsInline = true;

        if (video.paused) {
          await video.play();
        }

        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    playVideo();

    video.addEventListener("loadeddata", playVideo);
    video.addEventListener("canplay", playVideo);

    return () => {
      video.removeEventListener("loadeddata", playVideo);
      video.removeEventListener("canplay", playVideo);
    };
  }, []);

  /* =======================================================
     PLAY / PAUSE
  ======================================================== */

  const togglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  /* =======================================================
     ANIMATION PROPS
  ======================================================== */

  const animationProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: {
          once: true,
          amount: 0.08,
        },
      };

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F8F5EE]

        px-3
        pb-7
        pt-5

        sm:px-5
        sm:pb-8
        sm:pt-6

        md:px-6
        md:pb-9
        md:pt-7

        lg:px-8
        lg:pb-10
        lg:pt-7
      "
    >
      {/* =====================================================
          OUTER BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-170px]
          top-[-190px]
          h-[360px]
          w-[360px]
          rounded-full
          border-[18px]
          border-[#D99A18]/[0.035]

          sm:right-[-190px]
          sm:top-[-205px]
          sm:h-[430px]
          sm:w-[430px]

          lg:right-[-240px]
          lg:top-[-240px]
          lg:h-[520px]
          lg:w-[520px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-90px]
          left-[-70px]
          h-[170px]
          w-[170px]
          rounded-full
          border-[16px]
          border-[#D99A18]/[0.035]

          sm:h-[210px]
          sm:w-[210px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1180px]">
        {/* ===================================================
            SECTION LABEL
        ==================================================== */}

        <motion.div
          {...animationProps}
          variants={fadeUpVariants}
          className="
            mb-3
            flex
            items-center
            justify-center
            gap-2

            sm:mb-4
            sm:gap-2.5

            lg:mb-5
            lg:gap-3
          "
        >
          <span
            className="
              h-px
              w-7
              bg-[#D99A18]/70

              sm:w-10

              lg:w-14
          "
          />

          <Sparkles
            size={13}
            strokeWidth={1.7}
            className="text-[#D99A18]"
          />

          <span
            className="
              text-[6.5px]
              font-bold
              uppercase
              tracking-[0.28em]
              text-[#B77905]

              sm:text-[7px]

              lg:text-[8px]
              lg:tracking-[0.36em]
            "
          >
            Journeys That Inspire
          </span>

          <span
            className="
              h-px
              w-7
              bg-[#D99A18]/70

              sm:w-10

              lg:w-14
            "
          />
        </motion.div>

        {/* ===================================================
            MAIN CARD
        ==================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[18px]
            border
            border-[#D99A18]
            bg-[#03142F]
            shadow-[0_20px_50px_rgba(7,22,53,0.18)]

            sm:rounded-[21px]

            lg:rounded-[24px]
          "
        >
          {/* =================================================
              SUBTLE TEXTURE
          ================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.045]
            "
            style={{
              backgroundImage: `
                radial-gradient(
                  circle at 20% 20%,
                  rgba(255,255,255,0.45) 0 0.7px,
                  transparent 0.9px
                ),
                radial-gradient(
                  circle at 80% 70%,
                  rgba(255,255,255,0.25) 0 0.7px,
                  transparent 0.9px
                )
              `,
              backgroundSize: "24px 24px, 32px 32px",
            }}
          />

          {/* =================================================
              TOP LEFT DOT GRID
          ================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-5
              top-5
              z-10
              h-[46px]
              w-[58px]
              opacity-65

              sm:left-7
              sm:top-7
              sm:h-[52px]
              sm:w-[65px]

              lg:left-8
              lg:top-8
            "
            style={{
              backgroundImage:
                "radial-gradient(#D99A18 1.1px, transparent 1.1px)",
              backgroundSize: "14px 14px",
            }}
          />

          {/* =================================================
              TOP RIGHT DOT GRID
          ================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-5
              top-7
              z-10
              hidden
              h-[75px]
              w-[60px]
              opacity-65

              sm:block

              lg:right-8
              lg:top-9
            "
            style={{
              backgroundImage:
                "radial-gradient(#D99A18 1.1px, transparent 1.1px)",
              backgroundSize: "15px 15px",
            }}
          />

          {/* =================================================
              FLIGHT PATH
              DESKTOP ONLY
          ================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[19%]
              top-[7%]
              z-10
              hidden
              h-[110px]
              w-[300px]

              lg:block

              xl:left-[20%]
              xl:w-[335px]
            "
          >
            <svg
              viewBox="0 0 335 110"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              {/* Single clean 4-line flight route */}

              <path
                d="
                  M38 34
                  C92 8 124 16 161 47
                  C197 78 239 91 296 56
                "
                stroke="#D99A18"
                strokeWidth="1.15"
                strokeDasharray="3 7"
                strokeLinecap="round"
                opacity="0.78"
              />
            </svg>

            {/* =================================================
                SIMPLE 4-LINE AIRPLANE ICON
            ================================================== */}

            <motion.svg
              viewBox="0 0 42 42"
              width="31"
              height="31"
              className="
                absolute
                left-[7px]
                top-[17px]
                text-[#E7A71E]
              "
              fill="none"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: [0, 5, 0],
                      y: [0, -3, 0],
                      rotate: [18, 20, 18],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* 1 — fuselage */}

              <path
                d="M7 21H35"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
              />

              {/* 2 — upper wing */}

              <path
                d="M19 21L27 11"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
              />

              {/* 3 — lower wing */}

              <path
                d="M19 21L27 31"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
              />

              {/* 4 — tail */}

              <path
                d="M12 21L8 15"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
            </motion.svg>
          </div>

          {/* =================================================
              CURVED GOLD DIVIDER
              DESKTOP ONLY
          ================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[43%]
              top-[-285px]
              z-20
              hidden
              h-[790px]
              w-[550px]
              rounded-[50%]
              border-r-[4px]
              border-[#E7A71E]

              lg:block
            "
            style={{
              transform: "rotate(6deg)",
            }}
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[44%]
              top-[-275px]
              z-20
              hidden
              h-[770px]
              w-[530px]
              rounded-[50%]
              border-r
              border-white/[0.07]

              lg:block
            "
            style={{
              transform: "rotate(6deg)",
            }}
          />

          {/* =================================================
              MAIN GRID
          ================================================== */}

          <div
            className="
              relative
              z-30
              grid
              grid-cols-1

              lg:grid-cols-[1.05fr_0.95fr]
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <motion.div
              {...animationProps}
              variants={fadeLeftVariants}
              className="
                relative
                flex
                min-h-0
                flex-col
                justify-center
                overflow-hidden

                px-5
                pb-7
                pt-9

                sm:px-8
                sm:pb-9
                sm:pt-11

                md:px-10

                lg:min-h-[500px]
                lg:px-10
                lg:py-10

                xl:min-h-[515px]
                xl:px-12
              "
            >
              {/* =================================================
                  CONTENT
              ================================================== */}

              <div className="relative z-30 max-w-[570px]">
                {/* EYEBROW */}

                <div className="mb-3.5 flex items-center gap-2.5 sm:mb-4">
                  <span
                    className="
                      h-[2px]
                      w-7
                      bg-[#F0C45C]

                      sm:w-9

                      lg:w-11
                    "
                  />

                  <span
                    className="
                      text-[6.5px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#F0C45C]

                      sm:text-[7px]

                      lg:text-[8px]
                    "
                  >
                    Experience The Journey
                  </span>
                </div>

                {/* =================================================
                    HEADING
                ================================================== */}

                <h2
                  className="
                    font-serif
                    text-[36px]
                    font-bold
                    leading-[0.92]
                    tracking-[-0.045em]
                    text-white

                    sm:text-[44px]

                    md:text-[50px]

                    lg:text-[55px]

                    xl:text-[61px]
                  "
                >
                  Your Journey
                  <br />

                  <span className="text-[#E7A71E]">
                    Begins Here
                  </span>
                </h2>

                {/* =================================================
                    DIVIDER
                ================================================== */}

                <div className="mt-4 flex items-center sm:mt-5">
                  <span
                    className="
                      h-[2px]
                      w-[95px]
                      bg-[#D99A18]

                      sm:w-[125px]

                      lg:w-[160px]
                    "
                  />

                  <span className="relative mx-2 flex h-4 w-5 items-center justify-center">
                    <span
                      className="
                        absolute
                        h-[6px]
                        w-[6px]
                        rotate-45
                        border
                        border-[#D99A18]
                      "
                    />

                    <span
                      className="
                        absolute
                        h-[2px]
                        w-[2px]
                        rounded-full
                        bg-[#D99A18]
                      "
                    />
                  </span>

                  <span className="h-px w-8 bg-[#D99A18]/25 sm:w-12" />
                </div>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <p
                  className="
                    mt-4
                    max-w-[465px]
                    text-[10.5px]
                    leading-[1.65]
                    text-white/70

                    sm:mt-4.5
                    sm:text-[11.5px]
                    sm:leading-[1.7]

                    lg:text-[12.5px]
                  "
                >
                  Experience the spiritual charm, timeless
                  traditions and breathtaking destinations of
                  South India with Baiya Tours &amp; Travels.
                </p>

                {/* =================================================
                    CTA
                ================================================== */}

                <div className="mt-4.5 sm:mt-5 lg:mt-6">
                  <Link
                    href="/contact"
                    className="
                      group
                      inline-flex
                      min-h-[40px]
                      items-center
                      justify-center
                      gap-2.5
                      rounded-[6px]
                      bg-[#E7A71E]
                      px-5
                      text-[10px]
                      font-bold
                      text-[#071635]
                      shadow-[0_8px_22px_rgba(217,154,24,0.18)]
                      transition-all
                      duration-300

                      hover:-translate-y-0.5
                      hover:bg-[#F0C45C]
                      hover:shadow-[0_12px_28px_rgba(217,154,24,0.25)]

                      sm:min-h-[43px]
                      sm:px-6
                      sm:text-[11px]

                      lg:min-h-[45px]
                      lg:px-6.5
                      lg:text-[12px]
                    "
                  >
                    <span>Plan Your Journey</span>

                    <ArrowRight
                      size={14}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </Link>
                </div>
              </div>

              {/* =================================================
                  TEMPLE CITY SILHOUETTE
              ================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  right-[-5px]
                  h-[90px]
                  w-[210px]
                  opacity-[0.08]

                  sm:h-[110px]
                  sm:w-[250px]

                  lg:h-[135px]
                  lg:w-[300px]

                  xl:h-[150px]
                  xl:w-[325px]
                "
              >
                <svg
                  viewBox="0 0 400 200"
                  className="h-full w-full"
                  fill="none"
                  stroke="#F0C45C"
                  strokeWidth="1.15"
                  strokeLinejoin="round"
                >
                  {/* Main gopuram */}

                  <path d="M148 190V154H158V138H166V122H174V105H182V86H190V64H198V40H206V64H214V86H222V105H230V122H238V138H246V154H256V190" />

                  {/* Side temples */}

                  <path d="M35 190V160H45V144H54V128H63V108H72V128H81V144H90V160H100V190" />

                  <path d="M275 190V160H285V144H294V128H303V108H312V128H321V144H330V160H340V190" />

                  {/* Small structures */}

                  <path d="M8 190V173H17V158H26V173H35V190" />

                  <path d="M340 190V173H349V158H358V173H367V190" />

                  {/* Ground */}

                  <path d="M4 190H375" />

                  {/* Main details */}

                  <path d="M198 40H214" />
                  <path d="M201 29L206 40L211 29" />

                  <path d="M190 64H222" />
                  <path d="M182 86H230" />
                  <path d="M174 105H238" />
                  <path d="M166 122H246" />
                  <path d="M158 138H256" />

                  {/* Door */}

                  <path d="M195 190V163H217V190" />

                  {/* Vertical details */}

                  <path d="M206 40V190" />
                  <path d="M50 144V190" />
                  <path d="M312 144V190" />
                </svg>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT VIDEO
            ================================================== */}

            <motion.div
              {...animationProps}
              variants={fadeRightVariants}
              className="
                relative
                flex
                min-h-0
                items-center
                justify-center
                overflow-hidden
                bg-[#020D20]

                px-5
                pb-7
                pt-5

                sm:px-7
                sm:pb-8
                sm:pt-7

                md:px-8

                lg:min-h-[500px]
                lg:px-9
                lg:py-8

                xl:min-h-[515px]
                xl:px-11
              "
            >
              {/* =================================================
                  RIGHT BACKGROUND RINGS
              ================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  right-[-110px]
                  top-[-120px]
                  h-[260px]
                  w-[260px]
                  rounded-full
                  border
                  border-[#D99A18]/15

                  sm:right-[-130px]
                  sm:top-[-140px]
                  sm:h-[300px]
                  sm:w-[300px]
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  right-[-70px]
                  top-[-75px]
                  h-[180px]
                  w-[180px]
                  rounded-full
                  border
                  border-[#D99A18]/10
                "
              />

              {/* =================================================
                  VIDEO WRAPPER
              ================================================== */}

              <div
                className="
                  relative
                  z-30
                  w-full
                  max-w-[220px]

                  sm:max-w-[250px]

                  md:max-w-[265px]

                  lg:max-w-[290px]

                  xl:max-w-[305px]
                "
              >
                {/* =================================================
                    GOLD OUTER FRAME GLOW
                ================================================== */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -inset-[2px]
                    rounded-[22px]
                    bg-gradient-to-br
                    from-[#F7D06A]
                    via-[#D99A18]
                    to-[#8C5D09]
                    opacity-90
                  "
                />

                {/* =================================================
                    VIDEO FRAME
                ================================================== */}

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[21px]
                    border-[2px]
                    border-[#E7A71E]
                    bg-[#06152C]
                    p-[5px]
                    shadow-[0_18px_40px_rgba(0,0,0,0.42)]

                    sm:rounded-[22px]
                    sm:p-[6px]

                    lg:rounded-[23px]
                    lg:p-[7px]
                  "
                >
                  {/* =================================================
                      VIDEO
                  ================================================== */}

                  <div
                    className="
                      relative
                      aspect-[0.70]
                      overflow-hidden
                      rounded-[16px]
                      bg-black

                      sm:rounded-[17px]

                      lg:rounded-[18px]
                    "
                  >
                    <video
                      ref={videoRef}
                      src="/videos/video.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      controls={false}
                      disablePictureInPicture
                      disableRemotePlayback
                      controlsList="nodownload nofullscreen noremoteplayback"
                      aria-label="Baiya Tours and Travels journey video"
                      className="
                        absolute
                        inset-0
                        block
                        h-full
                        w-full
                        bg-black
                        object-cover
                        object-center
                        select-none
                      "
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onLoadedMetadata={(event) => {
                        const video = event.currentTarget;

                        video.muted = true;
                        video.playsInline = true;

                        video.play().catch(() => {});
                      }}
                      onCanPlay={(event) => {
                        const video = event.currentTarget;

                        video.muted = true;
                        video.playsInline = true;

                        if (video.paused) {
                          video.play().catch(() => {});
                        }
                      }}
                    />

                    {/* =================================================
                        VIDEO OVERLAY
                    ================================================== */}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/20
                        via-transparent
                        to-black/[0.03]
                      "
                    />

                    {/* =================================================
                        INNER BORDER
                    ================================================== */}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-1.5
                        rounded-[13px]
                        border
                        border-white/10

                        sm:inset-2
                        sm:rounded-[14px]
                      "
                    />

                    {/* =================================================
                        VIDEO LABEL
                    ================================================== */}

                    <div
                      className="
                        absolute
                        left-2.5
                        top-2.5
                        rounded-full
                        border
                        border-white/20
                        bg-black/25
                        px-2
                        py-1
                        backdrop-blur-md

                        sm:left-3
                        sm:top-3
                      "
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#E7A71E]" />

                        <span
                          className="
                            text-[6px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-white

                            sm:text-[7px]
                          "
                        >
                          Our Journey
                        </span>
                      </div>
                    </div>

                    {/* =================================================
                        MOBILE PLAY BUTTON
                    ================================================== */}

                    <button
                      type="button"
                      onClick={togglePlay}
                      aria-label={
                        isPlaying
                          ? "Pause video"
                          : "Play video"
                      }
                      className="
                        absolute
                        bottom-2.5
                        right-2.5
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/30
                        bg-white/90
                        text-[#071635]
                        shadow-lg
                        backdrop-blur-md
                        transition
                        hover:scale-105

                        lg:hidden
                      "
                    >
                      {isPlaying ? (
                        <svg
                          className="h-3 w-3"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
                        </svg>
                      ) : (
                        <svg
                          className="ml-0.5 h-3 w-3"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Bottom gold line */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-full
                      bg-[#D99A18]
                    "
                  />
                </div>

                {/* =================================================
                    TEMPLE MEDALLION
                    DESKTOP ONLY
                ================================================== */}

                <div
                  className="
                    absolute
                    left-[-47px]
                    top-1/2
                    z-50
                    hidden
                    -translate-y-1/2

                    lg:block

                    xl:left-[-54px]
                  "
                >
                  <div
                    className="
                      relative
                      flex
                      h-[94px]
                      w-[94px]
                      items-center
                      justify-center
                      rounded-full
                      border-[3px]
                      border-[#E7A71E]
                      bg-[#06152F]
                      shadow-[0_12px_28px_rgba(0,0,0,0.42)]

                      xl:h-[104px]
                      xl:w-[104px]
                    "
                  >
                    {/* Outer ring */}

                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        inset-[5px]
                        rounded-full
                        border
                        border-[#E7A71E]/25
                      "
                    />

                    {/* Inner ring */}

                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        inset-[9px]
                        rounded-full
                        border
                        border-[#E7A71E]/10
                      "
                    />

                    {/* Stars */}

                    <span
                      className="
                        absolute
                        left-4
                        top-4
                        text-[8px]
                        text-[#E7A71E]
                      "
                    >
                      ✦
                    </span>

                    <span
                      className="
                        absolute
                        right-4
                        top-5
                        text-[7px]
                        text-[#E7A71E]
                      "
                    >
                      ✦
                    </span>

                    <span
                      className="
                        absolute
                        bottom-4
                        right-5
                        text-[6px]
                        text-[#E7A71E]
                      "
                    >
                      ✦
                    </span>

                    <span
                      className="
                        absolute
                        bottom-5
                        left-5
                        text-[6px]
                        text-[#E7A71E]
                      "
                    >
                      ✦
                    </span>

                    {/* =================================================
                        GOPURAM ICON
                    ================================================== */}

                    <svg
                      viewBox="0 0 100 100"
                      className="
                        relative
                        z-10
                        h-[52px]
                        w-[52px]
                        text-[#E7A71E]

                        xl:h-[58px]
                        xl:w-[58px]
                      "
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {/* Foundation */}

                      <path
                        d="M20 82H80"
                        strokeWidth="2"
                      />

                      <path
                        d="M24 82V73H76V82"
                        strokeWidth="1.8"
                      />

                      {/* Tower */}

                      <path
                        d="M28 73V65H72V73"
                        strokeWidth="1.8"
                      />

                      <path
                        d="M32 65V57H68V65"
                        strokeWidth="1.8"
                      />

                      <path
                        d="M36 57V49H64V57"
                        strokeWidth="1.8"
                      />

                      <path
                        d="M40 49V41H60V49"
                        strokeWidth="1.8"
                      />

                      <path
                        d="M43 41V33H57V41"
                        strokeWidth="1.8"
                      />

                      {/* Crown */}

                      <path
                        d="M46 33V25H54V33"
                        strokeWidth="1.8"
                      />

                      <path
                        d="M43 25H57"
                        strokeWidth="1.8"
                      />

                      <path
                        d="M47 25L50 18L53 25"
                        strokeWidth="1.8"
                      />

                      {/* Kalasam */}

                      <path
                        d="M50 18V12"
                        strokeWidth="1.8"
                      />

                      <path
                        d="M47 12H53"
                        strokeWidth="1.8"
                      />

                      {/* Architectural details */}

                      <path d="M32 65H68" strokeWidth="1" />
                      <path d="M36 57H64" strokeWidth="1" />
                      <path d="M40 49H60" strokeWidth="1" />
                      <path d="M43 41H57" strokeWidth="1" />

                      {/* Entrance */}

                      <path
                        d="M43 82V69H57V82"
                        strokeWidth="1.5"
                      />

                      <path
                        d="M46 69V76H54V69"
                        strokeWidth="0.9"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* =================================================
                  BOTANICAL LEAF
              ================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-[-6px]
                  right-[-3px]
                  z-20
                  hidden
                  h-[185px]
                  w-[140px]
                  opacity-45

                  lg:block

                  xl:h-[210px]
                  xl:w-[155px]
                "
              >
                <svg
                  viewBox="0 0 205 275"
                  className="h-full w-full"
                  fill="none"
                  stroke="#D99A18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Main stem */}

                  <path
                    d="
                      M22 270
                      C49 231
                      81 188
                      111 147
                      C139 109
                      162 72
                      180 27
                    "
                    strokeWidth="1.35"
                  />

                  {/* Lower left leaf */}

                  <path
                    d="
                      M50 235
                      C32 226
                      21 209
                      23 192
                      C42 198
                      54 214
                      50 235
                      Z
                    "
                    strokeWidth="1.15"
                  />

                  <path
                    d="M27 197C37 208 44 219 50 232"
                    strokeWidth="0.7"
                    opacity="0.7"
                  />

                  {/* Left middle leaf */}

                  <path
                    d="
                      M70 207
                      C53 196
                      46 179
                      51 164
                      C67 171
                      77 188
                      70 207
                      Z
                    "
                    strokeWidth="1.15"
                  />

                  <path
                    d="M54 168C61 180 66 193 69 204"
                    strokeWidth="0.7"
                    opacity="0.7"
                  />

                  {/* Right middle leaf */}

                  <path
                    d="
                      M94 176
                      C101 157
                      115 145
                      132 143
                      C128 160
                      114 174
                      94 176
                      Z
                    "
                    strokeWidth="1.15"
                  />

                  <path
                    d="M128 147C116 156 106 166 97 174"
                    strokeWidth="0.7"
                    opacity="0.7"
                  />

                  {/* Upper left */}

                  <path
                    d="
                      M113 145
                      C97 133
                      92 117
                      98 103
                      C113 111
                      121 127
                      113 145
                      Z
                    "
                    strokeWidth="1.15"
                  />

                  <path
                    d="M101 107C106 119 110 132 112 142"
                    strokeWidth="0.7"
                    opacity="0.7"
                  />

                  {/* Upper right */}

                  <path
                    d="
                      M133 116
                      C137 99
                      149 87
                      163 84
                      C163 100
                      152 113
                      133 116
                      Z
                    "
                    strokeWidth="1.15"
                  />

                  <path
                    d="M159 87C150 97 142 106 135 114"
                    strokeWidth="0.7"
                    opacity="0.7"
                  />

                  {/* Top leaf */}

                  <path
                    d="
                      M153 83
                      C145 69
                      149 55
                      159 46
                      C168 57
                      167 72
                      153 83
                      Z
                    "
                    strokeWidth="1.15"
                  />

                  <path
                    d="M160 49C157 60 155 71 153 81"
                    strokeWidth="0.7"
                    opacity="0.7"
                  />

                  {/* Small top-right leaf */}

                  <path
                    d="
                      M169 60
                      C173 48
                      181 40
                      190 39
                      C190 49
                      183 58
                      169 60
                      Z
                    "
                    strokeWidth="1"
                  />

                  {/* Small accents */}

                  <circle
                    cx="34"
                    cy="246"
                    r="1.1"
                    fill="#D99A18"
                    stroke="none"
                  />

                  <circle
                    cx="81"
                    cy="218"
                    r="0.9"
                    fill="#D99A18"
                    stroke="none"
                  />

                  <circle
                    cx="121"
                    cy="183"
                    r="0.9"
                    fill="#D99A18"
                    stroke="none"
                  />

                  <circle
                    cx="147"
                    cy="135"
                    r="0.8"
                    fill="#D99A18"
                    stroke="none"
                  />
                </svg>
              </div>

              {/* =================================================
                  SMALL DECORATIVE CIRCLE
              ================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-[-65px]
                  left-[-50px]
                  h-[130px]
                  w-[130px]
                  rounded-full
                  border
                  border-[#D99A18]/15

                  lg:h-[160px]
                  lg:w-[160px]
                "
              />
            </motion.div>
          </div>

          {/* ===================================================
              BOTTOM GOLD LINE
          ==================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              z-[60]
              h-[2px]
              w-full
              bg-[#D99A18]
            "
          />
        </div>
      </div>
    </section>
  );
}