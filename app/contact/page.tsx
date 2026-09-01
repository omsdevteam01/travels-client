"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F3E8] text-[#071635]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#071635]">
        {/* Decorative elements */}

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
              Get in touch
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
            Let&apos;s plan your
            <br className="hidden sm:block" />

            <span className="text-[#D99A18]">
              {" "}next journey.
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
            Tell us what you need and our team will help
            arrange the travel, vehicles, accommodation
            and other facilities for your journey.
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTACT AREA
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
          <div
            className="
              grid
              grid-cols-1
              items-stretch
              gap-5
              lg:grid-cols-2
              lg:gap-6
            "
          >

            {/* =================================================
                CONTACT INFORMATION
            ================================================== */}

            <div
              className="
                relative
                flex
                overflow-hidden
                rounded-[22px]
                bg-[#071635]
                p-5
                sm:p-7
                lg:p-8
              "
            >
              {/* Decorative circle */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-52
                  w-52
                  rounded-full
                  border
                  border-white/5
                "
              />

              <div className="relative flex w-full flex-col">

                {/* Heading */}

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#D99A18]
                  "
                >
                  Contact us
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
                  We&apos;re here to help.
                </h2>

                <p
                  className="
                    mt-3
                    max-w-md
                    text-xs
                    leading-5
                    text-white/50
                    sm:text-sm
                    sm:leading-6
                  "
                >
                  Whether you are planning a family trip,
                  pilgrimage, group travel or a special
                  gathering, speak with us about your
                  requirements.
                </p>

                {/* Contact cards */}

                <div className="mt-6 space-y-3">

                  {/* PHONE */}

                  <a
                    href="tel:+919999999999"
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-[15px]
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-3
                      transition-all
                      duration-300
                      hover:bg-white/[0.08]
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#D99A18]
                        text-[#071635]
                      "
                    >
                      <Phone size={16} />
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-widest
                          text-white/35
                        "
                      >
                        Call us
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-sm
                          font-bold
                          text-white
                        "
                      >
                        +91 99999 99999
                      </p>
                    </div>
                  </a>

                  {/* WHATSAPP */}

                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-[15px]
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-3
                      transition-all
                      duration-300
                      hover:bg-white/[0.08]
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#D99A18]
                        text-[#071635]
                      "
                    >
                      <MessageCircle size={16} />
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-widest
                          text-white/35
                        "
                      >
                        WhatsApp
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-sm
                          font-bold
                          text-white
                        "
                      >
                        Chat with us
                      </p>
                    </div>
                  </a>

                  {/* EMAIL */}

                  <a
                    href="mailto:info@baiyatravels.com"
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-[15px]
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-3
                      transition-all
                      duration-300
                      hover:bg-white/[0.08]
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#D99A18]
                        text-[#071635]
                      "
                    >
                      <Mail size={16} />
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-widest
                          text-white/35
                        "
                      >
                        Email
                      </p>

                      <p
                        className="
                          mt-0.5
                          truncate
                          text-sm
                          font-bold
                          text-white
                        "
                      >
                        info@baiyatravels.com
                      </p>
                    </div>
                  </a>

                  {/* LOCATION */}

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-[15px]
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#D99A18]
                        text-[#071635]
                      "
                    >
                      <MapPin size={16} />
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-widest
                          text-white/35
                        "
                      >
                        Location
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-sm
                          font-bold
                          text-white
                        "
                      >
                        South India
                      </p>
                    </div>
                  </div>

                </div>

                {/* Working hours */}

                <div
                  className="
                    mt-6
                    border-t
                    border-white/10
                    pt-5
                  "
                >
                  <div className="flex items-center gap-3">

                    <Clock3
                      size={17}
                      className="shrink-0 text-[#D99A18]"
                    />

                    <div>
                      <p
                        className="
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-widest
                          text-white/35
                        "
                      >
                        Working hours
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-xs
                          font-semibold
                          text-white/80
                        "
                      >
                        Monday – Saturday
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* =================================================
                ENQUIRY FORM
            ================================================== */}

            <div
              className="
                flex
                rounded-[22px]
                border
                border-[#071635]/8
                bg-[#F7F3E8]
                p-5
                sm:p-7
                lg:p-8
              "
            >
              <div className="flex w-full flex-col">

                {/* Heading */}

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#D99A18]
                  "
                >
                  Plan with us
                </span>

                <h2
                  className="
                    mt-2
                    text-2xl
                    font-extrabold
                    tracking-[-0.04em]
                    sm:text-3xl
                  "
                >
                  Tell us what you need.
                </h2>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-5
                    text-[#071635]/50
                  "
                >
                  Share a few details and we&apos;ll get
                  back to you with the right arrangements.
                </p>

                {/* SUCCESS MESSAGE */}

                {submitted ? (

                  <div
                    className="
                      flex
                      flex-1
                      flex-col
                      items-center
                      justify-center
                      py-12
                      text-center
                    "
                  >
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        bg-[#D99A18]/15
                      "
                    >
                      <CheckCircle2
                        size={28}
                        className="text-[#D99A18]"
                      />
                    </div>

                    <h3
                      className="
                        mt-4
                        text-xl
                        font-extrabold
                      "
                    >
                      Thank you!
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-sm
                        text-xs
                        leading-5
                        text-[#071635]/50
                      "
                    >
                      Your enquiry has been received.
                      Our team will contact you soon.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="
                        mt-5
                        rounded-full
                        bg-[#071635]
                        px-5
                        py-2.5
                        text-xs
                        font-bold
                        text-white
                        transition
                        hover:bg-[#D99A18]
                        hover:text-[#071635]
                      "
                    >
                      Send another enquiry
                    </button>
                  </div>

                ) : (

                  /* FORM */

                  <form
                    onSubmit={handleSubmit}
                    className="
                      mt-6
                      flex
                      flex-1
                      flex-col
                    "
                  >

                    <div className="space-y-4">

                      {/* NAME + PHONE */}

                      <div
                        className="
                          grid
                          grid-cols-1
                          gap-4
                          sm:grid-cols-2
                        "
                      >

                        <div>
                          <label
                            htmlFor="name"
                            className="
                              mb-1.5
                              block
                              text-[9px]
                              font-bold
                              uppercase
                              tracking-widest
                              text-[#071635]/55
                            "
                          >
                            Your name
                          </label>

                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Enter your name"
                            className="
                              h-11
                              w-full
                              rounded-[12px]
                              border
                              border-[#071635]/10
                              bg-white
                              px-3.5
                              text-xs
                              text-[#071635]
                              outline-none
                              transition
                              placeholder:text-[#071635]/30
                              focus:border-[#D99A18]
                              focus:ring-2
                              focus:ring-[#D99A18]/15
                            "
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="
                              mb-1.5
                              block
                              text-[9px]
                              font-bold
                              uppercase
                              tracking-widest
                              text-[#071635]/55
                            "
                          >
                            Phone number
                          </label>

                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="Enter phone number"
                            className="
                              h-11
                              w-full
                              rounded-[12px]
                              border
                              border-[#071635]/10
                              bg-white
                              px-3.5
                              text-xs
                              text-[#071635]
                              outline-none
                              transition
                              placeholder:text-[#071635]/30
                              focus:border-[#D99A18]
                              focus:ring-2
                              focus:ring-[#D99A18]/15
                            "
                          />
                        </div>

                      </div>

                      {/* EMAIL */}

                      <div>
                        <label
                          htmlFor="email"
                          className="
                            mb-1.5
                            block
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-widest
                            text-[#071635]/55
                          "
                        >
                          Email address
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          className="
                            h-11
                            w-full
                            rounded-[12px]
                            border
                            border-[#071635]/10
                            bg-white
                            px-3.5
                            text-xs
                            text-[#071635]
                            outline-none
                            transition
                            placeholder:text-[#071635]/30
                            focus:border-[#D99A18]
                            focus:ring-2
                            focus:ring-[#D99A18]/15
                          "
                        />
                      </div>

                      {/* SERVICE */}

                      <div>
                        <label
                          htmlFor="service"
                          className="
                            mb-1.5
                            block
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-widest
                            text-[#071635]/55
                          "
                        >
                          What do you need?
                        </label>

                        <select
                          id="service"
                          name="service"
                          required
                          defaultValue=""
                          className="
                            h-11
                            w-full
                            rounded-[12px]
                            border
                            border-[#071635]/10
                            bg-white
                            px-3.5
                            text-xs
                            text-[#071635]
                            outline-none
                            transition
                            focus:border-[#D99A18]
                            focus:ring-2
                            focus:ring-[#D99A18]/15
                          "
                        >
                          <option value="" disabled>
                            Select a service
                          </option>

                          <option value="south-india-tours">
                            South India Tours
                          </option>

                          <option value="vehicle-booking">
                            Vehicle Booking
                          </option>

                          <option value="pilgrimage-travel">
                            Pilgrimage Travel
                          </option>

                          <option value="accommodation">
                            Rooms & Accommodation
                          </option>

                          <option value="hall-arrangements">
                            Hall Arrangements
                          </option>

                          <option value="kitchen-arrangements">
                            Kitchen Arrangements
                          </option>

                          <option value="religious-programmes">
                            Religious Programmes
                          </option>

                          <option value="other">
                            Other
                          </option>
                        </select>
                      </div>

                      {/* DESTINATION + PEOPLE */}

                      <div
                        className="
                          grid
                          grid-cols-1
                          gap-4
                          sm:grid-cols-2
                        "
                      >

                        <div>
                          <label
                            htmlFor="destination"
                            className="
                              mb-1.5
                              block
                              text-[9px]
                              font-bold
                              uppercase
                              tracking-widest
                              text-[#071635]/55
                            "
                          >
                            Destination
                          </label>

                          <input
                            id="destination"
                            name="destination"
                            type="text"
                            placeholder="Where are you going?"
                            className="
                              h-11
                              w-full
                              rounded-[12px]
                              border
                              border-[#071635]/10
                              bg-white
                              px-3.5
                              text-xs
                              text-[#071635]
                              outline-none
                              transition
                              placeholder:text-[#071635]/30
                              focus:border-[#D99A18]
                              focus:ring-2
                              focus:ring-[#D99A18]/15
                            "
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="people"
                            className="
                              mb-1.5
                              block
                              text-[9px]
                              font-bold
                              uppercase
                              tracking-widest
                              text-[#071635]/55
                            "
                          >
                            Number of people
                          </label>

                          <input
                            id="people"
                            name="people"
                            type="number"
                            min="1"
                            placeholder="e.g. 10"
                            className="
                              h-11
                              w-full
                              rounded-[12px]
                              border
                              border-[#071635]/10
                              bg-white
                              px-3.5
                              text-xs
                              text-[#071635]
                              outline-none
                              transition
                              placeholder:text-[#071635]/30
                              focus:border-[#D99A18]
                              focus:ring-2
                              focus:ring-[#D99A18]/15
                            "
                          />
                        </div>

                      </div>

                      {/* MESSAGE */}

                      <div>
                        <label
                          htmlFor="message"
                          className="
                            mb-1.5
                            block
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-widest
                            text-[#071635]/55
                          "
                        >
                          Your message
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          placeholder="Tell us about your travel plans..."
                          className="
                            min-h-[100px]
                            w-full
                            resize-none
                            rounded-[12px]
                            border
                            border-[#071635]/10
                            bg-white
                            px-3.5
                            py-3
                            text-xs
                            leading-5
                            text-[#071635]
                            outline-none
                            transition
                            placeholder:text-[#071635]/30
                            focus:border-[#D99A18]
                            focus:ring-2
                            focus:ring-[#D99A18]/15
                          "
                        />
                      </div>

                    </div>

                    {/* SUBMIT BUTTON */}

                    <button
                      type="submit"
                      className="
                        group
                        mt-5
                        flex
                        h-11
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-[#071635]
                        px-5
                        text-xs
                        font-bold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-[#D99A18]
                        hover:text-[#071635]
                      "
                    >
                      Send Enquiry

                      <ArrowRight
                        size={14}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </button>

                  </form>

                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          SMALL BOTTOM SERVICE CARDS
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
              grid
              grid-cols-1
              gap-3
              sm:grid-cols-3
            "
          >

            {/* CARD 1 */}

            <div
              className="
                rounded-[16px]
                border
                border-[#071635]/8
                bg-white
                p-4
              "
            >
              <CheckCircle2
                size={18}
                className="text-[#D99A18]"
              />

              <h3
                className="
                  mt-2
                  text-sm
                  font-extrabold
                  text-[#071635]
                "
              >
                Travel arrangements
              </h3>

              <p
                className="
                  mt-1
                  text-[10px]
                  leading-4
                  text-[#071635]/45
                "
              >
                Cars, vans, buses and tour arrangements.
              </p>
            </div>

            {/* CARD 2 */}

            <div
              className="
                rounded-[16px]
                border
                border-[#071635]/8
                bg-white
                p-4
              "
            >
              <CheckCircle2
                size={18}
                className="text-[#D99A18]"
              />

              <h3
                className="
                  mt-2
                  text-sm
                  font-extrabold
                  text-[#071635]
                "
              >
                Stay & facilities
              </h3>

              <p
                className="
                  mt-1
                  text-[10px]
                  leading-4
                  text-[#071635]/45
                "
              >
                Accommodation, halls and kitchen arrangements.
              </p>
            </div>

            {/* CARD 3 */}

            <div
              className="
                rounded-[16px]
                border
                border-[#071635]/8
                bg-white
                p-4
              "
            >
              <CheckCircle2
                size={18}
                className="text-[#D99A18]"
              />

              <h3
                className="
                  mt-2
                  text-sm
                  font-extrabold
                  text-[#071635]
                "
              >
                Group support
              </h3>

              <p
                className="
                  mt-1
                  text-[10px]
                  leading-4
                  text-[#071635]/45
                "
              >
                Support for pilgrimage and religious programmes.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}