import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";

import { getTourBySlug, tours } from "../data";

type TourDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   STATIC TOUR SLUGS
========================================================= */

export function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

/* =========================================================
   SEO
========================================================= */

export async function generateMetadata({
  params,
}: TourDetailPageProps) {
  const { slug } = await params;

  const tour = getTourBySlug(slug);

  if (!tour) {
    return {
      title: "Tour Not Found",
    };
  }

  return {
    title: `${tour.name} | Baiya Tours & Travels`,
    description: tour.shortDescription,
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function TourDetailPage({
  params,
}: TourDetailPageProps) {
  const { slug } = await params;

  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  /*
    Find related tours from the same category first.
    If there aren't enough, fill the remaining slots with
    other tours.
  */

  const sameCategoryTours = tours.filter(
    (item) =>
      item.slug !== tour.slug &&
      item.category === tour.category
  );

  const otherTours = tours.filter(
    (item) =>
      item.slug !== tour.slug &&
      item.category !== tour.category
  );

  const relatedTours = [
    ...sameCategoryTours,
    ...otherTours,
  ].slice(0, 3);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F3E8] text-[#071635]">

      {/* =====================================================
          TOP NAVIGATION / BREADCRUMB
      ====================================================== */}

      <section className="bg-[#F7F3E8]">

        <div className="mx-auto max-w-[1350px] px-4 pb-5 pt-5 sm:px-6 sm:pb-7 sm:pt-7 lg:px-10">

          <Link
            href="/tours"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-xs
              font-bold
              text-[#071635]/50
              transition-colors
              duration-300
              hover:text-[#D99A18]
            "
          >
            <ArrowLeft
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />

            <span>Back to Tours</span>
          </Link>

        </div>
      </section>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-[#F7F3E8]">

        <div className="mx-auto max-w-[1350px] px-4 pb-7 sm:px-6 sm:pb-10 lg:px-10">

          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              sm:rounded-[30px]
              lg:rounded-[34px]
            "
          >

            {/* IMAGE */}

            <div
              className="
                relative
                h-[330px]
                sm:h-[430px]
                lg:h-[570px]
              "
            >

              <img
                src={tour.image}
                alt={tour.name}
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

              {/* DARK OVERLAY */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#071635]
                  via-[#071635]/35
                  to-transparent
                "
              />

              {/* HERO CONTENT */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  sm:bottom-8
                  sm:left-8
                  sm:right-8
                  lg:bottom-12
                  lg:left-12
                  lg:right-12
                "
              >

                {/* CATEGORY */}

                <div className="flex flex-wrap items-center gap-3">

                  <span
                    className="
                      rounded-full
                      bg-[#D99A18]
                      px-3
                      py-1.5
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-white
                    "
                  >
                    {tour.category}
                  </span>

                  <span className="text-[10px] font-semibold text-white/60">
                    South India Travel
                  </span>

                </div>

                {/* TITLE */}

                <h1
                  className="
                    mt-3
                    max-w-5xl
                    text-[38px]
                    font-extrabold
                    leading-[1]
                    tracking-[-0.05em]
                    text-white
                    sm:text-5xl
                    lg:text-[72px]
                  "
                >
                  {tour.name}
                </h1>

                {/* META */}

                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">

                  <div className="flex items-center gap-2 text-white/70">

                    <MapPin
                      size={14}
                      className="text-[#F0C45C]"
                    />

                    <span className="text-xs font-semibold">
                      {tour.location}
                    </span>

                  </div>

                  <div className="flex items-center gap-2 text-white/70">

                    <CalendarDays
                      size={14}
                      className="text-[#F0C45C]"
                    />

                    <span className="text-xs font-semibold">
                      {tour.duration}
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="bg-white">

        <div
          className="
            mx-auto
            max-w-[1150px]
            px-4
            py-10
            sm:px-6
            sm:py-14
            lg:px-8
            lg:py-16
          "
        >

          <div
            className="
              grid
              gap-10
              lg:grid-cols-[minmax(0,1fr)_350px]
              lg:gap-16
            "
          >

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div>

              {/* INTRO */}

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-px w-7 bg-[#D99A18]" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#D99A18]
                    "
                  >
                    About This Journey
                  </span>

                </div>

                <h2
                  className="
                    mt-3
                    max-w-3xl
                    text-3xl
                    font-extrabold
                    leading-tight
                    tracking-[-0.04em]
                    sm:text-4xl
                  "
                >
                  Travel comfortably.
                  <span className="block text-[#D99A18]">
                    Experience more.
                  </span>
                </h2>

                <p
                  className="
                    mt-5
                    max-w-3xl
                    text-sm
                    leading-7
                    text-[#071635]/55
                    sm:text-base
                    sm:leading-8
                  "
                >
                  {tour.description}
                </p>

              </div>

              {/* QUICK INFORMATION */}

              <div
                className="
                  mt-8
                  grid
                  grid-cols-2
                  gap-3
                  sm:grid-cols-3
                "
              >

                <div
                  className="
                    rounded-2xl
                    bg-[#F7F3E8]
                    p-4
                    sm:p-5
                  "
                >

                  <MapPin
                    size={17}
                    className="text-[#D99A18]"
                  />

                  <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.12em] text-[#071635]/35">
                    Destination
                  </p>

                  <p className="mt-1 text-xs font-bold leading-5">
                    {tour.location}
                  </p>

                </div>

                <div
                  className="
                    rounded-2xl
                    bg-[#F7F3E8]
                    p-4
                    sm:p-5
                  "
                >

                  <Clock3
                    size={17}
                    className="text-[#D99A18]"
                  />

                  <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.12em] text-[#071635]/35">
                    Duration
                  </p>

                  <p className="mt-1 text-xs font-bold leading-5">
                    {tour.duration}
                  </p>

                </div>

                <div
                  className="
                    col-span-2
                    rounded-2xl
                    bg-[#F7F3E8]
                    p-4
                    sm:col-span-1
                    sm:p-5
                  "
                >

                  <Sparkles
                    size={17}
                    className="text-[#D99A18]"
                  />

                  <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.12em] text-[#071635]/35">
                    Tour Type
                  </p>

                  <p className="mt-1 text-xs font-bold leading-5">
                    {tour.category}
                  </p>

                </div>

              </div>

              {/* HIGHLIGHTS */}

              <div className="mt-10">

                <div className="flex items-center gap-3">

                  <span className="h-px w-7 bg-[#D99A18]" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#D99A18]
                    "
                  >
                    Travel Arrangements
                  </span>

                </div>

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-extrabold
                    tracking-[-0.03em]
                    sm:text-3xl
                  "
                >
                  What we can arrange
                </h3>

                <div
                  className="
                    mt-5
                    grid
                    gap-2
                    sm:grid-cols-2
                  "
                >

                  {tour.highlights.map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        border-[#071635]/5
                        bg-[#F7F3E8]/65
                        px-4
                        py-3.5
                        transition-all
                        duration-300
                        hover:border-[#D99A18]/20
                        hover:bg-[#F7F3E8]
                      "
                    >

                      <span
                        className="
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#D99A18]/10
                        "
                      >

                        <Check
                          size={14}
                          className="text-[#D99A18]"
                        />

                      </span>

                      <span
                        className="
                          text-xs
                          font-semibold
                          leading-5
                          text-[#071635]/65
                        "
                      >
                        {item}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

              {/* NOTE */}

              <div
                className="
                  mt-8
                  rounded-2xl
                  border-l-4
                  border-[#D99A18]
                  bg-[#F7F3E8]
                  px-5
                  py-4
                  sm:px-6
                  sm:py-5
                "
              >

                <p className="text-xs font-bold leading-5 text-[#071635]/70">
                  Your travel plan can be adjusted according to
                  your preferred dates, group size and travel
                  requirements.
                </p>

              </div>

            </div>

            {/* =================================================
                BOOKING CARD
            ================================================= */}

            <aside>

              <div className="lg:sticky lg:top-6">

                <div
                  className="
                    overflow-hidden
                    rounded-[24px]
                    bg-[#071635]
                    shadow-xl
                  "
                >

                  <div className="p-6 sm:p-7">

                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-[#F0C45C]
                      "
                    >
                      Start Planning
                    </span>

                    <h3
                      className="
                        mt-3
                        text-2xl
                        font-extrabold
                        leading-tight
                        tracking-[-0.03em]
                        text-white
                      "
                    >
                      Ready to plan
                      <span className="block">
                        your journey?
                      </span>
                    </h3>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-6
                        text-white/45
                      "
                    >
                      Share your preferred dates and
                      requirements with us.
                    </p>

                    {/* DETAILS */}

                    <div
                      className="
                        mt-6
                        space-y-4
                        border-t
                        border-white/10
                        pt-5
                      "
                    >

                      <div className="flex items-center justify-between gap-4">

                        <span className="text-xs text-white/35">
                          Destination
                        </span>

                        <span className="text-right text-xs font-bold text-white">
                          {tour.location}
                        </span>

                      </div>

                      <div className="flex items-center justify-between gap-4">

                        <span className="text-xs text-white/35">
                          Duration
                        </span>

                        <span className="text-right text-xs font-bold text-white">
                          {tour.duration}
                        </span>

                      </div>

                      <div className="flex items-center justify-between gap-4">

                        <span className="text-xs text-white/35">
                          Category
                        </span>

                        <span className="text-right text-xs font-bold text-white">
                          {tour.category}
                        </span>

                      </div>

                    </div>

                    {/* CONTACT */}

                    <Link
                      href="/contact"
                      className="
                        group
                        mt-7
                        flex
                        min-h-12
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-[#D99A18]
                        px-6
                        py-3
                        text-sm
                        font-bold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-[#F0C45C]
                        hover:text-[#071635]
                      "
                    >
                      Book This Tour

                      <ArrowRight
                        size={15}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </Link>

                  </div>

                  <div
                    className="
                      border-t
                      border-white/10
                      px-6
                      py-4
                    "
                  >

                    <p
                      className="
                        text-center
                        text-[10px]
                        leading-5
                        text-white/30
                      "
                    >
                      Travel arrangements can be
                      customised around your requirements.
                    </p>

                  </div>

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>

      {/* =====================================================
          RELATED TOURS
      ====================================================== */}

      {relatedTours.length > 0 && (
        <section className="bg-[#F7F3E8]">

          <div
            className="
              mx-auto
              max-w-[1150px]
              px-4
              py-12
              sm:px-6
              sm:py-14
              lg:px-8
              lg:py-16
            "
          >

            {/* HEADER */}

            <div className="flex items-end justify-between gap-5">

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-px w-7 bg-[#D99A18]" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#D99A18]
                    "
                  >
                    You May Also Like
                  </span>

                </div>

                <h2
                  className="
                    mt-2
                    text-2xl
                    font-extrabold
                    tracking-[-0.03em]
                    sm:text-3xl
                  "
                >
                  Explore more journeys
                </h2>

              </div>

              <Link
                href="/tours"
                className="
                  hidden
                  items-center
                  gap-2
                  text-xs
                  font-bold
                  text-[#071635]
                  transition-colors
                  hover:text-[#D99A18]
                  sm:inline-flex
                "
              >
                View all tours

                <ArrowRight size={14} />

              </Link>

            </div>

            {/* RELATED TOUR CARDS */}

            <div
              className="
                mt-6
                grid
                gap-4
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >

              {relatedTours.map((item) => (
                <Link
                  key={item.slug}
                  href={`/tours/${item.slug}`}
                  className="
                    group
                    overflow-hidden
                    rounded-[20px]
                    bg-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >

                  {/* IMAGE */}

                  <div className="relative h-[190px] overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#071635]/70
                        to-transparent
                      "
                    />

                    <span
                      className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        bg-white/90
                        px-3
                        py-1.5
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#071635]
                        backdrop-blur-sm
                      "
                    >
                      {item.category}
                    </span>

                    <div
                      className="
                        absolute
                        bottom-4
                        left-4
                        right-4
                      "
                    >

                      <div className="flex items-center gap-1.5 text-white/65">

                        <MapPin size={11} />

                        <span className="text-[10px] font-medium">
                          {item.location}
                        </span>

                      </div>

                      <h3
                        className="
                          mt-1
                          text-lg
                          font-extrabold
                          leading-tight
                          text-white
                        "
                      >
                        {item.name}
                      </h3>

                    </div>

                  </div>

                  {/* CARD FOOTER */}

                  <div className="flex items-center justify-between gap-3 p-4">

                    <div className="flex items-center gap-2 text-[#071635]/40">

                      <CalendarDays size={13} />

                      <span className="text-[10px] font-semibold">
                        {item.duration}
                      </span>

                    </div>

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F7F3E8]
                        transition-all
                        duration-300
                        group-hover:bg-[#D99A18]
                      "
                    >

                      <ArrowRight
                        size={14}
                        className="
                          transition-colors
                          duration-300
                          group-hover:text-white
                        "
                      />

                    </span>

                  </div>

                </Link>
              ))}

            </div>

            {/* MOBILE VIEW ALL */}

            <Link
              href="/tours"
              className="
                mt-6
                flex
                min-h-11
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-[#071635]/10
                bg-white
                px-5
                py-3
                text-xs
                font-bold
                text-[#071635]
                sm:hidden
              "
            >
              View All Tours

              <ArrowRight size={14} />

            </Link>

          </div>

        </section>
      )}

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-white">

        <div
          className="
            mx-auto
            max-w-[1150px]
            px-4
            py-10
            sm:px-6
            sm:py-14
            lg:px-8
            lg:py-16
          "
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[26px]
              bg-[#071635]
              px-6
              py-9
              sm:px-9
              sm:py-11
              lg:px-12
              lg:py-12
            "
          >

            {/* DECORATIVE CIRCLE */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-56
                w-56
                rounded-full
                border
                border-[#D99A18]/20
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-24
                -right-5
                h-44
                w-44
                rounded-full
                border
                border-white/5
              "
            />

            <div className="relative">

              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#F0C45C]
                "
              >
                Plan Your Trip
              </p>

              <h2
                className="
                  mt-3
                  max-w-2xl
                  text-2xl
                  font-extrabold
                  leading-tight
                  tracking-[-0.035em]
                  text-white
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Let&apos;s arrange your next journey.
              </h2>

              <p
                className="
                  mt-3
                  max-w-2xl
                  text-sm
                  leading-6
                  text-white/45
                "
              >
                Tell us your destination, dates and travel
                requirements. We&apos;ll help you organise the
                journey.
              </p>

              <Link
                href="/contact"
                className="
                  group
                  mt-6
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-xs
                  font-bold
                  text-[#071635]
                  transition-all
                  duration-300
                  hover:bg-[#F0C45C]
                "
              >
                Contact Us

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

    </main>
  );
}