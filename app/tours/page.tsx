"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";

import { tourCategories, tours } from "./data";

export default function ToursPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      const matchesCategory =
        activeCategory === "All" ||
        tour.category === activeCategory;

      const search = searchTerm.trim().toLowerCase();

      const matchesSearch =
        !search ||
        tour.name.toLowerCase().includes(search) ||
        tour.location.toLowerCase().includes(search) ||
        tour.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F3E8] text-[#071635]">

      {/* =====================================================
          PAGE INTRO
      ====================================================== */}

      <section className="bg-[#F7F3E8]">

        <div
          className="
            mx-auto
            max-w-[1250px]
            px-4
            pb-7
            pt-7
            sm:px-6
            sm:pb-9
            sm:pt-9
            lg:px-8
            lg:pb-10
            lg:pt-10
          "
        >

          {/* SMALL LABEL */}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-7 bg-[#D99A18]" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#D99A18]
                sm:text-xs
              "
            >
              Explore With Us
            </span>
          </motion.div>

          {/* HEADING */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="
              mt-3
              grid
              gap-4
              lg:grid-cols-[1fr_0.6fr]
              lg:items-end
              lg:gap-10
            "
          >

            <div>

              <h1
                className="
                  text-[42px]
                  font-extrabold
                  leading-[0.98]
                  tracking-[-0.055em]
                  sm:text-6xl
                  lg:text-[68px]
                "
              >
                Explore your
                <span className="block text-[#D99A18]">
                  next journey.
                </span>
              </h1>

            </div>

            <p
              className="
                max-w-lg
                text-sm
                leading-6
                text-[#071635]/55
                sm:text-base
                sm:leading-7
              "
            >
              Discover thoughtfully arranged tours across
              South India for families, individuals and groups.
            </p>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          EXPLORE TOURS
      ====================================================== */}

      <section className="bg-white">

        <div
          className="
            mx-auto
            max-w-[1250px]
            px-4
            py-8
            sm:px-6
            sm:py-10
            lg:px-8
            lg:py-12
          "
        >

          {/* SECTION TITLE */}

          <div className="flex items-end justify-between gap-4">

            <div>

              <div className="flex items-center gap-2.5">

                <Sparkles
                  size={14}
                  className="text-[#D99A18]"
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#D99A18]
                  "
                >
                  Explore Tours
                </span>

              </div>

              <h2
                className="
                  mt-2
                  text-2xl
                  font-extrabold
                  tracking-[-0.04em]
                  sm:text-3xl
                "
              >
                Find your journey.
              </h2>

            </div>

            <span
              className="
                hidden
                text-xs
                font-semibold
                text-[#071635]/30
                sm:block
              "
            >
              {tours.length} journeys
            </span>

          </div>

          {/* =================================================
              SEARCH
          ================================================== */}

          <div className="mt-5">

            <div className="relative max-w-xl">

              <Search
                size={16}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-[#071635]/30
                "
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                placeholder="Search destination or tour..."
                className="
                  h-11
                  w-full
                  rounded-full
                  border
                  border-[#071635]/10
                  bg-[#F7F3E8]
                  pl-11
                  pr-5
                  text-xs
                  font-medium
                  text-[#071635]
                  outline-none
                  transition-all
                  placeholder:text-[#071635]/30
                  focus:border-[#D99A18]/40
                  focus:ring-2
                  focus:ring-[#D99A18]/10
                  sm:h-12
                  sm:text-sm
                "
              />

            </div>

          </div>

          {/* =================================================
              CATEGORY FILTER
          ================================================== */}

          <div
            className="
              mt-4
              -mx-4
              overflow-x-auto
              px-4
              pb-1
              scrollbar-hide
              sm:mx-0
              sm:px-0
            "
          >

            <div className="flex min-w-max gap-2">

              {tourCategories.map((category) => {
                const isActive =
                  activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setActiveCategory(category)
                    }
                    className={`
                      rounded-full
                      px-4
                      py-2.5
                      text-[10px]
                      font-bold
                      whitespace-nowrap
                      transition-all
                      duration-300
                      sm:text-xs
                      ${
                        isActive
                          ? "bg-[#071635] text-white"
                          : "bg-[#F7F3E8] text-[#071635]/55 hover:bg-[#071635]/10 hover:text-[#071635]"
                      }
                    `}
                  >
                    {category}
                  </button>
                );
              })}

            </div>

          </div>

          {/* =================================================
              RESULTS
          ================================================== */}

          <div className="mt-5 flex items-center justify-between">

            <p
              className="
                text-[10px]
                font-semibold
                text-[#071635]/35
              "
            >
              {filteredTours.length}{" "}
              {filteredTours.length === 1 ? "tour" : "tours"} found
            </p>

            {(activeCategory !== "All" || searchTerm) && (
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchTerm("");
                }}
                className="
                  text-[10px]
                  font-bold
                  text-[#D99A18]
                "
              >
                Clear filters
              </button>
            )}

          </div>

          {/* =================================================
              TOUR CARDS
          ================================================== */}

          {filteredTours.length > 0 ? (

            <motion.div
              layout
              className="
                mt-5
                grid
                gap-x-5
                gap-y-8
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >

              {filteredTours.map((tour, index) => (

                <motion.article
                  layout
                  key={tour.slug}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(index * 0.025, 0.18),
                  }}
                  className="group"
                >

                  {/* IMAGE */}

                  <Link
                    href={`/tours/${tour.slug}`}
                    className="
                      relative
                      block
                      overflow-hidden
                      rounded-[19px]
                    "
                  >

                    <div
                      className="
                        h-[205px]
                        overflow-hidden
                        sm:h-[225px]
                      "
                    >

                      <img
                        src={tour.image}
                        alt={tour.name}
                        loading="lazy"
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                      />

                    </div>

                    {/* IMAGE OVERLAY */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#071635]/80
                        via-[#071635]/10
                        to-transparent
                      "
                    />

                    {/* CATEGORY */}

                    <span
                      className="
                        absolute
                        left-3.5
                        top-3.5
                        rounded-full
                        bg-white/90
                        px-3
                        py-1.5
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.1em]
                        text-[#071635]
                        backdrop-blur-sm
                      "
                    >
                      {tour.category}
                    </span>

                    {/* IMAGE TEXT */}

                    <div
                      className="
                        absolute
                        bottom-4
                        left-4
                        right-4
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          gap-1.5
                          text-white/65
                        "
                      >

                        <MapPin size={11} />

                        <span className="text-[10px] font-medium">
                          {tour.location}
                        </span>

                      </div>

                      <h3
                        className="
                          mt-1
                          text-[19px]
                          font-extrabold
                          leading-tight
                          tracking-[-0.025em]
                          text-white
                        "
                      >
                        {tour.name}
                      </h3>

                    </div>

                  </Link>

                  {/* CARD CONTENT */}

                  <div className="px-1 pt-3">

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-[#071635]/35
                      "
                    >

                      <CalendarDays size={13} />

                      <span
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-wide
                        "
                      >
                        {tour.duration}
                      </span>

                    </div>

                    <p
                      className="
                        mt-2
                        line-clamp-2
                        text-xs
                        leading-5
                        text-[#071635]/50
                      "
                    >
                      {tour.shortDescription}
                    </p>

                    <Link
                      href={`/tours/${tour.slug}`}
                      className="
                        group/link
                        mt-3
                        inline-flex
                        items-center
                        gap-2
                        text-xs
                        font-bold
                        text-[#071635]
                      "
                    >
                      Discover journey

                      <ArrowRight
                        size={13}
                        className="
                          transition-transform
                          duration-300
                          group-hover/link:translate-x-1
                        "
                      />

                    </Link>

                  </div>

                </motion.article>

              ))}

            </motion.div>

          ) : (

            /* =================================================
               NO RESULTS
            ================================================== */

            <div className="py-16 text-center">

              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F7F3E8]
                "
              >

                <Search
                  size={20}
                  className="text-[#D99A18]"
                />

              </div>

              <h3 className="mt-4 text-xl font-extrabold">
                No tours found
              </h3>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-sm
                  text-xs
                  leading-5
                  text-[#071635]/45
                "
              >
                Try another destination or select a different
                category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchTerm("");
                }}
                className="
                  mt-5
                  rounded-full
                  bg-[#071635]
                  px-5
                  py-2.5
                  text-xs
                  font-bold
                  text-white
                "
              >
                View All Tours
              </button>

            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          CUSTOM JOURNEY CTA
      ====================================================== */}

      <section className="bg-[#F7F3E8]">

        <div
          className="
            mx-auto
            max-w-[1200px]
            px-4
            py-9
            sm:px-6
            sm:py-12
            lg:px-8
            lg:py-14
          "
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[25px]
              bg-[#071635]
              px-6
              py-8
              sm:px-9
              sm:py-10
              lg:px-12
              lg:py-11
            "
          >

            {/* DECORATION */}

            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-48
                w-48
                rounded-full
                border
                border-[#D99A18]/15
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-20
                right-16
                h-40
                w-40
                rounded-full
                border
                border-white/5
              "
            />

            {/* CONTENT */}

            <div className="relative max-w-2xl">

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#F0C45C]
                "
              >
                Custom Journey
              </span>

              <h2
                className="
                  mt-2
                  text-2xl
                  font-extrabold
                  leading-tight
                  tracking-[-0.035em]
                  text-white
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Have somewhere else in mind?
              </h2>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-6
                  text-white/45
                "
              >
                Tell us where you would like to go and what
                you need. We can help arrange your journey
                around your requirements.
              </p>

              <Link
                href="/contact"
                className="
                  group
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#D99A18]
                  px-6
                  py-3
                  text-xs
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#F0C45C]
                  hover:text-[#071635]
                "
              >
                Plan My Journey

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

        </div>

      </section>

      {/* =====================================================
          MOBILE CTA
      ====================================================== */}

      <div
        className="
          fixed
          bottom-4
          left-4
          right-4
          z-40
          sm:hidden
        "
      >

        <Link
          href="/contact"
          className="
            flex
            min-h-12
            w-full
            items-center
            justify-center
            gap-2
            rounded-full
            bg-[#071635]
            px-6
            py-3
            text-sm
            font-bold
            text-white
            shadow-2xl
          "
        >
          Plan Your Journey

          <ArrowRight size={15} />

        </Link>

      </div>

    </main>
  );
}