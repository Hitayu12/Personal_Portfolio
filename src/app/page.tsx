'use client';

import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import WorkExperienceSection from '@/components/WorkExperienceSection';
import SocialSidebar from '@/components/SocialSidebar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="relative">
        <HeroSection />
        <ProjectsSection />
        <WorkExperienceSection />
        <AboutSection />
      </main>
      <SocialSidebar />
      <Footer />
    </>
  );
}