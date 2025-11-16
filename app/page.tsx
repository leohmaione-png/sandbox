"use client";

import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/layout/Hero";
import { PentatonicSection } from "@/components/pentatonic/PentatonicSection";
import { GreekModesSection } from "@/components/features/GreekModesSection";
import { ExercisesSection } from "@/components/features/ExercisesSection";
import { ProgressionsSection } from "@/components/features/ProgressionsSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState('pentatonic');

  const renderSection = () => {
    switch (activeSection) {
      case 'pentatonic':
        return <PentatonicSection />;
      case 'greek-modes':
        return <GreekModesSection />;
      case 'exercises':
        return <ExercisesSection />;
      case 'progressions':
        return <ProgressionsSection />;
      default:
        return <PentatonicSection />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <Hero />
      <main className="container mx-auto px-4 py-12">
        {renderSection()}
      </main>
    </div>
  );
}
