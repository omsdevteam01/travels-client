"use client";

import Link from "next/link";
import { mediaUrl } from "@/lib/media";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

/* =========================================================
   DATA
========================================================= */

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "Pilgrimage", href: "/pilgrimage" },
  { label: "Accommodation", href: "/accommodation" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const services = [
  {
    label: "South India Tours",
    href: "/tours",
  },
  {
    label: "Vehicle Booking",
    href: "/vehicles",
  },
  {
    label: "Pilgrimage Travel",
    href: "/pilgrimage",
  },
  {
    label: "Rooms & Accommodation",
    href: "/accommodation",
  },
  {
    label: "Hall Arrangements",
    href: "/accommodation",
  },
  {
    label: "Kitchen Arrangements",
    href: "/accommodation",
  },
  {
    label: "Religious Services & Spiritual Events",
    href: "/services",
  },
];

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
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
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 14,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const staggerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const phone1 = process.env.NEXT_PUBLIC_PHONE_1 ?? "";
  const phone2 = process.env.NEXT_PUBLIC_PHONE_2 ?? "";
  const officePhone = process.env.NEXT_PUBLIC_OFFICE_PHONE ?? "";

  const developerUrl =
    process.env.NEXT_PUBLIC_DEVELOPER_URL ?? "";

  const locations = [
    process.env.NEXT_PUBLIC_LOCATION_1,
    process.env.NEXT_PUBLIC_LOCATION_2,
    process.env.NEXT_PUBLIC_LOCATION_3,
    process.env.NEXT_PUBLIC_LOCATION_4,
  ]
    .filter(Boolean)
    .join(" • ");

  const officeAddress =
    process.env.NEXT_PUBLIC_OFFICE_ADDRESS ?? "";

  const viewport = {
    once: true,
    amount: 0.1,
  };

  return (
    <footer className="relative overflow-hidden bg-[#071635] text-white">
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
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          hidden
          h-72
          w-72
          rounded-full
          border-[32px]
          border-[#D99A18]/[0.04]
          sm:block
          lg:h-96
          lg:w-96
          lg:border-[42px]
        "
      />

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
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: 0.1,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-36
          -left-28
          hidden
          h-72
          w-72
          rounded-full
          border-[30px]
          border-white/[0.025]
          lg:block
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          hidden
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D99A18]/[0.015]
          blur-3xl
          lg:block
        "
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          sm:px-6
          lg:px-8
          xl:px-10
        "
      >
        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-7
            py-7
            sm:grid-cols-2
            sm:gap-x-8
            sm:gap-y-8
            sm:py-8
            lg:grid-cols-[1.3fr_0.8fr_1fr_1fr]
            lg:gap-8
            lg:py-10
            xl:gap-12
          "
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={
              shouldReduceMotion ? undefined : "visible"
            }
            viewport={viewport}
            variants={fadeLeftVariants}
            className="
              min-w-0
              sm:col-span-2
              lg:col-span-1
            "
          >
            <Link
              href="/"
              className="
                group
                inline-flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  relative
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  transition-transform
                  duration-300
                  group-hover:scale-105
                  sm:h-16
                  sm:w-16
                  lg:h-20
                  lg:w-20
                "
              >
                <img
                  src={mediaUrl("images/logo/logo.png")}
                  alt="Baiya Tours & Travels"
                  className="
                    h-full
                    w-full
                    object-contain
                  "
                />
              </div>

              <div className="leading-none">
                <div
                  className="
                    text-[18px]
                    font-extrabold
                    tracking-[0.07em]
                    text-white
                    sm:text-[20px]
                  "
                >
                  BAIYA
                </div>

                <div
                  className="
                    mt-1
                    text-[7px]
                    font-bold
                    tracking-[0.18em]
                    text-[#D99A18]
                    sm:text-[8px]
                  "
                >
                  TOURS &amp; TRAVELS
                </div>
              </div>
            </Link>

            <p
              className="
                mt-3
                max-w-sm
                text-[10px]
                leading-[1.65]
                text-white/100
                sm:mt-3.5
                sm:text-[11px]
                sm:leading-5
              "
            >
              Travel arrangements for South India tours,
              pilgrimage journeys, group travel,
              accommodation and religious programmes.
            </p>

            {/* Social */}

            <div
              className="
                mt-3
                flex
                items-center
                gap-2
              "
            >
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-[12px]
                  font-extrabold
                  text-white/45
                  transition-all
                  duration-300
                  hover:border-[#D99A18]/40
                  hover:bg-[#D99A18]
                  hover:text-white
                "
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-[8px]
                  font-extrabold
                  tracking-tight
                  text-white/45
                  transition-all
                  duration-300
                  hover:border-[#D99A18]/40
                  hover:bg-[#D99A18]
                  hover:text-white
                "
              >
                IG
              </a>
            </div>
          </motion.div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={
              shouldReduceMotion ? undefined : "visible"
            }
            viewport={viewport}
            variants={fadeUpVariants}
            className="min-w-0"
          >
            <h3
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#F0C45C]
                sm:text-[10px]
                lg:text-xs
              "
            >
              Quick Links
            </h3>

            <motion.nav
              variants={staggerVariants}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView={
                shouldReduceMotion ? undefined : "visible"
              }
              viewport={viewport}
              className="
                mt-3
                grid
                grid-cols-2
                gap-x-4
                gap-y-1.5
                sm:mt-4
                sm:gap-y-2
                lg:grid-cols-1
                lg:gap-y-2
              "
            >
              {quickLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={
                    shouldReduceMotion
                      ? undefined
                      : itemVariants
                  }
                >
                  <Link
                    href={link.href}
                    className="
                      group
                      flex
                      min-h-6
                      w-fit
                      items-center
                      gap-1
                      text-[10.5px]
                      text-white/45
                      transition-colors
                      duration-300
                      hover:text-[#D99A18]
                      sm:text-[11px]
                      lg:text-xs
                    "
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={9}
                      className="
                        hidden
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:opacity-100
                        sm:block
                      "
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={
              shouldReduceMotion ? undefined : "visible"
            }
            viewport={viewport}
            variants={fadeUpVariants}
            className="min-w-0"
          >
            <h3
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#F0C45C]
                sm:text-[10px]
                lg:text-xs
              "
            >
              Our Services
            </h3>

            <motion.nav
              variants={staggerVariants}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView={
                shouldReduceMotion ? undefined : "visible"
              }
              viewport={viewport}
              className="
                mt-3
                grid
                grid-cols-1
                gap-y-1.5
                sm:mt-4
                sm:gap-y-2
              "
            >
              {services.map((service) => (
                <motion.div
                  key={service.label}
                  variants={
                    shouldReduceMotion
                      ? undefined
                      : itemVariants
                  }
                >
                  <Link
                    href={service.href}
                    className="
                      group
                      flex
                      items-start
                      gap-2
                      text-[10.5px]
                      leading-[1.45]
                      text-white/45
                      transition-colors
                      duration-300
                      hover:text-[#D99A18]
                      sm:text-[11px]
                      lg:text-xs
                    "
                  >
                    <span
                      className="
                        mt-[6px]
                        h-1
                        w-1
                        shrink-0
                        rounded-full
                        bg-[#D99A18]/50
                        transition-all
                        duration-300
                        group-hover:w-1.5
                      "
                    />

                    <span>{service.label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={
              shouldReduceMotion ? undefined : "visible"
            }
            viewport={viewport}
            variants={fadeRightVariants}
            className="min-w-0"
          >
            <h3
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#F0C45C]
                sm:text-[10px]
                lg:text-xs
              "
            >
              Contact Us
            </h3>

            <div
              className="
                mt-3
                space-y-2.5
                sm:mt-4
                sm:space-y-3
                lg:space-y-3.5
              "
            >
              {/* Phone */}

              <a
                href={phone1 ? `tel:+91${phone1}` : "#"}
                className="
                  group
                  flex
                  items-center
                  gap-2.5
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/5
                    text-[#F0C45C]
                    transition-colors
                    duration-300
                    group-hover:bg-[#D99A18]
                    group-hover:text-white
                  "
                >
                  <Phone size={14} />
                </span>

                <div className="min-w-0">
                  <p
                    className="
                      text-[7px]
                      uppercase
                      tracking-wider
                      text-white/100
                      sm:text-[8px]
                    "
                  >
                    Call Us
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[10.5px]
                      font-semibold
                      text-white/65
                      transition-colors
                      duration-300
                      group-hover:text-[#D99A18]
                      sm:text-[11px]
                      lg:text-xs
                    "
                  >
                    {phone1 || "Phone unavailable"}
                  </p>

                  {(phone2 || officePhone) && (
                    <p
                      className="
                        mt-0.5
                        text-[9px]
                        font-medium
                        text-white/45
                        sm:text-[10px]
                        lg:text-[11px]
                      "
                    >
                      {phone2 && `Mob: ${phone2}`}
                      {phone2 && officePhone && " • "}
                      {officePhone && `Off: ${officePhone}`}
                    </p>
                  )}
                </div>
              </a>

              {/* Email */}

              <a
                href="mailto:info@example.com"
                className="
                  group
                  flex
                  items-center
                  gap-2.5
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/5
                    text-[#F0C45C]
                    transition-colors
                    duration-300
                    group-hover:bg-[#D99A18]
                    group-hover:text-white
                  "
                >
                  <Mail size={14} />
                </span>

                <div className="min-w-0">
                  <p
                    className="
                      text-[7px]
                      uppercase
                      tracking-wider
                      text-white/100
                      sm:text-[8px]
                    "
                  >
                    Email
                  </p>

                  <p
                    className="
                      mt-0.5
                      break-all
                      text-[10.5px]
                      font-semibold
                      text-white/65
                      transition-colors
                      duration-300
                      group-hover:text-[#D99A18]
                      sm:text-[11px]
                      lg:text-xs
                    "
                  >
                    info@example.com
                  </p>
                </div>
              </a>

              {/* Location */}

              <div
                className="
                  flex
                  items-center
                  gap-2.5
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/5
                    text-[#F0C45C]
                  "
                >
                  <MapPin size={14} />
                </span>

                <div className="min-w-0">
                  <p
                    className="
                      text-[7px]
                      uppercase
                      tracking-wider
                      text-white/100
                      sm:text-[8px]
                    "
                  >
                    Location
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[10.5px]
                      font-semibold
                      text-white/65
                      sm:text-[11px]
                      lg:text-xs
                    "
                  >
                    {locations || "South India"}
                  </p>

                  {officeAddress && (
                    <p
                      className="
                        mt-0.5
                        text-[8.5px]
                        leading-4
                        text-white/40
                        sm:text-[9px]
                        sm:leading-5
                      "
                    >
                      {officeAddress}
                    </p>
                  )}
                </div>
              </div>

              {/* Enquiries */}

              <div
                className="
                  flex
                  items-center
                  gap-2.5
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/5
                    text-[#F0C45C]
                  "
                >
                  <Clock3 size={14} />
                </span>

                <div className="min-w-0">
                  <p
                    className="
                      text-[7px]
                      uppercase
                      tracking-wider
                      text-white/100
                      sm:text-[8px]
                    "
                  >
                    Enquiries
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[10.5px]
                      font-semibold
                      leading-4
                      text-white/65
                      sm:text-[11px]
                      lg:text-xs
                    "
                  >
                    Available for travel enquiries
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={
            shouldReduceMotion ? undefined : "visible"
          }
          viewport={viewport}
          variants={fadeUpVariants}
          className="
            flex
            flex-col
            gap-2
            border-t
            border-white/[0.08]
            py-3.5
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:py-4
          "
        >
          {/* Copyright */}

          <p
            className="
              text-[8.5px]
              leading-4
              text-white/25
              sm:text-[10px]
            "
          >
            © {new Date().getFullYear()} Baiya Tours &amp;
            Travels. All rights reserved.
          </p>

          {/* Developer */}

          <a
            href={developerUrl || "#"}
            target={developerUrl ? "_blank" : undefined}
            rel={
              developerUrl
                ? "noopener noreferrer"
                : undefined
            }
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-1.5
              text-[8.5px]
              font-medium
              text-white/30
              transition-colors
              duration-300
              hover:text-[#D99A18]
              sm:text-[10px]
            "
          >
            <span>Developed by</span>

            <span
              className="
                font-semibold
                text-white/45
                transition-colors
                duration-300
                group-hover:text-[#D99A18]
              "
            >
              Orange Mega Software
            </span>

            <ArrowUpRight
              size={10}
              className="
                opacity-60
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}