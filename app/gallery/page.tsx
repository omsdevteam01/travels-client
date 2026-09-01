"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

type GalleryItem = {
  id: number;
  title: string;
  category: string;
  image: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "South India Tours",
    category: "Tours",
    image: "/images/gallery/tour-1.jpg",
  },
  {
    id: 2,
    title: "Temple Journeys",
    category: "Pilgrimage",
    image: "/images/gallery/tour-2.jpg",
  },
  {
    id: 3,
    title: "Family Travel",
    category: "Travel",
    image: "/images/gallery/tour-3.jpg",
  },
  {
    id: 4,
    title: "Group Tours",
    category: "Tours",
    image: "/images/gallery/tour-4.jpg",
  },
  {
    id: 5,
    title: "Comfortable Vehicles",
    category: "Vehicles",
    image: "/images/gallery/vehicle-1.jpg",
  },
  {
    id: 6,
    title: "Travel Experiences",
    category: "Travel",
    image: "/images/gallery/tour-5.jpg",
  },
  {
    id: 7,
    title: "Scenic Destinations",
    category: "Destinations",
    image: "/images/gallery/tour-6.jpg",
  },
  {
    id: 8,
    title: "Pilgrimage Travel",
    category: "Pilgrimage",
    image: "/images/gallery/tour-7.jpg",
  },
  {
    id: 9,
    title: "Group Transportation",
    category: "Vehicles",
    image: "/images/gallery/vehicle-2.jpg",
  },
  {
    id: 10,
    title: "Beautiful South India",
    category: "Destinations",
    image: "/images/gallery/tour-8.jpg",
  },
  {
    id: 11,
    title: "Memorable Journeys",
    category: "Travel",
    image: "/images/gallery/tour-9.jpg",
  },
  {
    id: 12,
    title: "Travel Together",
    category: "Tours",
    image: "/images/gallery/tour-10.jpg",
  },
];

const categories = [
  "All",
  "Tours",
  "Pilgrimage",
  "Vehicles",
  "Destinations",
  "Travel",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  const selectedItem =
    selectedIndex !== null
      ? filteredItems[selectedIndex]
      : null;

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const previousImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? filteredItems.length - 1
        : selectedIndex - 1
    );
  };

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === filteredItems.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F3E8] text-[#071635]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071635]">

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-64
            w-64
            rounded-full
            border
            border-white/5
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-28
            left-[8%]
            h-52
            w-52
            rounded-full
            border
            border-[#D99A18]/10
          "
        />

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1200px]
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
          <div className="flex items-center gap-2">
            <span className="h-px w-7 bg-[#D99A18]" />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#D99A18]
                sm:text-[10px]
              "
            >
              Our gallery
            </span>
          </div>

          <h1
            className="
              mt-4
              max-w-4xl
              text-[40px]
              font-extrabold
              leading-[0.96]
              tracking-[-0.055em]
              text-white
              sm:text-5xl
              lg:text-[58px]
            "
          >
            Moments from
            <br className="hidden sm:block" />

            <span className="text-[#D99A18]">
              {" "}our journeys.
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
            Explore some of the journeys, destinations,
            vehicles and travel experiences arranged for
            our guests.
          </p>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ====================================================== */}

      <section className="w-full bg-white">

        <div
          className="
            mx-auto
            w-full
            max-w-[1200px]
            px-4
            py-8
            sm:px-6
            sm:py-10
            lg:px-8
            lg:py-12
          "
        >

          {/* =================================================
              FILTER BAR
          ================================================== */}

          <div
            className="
              flex
              w-full
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

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
                Explore
              </p>

              <h2
                className="
                  mt-1
                  text-2xl
                  font-extrabold
                  tracking-[-0.04em]
                  sm:text-3xl
                "
              >
                Travel moments
              </h2>
            </div>

            {/* CATEGORY FILTER */}

            <div
              className="
                flex
                max-w-full
                gap-1.5
                overflow-x-auto
                pb-1
                scrollbar-hide
              "
            >
              {categories.map((category) => {
                const isActive =
                  activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category);
                      setSelectedIndex(null);
                    }}
                    className={`
                      shrink-0
                      rounded-full
                      px-3.5
                      py-2
                      text-[10px]
                      font-bold
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "bg-[#071635] text-white"
                          : "border border-[#071635]/10 bg-[#F7F3E8] text-[#071635]/60 hover:border-[#D99A18]/40 hover:text-[#071635]"
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
              GALLERY GRID
          ================================================== */}

          <div
            className="
              mt-7
              grid
              grid-cols-2
              gap-3
              sm:gap-4
              lg:grid-cols-3
            "
          >

            {filteredItems.map((item, index) => (

              <button
                key={item.id}
                type="button"
                onClick={() => openImage(index)}
                className="
                  group
                  relative
                  block
                  aspect-[1/1.08]
                  overflow-hidden
                  rounded-[18px]
                  bg-[#071635]
                  text-left
                  outline-none
                  ring-offset-2
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  focus-visible:ring-2
                  focus-visible:ring-[#D99A18]
                "
              >

                {/* IMAGE */}

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="
                    (max-width: 640px) 50vw,
                    (max-width: 1024px) 33vw,
                    380px
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* DARK OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#071635]/90
                    via-[#071635]/10
                    to-transparent
                    opacity-80
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* CAMERA ICON */}

                <div
                  className="
                    absolute
                    right-3
                    top-3
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-white/15
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    group-hover:bg-[#D99A18]
                    group-hover:text-[#071635]
                  "
                >
                  <Camera size={14} />
                </div>

                {/* CONTENT */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-3.5
                    sm:p-4
                  "
                >

                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[#D99A18]
                    "
                  >
                    {item.category}
                  </span>

                  <h3
                    className="
                      mt-1
                      text-sm
                      font-extrabold
                      leading-tight
                      text-white
                      sm:text-base
                    "
                  >
                    {item.title}
                  </h3>

                  <div
                    className="
                      mt-2
                      flex
                      items-center
                      gap-1
                      text-[9px]
                      font-semibold
                      text-white/60
                      transition-colors
                      group-hover:text-white
                    "
                  >
                    View image

                    <ArrowRight
                      size={11}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </div>

                </div>

              </button>

            ))}

          </div>

          {/* =================================================
              EMPTY STATE
          ================================================== */}

          {filteredItems.length === 0 && (
            <div
              className="
                flex
                min-h-[260px]
                items-center
                justify-center
                rounded-[20px]
                border
                border-[#071635]/8
                bg-[#F7F3E8]
                text-center
              "
            >
              <div>
                <Camera
                  size={28}
                  className="mx-auto text-[#D99A18]"
                />

                <h3
                  className="
                    mt-3
                    text-lg
                    font-extrabold
                  "
                >
                  No images found
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    text-[#071635]/45
                  "
                >
                  Try selecting another category.
                </p>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="w-full bg-[#F7F3E8]">

        <div
          className="
            mx-auto
            w-full
            max-w-[1200px]
            px-4
            pb-8
            sm:px-6
            sm:pb-10
            lg:px-8
            lg:pb-12
          "
        >

          <div
            className="
              flex
              flex-col
              gap-4
              rounded-[20px]
              bg-[#071635]
              px-5
              py-6
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-7
              sm:py-7
            "
          >

            <div>

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#D99A18]
                "
              >
                Ready to travel?
              </span>

              <h2
                className="
                  mt-1.5
                  text-xl
                  font-extrabold
                  tracking-[-0.035em]
                  text-white
                  sm:text-2xl
                "
              >
                Let&apos;s plan your journey.
              </h2>

              <p
                className="
                  mt-1.5
                  max-w-xl
                  text-[10px]
                  leading-4
                  text-white/45
                  sm:text-xs
                "
              >
                Talk to us about tours, vehicles,
                accommodation and travel arrangements.
              </p>

            </div>

            <a
              href="/contact"
              className="
                group
                flex
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#D99A18]
                px-5
                py-2.5
                text-[10px]
                font-bold
                text-[#071635]
                transition-all
                duration-300
                hover:bg-white
              "
            >
              Contact us

              <ArrowRight
                size={13}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

          </div>

        </div>
      </section>

      {/* =====================================================
          IMAGE LIGHTBOX
      ====================================================== */}

      {selectedItem && selectedIndex !== null && (

        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[#071635]/95
            p-3
            backdrop-blur-sm
            sm:p-6
          "
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          onClick={closeImage}
        >

          {/* CLOSE */}

          <button
            type="button"
            onClick={closeImage}
            aria-label="Close image"
            className="
              absolute
              right-3
              top-3
              z-20
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              backdrop-blur-md
              transition
              hover:bg-[#D99A18]
              hover:text-[#071635]
              sm:right-6
              sm:top-6
            "
          >
            <X size={19} />
          </button>

          {/* PREVIOUS */}

          {filteredItems.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
              aria-label="Previous image"
              className="
                absolute
                left-2
                top-1/2
                z-20
                flex
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                backdrop-blur-md
                transition
                hover:bg-[#D99A18]
                hover:text-[#071635]
                sm:left-6
              "
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {/* IMAGE */}

          <div
            className="
              relative
              h-[72vh]
              w-full
              max-w-[1050px]
              overflow-hidden
              rounded-[18px]
              bg-black/20
              sm:h-[78vh]
            "
            onClick={(e) => e.stopPropagation()}
          >

            <Image
              src={selectedItem.image}
              alt={selectedItem.title}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />

            {/* IMAGE INFO */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                bg-gradient-to-t
                from-black/80
                to-transparent
                px-5
                pb-5
                pt-12
              "
            >

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#D99A18]
                "
              >
                {selectedItem.category}
              </span>

              <h3
                className="
                  mt-1
                  text-lg
                  font-extrabold
                  text-white
                  sm:text-xl
                "
              >
                {selectedItem.title}
              </h3>

            </div>

          </div>

          {/* NEXT */}

          {filteredItems.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
              className="
                absolute
                right-2
                top-1/2
                z-20
                flex
                h-10
                w-10
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                backdrop-blur-md
                transition
                hover:bg-[#D99A18]
                hover:text-[#071635]
                sm:right-6
              "
            >
              <ChevronRight size={20} />
            </button>
          )}

        </div>
      )}

    </main>
  );
}