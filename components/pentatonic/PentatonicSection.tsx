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
          A base do blues, rock e muito mais
        </p>
      </div>

      {/* Theory Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <h3 className="mb-3 text-lg font-semibold flex items-center gap-2">
            <span className="text-2xl">🎵</span>
            O que é?
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A escala pentatônica é uma escala de <strong>5 notas</strong> (penta = cinco, tônica = notas).
            É a escala mais usada no blues, rock e improvisação por ser versátil e soar bem em praticamente
            qualquer contexto musical.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="mb-3 text-lg font-semibold flex items-center gap-2">
            <span className="text-2xl">🎸</span>
            Quando usar?
          </h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span><strong>Blues & Rock:</strong> Base de 90% dos solos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span><strong>Improvisação:</strong> Segura em qualquer acorde</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span><strong>Composição:</strong> Criar riffs memoráveis</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6 md:col-span-2 lg:col-span-1">
          <h3 className="mb-3 text-lg font-semibold flex items-center gap-2">
            <span className="text-2xl">📍</span>
            Como funciona?
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A pentatônica tem <strong>5 posições</strong> que cobrem todo o braço da guitarra.
            Cada posição conecta-se com a próxima, formando um "mapa completo" do braço.
            Domine uma posição de cada vez!
          </p>
        </Card>
      </div>

      {/* Controls - Sticky */}
      <Card className="sticky top-20 z-40 p-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Selecione Tom e Posição</h3>
          <p className="text-sm text-muted-foreground">
            Escolha o tom da música e a posição no braço para visualizar diagramas e licks
          </p>
        </div>
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
