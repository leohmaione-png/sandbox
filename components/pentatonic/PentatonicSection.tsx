"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { KeySelector } from "./KeySelector";
import { PositionSelector } from "./PositionSelector";
import { FretboardDiagram } from "./FretboardDiagram";
import { ScaleNotes } from "./ScaleNotes";
import { GuitaristLicks } from "./GuitaristLicks";
import { type Key } from "@/lib/data/scales";

export function PentatonicSection() {
  const [selectedKey, setSelectedKey] = useState<Key>('Am');
  const [selectedPosition, setSelectedPosition] = useState('1');

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">Escala Pentatônica</h2>
        <p className="mt-2 text-muted-foreground">
          Selecione o tom e a posição para visualizar diagramas e licks personalizados
        </p>
      </div>

      {/* Controls - Sticky */}
      <Card className="sticky top-20 z-40 p-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="grid gap-6 md:grid-cols-[7fr_3fr]">
          <KeySelector
            selectedKey={selectedKey}
            onKeyChange={setSelectedKey}
          />
          <PositionSelector
            selectedPosition={selectedPosition}
            onPositionChange={setSelectedPosition}
          />
        </div>
      </Card>

      {/* Diagrams Section */}
      <div>
        <h3 className="mb-4 text-xl font-semibold">📍 Diagramas da Pentatônica</h3>
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <FretboardDiagram
            selectedKey={selectedKey}
            selectedPosition={selectedPosition}
          />
          <ScaleNotes selectedKey={selectedKey} />
        </div>
      </div>

      {/* Licks Section */}
      <GuitaristLicks
        selectedKey={selectedKey}
        selectedPosition={selectedPosition}
      />
    </section>
  );
}
