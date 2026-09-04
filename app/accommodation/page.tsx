"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Users,
  BedDouble,
  Check,
  Star,
} from "lucide-react";

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

const accommodations: Accommodation[] = [
  {
    name: "Comfort Hotels",
    slug: "comfort-hotels",
    category: "Hotels",
    location: "South India",
    capacity: "2–4 Guests",
    description:
      "Comfortable hotel stays suitable for families, couples and individual travellers.",
    image: "/images/accommodation/room1.png",
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
    image: "/images/accommodation/family.png",
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
    image: "/images/accommodation/group.png",
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
    image: "/images/accommodation/stay.png",
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
    image: "/images/accommodation/hall1.png",
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
    image: "/images/accommodation/community.png",
    features: [
      "Large groups",
      "Programme friendly",
      "Flexible setup",
    ],
  },
];

export default function AccommodationPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F3E8] text-[#071635]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#173A67]">

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
            py-5
            sm:px-6
            sm:py-8
            lg:px-8
            lg:py-8
          "
        >

          {/* HEADER */}

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
                text-[#071635]
                sm:text-3xl
              "
            >
              Find a place that fits.
            </h2>

          </div>

          {/* CARDS */}

          <div className="mt-3.5 sm:mt-5">

            <motion.div
              layout
              className="
                grid
                grid-cols-1
                gap-2.5
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >

              {accommodations.map((item, index) => (

                <motion.article
                  layout
                  key={item.slug}
                  initial={{
                    opacity: 0,
                    y: 14,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-30px",
                  }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(index * 0.04, 0.16),
                  }}
                  className="
                    group
                    overflow-hidden
                    rounded-[13px]
                    border
                    border-[#071635]/8
                    bg-[#F7F3E8]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_14px_35px_rgba(7,22,53,0.09)]
                  "
                >

                  {/* IMAGE */}



                    <div
                      className="
                        relative
                        h-[130px]
                        overflow-hidden
                        bg-[#EDE8DB]
                        sm:h-[165px]
                        lg:h-[175px]
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
                          group-hover:scale-[1.05]
                        "
                      />

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#173A67]/78
                          via-transparent
                          to-transparent
                        "
                      />

                      <div
                        className="
                          absolute
                          left-2.5
                          top-2.5
                          rounded-full
                          bg-white/90
                          px-2.5
                          py-1
                          text-[7px]
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-[#071635]
                          backdrop-blur
                        "
                      >
                        {item.category}
                      </div>

                      <div
                        className="
                          absolute
                          right-2.5
                          top-2.5
                          flex
                          items-center
                          gap-1
                          rounded-full
                          bg-[#173A67]/90
                          px-2.5
                          py-1
                          text-[7px]
                          font-bold
                          text-white
                          backdrop-blur
                        "
                      >
                        <Star
                          size={8}
                          className="fill-[#D99A18] text-[#D99A18]"
                        />
                        Comfortable
                      </div>

                      <div
                        className="
                          absolute
                          bottom-2.5
                          left-3
                          right-3
                        "
                      >

                        <h3
                          className="
                            text-[18px]
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
                            mt-1.5
                            flex
                            items-center
                            gap-1
                            text-[7px]
                            font-medium
                            text-white/80
                          "
                        >
                          <MapPin size={8} />
                          {item.location}
                        </div>

                      </div>

                    </div>



                  {/* CARD CONTENT */}

                  <div className="p-2.5 sm:p-3">

                    <div
                      className="
                        grid
                        grid-cols-2
                        gap-1.5
                      "
                    >

                      <div
                        className="
                          flex
                          min-w-0
                          items-center
                          gap-1.5
                          rounded-lg
                          bg-white
                          px-2.5
                          py-2
                        "
                      >

                        <Users
                          size={11}
                          className="shrink-0 text-[#D99A18]"
                        />

                        <div className="min-w-0">

                          <p
                            className="
                              text-[6px]
                              font-bold
                              uppercase
                              tracking-wide
                              text-[#071635]/50
                            "
                          >
                            Capacity
                          </p>

                          <p
                            className="
                              truncate
                              text-[8px]
                              font-bold
                              text-[#071635]
                            "
                          >
                            {item.capacity}
                          </p>

                        </div>

                      </div>

                      <div
                        className="
                          flex
                          min-w-0
                          items-center
                          gap-1.5
                          rounded-lg
                          bg-white
                          px-2.5
                          py-2
                        "
                      >

                        <BedDouble
                          size={11}
                          className="shrink-0 text-[#D99A18]"
                        />

                        <div className="min-w-0">

                          <p
                            className="
                              text-[6px]
                              font-bold
                              uppercase
                              tracking-wide
                              text-[#071635]/50
                            "
                          >
                            Type
                          </p>

                          <p
                            className="
                              truncate
                              text-[8px]
                              font-bold
                              text-[#071635]
                            "
                          >
                            {item.category}
                          </p>

                        </div>

                      </div>

                    </div>

                    <p
                      className="
                        mt-1.5
                        line-clamp-2
                        min-h-[28px]
                        text-[9px]
                        leading-[0.95rem]
                        text-[#071635]/80
                      "
                    >
                      {item.description}
                    </p>

                    <div
                      className="
                        mt-1.5
                        flex
                        flex-wrap
                        gap-x-2.5
                        gap-y-1
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
                              gap-1
                              text-[7px]
                              font-semibold
                              text-[#071635]/75
                            "
                          >

                            <span
                              className="
                                flex
                                h-3.5
                                w-3.5
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#D99A18]/12
                              "
                            >
                              <Check
                                size={7}
                                className="text-[#D99A18]"
                              />
                            </span>

                            {feature}

                          </div>

                        ))}

                    </div>



                  </div>

                </motion.article>

              ))}

            </motion.div>

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
            py-5
            sm:px-6
            sm:py-8
            lg:px-8
            lg:py-10
          "
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              bg-[#173A67]
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
          bottom-3
          left-3
          right-3
          z-40
          sm:hidden
        "
      >

        <Link
          href="/contact"
          className="
            flex
            min-h-11
            w-full
            items-center
            justify-center
            gap-2
            rounded-full
            bg-[#173A67]
            px-5
            py-2.5
            text-xs
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