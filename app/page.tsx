import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import Vehicles from "./components/home/Vehicles";
import Tours from "./components/home/Tours";
import Pilgrimage from "./components/home/Pilgrimage";
import Accommodation from "./components/home/Accommodation";
import VideoShowcase from "./components/home/VideoShowcase";
import Gallery from "./components/home/Gallery";
import WhyChooseUs from "./components/home/WhyChooseUs";
import BookingCTA from "./components/home/BookingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <VideoShowcase />
      <Vehicles />
      <Tours />
      <Pilgrimage />
      <Accommodation />
      
      <Gallery />
      <WhyChooseUs />
      <BookingCTA />
    </>
  );
}