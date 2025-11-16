"use client";

import { Card } from "@/components/ui/card";
import { type Key } from "@/lib/data/scales";

interface FretboardDiagramProps {
  selectedKey: Key;
  selectedPosition: string;
}

// This is a simplified version - you'll need to implement the full diagram generation logic
const getDiagramInfo = (position: string) => {
  const diagrams: Record<string, { title: string; subtitle: string; info: string }> = {
    '1': {
      title: 'Posição 1 - Padrão Box',
      subtitle: 'Casa 5',
      info: 'Posição mais usada no blues. Memorize este padrão primeiro!'
    },
    '2': {
      title: 'Posição 2 - Extensão',
      subtitle: 'Casa 8',
      info: 'Extensão natural da posição 1. Conecta suavemente ao box pattern.'
    },
    '3': {
      title: 'Posição 3 - Oitava',
      subtitle: 'Casa 12',
      info: 'Uma oitava acima. Mesmo padrão da posição 1, mas em registro mais agudo.'
    },
    '4': {
      title: 'Posição 4 - Cordas Soltas',
      subtitle: 'Casa 0',
      info: 'Utiliza cordas soltas. Ótima para iniciantes e sonoridade aberta.'
    },
    '5': {
      title: 'Posição 5 - Conexão',
      subtitle: 'Casa 2-3',
      info: 'Conecta a posição 4 com a posição 1. Completa o ciclo do braço.'
    },
    'full': {
      title: 'Braço Completo',
      subtitle: 'Todas as posições',
      info: 'Visualização de todas as notas da pentatônica ao longo do braço.'
    }
  };

  return diagrams[position] || diagrams['1'];
};

export function FretboardDiagram({ selectedKey, selectedPosition }: FretboardDiagramProps) {
  const diagramInfo = getDiagramInfo(selectedPosition);

  // Simplified fretboard display - you'll need to implement the full logic from the original script.js
  const fretboard = `e|---5-------8-------9-------|
B|---5-------8-------9-------|
G|---5---7-----------9-------|
D|---5---7-----------9-------|
A|---5---7-----------9-------|
E|---5-------8-------9-------|`;

  return (
    <Card className="p-6">
      <div className="mb-4">
        <h4 className="text-lg font-semibold">
          {diagramInfo.title} em {selectedKey}
        </h4>
        <span className="text-sm text-muted-foreground">{diagramInfo.subtitle}</span>
      </div>
      <div className="overflow-x-auto">
        <pre className="rounded-lg bg-muted p-4 font-mono text-xs sm:text-sm">
          {fretboard}
        </pre>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        {diagramInfo.info}
      </p>
    </Card>
  );
}
