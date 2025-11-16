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
      <Card className="p-8">
        <div className="prose prose-sm max-w-none dark:prose-invert">
          <h3 className="text-xl font-semibold mb-4">📚 Entendendo a Pentatônica</h3>

          <div className="space-y-6 text-muted-foreground">
            {/* What is it */}
            <div>
              <h4 className="text-base font-semibold text-foreground mb-2">O que é a Escala Pentatônica?</h4>
              <p className="leading-relaxed">
                A palavra "pentatônica" vem do grego: <em>penta</em> (cinco) + <em>tônica</em> (tons).
                É uma escala musical composta por apenas <strong>5 notas</strong>, ao contrário das escalas maiores
                e menores tradicionais que têm 7 notas. Essa simplicidade é justamente o que a torna tão poderosa e versátil.
              </p>
            </div>

            {/* Why it works */}
            <div>
              <h4 className="text-base font-semibold text-foreground mb-2">Por que funciona tão bem?</h4>
              <p className="leading-relaxed mb-3">
                A pentatônica remove as notas que causam tensão (4ª e 7ª) da escala maior/menor tradicional,
                deixando apenas as notas "seguras". Por isso, você pode tocar essas notas em praticamente
                qualquer ordem e ainda soará musical. É quase impossível errar!
              </p>
              <p className="leading-relaxed">
                <strong>Pentatônica Menor:</strong> 1 - b3 - 4 - 5 - b7 (Ex: Am = A - C - D - E - G)<br/>
                <strong>Pentatônica Maior:</strong> 1 - 2 - 3 - 5 - 6 (Ex: C = C - D - E - G - A)
              </p>
            </div>

            {/* Relationship */}
            <div className="bg-muted/50 p-4 rounded-lg border">
              <h4 className="text-base font-semibold text-foreground mb-2">💡 Conceito Importante: Relação Maior/Menor</h4>
              <p className="leading-relaxed">
                A pentatônica menor de Am e a pentatônica maior de C <strong>têm as mesmas notas!</strong>
                São chamadas de "escalas relativas". A diferença está em qual nota você enfatiza como "casa base".
                Isso significa que ao aprender uma, você automaticamente sabe a outra.
              </p>
            </div>

            {/* The 5 Positions */}
            <div>
              <h4 className="text-base font-semibold text-foreground mb-2">As 5 Posições do Braço</h4>
              <p className="leading-relaxed mb-3">
                A pentatônica pode ser tocada em <strong>5 posições diferentes</strong> ao longo do braço da guitarra.
                Cada posição é um "desenho" (shape/box) que cobre cerca de 4 casas. Essas posições se conectam como
                peças de um quebra-cabeça, permitindo que você toque a mesma escala em qualquer região do braço.
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">1.</span>
                  <span><strong>Posição 1 (Box Pattern):</strong> A mais conhecida e usada. Geralmente começa nas casas 5-8. Aprenda esta primeiro!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">2.</span>
                  <span><strong>Posição 2:</strong> Conecta-se acima da Posição 1. Útil para estender frases.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">3.</span>
                  <span><strong>Posição 3:</strong> Posição intermediária, muito usada em blues.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">4.</span>
                  <span><strong>Posição 4:</strong> Região mais aguda, ótima para bends expressivos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">5.</span>
                  <span><strong>Posição 5:</strong> Completa o ciclo, conecta-se de volta à Posição 1.</span>
                </li>
              </ul>
            </div>

            {/* Application */}
            <div>
              <h4 className="text-base font-semibold text-foreground mb-2">Quando e Como Usar</h4>
              <p className="leading-relaxed mb-2">
                <strong>Blues:</strong> É a espinha dorsal de todo solo de blues. Adicione blue notes (b5) para mais autenticidade.
              </p>
              <p className="leading-relaxed mb-2">
                <strong>Rock:</strong> De Led Zeppelin a Guns N' Roses, a pentatônica menor é a base de incontáveis riffs e solos.
              </p>
              <p className="leading-relaxed mb-2">
                <strong>Improvisação:</strong> Funciona sobre progressões I-IV-V, power chords e a maioria das músicas de rock.
              </p>
              <p className="leading-relaxed">
                <strong>Dica:</strong> Não fique preso em uma posição! A mágica acontece quando você conecta as posições e
                "viaja" pelo braço com fluidez.
              </p>
            </div>
          </div>
        </div>
      </Card>

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
