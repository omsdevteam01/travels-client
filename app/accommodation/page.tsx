"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  MapPin,
  Users,
  BedDouble,
  Check,
  Star,
} from "lucide-react";
import { useMemo, useState } from "react";

type Accommodation = {
  name: string;
  slug: string;
  category: string;
  location: string;
  capacity: string;
  description: string;
  image: string;
  features: string[];
};

const categories = [
  "All",
  "Hotels",
  "Rooms",
  "Guest Houses",
  "Halls",
];

const accommodations: Accommodation[] = [
  {
    name: "Comfort Hotels",
    slug: "comfort-hotels",
    category: "Hotels",
    location: "South India",
    capacity: "2–4 Guests",
    description:
      "Comfortable hotel stays suitable for families, couples and individual travellers.",
    image: "/images/accommodation/hotel.jpg",
    features: [
      "Comfortable rooms",
      "Private bathrooms",
      "Family friendly",
    ],
  },

  {
    name: "Family Rooms",
    slug: "family-rooms",
    category: "Rooms",
    location: "South India",
    capacity: "4–6 Guests",
    description:
      "Spacious rooms arranged for families travelling together.",
    image: "/images/accommodation/family-room.jpg",
    features: [
      "Spacious rooms",
      "Family accommodation",
      "Convenient location",
    ],
  },

  {
    name: "Group Rooms",
    slug: "group-rooms",
    category: "Rooms",
    location: "South India",
    capacity: "6–10 Guests",
    description:
      "Practical accommodation for groups travelling for tours and programmes.",
    image: "/images/accommodation/group-room.jpg",
    features: [
      "Group friendly",
      "Multiple beds",
      "Easy arrangements",
    ],
  },

  {
    name: "Pilgrim Accommodation",
    slug: "pilgrim-accommodation",
    category: "Guest Houses",
    location: "Temple Areas",
    capacity: "4–10 Guests",
    description:
      "Simple and convenient accommodation options for pilgrimage journeys.",
    image: "/images/accommodation/pilgrim.jpg",
    features: [
      "Suitable for pilgrims",
      "Group accommodation",
      "Convenient access",
    ],
  },

  {
    name: "Function Halls",
    slug: "function-halls",
    category: "Halls",
    location: "South India",
    capacity: "50–500 Guests",
    description:
      "Spacious halls for religious programmes, gatherings and special events.",
    image: "/images/accommodation/hall.jpg",
    features: [
      "Large capacity",
      "Event suitable",
      "Flexible arrangements",
    ],
  },

  {
    name: "Community Halls",
    slug: "community-halls",
    category: "Halls",
    location: "South India",
    capacity: "100+ Guests",
    description:
      "Practical spaces for community gatherings, religious programmes and group activities.",
    image: "/images/accommodation/community-hall.jpg",
    features: [
      "Large groups",
      "Programme friendly",
      "Flexible setup",
    ],
  },
];

export default function AccommodationPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAccommodations = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return accommodations.filter((item) => {
      const matchesCategory =
        activeCategory === "All" ||
        item.category === activeCategory;

      const matchesSearch =
        !search ||
        item.name.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search) ||
        item.location.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F3E8] text-[#071635]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071635]">

        {/* Decorative circles */}

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-28
            h-72
            w-72
            rounded-full
            border
            border-[#D99A18]/15
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            right-24
            h-64
            w-64
            rounded-full
            border
            border-white/5
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-[1250px]
            px-4
            pb-8
            pt-7
            sm:px-6
            sm:pb-10
            sm:pt-9
            lg:px-8
            lg:pb-11
            lg:pt-10
          "
        >

          {/* Small label */}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-3"
          >

            <span className="h-px w-8 bg-[#D99A18]" />

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
              Accommodation
            </span>

          </motion.div>

          {/* Hero content */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.05,
            }}
            className="mt-4 max-w-4xl"
          >

            <h1
              className="
                text-[40px]
                font-extrabold
                leading-[0.96]
                tracking-[-0.055em]
                text-white
                sm:text-5xl
                lg:text-[62px]
              "
            >
              Stay comfortably,
              <br className="hidden sm:block" />

              <span className="text-[#D99A18]">
                {" "}travel peacefully.
              </span>
            </h1>

            <p
              className="
                mt-4
                max-w-2xl
                text-xs
                leading-5
                text-white/55
                sm:text-sm
                sm:leading-6
              "
            >
              Find comfortable accommodation for family
              trips, group travel, pilgrimage journeys and
              special programmes across South India.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          ACCOMMODATION LIST
      ====================================================== */}

      <section className="bg-white">

        <div
          className="
            mx-auto
            max-w-[1250px]
            px-4
            py-7
            sm:px-6
            sm:py-9
            lg:px-8
            lg:py-10
          "
        >

          {/* =================================================
              HEADER
          ================================================== */}

          <div
            className="
              flex
              flex-col
              gap-4
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <div>

              <div className="flex items-center gap-2">

                <span className="h-px w-6 bg-[#D99A18]" />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#D99A18]
                  "
                >
                  Explore stays
                </span>

              </div>

              <h2
                className="
                  mt-1.5
                  text-2xl
                  font-extrabold
                  tracking-[-0.04em]
                  sm:text-3xl
                "
              >
                Find a place that fits.
              </h2>

            </div>


            {/* =================================================
                SEARCH
            ================================================== */}

            <div className="relative w-full md:max-w-[280px]">

              <Search
                size={15}
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
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
                placeholder="Search accommodation..."
                className="
                  h-10
                  w-full
                  rounded-full
                  border
                  border-[#071635]/10
                  bg-[#F7F3E8]
                  pl-10
                  pr-4
                  text-xs
                  outline-none
                  transition
                  placeholder:text-[#071635]/30
                  focus:border-[#D99A18]/40
                  focus:ring-2
                  focus:ring-[#D99A18]/10
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
              sm:mx-0
              sm:px-0
            "
          >

            <div className="flex min-w-max gap-2">

              {categories.map((category) => {

                const active =
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
                      py-2
                      text-[10px]
                      font-bold
                      whitespace-nowrap
                      transition-all
                      duration-300
                      sm:text-xs

                      ${
                        active
                          ? "bg-[#071635] text-white"
                          : "bg-[#F7F3E8] text-[#071635]/55 hover:bg-[#071635]/10"
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
              CARDS
          ================================================== */}

          <div className="mt-6">

            {filteredAccommodations.length > 0 ? (

              <motion.div
                layout
                className="
                  grid
                  grid-cols-1
                  gap-4
                  sm:grid-cols-2
                  lg:grid-cols-3
                "
              >

                {filteredAccommodations.map(
                  (item, index) => (

                    <motion.article
                      layout
                      key={item.slug}
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
                        margin: "-40px",
                      }}
                      transition={{
                        duration: 0.4,
                        delay: Math.min(
                          index * 0.05,
                          0.2
                        ),
                      }}
                      className="
                        group
                        overflow-hidden
                        rounded-[20px]
                        border
                        border-[#071635]/8
                        bg-[#F7F3E8]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-[0_18px_45px_rgba(7,22,53,0.10)]
                      "
                    >

                      {/* =================================================
                          IMAGE
                      ================================================== */}

                      <Link
                        href={`/accommodation/${item.slug}`}
                        className="block"
                      >

                        <div
                          className="
                            relative
                            h-[190px]
                            overflow-hidden
                            bg-[#EDE8DB]
                            sm:h-[205px]
                          "
                        >

                          <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            className="
                              h-full
                              w-full
                              object-cover
                              transition-transform
                              duration-700
                              group-hover:scale-[1.06]
                            "
                          />

                          {/* Image overlay */}

                          <div
                            className="
                              absolute
                              inset-0
                              bg-gradient-to-t
                              from-[#071635]/75
                              via-transparent
                              to-transparent
                            "
                          />


                          {/* Category */}

                          <div
                            className="
                              absolute
                              left-3
                              top-3
                              rounded-full
                              bg-white/90
                              px-3
                              py-1.5
                              text-[8px]
                              font-bold
                              uppercase
                              tracking-[0.12em]
                              text-[#071635]
                              backdrop-blur
                            "
                          >
                            {item.category}
                          </div>


                          {/* Rating */}

                          <div
                            className="
                              absolute
                              right-3
                              top-3
                              flex
                              items-center
                              gap-1
                              rounded-full
                              bg-[#071635]/85
                              px-2.5
                              py-1.5
                              text-[8px]
                              font-bold
                              text-white
                              backdrop-blur
                            "
                          >

                            <Star
                              size={9}
                              className="
                                fill-[#D99A18]
                                text-[#D99A18]
                              "
                            />

                            Comfortable

                          </div>


                          {/* Bottom image content */}

                          <div
                            className="
                              absolute
                              bottom-3
                              left-4
                              right-4
                            "
                          >

                            <h3
                              className="
                                text-[21px]
                                font-extrabold
                                leading-none
                                tracking-[-0.04em]
                                text-white
                              "
                            >
                              {item.name}
                            </h3>

                            <div
                              className="
                                mt-2
                                flex
                                items-center
                                gap-1
                                text-[8px]
                                font-medium
                                text-white/75
                              "
                            >

                              <MapPin size={9} />

                              {item.location}

                            </div>

                          </div>

                        </div>

                      </Link>


                      {/* =================================================
                          CARD CONTENT
                      ================================================== */}

                      <div className="p-3.5">

                        {/* Capacity + Type */}

                        <div
                          className="
                            grid
                            grid-cols-2
                            gap-2
                          "
                        >

                          {/* Capacity */}

                          <div
                            className="
                              flex
                              items-center
                              gap-2
                              rounded-xl
                              bg-white
                              px-3
                              py-2.5
                            "
                          >

                            <Users
                              size={13}
                              className="
                                shrink-0
                                text-[#D99A18]
                              "
                            />

                            <div>

                              <p
                                className="
                                  text-[7px]
                                  font-bold
                                  uppercase
                                  tracking-wide
                                  text-[#071635]/30
                                "
                              >
                                Capacity
                              </p>

                              <p
                                className="
                                  text-[10px]
                                  font-bold
                                "
                              >
                                {item.capacity}
                              </p>

                            </div>

                          </div>


                          {/* Type */}

                          <div
                            className="
                              flex
                              items-center
                              gap-2
                              rounded-xl
                              bg-white
                              px-3
                              py-2.5
                            "
                          >

                            <BedDouble
                              size={13}
                              className="
                                shrink-0
                                text-[#D99A18]
                              "
                            />

                            <div>

                              <p
                                className="
                                  text-[7px]
                                  font-bold
                                  uppercase
                                  tracking-wide
                                  text-[#071635]/30
                                "
                              >
                                Type
                              </p>

                              <p
                                className="
                                  text-[10px]
                                  font-bold
                                "
                              >
                                {item.category}
                              </p>

                            </div>

                          </div>

                        </div>


                        {/* Description */}

                        <p
                          className="
                            mt-2.5
                            line-clamp-2
                            min-h-[40px]
                            text-[10px]
                            leading-5
                            text-[#071635]/50
                          "
                        >
                          {item.description}
                        </p>


                        {/* Features */}

                        <div
                          className="
                            mt-2.5
                            flex
                            flex-wrap
                            gap-x-3
                            gap-y-1.5
                          "
                        >

                          {item.features
                            .slice(0, 3)
                            .map((feature) => (

                              <div
                                key={feature}
                                className="
                                  flex
                                  items-center
                                  gap-1.5
                                  text-[8px]
                                  font-semibold
                                  text-[#071635]/55
                                "
                              >

                                <span
                                  className="
                                    flex
                                    h-4
                                    w-4
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#D99A18]/12
                                  "
                                >

                                  <Check
                                    size={8}
                                    className="text-[#D99A18]"
                                  />

                                </span>

                                {feature}

                              </div>

                            ))}

                        </div>


                        {/* Explore button */}

                        <Link
                          href={`/accommodation/${item.slug}`}
                          className="
                            group/link
                            mt-3
                            flex
                            items-center
                            justify-between
                            border-t
                            border-[#071635]/7
                            pt-2.5
                            text-[10px]
                            font-bold
                            text-[#071635]
                          "
                        >

                          <span>
                            Explore accommodation
                          </span>

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
                              transition-all
                              duration-300
                              group-hover/link:bg-[#D99A18]
                              group-hover/link:text-[#071635]
                            "
                          >

                            <ArrowRight
                              size={11}
                              className="
                                transition-transform
                                duration-300
                                group-hover/link:translate-x-0.5
                              "
                            />

                          </span>

                        </Link>

                      </div>

                    </motion.article>

                  )
                )}

              </motion.div>

            ) : (

              /* =================================================
                 NO RESULTS
              ================================================== */

              <div
                className="
                  rounded-[20px]
                  bg-[#F7F3E8]
                  px-5
                  py-12
                  text-center
                "
              >

                <Search
                  size={22}
                  className="
                    mx-auto
                    text-[#D99A18]
                  "
                />

                <h3
                  className="
                    mt-3
                    text-lg
                    font-extrabold
                  "
                >
                  No accommodation found
                </h3>

                <p
                  className="
                    mt-1.5
                    text-xs
                    text-[#071635]/45
                  "
                >
                  Try another category or search term.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchTerm("");
                  }}
                  className="
                    mt-4
                    rounded-full
                    bg-[#071635]
                    px-5
                    py-2.5
                    text-xs
                    font-bold
                    text-white
                  "
                >
                  Show All
                </button>

              </div>

            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT CTA
      ====================================================== */}

      <section className="bg-[#F7F3E8]">

        <div
          className="
            mx-auto
            max-w-[1200px]
            px-4
            py-7
            sm:px-6
            sm:py-9
            lg:px-8
            lg:py-10
          "
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              bg-[#071635]
              px-5
              py-7
              sm:px-8
              sm:py-8
              lg:px-10
            "
          >

            {/* Decorative circle */}

            <div
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-44
                w-44
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
                left-1/3
                h-40
                w-40
                rounded-full
                border
                border-white/5
              "
            />


            <div
              className="
                relative
                flex
                flex-col
                gap-5
                md:flex-row
                md:items-center
                md:justify-between
              "
            >

              {/* CTA text */}

              <div className="max-w-2xl">

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#F0C45C]
                  "
                >
                  Planning a trip?
                </span>

                <h2
                  className="
                    mt-2
                    text-2xl
                    font-extrabold
                    leading-tight
                    tracking-[-0.04em]
                    text-white
                    sm:text-3xl
                  "
                >
                  Let us arrange your stay.
                </h2>

                <p
                  className="
                    mt-2
                    text-[11px]
                    leading-5
                    text-white/45
                    sm:text-xs
                  "
                >
                  Tell us your destination, dates and
                  group size. We can help coordinate
                  accommodation for your journey.
                </p>

              </div>


              {/* CTA button */}

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
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

                Book Accommodation

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
          MOBILE FIXED BOOK BUTTON
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

          Book Accommodation

          <ArrowRight size={15} />

        </Link>

      </div>

    </main>
  );
}