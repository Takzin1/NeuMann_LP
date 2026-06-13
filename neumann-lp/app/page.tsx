import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Concept } from "@/components/Concept";
import { Products } from "@/components/Products";
import { FeaturedMimamori } from "@/components/FeaturedMimamori";
import { Activity } from "@/components/Activity";
import { Mission } from "@/components/Mission";
import { Milestones } from "@/components/Milestones";
import { Founder } from "@/components/Founder";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Concept />
        <Products />
       <FeaturedMimamori />
        <Activity />
        <Mission />
        <Milestones />
        <Founder />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
