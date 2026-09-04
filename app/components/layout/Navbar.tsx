"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mediaUrl } from "@/lib/media";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Tours",
    href: "/tours",
  },
  {
    label: "Vehicles",
    href: "/vehicles",
  },
  {
    label: "Accommodation",
    href: "/accommodation",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
];

/* =========================================================
   MOBILE MENU ANIMATION
========================================================= */

const mobileMenuVariants: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
  },

  visible: {
    opacity: 1,
    height: "auto",

    transition: {
      opacity: {
        duration: 0.2,
      },

      height: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },

  exit: {
    opacity: 0,
    height: 0,

    transition: {
      opacity: {
        duration: 0.15,
      },

      height: {
        duration: 0.25,
        ease: [0.4, 0, 1, 1],
      },
    },
  },
};

const mobileItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -12,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const shouldReduceMotion = useReducedMotion();

  const pathname = usePathname();

  /* =======================================================
     SCROLL TO TOP ON PAGE CHANGE
  ======================================================== */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  /* =======================================================
     LOCK BODY SCROLL
  ======================================================== */

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  /* =======================================================
     CLOSE MOBILE MENU ON DESKTOP
  ======================================================== */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* =======================================================
     ESCAPE KEY
  ======================================================== */

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="sticky top-0 z-[100] w-full border-b border-[#0B1F4D]/10 bg-[#F7F3E8]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[64px] w-full max-w-[1440px] items-center justify-between px-4 sm:h-[70px] sm:px-6 lg:px-8 xl:px-10">

          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            href="/"
            onClick={closeMobileMenu}
            aria-label="Baiya Tours & Travels - Home"
            className="group flex min-w-0 items-center gap-2.5"
          >
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden sm:h-[68px] sm:w-[68px]">
              <img
                src={mediaUrl("/images/logo/logo.png")}
                alt="Baiya Tours & Travels"
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="min-w-0 leading-none">
              <div className="truncate text-[17px] font-extrabold tracking-[0.07em] !text-[#0B1F4D] sm:text-[19px]">
                BAIYA
              </div>

              <div className="mt-1 truncate text-[7px] font-bold tracking-[0.16em] !text-[#D99A18] sm:text-[8px] sm:tracking-[0.18em]">
                TOURS &amp; TRAVELS
              </div>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            aria-label="Main navigation"
            className="hidden xl:flex"
          >
            <div className="flex items-center gap-1 2xl:gap-1.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative rounded-full px-3 py-2.5 text-[14px] font-semibold transition-all duration-200 2xl:px-3.5 2xl:text-[15px] ${
                    pathname === item.href
                      ? "bg-[#D99A18]/12 !text-[#D99A18] shadow-[inset_0_0_0_1px_rgba(217,154,24,0.12)]"
                      : "!text-[#071635] hover:!text-[#D99A18]"
                  }`}
                >
                  {item.label}

                  {/* Hover underline */}

                  <span
                    className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#D99A18] transition-all duration-300 ${
                      pathname === item.href ? "w-5" : "w-0 group-hover:w-4"
                    }`}
                  />
                </Link>
              ))}
            </div>
          </nav>

          {/* =================================================
              DESKTOP BOOK NOW
          ================================================== */}

          <div className="hidden xl:flex">
            <Link
              href="/contact"
              className="group inline-flex min-h-10 items-center gap-2 rounded-full bg-[#D99A18] px-5 py-2.5 text-sm font-bold !text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B1F4D] hover:!text-white hover:shadow-md active:translate-y-0 active:!text-white"
            >
              <span className="!text-white">
                Book Now
              </span>

              <ArrowRight
                size={15}
                className="!text-white transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen(
                (current) => !current
              )
            }
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B1F4D] !text-white transition-all duration-200 hover:bg-[#D99A18] active:scale-95 xl:hidden"
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {mobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          rotate: -45,
                          scale: 0.8,
                        }
                  }
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          rotate: 45,
                          scale: 0.8,
                        }
                  }
                  transition={{
                    duration: 0.18,
                  }}
                >
                  <X
                    size={20}
                    strokeWidth={2}
                    className="!text-white"
                  />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          rotate: 45,
                          scale: 0.8,
                        }
                  }
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          rotate: -45,
                          scale: 0.8,
                        }
                  }
                  transition={{
                    duration: 0.18,
                  }}
                >
                  <Menu
                    size={20}
                    strokeWidth={2}
                    className="!text-white"
                  />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={
                shouldReduceMotion
                  ? undefined
                  : mobileMenuVariants
              }
              className="overflow-hidden border-t border-[#0B1F4D]/10 bg-[#F7F3E8] xl:hidden"
            >
              <nav
                aria-label="Mobile navigation"
                className="mx-auto max-h-[calc(100svh-64px)] max-w-[1440px] overflow-y-auto px-4 pb-5 sm:px-6"
              >
                {/* =================================================
                    MOBILE LINKS
                ================================================== */}

                <div className="py-1">
                  {navItems.map(
                    (item, index) => (
                      <motion.div
                        key={item.href}
                        initial={
                          shouldReduceMotion
                            ? false
                            : "hidden"
                        }
                        animate="visible"
                        variants={
                          shouldReduceMotion
                            ? undefined
                            : mobileItemVariants
                        }
                        transition={
                          shouldReduceMotion
                            ? undefined
                            : {
                                delay:
                                  index *
                                  0.035,
                              }
                        }
                      >
                        <Link
                          href={item.href}
                          onClick={
                            closeMobileMenu
                          }
                          className={`group flex min-h-12 items-center justify-between border-b border-[#0B1F4D]/8 py-2.5 pl-3 pr-1 text-sm font-semibold transition-all duration-200 sm:min-h-13 sm:text-[15px] ${
                            pathname === item.href
                              ? "rounded-xl bg-[#D99A18]/12 !text-[#D99A18] shadow-[inset_3px_0_0_#D99A18]"
                              : "!text-[#071635] hover:!text-[#D99A18] active:!text-[#D99A18]"
                          }`}
                        >
                          <span
                            className={
                              pathname === item.href
                                ? "!text-[#D99A18]"
                                : "!text-[#071635] group-hover:!text-[#D99A18]"
                            }
                          >
                            {item.label}
                          </span>

                          <ArrowRight
                            size={16}
                            className={`!text-[#D99A18] transition-transform duration-200 group-hover:translate-x-1 ${
                            pathname === item.href ? "translate-x-0.5" : ""
                          }`}
                          />
                        </Link>
                      </motion.div>
                    )
                  )}
                </div>

                {/* =================================================
                    MOBILE BOOK NOW
                ================================================== */}

                <motion.div
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 8,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: shouldReduceMotion
                      ? 0
                      : 0.22,
                  }}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
                    onClick={
                      closeMobileMenu
                    }
                    className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#D99A18] px-5 py-3 text-sm font-bold !text-white shadow-sm transition-all duration-200 hover:bg-[#0B1F4D] hover:!text-white active:scale-[0.98] active:!text-white"
                  >
                    <span className="!text-white">
                      Book Now
                    </span>

                    <ArrowRight
                      size={16}
                      className="!text-white transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* =======================================================
          MOBILE BACKDROP
      ======================================================== */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.button
            type="button"
            aria-label="Close navigation"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            onClick={closeMobileMenu}
            className="fixed inset-0 z-[90] bg-[#071635]/25 xl:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}