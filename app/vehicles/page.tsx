"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Search,
  Users,
  BriefcaseBusiness,
  Snowflake,
  ShieldCheck,
  CarFront,
} from "lucide-react";
import { useMemo, useState } from "react";

type Vehicle = {
  name: string;
  slug: string;
  category: string;
  capacity: string;
  luggage: string;
  description: string;
  image: string;
  features: string[];
};

const vehicleCategories = [
  "All",
  "Cars",
  "SUV",
  "Tempo Traveller",
  "Mini Bus",
  "Bus",
];

const vehicles: Vehicle[] = [
  {
    name: "Car",
    slug: "car",
    category: "Cars",
    capacity: "4 Passengers",
    luggage: "2–3 Bags",
    description:
      "A comfortable option for couples, families and everyday travel.",
    image: "/images/vehicles/sedan.jpg",
    features: [
      "Air conditioning",
      "Comfortable seating",
      "Professional driver",
    ],
  },

  {
    name: "SUV",
    slug: "suv",
    category: "SUV",
    capacity: "6–7 Passengers",
    luggage: "3–4 Bags",
    description:
      "Spacious travel for families and small groups on longer journeys.",
    image: "/images/vehicles/innova.jpg",
    features: [
      "Spacious interior",
      "Air conditioning",
      "Long-distance comfort",
    ],
  },

  {
    name: "Premium SUV",
    slug: "premium-suv",
    category: "SUV",
    capacity: "6–7 Passengers",
    luggage: "4–5 Bags",
    description:
      "A premium choice when you want extra comfort throughout your journey.",
    image: "/images/vehicles/innova-crysta.jpg",
    features: [
      "Premium comfort",
      "Extra luggage space",
      "Air conditioning",
    ],
  },

  {
    name: "9 Seater",
    slug: "9-seater",
    category: "Tempo Traveller",
    capacity: "9 Passengers",
    luggage: "6–8 Bags",
    description:
      "Perfect for small families and groups travelling together.",
    image: "/images/vehicles/tempo-9.jpg",
    features: [
      "Group-friendly seating",
      "Air conditioning",
      "Luggage space",
    ],
  },

  {
    name: "12 Seater",
    slug: "12-seater",
    category: "Tempo Traveller",
    capacity: "12 Passengers",
    luggage: "8–10 Bags",
    description:
      "A practical and comfortable option for medium-sized groups.",
    image: "/images/vehicles/tempo-12.jpg",
    features: [
      "Spacious seating",
      "Air conditioning",
      "Tour-friendly",
    ],
  },

  {
    name: "17 Seater",
    slug: "17-seater",
    category: "Tempo Traveller",
    capacity: "17 Passengers",
    luggage: "12+ Bags",
    description:
      "Designed for larger families, groups and organised tours.",
    image: "/images/vehicles/tempo-17.jpg",
    features: [
      "Large group capacity",
      "Air conditioning",
      "Ample luggage space",
    ],
  },

  {
    name: "Mini Bus",
    slug: "mini-bus",
    category: "Mini Bus",
    capacity: "20–25 Passengers",
    luggage: "Group Luggage",
    description:
      "Convenient group transportation for tours, events and gatherings.",
    image: "/images/vehicles/mini-bus.jpg",
    features: [
      "Large seating capacity",
      "Air conditioning",
      "Group luggage support",
    ],
  },

  {
    name: "Tourist Bus",
    slug: "tourist-bus",
    category: "Bus",
    capacity: "30+ Passengers",
    luggage: "Large Capacity",
    description:
      "A spacious travel solution for large groups and extended journeys.",
    image: "/images/vehicles/tourist-bus.jpg",
    features: [
      "Large passenger capacity",
      "Comfortable seating",
      "Suitable for tours",
    ],
  },

  {
    name: "Large Bus",
    slug: "large-bus",
    category: "Bus",
    capacity: "40+ Passengers",
    luggage: "Large Capacity",
    description:
      "Ideal for large pilgrimage groups, tours and organised travel.",
    image: "/images/vehicles/large-bus.jpg",
    features: [
      "Large group capacity",
      "Comfortable seating",
      "Tour suitable",
    ],
  },
];

export default function VehiclesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const matchesCategory =
        activeCategory === "All" ||
        vehicle.category === activeCategory;

      const search = searchTerm.trim().toLowerCase();

      const matchesSearch =
        !search ||
        vehicle.name.toLowerCase().includes(search) ||
        vehicle.category.toLowerCase().includes(search) ||
        vehicle.capacity.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F3E8] text-[#071635]">

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="bg-[#F7F3E8]">

        <div
          className="
            mx-auto
            max-w-[1250px]
            px-4
            pb-7
            pt-6
            sm:px-6
            sm:pb-8
            sm:pt-8
            lg:px-8
            lg:pb-9
            lg:pt-9
          "
        >

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
              Our Vehicles
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              mt-3
              flex
              flex-col
              gap-3
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >

            <h1
              className="
                max-w-3xl
                text-[40px]
                font-extrabold
                leading-[0.98]
                tracking-[-0.055em]
                sm:text-5xl
                lg:text-[60px]
              "
            >
              The right ride
              <span className="text-[#D99A18]">
                {" "}for every journey.
              </span>
            </h1>

            <p
              className="
                max-w-md
                text-xs
                leading-5
                text-[#071635]/55
                sm:text-sm
              "
            >
              Comfortable vehicles for family trips,
              pilgrimage travel, tours, events and group
              journeys.
            </p>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          VEHICLES
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

          {/* HEADER */}

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

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#071635]
                "
              >
                <CarFront
                  size={18}
                  className="text-[#D99A18]"
                />
              </div>

              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#D99A18]
                  "
                >
                  Travel Fleet
                </p>

                <h2
                  className="
                    mt-0.5
                    text-xl
                    font-extrabold
                    tracking-[-0.035em]
                  "
                >
                  Choose your vehicle
                </h2>
              </div>

            </div>

            {/* SEARCH */}

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
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                placeholder="Search vehicles..."
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
                  font-medium
                  outline-none
                  transition-all
                  placeholder:text-[#071635]/30
                  focus:border-[#D99A18]/40
                  focus:ring-2
                  focus:ring-[#D99A18]/10
                "
              />

            </div>

          </div>

          {/* FILTERS */}

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

              {vehicleCategories.map((category) => {
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
                          ? "bg-[#D99A18] text-[#071635]"
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
              VEHICLE GRID
          ================================================== */}

          <div className="mt-6">

            {filteredVehicles.length > 0 ? (

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

                {filteredVehicles.map((vehicle, index) => (

                  <motion.article
                    layout
                    key={vehicle.slug}
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: Math.min(index * 0.035, 0.18),
                    }}
                    className="
                      group
                      overflow-hidden
                      rounded-[20px]
                      border
                      border-[#071635]/7
                      bg-[#F7F3E8]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_18px_45px_rgba(7,22,53,0.10)]
                    "
                  >

                    {/* IMAGE */}

                    <Link
                      href={`/vehicles/${vehicle.slug}`}
                      className="block"
                    >

                      <div
                        className="
                          relative
                          h-[190px]
                          overflow-hidden
                          bg-[#EDE8DB]
                          sm:h-[205px]
                          lg:h-[210px]
                        "
                      >

                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
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

                        {/* GRADIENT */}

                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-[#071635]/75
                            via-[#071635]/5
                            to-transparent
                          "
                        />

                        {/* CATEGORY */}

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
                            backdrop-blur-sm
                          "
                        >
                          {vehicle.category}
                        </div>

                        {/* CAPACITY */}

                        <div
                          className="
                            absolute
                            right-3
                            top-3
                            flex
                            items-center
                            gap-1.5
                            rounded-full
                            bg-[#071635]/90
                            px-3
                            py-1.5
                            text-[8px]
                            font-bold
                            text-white
                            backdrop-blur-sm
                          "
                        >
                          <Users size={10} />
                          {vehicle.capacity}
                        </div>

                        {/* NAME */}

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
                              text-[23px]
                              font-extrabold
                              leading-none
                              tracking-[-0.04em]
                              text-white
                            "
                          >
                            {vehicle.name}
                          </h3>

                        </div>

                      </div>

                    </Link>

                    {/* CARD CONTENT */}

                    <div className="p-3.5">

                      {/* INFO */}

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          gap-2
                          rounded-xl
                          bg-white
                          px-3
                          py-2.5
                        "
                      >

                        <div className="flex items-center gap-2">

                          <Users
                            size={13}
                            className="shrink-0 text-[#D99A18]"
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
                              {vehicle.capacity}
                            </p>

                          </div>

                        </div>

                        <div
                          className="
                            h-7
                            w-px
                            shrink-0
                            bg-[#071635]/8
                          "
                        />

                        <div className="flex items-center gap-2">

                          <BriefcaseBusiness
                            size={13}
                            className="shrink-0 text-[#D99A18]"
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
                              Luggage
                            </p>

                            <p
                              className="
                                text-[10px]
                                font-bold
                              "
                            >
                              {vehicle.luggage}
                            </p>

                          </div>

                        </div>

                      </div>

                      {/* DESCRIPTION */}

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
                        {vehicle.description}
                      </p>

                      {/* FEATURES */}

                      <div
                        className="
                          mt-2.5
                          flex
                          flex-wrap
                          gap-x-3
                          gap-y-1.5
                        "
                      >

                        {vehicle.features
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

                      {/* LINK */}

                      <Link
                        href={`/vehicles/${vehicle.slug}`}
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
                          View vehicle
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

                ))}

              </motion.div>

            ) : (

              /* NO RESULTS */

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
                  className="mx-auto text-[#D99A18]"
                />

                <h3
                  className="
                    mt-3
                    text-lg
                    font-extrabold
                  "
                >
                  No vehicles found
                </h3>

                <p
                  className="
                    mt-1.5
                    text-xs
                    text-[#071635]/45
                  "
                >
                  Try another vehicle or category.
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
                  Show All Vehicles
                </button>

              </div>

            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}

      <section className="bg-[#F7F3E8]">

        <div
          className="
            mx-auto
            max-w-[1100px]
            px-4
            py-8
            sm:px-6
            sm:py-10
            lg:px-8
            lg:py-11
          "
        >

          <div className="mb-5 text-center">

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#D99A18]
              "
            >
              Travel Made Easier
            </span>

            <h2
              className="
                mt-1.5
                text-2xl
                font-extrabold
                tracking-[-0.04em]
              "
            >
              More than just a vehicle.
            </h2>

          </div>

          <div
            className="
              grid
              gap-3
              sm:grid-cols-3
            "
          >

            {/* CARD 1 */}

            <div
              className="
                rounded-[18px]
                bg-white
                p-4
                sm:p-5
              "
            >

              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D99A18]/10
                "
              >
                <ShieldCheck
                  size={17}
                  className="text-[#D99A18]"
                />
              </div>

              <h3 className="mt-3 text-sm font-extrabold">
                Reliable travel
              </h3>

              <p
                className="
                  mt-1.5
                  text-[10px]
                  leading-5
                  text-[#071635]/45
                "
              >
                Comfortable arrangements designed around
                your journey.
              </p>

            </div>

            {/* CARD 2 */}

            <div
              className="
                rounded-[18px]
                bg-white
                p-4
                sm:p-5
              "
            >

              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D99A18]/10
                "
              >
                <Snowflake
                  size={17}
                  className="text-[#D99A18]"
                />
              </div>

              <h3 className="mt-3 text-sm font-extrabold">
                Comfortable options
              </h3>

              <p
                className="
                  mt-1.5
                  text-[10px]
                  leading-5
                  text-[#071635]/45
                "
              >
                Choose from different vehicle sizes for
                different travel needs.
              </p>

            </div>

            {/* CARD 3 */}

            <div
              className="
                rounded-[18px]
                bg-white
                p-4
                sm:p-5
              "
            >

              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D99A18]/10
                "
              >
                <Users
                  size={17}
                  className="text-[#D99A18]"
                />
              </div>

              <h3 className="mt-3 text-sm font-extrabold">
                For every group
              </h3>

              <p
                className="
                  mt-1.5
                  text-[10px]
                  leading-5
                  text-[#071635]/45
                "
              >
                From a single family to large tour groups,
                there is an option for you.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-white">

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

            {/* DECORATION */}

            <div
              className="
                pointer-events-none
                absolute
                -right-14
                -top-14
                h-40
                w-40
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
                right-24
                h-36
                w-36
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
                  Need a vehicle?
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
                  Tell us where you are going.
                </h2>

                <p
                  className="
                    mt-2
                    text-[11px]
                    leading-5
                    text-white/45
                    sm:text-sm
                  "
                >
                  Share your destination, travel dates and
                  group size. We will help arrange the right
                  vehicle.
                </p>

              </div>

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
                Book a Vehicle

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

      {/* MOBILE BOOK BUTTON */}

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
          Book a Vehicle
          <ArrowRight size={15} />
        </Link>

      </div>

    </main>
  );
}