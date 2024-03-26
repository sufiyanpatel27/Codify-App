import Image from "next/image";
import HeroSection from '@/components/HeroSection'
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import InfiniteMovingCardsComponent from "@/components/InfiniteMovingCards";
import UpcomingWebinar from "@/components/UpcomingWebinars";
import BackgroundBoxes from "@/components/BackgroundBoxes";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <InfiniteMovingCardsComponent />
      <UpcomingWebinar />
      <BackgroundBoxes />
      <Footer />
    </main>
  );
}
