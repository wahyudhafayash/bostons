import ClientSection from "@/components/section/ClientSection";
import HeroSection from "@/components/section/HeroSection";
import NewsSection from "@/components/section/NewsSection";
import ServicesSection from "@/components/section/ServicesSection";
import TestimoniSection from "@/components/section/TestimoniSection";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <NewsSection />
      <TestimoniSection />
      <ClientSection />
    </div>
  );
};

export default page;
