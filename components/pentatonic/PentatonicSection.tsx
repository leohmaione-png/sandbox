"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { KeySelector } from "./KeySelector";
import { PositionSelector } from "./PositionSelector";
import { FretboardDiagram } from "./FretboardDiagram";
import { ScaleNotes } from "./ScaleNotes";
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

      {/* Controls */}
      <Card className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
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

      {/* Licks Section - To be implemented */}
      <div>
        <h3 className="mb-2 text-2xl font-bold">Licks por Guitarrista</h3>
        <p className="mb-4 text-muted-foreground">
          Aprenda frases organizadas do básico ao avançado no estilo de cada mestre
        </p>
        <Card className="p-6">
          <p className="text-center text-muted-foreground">
            Seção de licks em desenvolvimento...
            <br />
            <span className="text-sm">
              (Zakk Wylde, Jimmy Page, Eric Clapton, Jimi Hendrix)
            </span>
          </p>
        </Card>
      </div>
    </section>
  );
}
