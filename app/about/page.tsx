"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  HeartHandshake,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: HeartHandshake,
    title: "Personal Service",
    description:
      "We understand that every journey is different. Our approach is focused on making travel arrangements simple, comfortable and organised.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Arrangements",
    description:
      "From vehicles and accommodation to group travel and programme arrangements, we focus on dependable coordination.",
  },
  {
    icon: Users,
    title: "Group Friendly",
    description:
      "Whether it is a family trip, pilgrimage group or a larger gathering, we help coordinate the requirements of your group.",
  },
  {
    icon: Compass,
    title: "Travel Support",
    description:
      "Our services are designed to support your journey from planning through to the arrangements needed at your destination.",
  },
];

const services = [
  "South India Tours",
  "Vehicle Booking",
  "Pilgrimage Travel",
  "Rooms & Accommodation",
  "Hall Arrangements",
  "Kitchen Arrangements",
  "Religious Programmes",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#F7F3E8] text-[#071635]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden">
        {/* Decorative background */}

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border-[35px] border-[#D99A18]/10 sm:h-[420px] sm:w-[420px] sm:border-[50px]"
        />

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="pointer-events-none absolute -bottom-40 -left-32 h-72 w-72 rounded-full border-[30px] border-[#071635]/5 sm:h-96 sm:w-96"
        />

        <div className="relative mx-auto w-full max-w-[1440px] px-4 pb-12 pt-7 sm:px-6 sm:pb-16 sm:pt-10 lg:px-10 lg:pb-20 lg:pt-14">

          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">

            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full"
            >
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#D99A18]/20 bg-white/60 px-3 py-2 sm:px-3.5">
                <Sparkles
                  size={14}
                  className="shrink-0 text-[#D99A18]"
                />

                <span className="truncate text-[9px] font-bold uppercase tracking-[0.15em] text-[#D99A18] sm:text-xs sm:tracking-[0.18em]">
                  About Baiya Tours &amp; Travels
                </span>
              </div>

              <h1 className="mt-5 max-w-3xl text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#071635] sm:text-5xl lg:text-[62px]">
                Travel made
                <span className="block text-[#D99A18]">
                  simple and meaningful.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-[#071635]/60 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
                Baiya Tours &amp; Travels helps arrange travel,
                vehicles, accommodation, pilgrimage journeys
                and group requirements across South India.
              </p>

              <div className="mt-6 flex w-full flex-col gap-3 sm:mt-7 sm:w-auto sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#D99A18] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#071635] hover:shadow-lg active:scale-[0.98] sm:w-auto"
                >
                  Plan Your Journey

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[#071635]/15 bg-white/60 px-6 py-3 text-sm font-bold text-[#071635] transition-all duration-300 hover:border-[#D99A18]/40 hover:text-[#D99A18] hover:shadow-sm active:scale-[0.98] sm:w-auto"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT LOGO CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full"
            >
              <div className="relative mx-auto w-full max-w-[520px]">

                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="relative overflow-hidden rounded-[24px] bg-[#071635] px-5 py-8 shadow-xl sm:rounded-[28px] sm:px-10 sm:py-11"
                >

                  {/* Decorative circles */}

                  <motion.div
                    aria-hidden="true"
                    animate={{
                      rotate: [0, 6, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-20 -top-20 h-52 w-52 rounded-full border-[24px] border-white/5"
                  />

                  <motion.div
                    aria-hidden="true"
                    animate={{
                      rotate: [0, -6, 0],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full border-[25px] border-[#D99A18]/10"
                  />

                  <div className="relative">

                    {/* LOGO */}

                    <motion.div
                      animate={{
                        y: [0, -6, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex justify-center"
                    >
                      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#F7F3E8] p-3 shadow-lg ring-1 ring-white/10 sm:h-36 sm:w-36 sm:p-4 lg:h-40 lg:w-40">
                        <img
                          src="/images/logo/logo.png"
                          alt="Baiya Tours & Travels"
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </motion.div>

                    {/* Divider */}

                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: 80,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.4,
                      }}
                      className="mx-auto mt-5 h-px bg-[#D99A18]"
                    />

                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5,
                      }}
                      className="mt-5 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-[#F0C45C] sm:text-xs"
                    >
                      Your Journey. Our Support.
                    </motion.p>

                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.6,
                      }}
                      className="mx-auto mt-3 max-w-sm text-center text-xs leading-5 text-white/55 sm:text-sm sm:leading-6"
                    >
                      From simple family travel to larger
                      spiritual gatherings, we help bring
                      the important arrangements together.
                    </motion.p>
                  </div>
                </motion.div>

                {/* Floating badge */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.7,
                  }}
                  className="absolute -bottom-5 left-3 flex items-center gap-2.5 rounded-2xl border border-[#071635]/5 bg-white px-3.5 py-2.5 shadow-xl sm:left-8 sm:gap-3 sm:px-4 sm:py-3"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D99A18]/10 sm:h-9 sm:w-9"
                  >
                    <MapPinned
                      size={16}
                      className="text-[#D99A18]"
                    />
                  </motion.div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-wider text-[#071635]/35 sm:text-[9px]">
                      Travel Support
                    </p>

                    <p className="mt-0.5 text-[11px] font-bold text-[#071635] sm:text-xs">
                      South India
                    </p>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D99A18] sm:text-xs">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#071635] sm:text-4xl">
                Helping you arrange the journey.
              </h2>
            </motion.div>

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
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="space-y-4 text-sm leading-7 text-[#071635]/60 sm:text-base"
            >
              <p>
                Baiya Tours &amp; Travels is focused on making
                travel arrangements easier and more organised
                for individuals, families and groups.
              </p>

              <p>
                We support a range of travel requirements,
                including tours, vehicle arrangements,
                pilgrimage travel, accommodation and
                facilities required for group programmes.
              </p>

              <p>
                Our goal is simple: to help you spend less time
                worrying about arrangements and more time
                enjoying the journey itself.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE DO
      ====================================================== */}

      <section className="bg-[#F7F3E8]">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

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
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D99A18] sm:text-xs">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-[#071635] sm:text-4xl">
              One place for your travel arrangements.
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#071635]/55 sm:text-base sm:leading-7">
              We bring different travel and facility
              requirements together so your journey can be
              planned with greater ease.
            </p>
          </motion.div>

          {/* =================================================
              7 SERVICE CARDS
              
              Desktop:
              Row 1 = 4 cards
              Row 2 = 3 centered cards

              Tablet:
              2 cards per row

              Mobile:
              1 card per row
          ================================================== */}

          <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-9 sm:grid-cols-2 lg:grid-cols-16">

            {services.map((service, index) => {
              const secondRowPosition =
                index === 4
                  ? "lg:col-start-3"
                  : index === 5
                  ? "lg:col-start-7"
                  : index === 6
                  ? "lg:col-start-11"
                  : "";

              return (
                <motion.div
                  key={service}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className={`flex min-h-[64px] items-center gap-3 rounded-2xl border border-[#071635]/7 bg-white px-4 py-3 shadow-[0_1px_2px_rgba(7,22,53,0.02)] transition-all duration-300 hover:border-[#D99A18]/25 hover:shadow-md sm:min-h-[70px] sm:px-5 lg:col-span-4 ${secondRowPosition}`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D99A18]/10">
                    <CheckCircle2
                      size={17}
                      className="text-[#D99A18]"
                    />
                  </span>

                  <span className="text-sm font-semibold leading-5 text-[#071635]/75">
                    {service}
                  </span>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          OUR VALUES
      ====================================================== */}

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

          <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D99A18] sm:text-xs">
                Our Approach
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.03em] text-[#071635] sm:text-4xl">
                What matters to us.
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-[#071635]/55 sm:text-base sm:leading-7">
                Good travel arrangements are about more
                than simply getting from one place to another.
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={value.title}
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
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="rounded-2xl border border-[#071635]/8 bg-[#F7F3E8]/55 p-5 transition-all duration-300 hover:border-[#D99A18]/25 hover:shadow-md sm:p-6"
                  >
                    <motion.div
                      whileHover={{
                        rotate: 5,
                        scale: 1.05,
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#071635]"
                    >
                      <Icon
                        size={18}
                        className="text-[#F0C45C]"
                      />
                    </motion.div>

                    <h3 className="mt-4 text-base font-bold text-[#071635]">
                      {value.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#071635]/55 sm:text-sm sm:leading-6">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-[#071635]">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-9 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
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
            className="relative overflow-hidden rounded-[22px] border border-white/5 bg-[#0B1F4D] px-5 py-8 text-center sm:rounded-[24px] sm:px-10 sm:py-11 lg:px-16"
          >

            {/* Decorative circles */}

            <motion.div
              aria-hidden="true"
              animate={{
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border-[30px] border-white/5"
            />

            <motion.div
              aria-hidden="true"
              animate={{
                rotate: [0, -8, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full border-[25px] border-[#D99A18]/10"
            />

            <div className="relative">

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F0C45C] sm:text-xs">
                Let&apos;s Travel
              </p>

              <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl">
                Tell us what you need.
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/50 sm:text-base">
                Whether you are planning a family trip,
                pilgrimage journey or group programme,
                we can help arrange the details.
              </p>

              <Link
                href="/contact"
                className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#D99A18] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F0C45C] hover:text-[#071635] hover:shadow-lg active:scale-[0.98] sm:mt-7 sm:w-auto"
              >
                Contact Us

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}